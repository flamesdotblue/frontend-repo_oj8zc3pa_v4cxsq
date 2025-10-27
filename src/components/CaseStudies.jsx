import React from 'react';

const cases = [
  {
    title: 'کمپین معرفی اپلیکیشن فین‌تک',
    result: '۳.۲M ایمپرشن | ۲.۴x افزایش نصب',
    gradient: 'from-cyan-400 via-fuchsia-400 to-amber-400',
  },
  {
    title: 'ری‌برندینگ و لانچ محصول SaaS',
    result: '+68% لید باکیفیت | NPS 72',
    gradient: 'from-violet-400 via-sky-400 to-emerald-400',
  },
  {
    title: 'موشن‌گرافیک ۳بعدی برای کمپین FMCG',
    result: '۴.۱M بازدید | ۳۵% افزایش سهم صدا',
    gradient: 'from-pink-400 via-purple-400 to-indigo-400',
  },
];

export default function CaseStudies() {
  return (
    <section id="cases" className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">نمونه‌کارها و نتایج</h3>
        <p className="mt-3 text-white/70">داستان برندهایی که با رویکرد داده‌محور و خلاق، رشد کردند.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((c, i) => (
          <figure
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 p-5"
          >
            <div className={`relative h-44 w-full overflow-hidden rounded-xl bg-gradient-to-r ${c.gradient}`}>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15),transparent_40%)]" />
              <div className="absolute inset-0 scale-110 bg-[linear-gradient(120deg,rgba(255,255,255,0.12)_10%,transparent_10%,transparent_50%,rgba(255,255,255,0.12)_50%,rgba(255,255,255,0.12)_60%,transparent_60%)] bg-[length:20px_100%] opacity-20 transition-transform duration-500 group-hover:translate-x-5" />
            </div>
            <figcaption className="mt-4">
              <h4 className="text-lg font-semibold">{c.title}</h4>
              <p className="mt-1 text-sm text-white/70">{c.result}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div id="contact" className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 text-center backdrop-blur">
        <h4 className="text-lg font-semibold">آماده‌اید برند شما هم درخشان‌تر شود؟</h4>
        <p className="mt-2 text-white/70">برای دریافت برنامه اختصاصی رشد، همین حالا با ما تماس بگیرید.</p>
        <a
          href="mailto:hello@innovads.studio"
          className="mt-5 inline-block rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white/90"
        >
          hello@innovads.studio
        </a>
      </div>
    </section>
  );
}
