"use client";

import { Sparkles, ArrowRight } from "lucide-react";
import { Android } from "./ui/android";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto mb-20">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] text-sm font-medium text-slate-700">
        <Sparkles className="w-4 h-4 text-orange-400" />
        <span>Coming Soon — Early Access</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl sm:text-5xl md:text-[4rem] font-extrabold tracking-tight text-[#0f172a] leading-[1.1]">
        The future of <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-500">
          borderless payments
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-[1.1rem] text-slate-500 max-w-2xl mx-auto">
        Instant transfers, intelligent budgeting, and zero hidden fees. Join the
        waitlist to get early access before we launch.
      </p>

      {/* Waitlist Form */}
      <form 
        onSubmit={(e) => e.preventDefault()}
        className="flex w-full max-w-md items-center bg-white p-1.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
      >
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 bg-transparent px-5 py-3 text-sm outline-none placeholder:text-slate-400 text-slate-900"
          required
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0f172a] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800"
        >
          Join Waitlist
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      {/* Mobile Mockups - Bottom aligned, 3D perspective */}
      <div className="flex w-full justify-center items-end mt-16 -space-x-4 sm:-space-x-12 px-4" style={{ perspective: "1200px" }}>
        
        {/* Left Mobile */}
        <div 
          className="relative z-10 transition-all hover:scale-105 duration-500 origin-center"
          style={{ transform: "rotateY(20deg)" }}
        >
          <Android 
            className="w-[260px] h-auto sm:w-[320px] drop-shadow-2xl" 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
          />
        </div>

        {/* Right Mobile - Slightly smaller but bottom aligned */}
        <div 
          className="relative z-20 transition-all hover:scale-105 duration-500 origin-center"
          style={{ transform: "rotateY(-20deg)" }}
        >
          <Android 
            className="w-[230px] h-auto sm:w-[300px] drop-shadow-2xl opacity-90"
            src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000&auto=format&fit=crop"
          />
        </div>
      </div>
    </div>
  );
}
