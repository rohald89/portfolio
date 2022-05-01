import useCookie from '@hooks/useCookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export default function LocaleSwitcher() {
  const { locales, locale, pathname, query, asPath } = useRouter();
  const otherLocales = locales.filter(l => l !== locale && l !== 'default'); // Find all the locales apart from the current locale.
  const [, setLanguagePreference] = useCookie('NEXT_LOCALE', locale);
  const flag = locale === 'en' ? '🇳🇱' : '🇬🇧';
  return (
    <>
      {otherLocales.map(locale => {
        return (
          <Link key={locale} href={{ pathname, query }} as={asPath} locale={locale}>
            <ChangeLocale
              onClick={() =>
                setLanguagePreference(locale, {
                  SameSite: 'Lax',
                  Secure: true,
                })
              }
              aria-label={`Change language to ${otherLocales[0] === 'en' ? 'English' : 'Dutch'}`}
            >
              {flag}
            </ChangeLocale>
          </Link>
        );
      })}
    </>
  );
}

const ChangeLocale = styled.button`
  background: hsl(var(--purple));
  font-size: 1.2rem;
  height: 3rem;
  width: 3rem;
  color: hsl(var(--white));
  padding: 0.5rem;
  margin: 0.5rem;
  border: none;
  border-radius: 99999px;
  &:hover {
    background: hsl(var(--purple-light));
  }
`;
