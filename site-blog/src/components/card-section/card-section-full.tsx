import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

type CardSectionProps = {
  tag: string;
  text: string;
  buttonLink: {
    text: string;
    path: string;
  };
  image: {
    path: string;
    textAlt: string;
    width?: number;
    height?: number;
  };
};

export function CardSectionFull({
  tag,
  text,
  buttonLink,
  image,
}: CardSectionProps) {
  return (
    <div className='col-span-full flex flex-col gap-2'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 rounded-lg bg-gray-500 p-6 md:p-12'>
        <div className='flex flex-col gap-4 md:gap-2'>
          <span className='text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm uppercase'>
            {tag}
          </span>
          <h2 className='text-heading-lg'>{text}</h2>

          <Button
            asChild
            className='hidden rounded-full mt-4 md:mt-auto md:flex w-fit'
          >
            <Link href={buttonLink.path}>
              {buttonLink.text}
              <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className='flex flex-col items-center justify-center w-full'>
          <div className='w-full max-w-md overflow-hidden'>
            <Image
              src={image.path}
              alt={image.textAlt}
              width={image.width || 440}
              height={image.height || 330}
              className='object-cover w-full'
            />
          </div>

          <Button
            asChild
            className='flex rounded-full mt-4 md:hidden w-full gap-2 md:mt-auto'
          >
            <Link href={buttonLink.path}>
              {buttonLink.text}
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
