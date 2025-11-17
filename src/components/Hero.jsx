import { useI18n } from '../i18n'

export default function Hero() {
  const { t } = useI18n()
  return (
    <section id="home" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-28 pb-16 md:pb-24 lg:pb-28 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 lg:col-span-6">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
              {t('hero.title')}
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-700 max-w-prose">
              {t('hero.body')}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#contatti" className="inline-flex items-center justify-center rounded-sm bg-slate-900 px-5 py-2.5 text-white font-medium hover:bg-black transition-colors">
                {t('hero.ctaPrimary')}
              </a>
              <a href="#chi-sono" className="text-slate-900 underline underline-offset-4 hover:no-underline">
                {t('hero.ctaSecondary')}
              </a>
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-6 relative h-[320px] md:h-[380px] lg:h-[420px]">
            <div className="absolute inset-0 rounded-lg border bg-white overflow-hidden">
              {/* Visual statico al posto di Spline */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
              <div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
                <svg viewBox="0 0 600 400" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#0f172a" />
                      <stop offset="100%" stopColor="#334155" />
                    </linearGradient>
                  </defs>
                  <g stroke="url(#g)" strokeWidth="0.6" fill="none">
                    {[...Array(18)].map((_, i) => (
                      <path key={i} d={`M ${-50+i*40} 0 Q ${100+i*20} 200, ${-50+i*40} 400`} opacity={0.2+ i*0.03} />
                    ))}
                  </g>
                </svg>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/70" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t" />
    </section>
  )
}
