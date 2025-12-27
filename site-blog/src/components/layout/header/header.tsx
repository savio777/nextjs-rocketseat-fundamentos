import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button } from '@/components/ui/button';
import { ActiveLink } from '@/components/active-link';
import { Logo } from '@/components/logo';

export function Header() {
  const router = useRouter();

  const isHomePage = router.pathname === '/';
  const isBlogPage = router.pathname.startsWith('/blog');

  return (
    <header className='fixed top-0 z-50 w-full backdrop-blur supports-[backdrop-filters]:bg-background/60'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <Logo />

          <nav className='flex items-center gap-6'>
            <ActiveLink isActive={isHomePage} href='/'>
              Início
            </ActiveLink>

            <ActiveLink isActive={isBlogPage} href='/blog'>
              Blog
            </ActiveLink>

            <Button variant='secondary' asChild>
              <Link href='/comecar'>Começar</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
