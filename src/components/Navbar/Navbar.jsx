import Link from 'next/link';
import LocaleSwitcher from './locale-switcher';
import { useTranslations } from 'next-intl';
import ThemeChanger from './theme-toggle';

export default function Navbar() {
  const t = useTranslations('navbar');
  return (
    <nav>
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
      <LocaleSwitcher />
      <ThemeChanger />
    </nav>
  );
}
