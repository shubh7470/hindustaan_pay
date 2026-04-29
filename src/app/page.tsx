import HeroSection from "@/components/HeroSection";
import MockupSection from "@/components/MockupSection";
import FeaturesSection from "@/components/FeaturesSection";

export default function HomePage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-white">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-indigo-50/50 via-white to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white via-white to-pink-50/50" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-32">
        <HeroSection />
        <MockupSection />
        <FeaturesSection />
      </div>
    </main>
  );
}
