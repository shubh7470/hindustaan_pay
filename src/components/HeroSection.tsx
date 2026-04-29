"use client";

import { Sparkles, ArrowRight } from "lucide-react";
import { Android } from "./ui/android";
import { GooeyInput } from "./ui/gooey-input";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center text-center max-w-5xl mx-auto gap-6">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] text-sm font-medium text-slate-700">
        <Sparkles className="w-4 h-4 text-orange-400" />
        <span>Coming Soon — Early Access</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-[clamp(2rem,5vw,3rem)] font-extrabold tracking-tight text-[#0f172a] leading-[1.1]">
        The future of <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-fuchsia-500">
          borderless payments
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-base text-slate-500 max-w-2xl mx-auto">
        Instant transfers, intelligent budgeting, and zero hidden fees. Join the
        waitlist to get early access before we launch.
      </p>

      {/* Waitlist Form */}
      <GooeyInput placeholder="join waitlist" collapsedWidth={150} />

      {/* Mobile Mockups - Bottom aligned, 3D perspective */}
      <div className="flex w-full justify-center items-end"
        style={{ perspective: "1200px" }}>
        {/* Left Mobile */}
        <div className="relative z-10 transition-all hover:scale-105 duration-500 origin-center rotate-y-20">
          <Android
            className="w-65 h-auto sm:w-[320px] drop-shadow-2xl"
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
          />
        </div>

        {/* Right Mobile - Slightly smaller but bottom aligned */}
        <div className="relative z-20 transition-all hover:scale-105 duration-500 origin-center -rotate-y-20">
          <Android
            className="w-57.5 h-auto sm:w-75 drop-shadow-2xl opacity-90"
            src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000&auto=format&fit=crop"
          />
        </div>
      </div>
    </div>
  );
}
