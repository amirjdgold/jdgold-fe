/**
 * Map API / network failures to short, safe copy for the UI.
 * Never surface raw stack traces, Mongo messages, or status payloads.
 */
export function toUserFacingError(
  error: unknown,
  fallback = 'Something went wrong. Please try again.',
): string {
  if (error == null) return fallback;

  const status =
    typeof error === 'object' &&
    error !== null &&
    'status' in error &&
    typeof (error as { status: unknown }).status === 'number'
      ? (error as { status: number }).status
      : undefined;

  const message =
    error instanceof Error
      ? error.message
      : typeof error === 'string'
        ? error
        : '';

  const lower = message.toLowerCase();

  if (
    status === 0 ||
    lower.includes('network error') ||
    lower.includes('failed to fetch') ||
    lower.includes('could not reach')
  ) {
    return 'Unable to connect. Please check your connection and try again.';
  }

  if (status === 404 || lower.includes('not found')) {
    return 'This content is currently unavailable.';
  }

  if (status === 401 || status === 403) {
    return 'You do not have access to this content.';
  }

  if (status != null && status >= 500) {
    return 'Our servers are temporarily unavailable. Please try again shortly.';
  }

  return fallback;
}
