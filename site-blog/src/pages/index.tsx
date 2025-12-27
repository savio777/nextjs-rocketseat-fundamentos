import { HeroSection, FeatureSection } from '@/components/sections';

export default function Home() {
  return (
    <>
      <article className='flex flex-col'>
        <HeroSection />
        <FeatureSection />
      </article>
    </>
  );
}
