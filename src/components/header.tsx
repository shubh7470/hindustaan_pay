import Image from "next/image";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-3">
          <div id="header-logo" className="relative w-10 h-10 overflow-hidden">
            <Image
              src="/Hpay_logo.png"
              alt="Hindustaan Pay Logo"
              fill
              className="size-24 object-contain"
              priority
            />
          </div>
          <span className="text-xl font-extrabold text-[#0f172a] tracking-tight">
            Hindustaan Pay
          </span>
        </div>

        {/* Hamburger Menu */}
        <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-700">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
