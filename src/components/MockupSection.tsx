import {
  Bell,
  Send,
  CreditCard,
  ArrowRightLeft,
  MoreHorizontal,
  Wallet,
  Fingerprint,
  User,
  History,
  Check,
  Lock
} from "lucide-react";

export default function MockupSection() {
  return (
    <div className="h-screen relative mx-auto max-w-md">
      {/* Floating Badges */}

      {/* Left Badge - Received */}
      <div className="absolute top-40 -left-16 z-20 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
          <Check className="h-5 w-5 text-emerald-600" />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Received</p>
          <p className="text-sm font-bold text-slate-900">+$850.00</p>
        </div>
      </div>

      {/* Right Badge - Security */}
      <div className="absolute top-64 -right-12 z-20 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Security</p>
          <p className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
            Active <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
          </p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900">
          <Lock className="h-4 w-4 text-white" />
        </div>
      </div>

      {/* Phone Frame */}
      <div className="relative z-10 mx-auto h-[700px] w-[340px] rounded-[3rem] border-[12px] border-[#0f172a] bg-white shadow-2xl overflow-hidden">

        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-2 z-30 h-6 w-24 -translate-x-1/2 rounded-full bg-[#0f172a]">
          {/* Camera dot */}
          <div className="absolute right-3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#1a2333]"></div>
          {/* Sensor */}
          <div className="absolute left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-emerald-500/20"></div>
        </div>

        {/* App Content */}
        <div className="flex h-full flex-col px-6 pt-14 pb-6 overflow-y-auto hide-scrollbar">

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=David"
                  alt="Avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs text-slate-500">Welcome back,</p>
                <p className="text-sm font-bold text-slate-900">David G.</p>
              </div>
            </div>
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-100 bg-white shadow-sm">
              <Bell className="h-5 w-5 text-slate-600" />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
            </div>
          </div>

          {/* Credit Card */}
          <div className="relative mb-8 h-48 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 p-6 text-white shadow-lg">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/5 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-pink-500/10 blur-2xl"></div>

            <div className="flex items-center justify-between">
              {/* Chip icon simulation */}
              <div className="h-8 w-10 rounded bg-white/20 backdrop-blur-sm border border-white/10 flex items-center justify-center relative overflow-hidden">
                <div className="w-full h-[1px] bg-white/20 absolute top-1/2"></div>
                <div className="h-full w-[1px] bg-white/20 absolute left-1/2"></div>
              </div>
              <p className="font-bold italic tracking-wider">PayFlow</p>
            </div>

            <div className="mt-8 flex items-center justify-between text-lg tracking-[0.2em] font-medium opacity-90">
              <span>••••</span>
              <span>••••</span>
              <span>••••</span>
              <span>8834</span>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs font-medium opacity-80 uppercase tracking-widest">
              <p>David G.</p>
              <p>09/29</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-8 grid grid-cols-4 gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-sm">
                <Send className="h-6 w-6" />
              </div>
              <span className="text-xs font-medium text-slate-600">Send</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-sm">
                <CreditCard className="h-6 w-6" />
              </div>
              <span className="text-xs font-medium text-slate-600">Top Up</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 shadow-sm">
                <ArrowRightLeft className="h-6 w-6" />
              </div>
              <span className="text-xs font-medium text-slate-600">Request</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-600 shadow-sm">
                <MoreHorizontal className="h-6 w-6" />
              </div>
              <span className="text-xs font-medium text-slate-600">More</span>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="flex-1 bg-slate-50/50 -mx-6 px-6 pt-6 rounded-t-3xl border-t border-slate-100">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900">Recent Activity</h3>
              <button className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">See All</button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                    <Wallet className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Figma Subscription</p>
                    <p className="text-xs text-slate-500">Software</p>
                  </div>
                </div>
                <p className="text-sm font-bold text-slate-900">-$15.00</p>
              </div>

              <div className="flex items-center justify-between opacity-50">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <History className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Grocery Store</p>
                    <p className="text-xs text-slate-500">Food</p>
                  </div>
                </div>
                <p className="text-sm font-bold text-slate-900">-$42.30</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 w-full bg-white pt-4 pb-6 px-8 flex items-center justify-between border-t border-slate-100 shadow-[0_-10px_40px_rgba(0,0,0,0.03)] z-40">
          <button className="flex flex-col items-center gap-1 text-indigo-600">
            <Wallet className="h-6 w-6" />
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400">
            <History className="h-6 w-6" />
          </button>
          <div className="relative -mt-10 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border-4 border-white">
            <Fingerprint className="h-8 w-8" />
          </div>
          <button className="flex flex-col items-center gap-1 text-slate-400">
            <CreditCard className="h-6 w-6" />
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400">
            <User className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
