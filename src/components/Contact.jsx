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
    <section id="contatti" className="py-20 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Contatti</h2>
          <p className="mt-3 text-slate-700">Raccontami i tuoi obiettivi: costruiremo insieme una strategia su misura.</p>
          <div className="mt-6 rounded-xl border bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-600">Email</p>
            <a href="mailto:andrea@bornaghi.consulting" className="text-blue-700 font-semibold">andrea@bornaghi.consulting</a>
            <p className="mt-4 text-sm text-slate-600">Telefono</p>
            <a href="tel:+39000000000" className="text-blue-700 font-semibold">+39 000 000 000</a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Nome</label>
              <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Messaggio</label>
              <textarea name="message" rows="5" value={form.message} onChange={onChange} required className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <button className="inline-flex justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-white font-semibold hover:bg-blue-700">Invia richiesta</button>
            {sent && <p className="text-sm text-green-700">Grazie! Ti contatterò al più presto.</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
