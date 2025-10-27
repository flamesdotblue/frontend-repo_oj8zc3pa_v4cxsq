import React from 'react';
import { Rocket, Phone, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/40">
          <nav className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400">
                <Rocket className="h-5 w-5 text-white" />
              </div>
              <div className="leading-tight">
                <p className="text-sm text-white/60">آژانس خلاقیت</p>
                <h1 className="text-lg font-bold tracking-tight">استودیو تبلیغات نوآور</h1>
              </div>
            </div>
            <div className="hidden items-center gap-8 md:flex">
              <a href="#services" className="text-sm text-white/80 hover:text-white">خدمات</a>
              <a href="#cases" className="text-sm text-white/80 hover:text-white">نمونه‌کارها</a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20">
                <Phone className="h-4 w-4" />
                مشاوره رایگان
              </a>
            </div>
            <button className="inline-flex md:hidden">
              <Menu className="h-6 w-6 text-white/80" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
