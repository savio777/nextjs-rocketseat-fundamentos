import Image from 'next/image';

const customersStories = [
  {
    text: 'Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos. A',
    author: {
      name: 'Annette Bones',
      role: 'CEO na Anne Corp',
      avatar_url:
        'https://images.unsplash.com/photo-1766469284258-11bf4223e2af?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  },
  {
    text: 'Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!',
    author: {
      name: 'Jacob Jones',
      role: 'CEO na JJ Org',
      avatar_url:
        'https://images.unsplash.com/photo-1766543497004-2fd76e88f605?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  },
];

export function CustomerStorySection() {
  return (
    <section className='container py-8 md:py-10'>
      <div className='flex flex-col items-center gap-12'>
        <h2 className='text-heading-xl text-gray-100 text-center'>
          Quem utiliza, aprova!
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {customersStories.map((customer, index) => (
            <div
              key={customer.author.name + index}
              className='flex flex-col gap-6 rounded-lg bg-gray-500 p-6 md:p-12'
            >
              <p className='text-balance text-gray-200'>{customer.text}</p>

              <div className='flex items-center gap-3'>
                <div className='relative h-10 w-10 overflow-hidden rounded-full border border-blue-200'>
                  <Image
                    src={customer.author.avatar_url}
                    alt={customer.author.name}
                    fill
                    className='object-cover'
                  />
                </div>

                <div className='flex flex-col'>
                  <strong className='text-gray-200 text-sm'>
                    {customer.author.name}
                  </strong>
                  <span className='text-gray-300 text-xs'>
                    {customer.author.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
