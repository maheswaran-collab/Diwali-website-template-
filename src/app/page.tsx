'use client';

import HeroSection from '@/components/HeroSection';
import TextMarqueeBanner from '@/components/TextMarqueeBanner';
import ProductMarquee from '@/components/ProductMarquee';
import ProcessSection from '@/components/ProcessSection';
import LightUpMomentsSection from '@/components/LightUpMomentsSection';
import WhyAdidevSection from '@/components/WhyAdidevSection';
import FamilyStorySection from '@/components/FamilyStorySection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import GlobalRocketParallax from '@/components/GlobalRocketParallax';

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">
      {/* Site-Wide Decorative 4 Rockets Parallax Effect */}
      <GlobalRocketParallax />

      {/* Section 1: Hero Header Section */}
      <HeroSection />

      {/* Trust & Features Text Marquee Ribbon */}
      <TextMarqueeBanner />

      {/* Section 2: Product Marquee */}
      <ProductMarquee />

      {/* Section 3: Simple Process - How to Place Your Order (White Theme) */}
      <ProcessSection />

      {/* Section 4: Light Up Every Moment (Brand Experience Section) */}
      <LightUpMomentsSection />

      {/* Section 5: Why Choose Us - Built Different. Crafted With Safety. */}
      <WhyAdidevSection />

      {/* Section 6: Scrollytelling Family Experience - Expecting the Happiness of the Family */}
      <FamilyStorySection />

      {/* Section 7: Final CTA - Let's Light Up Your Next Celebration (White Theme) */}
      <CtaSection />

      {/* Website Footer (White Theme) */}
      <Footer />
    </main>
  );
}


