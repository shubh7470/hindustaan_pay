export default function Footer() {
  return (
    <footer className="w-full py-8 mt-12 border-t border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
        <div className="mb-4 md:mb-0">
          <p>© {new Date().getFullYear()} Hindustaan Pay. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Contact Support</a>
        </div>
      </div>
    </footer>
  );
}
