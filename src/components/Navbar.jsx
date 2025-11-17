import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Chi sono', href: '#chi-sono' },
  { label: 'Private Banking', href: '#private-banking' },
  { label: 'Analisi Investimenti', href: '#analisi-investimenti' },
  { label: 'Pianificazione finanziaria', href: '#pianificazione' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'} fixed top-0 left-0 right-0 z-50 transition-all`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center font-semibold">AB</div>
            <span className="text-lg font-semibold text-slate-900">Andrea Bornaghi</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                {item.label}
              </a>
            ))}
          </div>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Apri menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-slate-700 hover:text-blue-600 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
