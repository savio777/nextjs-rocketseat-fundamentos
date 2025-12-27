import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();

  return <div>post: {router.query.slug}</div>;
}
