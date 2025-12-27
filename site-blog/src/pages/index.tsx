import {
  HeroSection,
  FeatureSection,
  SupportSection,
  CustomerStorySection,
  CallToAction,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <article className='flex flex-col'>
        <HeroSection />
        <FeatureSection />
        <SupportSection />
        <CustomerStorySection />
        <CallToAction />
      </article>
    </>
  );
}
