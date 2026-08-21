import { useEffect, useState } from 'react';
import { apiFetch, rewriteUploadUrls } from '@/lib/api';
import type { PageDocument } from '@/types/pageContent';

export function usePageContent(slug: string) {
  const [result, setResult] = useState<{
    slug: string;
    page: PageDocument | null;
    error: string | null;
  }>({ slug, page: null, error: null });

  useEffect(() => {
    let cancelled = false;

    apiFetch(`/api/pages/${encodeURIComponent(slug)}`)
      .then((r) => {
        if (!r.ok) throw new Error(r.status === 404 ? 'Page not found' : String(r.status));
        return r.json();
      })
      .then((data: PageDocument) => {
        if (!cancelled) {
          setResult({ slug, page: rewriteUploadUrls(data), error: null });
        }
      })
      .catch((e: unknown) => {
        if (!cancelled) {
          setResult({
            slug,
            page: null,
            error: e instanceof Error ? e.message : 'Failed to load page',
          });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (result.slug !== slug) {
    return { page: null, loading: true, error: null };
  }

  return {
    page: result.page,
    loading: result.page === null && result.error === null,
    error: result.error,
  };
}
