import { useCallback, useEffect, useState } from 'react';
import { getPage } from '@/lib/api';
import { mapApiPageToDocument } from '@/lib/mapApiPage';
import { toUserFacingError } from '@/lib/userFacingError';
import type { PageDocument } from '@/types/pageContent';

export function usePageContent(slug: string) {
  const [page, setPage] = useState<PageDocument | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const retry = useCallback(() => {
    setRetryCount((n) => n + 1);
  }, []);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    getPage(slug)
      .then((data) => {
        if (!cancelled) {
          setPage(mapApiPageToDocument(data));
        }
      })
      .catch((e: unknown) => {
        if (!cancelled) {
          setPage(null);
          setError(
            toUserFacingError(
              e,
              'Something went wrong while loading this page. Please try again.',
            ),
          );
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug, retryCount]);

  return { page, loading, error, retry };
}
