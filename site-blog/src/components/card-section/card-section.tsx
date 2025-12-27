type CardSectionProps = {
  tag: string;
  text: string;
};

export function CardSection({ tag, text }: CardSectionProps) {
  return (
    <div className='flex flex-col gap-2 rounded-lg bg-gray-500 p-6 md:p-12'>
      <span className='text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm uppercase'>
        {tag}
      </span>
      <h2 className='text-heading-lg'>{text}</h2>
    </div>
  );
}
