"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IndianRupee } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimationOverlay() {
  const coinRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ 
    x0: 0, y0: 0, 
    x1: 0, y1: 0, 
    x2: 0, y2: 0, 
    phase1Scroll: 350, 
    phase2Scroll: 800, 
    valid: false 
  });

  useEffect(() => {
    const updateCoords = () => {
      const headerLogo = document.getElementById("header-logo");
      const heroMobile = document.getElementById("left-mobile-target");
      const mockupTarget = document.getElementById("mockup-target");

      if (headerLogo && heroMobile && mockupTarget) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        const getDocCoords = (el: HTMLElement) => {
          const rect = el.getBoundingClientRect();
          return {
            x: rect.left + scrollLeft + rect.width / 2,
            y: rect.top + scrollTop + rect.height / 2,
            top: rect.top + scrollTop
          };
        };

        const pos0 = getDocCoords(headerLogo);
        const pos1 = getDocCoords(heroMobile);
        const pos2 = getDocCoords(mockupTarget);

        const phase1Scroll = 350; 
        let phase2Scroll = pos2.top - (window.innerHeight / 2) + 200;
        
        if (phase2Scroll < phase1Scroll + 300) {
          phase2Scroll = phase1Scroll + 400;
        }

        setCoords({
          x0: pos0.x, y0: pos0.y,
          x1: pos1.x, y1: pos1.y,
          x2: pos2.x, y2: pos2.y,
          phase1Scroll,
          phase2Scroll,
          valid: true,
        });
      }
    };

    const timer = setTimeout(updateCoords, 500);
    window.addEventListener("resize", updateCoords);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateCoords);
    };
  }, []);

  useEffect(() => {
    if (!coords.valid || !coinRef.current) return;

    const { x0, y0, x1, y1, x2, y2, phase1Scroll, phase2Scroll } = coords;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: `+=${phase2Scroll}`,
        scrub: true,
        onUpdate: (self) => {
          const currentScroll = self.progress * phase2Scroll;
          const logoElement = document.getElementById("mobile-logo-reveal");
          if (logoElement) {
            if (currentScroll >= phase1Scroll - 20) {
              logoElement.style.opacity = "1";
            } else {
              logoElement.style.opacity = "0";
            }
          }
        }
      }
    });

    gsap.set(coinRef.current, { x: x0, y: y0, scale: 0.5, opacity: 0, rotation: 0 });

    // Fade in
    tl.to(coinRef.current, { opacity: 1, duration: 20, ease: "none" }, 0);

    // Phase 1 Y
    tl.to(coinRef.current, { y: y1, duration: phase1Scroll, ease: "none" }, 0);
    
    // Phase 1 X & Scale (C-shape bow left)
    tl.to(coinRef.current, { x: x0 - 150, scale: 1.5, duration: phase1Scroll / 2, ease: "sine.out" }, 0);
    tl.to(coinRef.current, { x: x1, scale: 0.8, duration: phase1Scroll / 2, ease: "sine.in" }, phase1Scroll / 2);

    // Fade out Phase 1, Fade in Phase 2
    tl.to(coinRef.current, { opacity: 0, duration: 20, ease: "none" }, phase1Scroll - 20);
    tl.to(coinRef.current, { opacity: 1, duration: 20, ease: "none" }, phase1Scroll);

    const p2Half = (phase2Scroll - phase1Scroll) / 2;

    // Phase 2 Y
    tl.to(coinRef.current, { y: y2, duration: phase2Scroll - phase1Scroll, ease: "none" }, phase1Scroll);

    // Phase 2 X & Scale (Inverted C-shape bow right)
    tl.to(coinRef.current, { x: x1 + 150, scale: 1.5, duration: p2Half, ease: "sine.out" }, phase1Scroll);
    tl.to(coinRef.current, { x: x2, scale: 0.8, duration: p2Half, ease: "sine.in" }, phase1Scroll + p2Half);

    // Fade out Final
    tl.to(coinRef.current, { opacity: 0, duration: 20, ease: "none" }, phase2Scroll - 20);

    // Rotation
    tl.to(coinRef.current, { rotation: 1440, duration: phase2Scroll, ease: "none" }, 0);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => {
         if (t.trigger === document.documentElement) t.kill();
      });
    };
  }, [coords]);

  if (!coords.valid) return null;

  return (
    <div className="absolute top-0 left-0 w-full pointer-events-none z-[100]" style={{ height: "1px" }}>
      <div
        ref={coinRef}
        className="absolute top-0 left-0"
      >
        <div className="relative -left-1/2 -top-1/2 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500 rounded-full shadow-[0_4px_20px_rgba(251,191,36,0.6)] border-2 border-yellow-200">
          <IndianRupee className="w-6 h-6 text-yellow-900" strokeWidth={3} />
        </div>
      </div>
    </div>
  );
}
