import {
  HeroSection,
  FeatureSection,
  SupportSection,
  CustomerStorySection,
  CallToAction,
} from '@/templates/sections';

export function LandingPage() {
  return (
    <article className='flex flex-col gap-10 md:gap-20'>
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <CallToAction />
    </article>
  );
}
