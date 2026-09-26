/** Keep fixed CMS layouts full-width even when later slots have no upload yet. */
export function padCmsSlots<T>(
  items: T[] | undefined | null,
  count: number,
  empty: (index: number) => T,
): T[] {
  const source = Array.isArray(items) ? items : [];
  const next: T[] = [];
  for (let i = 0; i < count; i += 1) {
    next.push(source[i] ?? empty(i));
  }
  return next;
}
