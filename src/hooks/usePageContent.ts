import { useEffect, useState } from 'react';
import { apiFetch, rewriteUploadUrls } from '@/lib/api';
import type { PageDocument } from '@/types/pageContent';

export function usePageContent(slug: string) {
  const [page, setPage] = useState<PageDocument | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    apiFetch(`/api/pages/${encodeURIComponent(slug)}`)
      .then((r) => {
        if (!r.ok) throw new Error(r.status === 404 ? 'Page not found' : String(r.status));
        return r.json();
      })
      .then((data: PageDocument) => {
        if (!cancelled) setPage(rewriteUploadUrls(data));
      })
      .catch((e: unknown) => {
        if (!cancelled) {
          setPage(null);
          setError(e instanceof Error ? e.message : 'Failed to load page');
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { page, loading, error };
}
