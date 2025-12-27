import { useRouter } from 'next/router';

export default function Test() {
  const router = useRouter();

  const items = router.query.slug as string[];

  console.log(router.query);

  return (
    <div>
      <h1>Test Page</h1>

      <ul>
        {items?.map((item, index) => (
          <li key={item + index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
