import { Inter, PT_Sans_Caption } from 'next/font/google';

import { Header } from './header';
import { Footer } from './footer';

type LayoutProps = {
  children: React.ReactNode;
};

const geistSans = PT_Sans_Caption({
  variable: '--font-pt-sans',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const geistInter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${geistSans.className} ${geistInter.className} relative flex flex-col min-h-screen bg-gray-700`}
    >
      <Header />

      <main className='flex-1 flex flex-col mt-10 mb-12'>{children}</main>

      <Footer />
    </div>
  );
}
