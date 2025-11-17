export function Section({ id, title, eyebrow, children }) {
  return (
    <section id={id} className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20">
        {eyebrow && <p className="text-xs uppercase tracking-wider text-slate-500">{eyebrow}</p>}
        <h2 className="mt-1 text-[28px] md:text-[34px] leading-tight md:leading-tight font-semibold tracking-[-0.01em] text-slate-900">{title}</h2>
        <div className="mt-6 text-slate-700 leading-relaxed text-[15px] md:text-[17px] max-w-3xl">
          {children}
        </div>
      </div>
      <div className="border-t" />
    </section>
  )
}

export function FeaturesGrid({ items }) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2">
      {items.map((it, i) => (
        <div key={i} className="rounded-sm border bg-white p-6">
          <h3 className="text-[16px] md:text-[18px] font-medium text-slate-900 leading-snug">{it.title}</h3>
          <p className="mt-2 text-slate-700 leading-relaxed text-[15px]">{it.desc}</p>
        </div>
      ))}
    </div>
  )
}
