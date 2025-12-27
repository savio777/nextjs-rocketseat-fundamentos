import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <Link href='/' className='text-blue-500 underline'>
        Go to Home Page
      </Link>

      <h1>About Page Project Config Initial</h1>

      <Image
        src='/assets/config.png'
        alt='Config Project'
        width={600}
        height={400}
      />
    </div>
  );
}
