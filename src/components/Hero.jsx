import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-28 pb-16 md:pb-24 lg:pb-28 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 lg:col-span-6">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
              Consulenza finanziaria indipendente
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-700 max-w-prose">
              Metodo, trasparenza e disciplina al servizio del tuo patrimonio. Private Banking, Analisi degli Investimenti e Pianificazione finanziaria.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#contatti" className="inline-flex items-center justify-center rounded-sm bg-slate-900 px-5 py-2.5 text-white font-medium hover:bg-black transition-colors">
                Prenota un incontro
              </a>
              <a href="#chi-sono" className="text-slate-900 underline underline-offset-4 hover:no-underline">
                Scopri di più
              </a>
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-6 relative h-[380px] md:h-[420px] lg:h-[460px]">
            <div className="absolute inset-0 rounded-lg border bg-white overflow-hidden">
              <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/60" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t" />
    </section>
  )
}
