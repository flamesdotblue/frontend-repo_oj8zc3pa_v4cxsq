import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlays for contrast (do not block interaction) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-neutral-950/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-neutral-950 to-transparent" />

      {/* Foreground Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            تجربه‌ای نو از تبلیغات سه‌بعدی و تعاملی
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            آژانس تبلیغاتی با هویت دیجیتال، مدرن و متحرک
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            با ترکیب هنر، داده و فناوری، برند شما را به تجربه‌ای فراموش‌نشدنی تبدیل می‌کنیم. کمپین‌های چندکاناله، طراحی سه‌بعدی، و استراتژی رشد.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white/90">
              شروع همکاری
            </a>
            <a href="#cases" className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
              مشاهده نمونه‌کارها
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-white/70">
            <div className="text-sm">
              <span className="font-semibold text-white">+120</span> پروژه موفق
            </div>
            <div className="text-sm">
              <span className="font-semibold text-white">12</span> صنعت مختلف
            </div>
            <div className="text-sm">
              <span className="font-semibold text-white">5M+</span> بازدید کمپین‌ها
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
