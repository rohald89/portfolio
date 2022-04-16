import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LocaleSwitcher() {
  const { locales, locale, pathname, query, asPath } = useRouter();
  const otherLocales = locales.filter(l => l !== locale && l !== 'default'); // Find all the locales apart from the current locale.
  const t = useTranslations('navbar');
  return (
    <>
      {otherLocales.map(locale => {
        let flag = '';
        if (locale === 'nl') {
          flag = '🇳🇱';
        } else if (locale === 'en') {
          flag = '🇺🇸';
        }
        return (
          <Link key={locale} href={{ pathname, query }} as={asPath} locale={locale}>
            <a>{flag}</a>
          </Link>
        );
      })}
    </>
  );
}
