import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex min-h-screen items-center justify-center font-sans bg-black text-white`}
    >
      <Header />

      <Link href='/about' className='ml-4 text-blue-500 underline'>
        <Button variant='default'>Go to About Page</Button>
      </Link>
    </div>
  );
}
