export const locales = ['ro', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ro';

export const localeNames: Record<Locale, string> = {
  ro: 'Romana',
  en: 'English'
};
