import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <Link href='/about' className='ml-4 text-blue-500 underline'>
        <Button variant='default'>Go to About Page</Button>
      </Link>
    </div>
  );
}
