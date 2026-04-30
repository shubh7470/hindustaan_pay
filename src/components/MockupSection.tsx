"use client";

import { motion } from "framer-motion";
import {
  Sun,
  ArrowRightLeft,
  Download,
  Clock,
  Zap,
  Wifi,
  Ticket,
  ShieldAlert,
  ShoppingCart,
  Smartphone,
  FileText,
  MoreHorizontal,
  Home,
  PieChart,
  Bell,
  User,
  ScanLine,
  Signal,
  BatteryFull,
  CheckCircle2,
  ShieldCheck,
  Headset
} from "lucide-react";

export default function MockupSection() {
  return (
    <div className="min-h-screen p-12 grid place-content-center relative overflow-hidden bg-gray-50/50">
      
      {/* 4 Floating Cards Container */}
      <div className="absolute inset-0 max-w-6xl mx-auto w-full h-full pointer-events-none">
        {/* Top Left Card */}
        <motion.div 
          initial={{ opacity: 0, x: 400, y: 300, scale: 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.3 }}
          className="absolute top-[20%] left-[5%] md:left-[10%] bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-indigo-50"
        >
          <div className="bg-indigo-100 p-2.5 rounded-full text-indigo-600">
            <CheckCircle2 className="size-5" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm">Zero Fees</h4>
            <p className="text-xs text-gray-500">No hidden charges</p>
          </div>
        </motion.div>

        {/* Top Right Card */}
        <motion.div 
          initial={{ opacity: 0, x: -400, y: 200, scale: 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.7, type: "spring", bounce: 0.3 }}
          className="absolute top-[30%] right-[5%] md:right-[10%] bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-orange-50"
        >
          <div className="bg-orange-100 p-2.5 rounded-full text-orange-600">
            <Zap className="size-5" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm">Instant Transfers</h4>
            <p className="text-xs text-gray-500">Lightning fast speed</p>
          </div>
        </motion.div>

        {/* Bottom Left Card */}
        <motion.div 
          initial={{ opacity: 0, x: 400, y: -200, scale: 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 1.0, type: "spring", bounce: 0.3 }}
          className="absolute bottom-[30%] left-[5%] md:left-[10%] bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-green-50"
        >
          <div className="bg-green-100 p-2.5 rounded-full text-green-600">
            <ShieldCheck className="size-5" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm">Secure Payments</h4>
            <p className="text-xs text-gray-500">Bank-grade security</p>
          </div>
        </motion.div>

        {/* Bottom Right Card */}
        <motion.div 
          initial={{ opacity: 0, x: -400, y: -300, scale: 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 1.3, type: "spring", bounce: 0.3 }}
          className="absolute bottom-[20%] right-[5%] md:right-[10%] bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-blue-50"
        >
          <div className="bg-blue-100 p-2.5 rounded-full text-blue-600">
            <Headset className="size-5" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm">24/7 Support</h4>
            <p className="text-xs text-gray-500">Always here to help</p>
          </div>
        </motion.div>
      </div>

      <div id="mockup-target" className="relative h-[calc(100vh-5rem)] w-[375px] max-w-full border-8 rounded-[2.5rem] border-black bg-white overflow-hidden shadow-2xl z-10 mx-auto">
        
        {/* Notch - iPhone Style */}
        <div className="z-50 absolute top-0 left-0 w-full flex justify-center py-0">
          <div className="w-32 h-7 bg-black rounded-b-2xl flex justify-end items-center pr-3 gap-2">
            <div className="size-2 rounded-full bg-zinc-800 shadow-inner"></div>
            <div className="size-1.5 rounded-full bg-green-500 animate-pulse duration-300"></div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="absolute inset-0 w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-[#fafafa] pb-[100px] pointer-events-auto">
          
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 pt-3 pb-2 text-[11px] font-bold text-gray-800 bg-white">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <Signal className="size-3.5" />
              <Wifi className="size-3.5" />
              <BatteryFull className="size-4" />
            </div>
          </div>

          {/* Header */}
          <div className="pt-5 px-6 pb-6 bg-white rounded-b-3xl shadow-sm">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Sun className="size-4 text-indigo-500 fill-indigo-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-500">Good Morning</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Hello, User!</h1>
          </div>

          {/* Wallet Card */}
          <div className="mx-6 mt-6 p-5 rounded-3xl bg-gradient-to-br from-indigo-500 to-indigo-600 relative overflow-hidden shadow-xl shadow-indigo-200/50">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl -ml-10 -mb-10"></div>
            
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <p className="text-xs font-medium text-indigo-100 mb-1">Your available balance</p>
                <div className="flex items-center gap-3">
                  <h2 className="text-[32px] font-bold text-white tracking-tight">₹15,901.00</h2>
                </div>
                <p className="text-sm font-medium text-indigo-100 mt-1">₹12,450.34</p>
              </div>
              <div className="bg-white px-2.5 py-1 rounded-full flex items-center shadow-sm">
                <span className="text-[10px] font-black text-green-500 tracking-wider">▲ 10%</span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="bg-white rounded-2xl mt-7 p-4 flex justify-between items-center relative z-10 shadow-sm">
              <button className="flex flex-col items-center gap-2 w-[30%] group">
                <div className="bg-indigo-50 p-3 rounded-full text-indigo-600 group-hover:bg-indigo-100 transition-colors">
                  <ArrowRightLeft className="size-5" />
                </div>
                <span className="text-[11px] font-semibold text-gray-700">Transfer</span>
              </button>
              {/* Divider */}
              <div className="w-px h-10 bg-gray-100"></div>
              <button className="flex flex-col items-center gap-2 w-[30%] group">
                <div className="bg-indigo-50 p-3 rounded-full text-indigo-600 group-hover:bg-indigo-100 transition-colors">
                  <Download className="size-5" />
                </div>
                <span className="text-[11px] font-semibold text-gray-700">Topup</span>
              </button>
              {/* Divider */}
              <div className="w-px h-10 bg-gray-100"></div>
              <button className="flex flex-col items-center gap-2 w-[30%] group">
                <div className="bg-indigo-50 p-3 rounded-full text-indigo-600 group-hover:bg-indigo-100 transition-colors">
                  <Clock className="size-5" />
                </div>
                <span className="text-[11px] font-semibold text-gray-700">History</span>
              </button>
            </div>
          </div>

          {/* Payment List */}
          <div className="mt-8 mb-6">
            <h3 className="text-[17px] font-bold text-gray-900 mx-6 mb-5">Payment List</h3>
            <div className="grid grid-cols-4 gap-y-7 gap-x-2 px-5">
              <button className="flex flex-col items-center gap-2.5 group">
                <div className="bg-orange-100/70 p-3.5 rounded-full text-orange-500 group-hover:bg-orange-100 transition-colors">
                  <Zap className="size-[22px]" strokeWidth={2} />
                </div>
                <span className="text-[10px] font-semibold text-gray-600">Electricity</span>
              </button>
              <button className="flex flex-col items-center gap-2.5 group">
                <div className="bg-red-100/70 p-3.5 rounded-full text-red-500 group-hover:bg-red-100 transition-colors">
                  <Wifi className="size-[22px]" strokeWidth={2} />
                </div>
                <span className="text-[10px] font-semibold text-gray-600">Internet</span>
              </button>
              <button className="flex flex-col items-center gap-2.5 group">
                <div className="bg-green-100/70 p-3.5 rounded-full text-green-600 group-hover:bg-green-100 transition-colors">
                  <Ticket className="size-[22px]" strokeWidth={2} />
                </div>
                <span className="text-[10px] font-semibold text-gray-600">Voucher</span>
              </button>
              <button className="flex flex-col items-center gap-2.5 group">
                <div className="bg-pink-100/70 p-3.5 rounded-full text-pink-500 group-hover:bg-pink-100 transition-colors">
                  <ShieldAlert className="size-[22px]" strokeWidth={2} />
                </div>
                <span className="text-[10px] font-semibold text-gray-600">Assurance</span>
              </button>
              <button className="flex flex-col items-center gap-2.5 group">
                <div className="bg-emerald-100/70 p-3.5 rounded-full text-emerald-500 group-hover:bg-emerald-100 transition-colors">
                  <ShoppingCart className="size-[22px]" strokeWidth={2} />
                </div>
                <span className="text-[10px] font-semibold text-gray-600">Merchant</span>
              </button>
              <button className="flex flex-col items-center gap-2.5 group">
                <div className="bg-blue-100/70 p-3.5 rounded-full text-blue-500 group-hover:bg-blue-100 transition-colors">
                  <Smartphone className="size-[22px]" strokeWidth={2} />
                </div>
                <span className="text-[10px] font-semibold text-gray-600">Mobile</span>
              </button>
              <button className="flex flex-col items-center gap-2.5 group">
                <div className="bg-teal-100/70 p-3.5 rounded-full text-teal-500 group-hover:bg-teal-100 transition-colors">
                  <FileText className="size-[22px]" strokeWidth={2} />
                </div>
                <span className="text-[10px] font-semibold text-gray-600">Bill</span>
              </button>
              <button className="flex flex-col items-center gap-2.5 group">
                <div className="bg-gray-200/70 p-3.5 rounded-full text-gray-600 group-hover:bg-gray-200 transition-colors">
                  <MoreHorizontal className="size-[22px]" strokeWidth={2} />
                </div>
                <span className="text-[10px] font-semibold text-gray-600">More</span>
              </button>
            </div>
          </div>
          
        </div>

        {/* Bottom Navigation Bar */}
        <div className="absolute bottom-0 left-0 w-full h-[88px] bg-white flex justify-between items-start px-6 pt-5 rounded-b-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-20 pointer-events-auto">
          <button className="flex flex-col items-center gap-1 text-indigo-600">
            <Home className="size-6" fill="currentColor" />
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-300 hover:text-indigo-600 transition-colors">
            <PieChart className="size-6" />
          </button>
          
          {/* FAB (Floating Action Button) */}
          <div className="relative -top-10">
            <button className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-3.5 rounded-full shadow-xl shadow-indigo-200 text-white transform hover:scale-105 transition-transform flex items-center justify-center border-4 border-white box-content">
              <ScanLine className="size-6" />
            </button>
          </div>

          <button className="flex flex-col items-center gap-1 text-gray-300 hover:text-indigo-600 transition-colors">
            <Bell className="size-6" />
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-300 hover:text-indigo-600 transition-colors">
            <User className="size-6" />
          </button>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[35%] h-1.5 bg-gray-200 rounded-full pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}
