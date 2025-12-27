import { CardSection, CardSectionFull } from '@/components/card-section';

export function FeatureSection() {
  return (
    <section className='container bg-gray-700 gap-6 grid grid-cols-1 md:grid-cols-2 py-8 md:py-10'>
      <CardSection
        tag='simples'
        text='Crie um catálogo de produtos online em poucos minutos'
      />

      <CardSection
        tag='prático'
        text='Venda para seu público através de uma plataforma única'
      />

      <CardSectionFull
        tag='Personalizável'
        text='Tenha uma loja online personalizada com a cara da sua marca'
        buttonLink={{
          path: '/criar-loja',
          text: 'Criar loja grátis',
        }}
        image={{
          textAlt: 'Ilustração de funcionalidades',
          path: '/assets/feature-section.svg',
        }}
      />
    </section>
  );
}
