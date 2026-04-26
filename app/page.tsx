import { AnimatedSection } from '@/components/animated-section';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { DifferentiationSection } from '@/components/sections/differentiation';
import { FinalCtaSection } from '@/components/sections/final-cta';
import { HeroSection } from '@/components/sections/hero';
import { ImpactSection } from '@/components/sections/impact';
import { MethodSection } from '@/components/sections/method';
import { ProblemSection } from '@/components/sections/problem';
import { ServicesSection } from '@/components/sections/services';

export default function Home() {
  return (
    <main>
      <Header />
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection>
        <ProblemSection />
      </AnimatedSection>
      <AnimatedSection>
        <ServicesSection />
      </AnimatedSection>
      <AnimatedSection>
        <MethodSection />
      </AnimatedSection>
      <AnimatedSection>
        <DifferentiationSection />
      </AnimatedSection>
      <AnimatedSection>
        <ImpactSection />
      </AnimatedSection>
      <AnimatedSection>
        <FinalCtaSection />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
