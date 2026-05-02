"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IndianRupee, CheckCircle2, User, Send, Smartphone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function DualMockupSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPhoneRef = useRef<HTMLDivElement>(null);
  const rightPhoneRef = useRef<HTMLDivElement>(null);
  const rupeeRef = useRef<HTMLDivElement>(null);
  const boostShadowRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  
  const senderInitialRef = useRef<HTMLDivElement>(null);
  const senderSuccessRef = useRef<HTMLDivElement>(null);
  
  const receiverInitialRef = useRef<HTMLDivElement>(null);
  const receiverSuccessRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      // Setup initial states common to both
      gsap.set(rupeeRef.current, { opacity: 0, scale: 0, xPercent: -50, yPercent: -50, zIndex: 50 });
      gsap.set(boostShadowRef.current, { opacity: 0, scale: 0, xPercent: -50, yPercent: -50, zIndex: 40 });
      gsap.set(quoteRef.current, { opacity: 0, scale: 0.5, y: 20 });
      gsap.set(senderSuccessRef.current, { opacity: 0, y: 20 });
      gsap.set(receiverSuccessRef.current, { opacity: 0, y: 20 });

      // --- Desktop Animation ---
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: containerRef.current,
            start: "top top",
            end: "+=3000",
            scrub: 1,
          }
        });

        // 1. Initial State (Hidden at top center)
        gsap.set([leftPhoneRef.current, rightPhoneRef.current], {
          top: "-20vh",
          left: "50%",
          xPercent: -50,
          yPercent: -50,
          scale: 0.6,
          opacity: 0,
        });

        // 2. Phones emerge and move to center
        tl.to([leftPhoneRef.current, rightPhoneRef.current], {
          opacity: 1,
          top: "20vh",
          scale: 0.8,
          duration: 1,
          ease: "power2.out"
        })
        // 3. Phones split to left and right corners
        .to(leftPhoneRef.current, {
          left: "25%",
          top: "55%",
          rotation: -5,
          scale: 0.9,
          duration: 1.5,
          ease: "power2.inOut"
        }, "+=0.2")
        .to(rightPhoneRef.current, {
          left: "75%",
          top: "55%",
          rotation: 5,
          scale: 0.9,
          duration: 1.5,
          ease: "power2.inOut"
        }, "<");

        // 4. Sender initiates payment
        tl.to(senderInitialRef.current, { opacity: 0, duration: 0.5 }, "+=0.3")
          .to(senderSuccessRef.current, { opacity: 1, y: 0, duration: 0.5 }, "<");

        // 5. Rupee travels from left to right with charge effect
        tl.set(rupeeRef.current, { left: "25%", top: "55%" })
          .set(boostShadowRef.current, { left: "25%", top: "55%" })
          .to(rupeeRef.current, { opacity: 1, scale: 1.5, duration: 0.4, ease: "back.out(1.5)" })
          
          // Charge up effect
          .to(boostShadowRef.current, { opacity: 0.6, scale: 2.5, duration: 0.8, ease: "power2.out" }, "+=0.1")
          .to(rupeeRef.current, { rotation: 360, duration: 0.8, ease: "power1.inOut" }, "<")
          
          // Flash quote
          .to(quoteRef.current, { opacity: 1, scale: 1, y: 0, duration: 0.3 }, "<0.4")
          
          // Fast shoot to right
          .to(rupeeRef.current, { left: "75%", duration: 0.5, ease: "expo.inOut" }, "+=0.1")
          .to(boostShadowRef.current, { opacity: 0, scale: 0, duration: 0.2 }, "<")
          
          // Quote fades out
          .to(quoteRef.current, { opacity: 0, y: -20, duration: 0.3 }, "+=0.2")

          // Coin disappears at right
          .to(rupeeRef.current, { scale: 0, opacity: 0, duration: 0.4, ease: "back.in(1.5)" }, "<");

        // 6. Receiver receives payment
        tl.to(receiverInitialRef.current, { opacity: 0, duration: 0.5 }, "-=0.2")
          .to(receiverSuccessRef.current, { opacity: 1, y: 0, duration: 0.5 }, "<");

        // 7. Hold for a bit at the end
        tl.to({}, { duration: 0.5 });
      });

      // --- Mobile Animation ---
      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: containerRef.current,
            start: "top top",
            end: "+=2500",
            scrub: 1,
          }
        });

        // 1. Initial State (Hidden at top center)
        gsap.set([leftPhoneRef.current, rightPhoneRef.current], {
          top: "-10vh",
          left: "50%",
          xPercent: -50,
          yPercent: -50,
          scale: 0.5,
          opacity: 0,
        });

        // 2. Phones emerge and move to center
        tl.to([leftPhoneRef.current, rightPhoneRef.current], {
          opacity: 1,
          top: "10vh",
          scale: 0.6,
          duration: 1,
          ease: "power2.out"
        })
        // 3. Phones split vertically (Sender top, Receiver bottom)
        .to(leftPhoneRef.current, {
          top: "28%",
          scale: 0.65,
          duration: 1.5,
          ease: "power2.inOut"
        }, "+=0.2")
        .to(rightPhoneRef.current, {
          top: "75%",
          scale: 0.65,
          duration: 1.5,
          ease: "power2.inOut"
        }, "<");

        // 4. Sender initiates payment
        tl.to(senderInitialRef.current, { opacity: 0, duration: 0.5 }, "+=0.3")
          .to(senderSuccessRef.current, { opacity: 1, y: 0, duration: 0.5 }, "<");

        // 5. Rupee travels from top to bottom with charge effect
        tl.set(rupeeRef.current, { left: "50%", top: "28%" })
          .set(boostShadowRef.current, { left: "50%", top: "28%" })
          .to(rupeeRef.current, { opacity: 1, scale: 1.5, duration: 0.4, ease: "back.out(1.5)" })
          
          // Charge up effect
          .to(boostShadowRef.current, { opacity: 0.6, scale: 2.5, duration: 0.8, ease: "power2.out" }, "+=0.1")
          .to(rupeeRef.current, { rotation: 360, duration: 0.8, ease: "power1.inOut" }, "<")
          
          // Flash quote
          .to(quoteRef.current, { opacity: 1, scale: 0.8, y: 0, duration: 0.3 }, "<0.4")
          
          // Fast shoot to bottom
          .to(rupeeRef.current, { top: "75%", duration: 0.5, ease: "expo.inOut" }, "+=0.1")
          .to(boostShadowRef.current, { opacity: 0, scale: 0, duration: 0.2 }, "<")
          
          // Quote fades out
          .to(quoteRef.current, { opacity: 0, y: -20, duration: 0.3 }, "+=0.2")

          // Coin disappears at bottom
          .to(rupeeRef.current, { scale: 0, opacity: 0, duration: 0.4, ease: "back.in(1.5)" }, "<");

        // 6. Receiver receives payment
        tl.to(receiverInitialRef.current, { opacity: 0, duration: 0.5 }, "-=0.2")
          .to(receiverSuccessRef.current, { opacity: 1, y: 0, duration: 0.5 }, "<");

        // 7. Hold for a bit
        tl.to({}, { duration: 0.5 });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const PhoneMockup = ({ children }: { children: React.ReactNode }) => (
    <div className="w-[300px] h-[600px] border-[10px] mt-40 mb-20 rounded-[3rem] border-black bg-white overflow-hidden shadow-2xl relative">
       {/* Notch */}
       <div className="z-50 absolute top-0 left-0 w-full flex justify-center py-0">
          <div className="w-24 h-6 bg-black rounded-b-2xl flex justify-end items-center pr-2 gap-1.5">
            <div className="size-1.5 rounded-full bg-zinc-800 shadow-inner"></div>
            <div className="size-1 rounded-full bg-green-500 animate-pulse duration-300"></div>
          </div>
        </div>
        <div className="absolute inset-0 w-full h-full bg-[#fafafa]">
          {children}
        </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="w-full relative">
      <div ref={containerRef} className="h-screen w-full relative bg-gray-50 overflow-hidden perspective-1000">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none">
        <div className="w-[80vw] h-[80vw] md:w-[800px] md:h-[800px] bg-gradient-to-tr from-indigo-100 to-pink-50 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute top-12 left-0 w-full text-center z-10 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">Seamless P2P Transfers</h2>
        <p className="text-sm md:text-lg text-gray-500 mt-2 md:mt-4 max-w-2xl mx-auto">Watch how easy it is to send money securely to anyone, instantly.</p>
      </div>

      {/* Left Phone (Sender) */}
      <div ref={leftPhoneRef} className="absolute z-20">
        <PhoneMockup>
          {/* Initial State */}
          <div ref={senderInitialRef} className="absolute inset-0 p-6 pt-20 flex flex-col items-center">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600">
              <User className="size-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Send Money</h3>
            <p className="text-sm text-gray-500 mb-8">To Receiver</p>
            
            <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6 text-center">
              <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wider">Amount</p>
              <h4 className="text-4xl font-bold text-gray-900">₹5,000</h4>
            </div>

            <div className="w-full mt-auto mb-6">
              <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl py-4 flex items-center justify-center gap-2 shadow-lg shadow-indigo-200">
                <Send className="size-5" />
                <span className="font-bold">Swipe to Pay</span>
              </div>
            </div>
          </div>

          {/* Success State */}
          <div ref={senderSuccessRef} className="absolute inset-0 p-6 pt-24 flex flex-col items-center justify-center bg-white">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-500">
              <CheckCircle2 className="size-12" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Sent</h3>
            <p className="text-gray-500 mb-8 text-center text-sm">₹5,000 has been sent successfully.</p>
          </div>
        </PhoneMockup>
      </div>

      {/* Right Phone (Receiver) */}
      <div ref={rightPhoneRef} className="absolute z-20">
        <PhoneMockup>
          {/* Initial State */}
          <div ref={receiverInitialRef} className="absolute inset-0">
             <div className="w-full bg-indigo-500 p-6 pt-12 rounded-b-[2.5rem]">
               <div className="flex justify-between items-center text-white mt-4">
                 <span className="font-medium text-sm text-indigo-100">Wallet Balance</span>
               </div>
               <h2 className="text-4xl font-bold text-white mt-1">₹12,450</h2>
             </div>

             <div className="mt-8 px-6 w-full">
               <h3 className="text-md font-bold text-gray-900 mb-4">Recent Transactions</h3>
               <div className="space-y-3">
                 {[1, 2, 3].map((i) => (
                   <div key={i} className="bg-white p-3 rounded-xl shadow-sm border border-gray-50 flex items-center gap-3 opacity-80">
                     <div className="bg-gray-100 p-2 rounded-full">
                       <Smartphone className="size-4 text-gray-500" />
                     </div>
                     <div className="flex-1">
                       <h4 className="text-[13px] font-bold text-gray-900">Mobile Recharge</h4>
                       <p className="text-[11px] text-gray-400">Yesterday</p>
                     </div>
                     <span className="text-[13px] font-bold text-gray-900">-₹499</span>
                   </div>
                 ))}
               </div>
             </div>
          </div>

          {/* Success State */}
          <div ref={receiverSuccessRef} className="absolute inset-0 p-6 flex flex-col items-center justify-center bg-white">
            <div className="w-full bg-gradient-to-br from-indigo-500 to-indigo-600 p-8 rounded-3xl text-center shadow-xl shadow-indigo-200">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <IndianRupee className="size-8" />
              </div>
              <p className="text-indigo-100 text-sm mb-1 font-medium">Received from Sender</p>
              <h2 className="text-4xl font-bold text-white">+₹5,000</h2>
            </div>
            
            <div className="w-full mt-6 bg-green-50 border border-green-100 rounded-xl p-4 flex items-center gap-3 text-green-700">
              <CheckCircle2 className="size-6" />
              <div className="text-left flex-1">
                <p className="font-bold text-sm">Payment Received</p>
                <p className="text-[11px]">Balance updated instantly</p>
              </div>
            </div>
          </div>
        </PhoneMockup>
      </div>

      {/* Floating Rupee for Transfer Animation */}
      <div 
        ref={boostShadowRef}
        className="absolute z-40 pointer-events-none mt-40 flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full blur-xl"
      ></div>
      <div 
        ref={rupeeRef} 
        className="absolute z-50 pointer-events-none mt-40 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500 rounded-full shadow-[0_10px_25px_rgba(251,191,36,0.5)] border-2 border-yellow-200"
      >
        <InternalRupee className="w-8 h-8 text-yellow-900" strokeWidth={3} />
      </div>

      {/* Fast Transfer Quote */}
      <div 
        ref={quoteRef}
        className="absolute z-[60] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-4 bg-white/95 backdrop-blur-md border border-gray-100 rounded-full shadow-2xl text-center w-max"
      >
        <p className="text-xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent italic tracking-tight">
          Payment successful within seconds ⚡
        </p>
      </div>

      </div>
    </section>
  );
}

// Custom wrapper to avoid naming conflicts with Lucide icon
function InternalRupee({ className, strokeWidth }: { className?: string, strokeWidth?: number }) {
  return <IndianRupee className={className} strokeWidth={strokeWidth} />;
}
