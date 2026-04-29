import { Zap, Shield, Smartphone, Globe, CreditCard, Lock } from "lucide-react";

const features = [
  {
    title: "Instant Transfers",
    description: "Send money to anyone, anywhere in the world instantly without any hidden fees.",
    icon: Zap,
  },
  {
    title: "Bank-grade Security",
    description: "Your data and money are protected by industry-leading encryption and fraud detection.",
    icon: Shield,
  },
  {
    title: "Mobile First",
    description: "Manage your finances on the go with our beautifully designed mobile application.",
    icon: Smartphone,
  },
  {
    title: "Global Reach",
    description: "Access your money in over 150 currencies with real-time competitive exchange rates.",
    icon: Globe,
  },
  {
    title: "Virtual Cards",
    description: "Create disposable virtual cards for secure online shopping and subscriptions.",
    icon: CreditCard,
  },
  {
    title: "Advanced Privacy",
    description: "We never sell your data. You have complete control over what you share and when.",
    icon: Lock,
  },
];

export default function FeaturesSection() {
  return (
    <section className="">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-b from-indigo-50/50 to-transparent blur-3xl -z-10 rounded-full" />
      
      <div className="text-center mb-20 px-4">
        <h2 className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-50 border border-indigo-100 text-sm font-semibold text-indigo-600 tracking-wide uppercase">
          Why Choose Us
        </h2>
        <h3 className="text-4xl font-extrabold text-slate-900 sm:text-5xl tracking-tight mb-6">
          Everything you need in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-fuchsia-500">one app</span>
        </h3>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Experience the future of borderless payments with our suite of powerful features designed to make managing your money completely effortless.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-[2rem] border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
          >
            {/* Subtle card gradient hover effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-fuchsia-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="h-14 w-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 mb-8 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-indigo-200 transition-all duration-300">
                <feature.icon className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-900 transition-colors">
                {feature.title}
              </h4>
              <p className="text-slate-500 leading-relaxed font-medium">
                <span className="font-semibold text-indigo-400">Feature provide:</span> {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
