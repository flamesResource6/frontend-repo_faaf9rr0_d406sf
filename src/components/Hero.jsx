import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full">
        <div className="mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl bg-white/70 backdrop-blur-md rounded-xl p-6 sm:p-8 shadow-sm">
            <p className="text-blue-700 font-semibold uppercase tracking-wider">Consulenza Finanziaria</p>
            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">
              Andrea Bornaghi
            </h1>
            <p className="mt-3 text-slate-700 text-base sm:text-lg">
              Approccio indipendente, solido e orientato ai tuoi obiettivi. Gestione patrimoniale, pianificazione e analisi degli investimenti con trasparenza.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contatti" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-white font-semibold shadow-sm hover:bg-blue-700 transition-colors">Prenota una consulenza</a>
              <a href="#chi-sono" className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white/70 px-5 py-2.5 text-blue-700 font-semibold hover:bg-blue-50 transition-colors">Scopri di più</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />
    </section>
  )
}
