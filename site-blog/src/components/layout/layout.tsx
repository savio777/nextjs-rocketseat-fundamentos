import { Geist, Geist_Mono } from 'next/font/google';

import { Header } from '../header';
import { Footer } from '../footer';

type LayoutProps = {
  children: React.ReactNode;
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} relative flex flex-col min-h-screen dark`}
    >
      <Header />

      <main className='flex-1 flex flex-col mb-12'>{children}</main>

      <Footer />
    </div>
  );
}
