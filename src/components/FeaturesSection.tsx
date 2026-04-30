"use client";
import {
  Zap,
  Shield,
  Smartphone,
  Globe,
  CreditCard,
  Lock,
  Scan,
  Wallet,
  Building2,
  RefreshCw,
  Receipt,
  TrendingUp,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const features = [
  {
    title: "Scan & Pay",
    description:
      "Pay instantly by scanning any UPI QR code at shops, restaurants, or online without entering details manually.",
    icon: Scan,
  },
  {
    title: "UPI Lite",
    description:
      "Make small value transactions quickly without entering your UPI PIN every time, ensuring faster and smoother payments.",
    icon: Wallet,
  },
  {
    title: "Multi Bank Accounts",
    description:
      "Link and manage multiple bank accounts in one place and choose your preferred account for every transaction.",
    icon: Building2,
  },
  {
    title: "AutoPay",
    description:
      "Set up automatic payments for subscriptions, bills, and recurring expenses so you never miss a due date.",
    icon: RefreshCw,
  },
  {
    title: "Easy Bill Payments",
    description:
      "Pay electricity, mobile recharge, DTH, and other bills seamlessly with reminders and instant confirmations.",
    icon: Receipt,
  },
  {
    title: "Credit Score Checker",
    description:
      "Check your credit score anytime and get insights to improve your financial health without affecting your score.",
    icon: TrendingUp,
  },
];

// Returns how far each card must travel FROM center-top to reach its grid slot
const getDispersalOffset = (index: number) => {
  const col = index % 3; // 0 | 1 | 2
  const row = Math.floor(index / 3); // 0 | 1

  const xOffsets = [-320, 0, 320]; // left, center, right
  const yOffset = row * 260; // row 0 stays near top, row 1 goes lower

  return { x: xOffsets[col], y: yOffset + 80 };
};

export default function FeaturesSection() {
  const ref = useRef(null);
  // Fires once when 20% of the section enters the viewport
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-24 px-4">
        <h2 className="inline-block px-5 py-2 mb-6 rounded-full bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 text-sm font-semibold text-indigo-600 tracking-wide uppercase shadow-sm">
          Why Choose Us
        </h2>

        <h3 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          Everything you need in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-fuchsia-500">
            one powerful app
          </span>
        </h3>

        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Experience seamless payments, smarter financial tools, and a
          beautifully designed interface built for speed, security, and
          simplicity.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {features.map((feature, index) => {
          const { x, y } = getDispersalOffset(index);

          return (
            <motion.div
              key={index}
              initial={{ x: -x, y: -y, scale: 0.4, opacity: 0 }}
              animate={
                isInView
                  ? { x: 0, y: 0, scale: 1, opacity: 1 }
                  : { x: -x, y: -y, scale: 0.4, opacity: 0 }
              }
              transition={{
                duration: 0.75,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative rounded-3xl p-[1px] bg-gradient-to-r from-indigo-200 via-blue-200 to-fuchsia-200"
            >
              {/* Card */}
              <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-indigo-100/30 via-transparent to-fuchsia-100/30 blur-xl" />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-6 shadow-sm"
                  >
                    <feature.icon className="h-6 w-6" />
                  </motion.div>

                  {/* Title */}
                  <h4 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">
                    {feature.title}
                  </h4>

                  {/* Description */}
                  <p className="text-slate-500 leading-relaxed text-[15px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
