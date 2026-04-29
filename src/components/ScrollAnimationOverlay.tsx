"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IndianRupee } from "lucide-react";

export default function ScrollAnimationOverlay() {
  const { scrollY } = useScroll();
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

  const { x0, y0, x1, y1, x2, y2, phase1Scroll, phase2Scroll } = coords;

  // Keyframes for scroll positions
  const scrollKeyframes = [
    0, 
    phase1Scroll / 2, 
    phase1Scroll, 
    phase1Scroll + (phase2Scroll - phase1Scroll) / 2, 
    phase2Scroll
  ];

  // Curved X path: C-shape (bow left) then inverted C-shape (bow right)
  const x = useTransform(
    scrollY, 
    scrollKeyframes, 
    [x0, x0 - 150, x1, x1 + 150, x2]
  );
  
  // Linear Y path (standard progression)
  const y = useTransform(
    scrollY, 
    scrollKeyframes, 
    [y0, (y0 + y1) / 2, y1, (y1 + y2) / 2, y2]
  );
  
  // Scale effects
  const scale = useTransform(
    scrollY, 
    scrollKeyframes, 
    [0.5, 1.5, 0.8, 1.5, 0.8]
  );
  
  // Opacity: Fade in at start, fade out at Phase 1 end, fade back in for Phase 2, fade out at final end
  const opacity = useTransform(
    scrollY, 
    [0, 20, phase1Scroll - 20, phase1Scroll, phase1Scroll + 20, phase2Scroll - 20, phase2Scroll], 
    [0, 1, 1, 0, 1, 1, 0]
  );
  
  const rotate = useTransform(
    scrollY, 
    [0, phase2Scroll], 
    [0, 1440]
  );

  // Logo Reveal Logic: Reveal when reaching Phase 1, stay visible afterwards
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      const logoElement = document.getElementById("mobile-logo-reveal");
      if (logoElement) {
        if (latest >= phase1Scroll - 20) {
          logoElement.style.opacity = "1";
        } else {
          logoElement.style.opacity = "0";
        }
      }
    });
    return () => unsubscribe();
  }, [scrollY, phase1Scroll]);

  if (!coords.valid) return null;

  return (
    <div className="absolute top-0 left-0 w-full pointer-events-none z-[100]" style={{ height: "1px" }}>
      <motion.div
        style={{ x, y, scale, opacity, rotate }}
        className="absolute top-0 left-0"
      >
        <div className="relative -left-1/2 -top-1/2 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500 rounded-full shadow-[0_4px_20px_rgba(251,191,36,0.6)] border-2 border-yellow-200">
          <IndianRupee className="w-6 h-6 text-yellow-900" strokeWidth={3} />
        </div>
      </motion.div>
    </div>
  );
}
