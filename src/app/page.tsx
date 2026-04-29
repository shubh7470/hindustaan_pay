import HeroSection from "@/components/HeroSection";
import MockupSection from "@/components/MockupSection";
import FeaturesSection from "@/components/FeaturesSection";

export default function HomePage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-white">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-32">
        <HeroSection />
      </div>
      <MockupSection />
      <FeaturesSection />
    </main>
  );
}
