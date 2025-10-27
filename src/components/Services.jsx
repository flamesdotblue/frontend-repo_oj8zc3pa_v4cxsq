import React from 'react';
import { Megaphone, Palette, Rocket, LineChart } from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: 'استراتژی و کمپین',
    desc: 'طراحی کمپین‌های چندکاناله با تمرکز بر قیف رشد و KPIهای شفاف.',
    accent: 'from-fuchsia-500 to-cyan-400',
  },
  {
    icon: Palette,
    title: 'هویت بصری و موشن',
    desc: 'طراحی برند، موشن گرافیک و صحنه‌های سه‌بعدی برای روایت قدرتمندتر.',
    accent: 'from-orange-500 to-pink-500',
  },
  {
    icon: Rocket,
    title: 'لانچ محصول',
    desc: 'برنامه‌ریزی، اجرا و بهینه‌سازی لانچ با تبلیغات هدفمند و PR.',
    accent: 'from-emerald-500 to-teal-400',
  },
  {
    icon: LineChart,
    title: 'تحلیل و بهینه‌سازی',
    desc: 'داشبورد داده، تست A/B و بهینه‌سازی مداوم برای بیشینه‌سازی ROI.',
    accent: 'from-sky-500 to-violet-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">خدمات ما</h3>
        <p className="mt-3 text-white/70">از استراتژی تا اجرا؛ تیم ما هر آنچه برای رشد برند نیاز دارید فراهم می‌کند.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((item, idx) => (
          <article
            key={idx}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 p-5 transition hover:border-white/20 hover:bg-neutral-900/70"
          >
            <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${item.accent} p-3`}> 
              <item.icon className="h-5 w-5 text-white" />
            </div>
            <h4 className="text-lg font-semibold">{item.title}</h4>
            <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/5 blur-2xl transition group-hover:scale-125" />
          </article>
        ))}
      </div>
    </section>
  );
}
