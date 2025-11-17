export function Section({ id, title, children }) {
  return (
    <section id={id} className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{title}</h2>
        <div className="mt-6 text-slate-700 leading-relaxed text-base sm:text-lg">
          {children}
        </div>
      </div>
    </section>
  )
}

export function FeaturesGrid({ items }) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <div key={i} className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
          <p className="mt-2 text-slate-700">{it.desc}</p>
        </div>
      ))}
    </div>
  )
}
