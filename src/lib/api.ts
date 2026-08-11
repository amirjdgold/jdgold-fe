/** Backend origin for production (Cloudflare → Vercel). Empty in local Vite (proxy). */
export const API_BASE = (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/$/, '') ?? '';

/** Prefix API/upload paths with VITE_API_URL when set. */
export function apiUrl(path: string): string {
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path;
  if (path.startsWith('/api') || path.startsWith('/uploads') || path.startsWith('/admin')) {
    return `${API_BASE}${path}`;
  }
  return path;
}

export function apiFetch(input: string, init?: RequestInit): Promise<Response> {
  return fetch(apiUrl(input), init);
}

/** Rewrite `/uploads…` strings in CMS JSON so media loads from the API host. */
export function rewriteUploadUrls<T>(data: T): T {
  if (!API_BASE) return data;
  return JSON.parse(
    JSON.stringify(data, (_key, value) => {
      if (typeof value === 'string' && value.startsWith('/uploads')) {
        return `${API_BASE}${value}`;
      }
      return value;
    }),
  ) as T;
}
