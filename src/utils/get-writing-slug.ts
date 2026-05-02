export const getWritingSlug = (id: string): string => id.split('/').pop() ?? id;
