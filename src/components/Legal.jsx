export default function Legal() {
  return (
    <section id="note-legali" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Note legali & Informativa</h2>
        <div className="mt-6 text-slate-700 leading-relaxed max-w-3xl">
          <p className="text-sm text-slate-600">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
          <p className="mt-4">Le informazioni presenti su questo sito hanno finalità esclusivamente informative e non costituiscono in alcun modo consulenza personalizzata o sollecitazione al pubblico risparmio.</p>
          <p className="mt-4">I contenuti sono forniti senza garanzia di accuratezza, completezza o aggiornamento continuo. L’autore non è responsabile per eventuali decisioni di investimento prese sulla base delle informazioni qui pubblicate.</p>
          <p className="mt-4">Per maggiori dettagli su trattamento dei dati personali, diritti degli interessati e modalità di contatto, scrivi a <a href="mailto:privacy@bornaghi.consulting" className="underline underline-offset-4 hover:no-underline text-slate-900">privacy@bornaghi.consulting</a>.</p>
        </div>
      </div>
      <div className="border-t" />
    </section>
  )
}
