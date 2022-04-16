import Link from 'next/link';
import LocaleSwitcher from './locale-switcher';
import { useTranslations } from 'next-intl';

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
      <Link href="/contact">
        <a>{t('contact')}</a>
      </Link>
      <LocaleSwitcher />
    </nav>
  );
}
