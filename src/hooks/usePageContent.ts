import { useCallback, useEffect, useState } from 'react';
import { getPage } from '@/lib/api';
import { mapApiPageToDocument } from '@/lib/mapApiPage';
import { toUserFacingError } from '@/lib/userFacingError';
import type { PageDocument } from '@/types/pageContent';

export function usePageContent(slug: string) {
  const [result, setResult] = useState<{
    slug: string;
    page: PageDocument | null;
    error: string | null;
  }>({ slug, page: null, error: null });
  const [retryCount, setRetryCount] = useState(0);

  const retry = useCallback(() => {
    setResult((prev) => ({ ...prev, page: null, error: null }));
    setRetryCount((n) => n + 1);
  }, []);

  useEffect(() => {
    let cancelled = false;

    getPage(slug)
      .then((data) => {
        if (!cancelled) {
          setResult({ slug, page: mapApiPageToDocument(data), error: null });
        }
      })
      .catch((e: unknown) => {
        if (!cancelled) {
          setResult({
            slug,
            page: null,
            error: toUserFacingError(
              e,
              'Something went wrong while loading this page. Please try again.',
            ),
          });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [slug, retryCount]);

  if (result.slug !== slug) {
    return { page: null, loading: true, error: null, retry };
  }

  return {
    page: result.page,
    loading: result.page === null && result.error === null,
    error: result.error,
    retry,
  };
}
