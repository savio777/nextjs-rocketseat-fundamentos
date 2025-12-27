import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

export function Logo({ width, height }: Partial<ImageProps>) {
  return (
    <Link href='/' title='Página inicial'>
      <Image
        src='/assets/logo.svg'
        width={width ?? 116}
        height={height ?? 32}
        alt='Logo site'
      />
    </Link>
  );
}
