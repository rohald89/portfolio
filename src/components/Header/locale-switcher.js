import useCookie from '@hooks/useCookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export default function LocaleSwitcher() {
  const { locales, locale, pathname, query, asPath } = useRouter();
  const otherLocales = locales.filter(l => l !== locale && l !== 'default'); // Find all the locales apart from the current locale.
  const [, setLanguagePreference] = useCookie('NEXT_LOCALE', locale);
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
            >
              {locale}
            </ChangeLocale>
          </Link>
        );
      })}
    </>
  );
}

const ChangeLocale = styled.a`
  background: hsl(var(--purple));
  font-size: 1.2rem;
  height: 40px;
  width: 40px;
  display: grid;
  place-items: center;
  color: var(--white);
  padding: 0.5rem;
  margin: 0.5rem;
  border: none;
  border-radius: 50%;
`;
