import { ArrowRight, Store } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CallToAction() {
  return (
    <section className='py-24 bg-linear-to-b from-cyan-950/20 to-gray-500'>
      <div className='container'>
        <div className='flex flex-col items-center gap-6 text-center'>
          <div className='bg-cyan-300 rounded-full w-fit p-4'>
            <Store className='text-cyan-100' />
          </div>
          <h2 className='text-heading-lg text-balance text-center'>
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>

          <Button asChild variant='primary' className='mt-6'>
            <Link href='/criar-loja'>
              Criar loja grátis
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
