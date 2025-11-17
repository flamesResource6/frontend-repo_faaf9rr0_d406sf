import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contatti" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Contatti</h2>
          <p className="mt-4 text-slate-700 max-w-prose">Raccontami i tuoi obiettivi: costruiremo insieme una strategia su misura.</p>
          <div className="mt-8 rounded-sm border bg-white p-6">
            <p className="text-sm text-slate-600">Email</p>
            <a href="mailto:andrea@bornaghi.consulting" className="text-slate-900 underline underline-offset-4 hover:no-underline">andrea@bornaghi.consulting</a>
            <p className="mt-4 text-sm text-slate-600">Telefono</p>
            <a href="tel:+39000000000" className="text-slate-900 underline underline-offset-4 hover:no-underline">+39 000 000 000</a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-sm border bg-white p-6">
          <div className="grid gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700">Nome</label>
              <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-sm border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-sm border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Messaggio</label>
              <textarea name="message" rows="5" value={form.message} onChange={onChange} required className="mt-1 w-full rounded-sm border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
            </div>
            <button className="inline-flex justify-center rounded-sm bg-slate-900 px-5 py-2.5 text-white font-medium hover:bg-black">Invia richiesta</button>
            {sent && <p className="text-sm text-green-700">Grazie! Ti contatterò al più presto.</p>}
          </div>
        </form>
      </div>
      <div className="border-t" />
    </section>
  )
}
