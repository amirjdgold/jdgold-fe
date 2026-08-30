import type { ApiPageDocument } from '@/lib/mapApiPage';
import type { GlobalBannerDocument } from '@/hooks/useGlobalBanner';
import type { SiteContent } from '@/hooks/useSiteContent';

/**
 * API root from VITE_API_URL.
 * - Empty → relative `/api` (Vite proxy in local dev)
 * - `http://localhost:5000/api` → used as-is
 * - `https://api.example.com` → `/api` appended (Vercel origin-only env)
 */
const rawEnv = (import.meta.env.VITE_API_URL as string | undefined)?.trim() ?? '';
const trimmed = rawEnv.replace(/\/$/, '');

/** Origin used for `/uploads` media (API host without trailing `/api`). */
export const ASSET_ORIGIN = trimmed.replace(/\/api$/i, '');

/** Full API prefix, e.g. `http://localhost:5000/api` or `/api`. */
export const API_BASE = trimmed
  ? /\/api$/i.test(trimmed)
    ? trimmed
    : `${trimmed}/api`
  : '/api';

/** @deprecated Prefer API_BASE; kept for callers that expected host-only base. */
export const API_ORIGIN = ASSET_ORIGIN;

export class ApiError extends Error {
  readonly status: number;
  readonly body: unknown;

  constructor(message: string, status = 0, body: unknown = null) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.body = body;
  }
}

/** Build a URL under the API root (`/pages/...`, `/banner`, …). */
export function apiUrl(path: string): string {
  if (!path) return API_BASE;
  if (/^https?:\/\//i.test(path)) return path;

  let relative = path.startsWith('/') ? path : `/${path}`;
  // Accept legacy `/api/...` paths from older call sites
  if (relative.startsWith('/api/')) {
    relative = relative.slice(4);
  } else if (relative === '/api') {
    relative = '';
  }

  return `${API_BASE}${relative}`;
}

export function apiFetch(input: string, init?: RequestInit): Promise<Response> {
  return fetch(apiUrl(input), init);
}

function messageFromBody(body: unknown, fallback: string): string {
  if (body && typeof body === 'object' && 'message' in body) {
    const msg = (body as { message: unknown }).message;
    if (typeof msg === 'string' && msg.trim()) return msg.trim();
  }
  return fallback;
}

function unwrapData<T>(body: unknown): T | null {
  if (body == null) return null;
  if (typeof body !== 'object') return null;
  const root = body as Record<string, unknown>;
  if ('data' in root) {
    const data = root.data;
    if (data == null) return null;
    return data as T;
  }
  return body as T;
}

/**
 * JSON GET with shared error handling:
 * network failure, non-2xx, invalid JSON, empty payload.
 */
async function requestJson<T>(
  path: string,
  options?: {
    emptyMessage?: string;
    acceptEmpty?: boolean;
  },
): Promise<T> {
  const emptyMessage = options?.emptyMessage ?? 'Empty response from API';
  let response: Response;

  try {
    response = await apiFetch(path, {
      headers: { Accept: 'application/json' },
    });
  } catch {
    throw new ApiError('Network error: could not reach the API', 0);
  }

  let body: unknown = null;
  const text = await response.text().catch(() => '');
  if (text) {
    try {
      body = JSON.parse(text) as unknown;
    } catch {
      throw new ApiError('Invalid JSON response from API', response.status, text);
    }
  }

  if (!response.ok) {
    throw new ApiError(
      messageFromBody(body, `Request failed (${response.status})`),
      response.status,
      body,
    );
  }

  const data = unwrapData<T>(body);
  if (data == null) {
    if (options?.acceptEmpty) return null as T;
    throw new ApiError(emptyMessage, response.status, body);
  }

  return rewriteUploadUrls(data);
}

/** GET /pages/:slug — CMS page document. */
export async function getPage(slug: string): Promise<ApiPageDocument> {
  const trimmedSlug = slug?.trim();
  if (!trimmedSlug) {
    throw new ApiError('Page slug is required', 400);
  }

  const data = await requestJson<ApiPageDocument>(
    `/pages/${encodeURIComponent(trimmedSlug)}`,
    { emptyMessage: 'Page not found' },
  );

  if (typeof data !== 'object' || Array.isArray(data) || !data.slug) {
    throw new ApiError('Invalid page response from API');
  }

  return data;
}

/** GET /banner — active global banner documents (may be empty). */
export async function getBanner(): Promise<GlobalBannerDocument[]> {
  const data = await requestJson<GlobalBannerDocument[] | GlobalBannerDocument>(
    '/banner',
    { acceptEmpty: true, emptyMessage: 'No banner data' },
  );

  if (data == null) return [];
  if (Array.isArray(data)) return data;
  if (typeof data === 'object') return [data];
  throw new ApiError('Invalid banner response from API');
}

/** GET /content — legacy home site content blob. */
export async function getSiteContent(): Promise<SiteContent> {
  const data = await requestJson<SiteContent>('/content', {
    emptyMessage: 'No site content',
  });

  if (typeof data !== 'object' || Array.isArray(data)) {
    throw new ApiError('Invalid content response from API');
  }

  return data;
}

/** Rewrite `/uploads…` strings in CMS JSON so media loads from the API host. */
export function rewriteUploadUrls<T>(data: T): T {
  if (!ASSET_ORIGIN) return data;
  return JSON.parse(
    JSON.stringify(data, (_key, value) => {
      if (typeof value === 'string' && value.startsWith('/uploads')) {
        return `${ASSET_ORIGIN}${value}`;
      }
      return value;
    }),
  ) as T;
}
