import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styled from 'styled-components';

const NavStyles = styled.nav`
  margin: 0 auto;

  & > a {
    margin-inline: 0.5rem;
  }
`;

export default function Navbar() {
  const t = useTranslations('Navbar');
  return (
    <NavStyles>
      <Link href="/">
        <a>{t('home')}</a>
      </Link>
      <Link href="/about">
        <a>{t('about')}</a>
      </Link>
      <Link href="/projects">
        <a>{t('projects')}</a>
      </Link>
      <Link href="/contact">
        <a>{t('contact')}</a>
      </Link>
    </NavStyles>
  );
}

Navbar.messages = ['Navbar'];
