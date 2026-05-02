import HeroSection from "@/components/HeroSection";
import MockupSection from "@/components/MockupSection";
import DualMockupSection from "@/components/dualmockupsection";
import FeaturesSection from "@/components/FeaturesSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <MockupSection />
      <DualMockupSection />
      <FeaturesSection />
    </main>
  );
}
