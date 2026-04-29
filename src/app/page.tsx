import HeroSection from "@/components/HeroSection";
import MockupSection from "@/components/MockupSection";
import FeaturesSection from "@/components/FeaturesSection";

export default function HomePage() {
  return (
    <main>
      <section
        aria-label="Hero"
        className="h-screen overflow-hidden"
      >
        <HeroSection />
      </section>
      <MockupSection />
      <FeaturesSection />
    </main>
  );
}
