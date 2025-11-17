import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useI18n } from '../i18n'
import LanguageSwitch from './LanguageSwitch'

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#chi-sono' },
  { key: 'pb', href: '#private-banking' },
  { key: 'analysis', href: '#analisi-investimenti' },
  { key: 'planning', href: '#pianificazione' },
  { key: 'contact', href: '#contatti' },
]

function ABMonogram({ className = 'h-9 w-9' }) {
  return (
    <div className={`grid place-items-center rounded-sm border border-slate-300 text-slate-900 ${className}`} aria-hidden>
      <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
        {/* A */}
        <path d="M8 38 L18 10 L28 38" />
        <path d="M12 28 H24" />
        {/* B */}
        <path d="M32 10 V38" />
        <path d="M32 12 H38 C42 12 42 18 38 18 H32" />
        <path d="M32 24 H39 C43 24 43 30 39 30 H32" />
      </svg>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useI18n()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'bg-white/95 backdrop-blur border-b' : 'bg-white border-b'}`}>
      <nav className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group" aria-label="Andrea Bornaghi Home">
            <ABMonogram />
            <span className="text-base font-medium tracking-tight text-slate-900">Andrea Bornaghi</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-700 hover:text-slate-900 underline-offset-4 hover:underline"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
            <LanguageSwitch />
          </div>

          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitch />
            <button className="p-2" onClick={() => setOpen(!open)} aria-label="Apri menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-slate-700 hover:text-slate-900 underline-offset-4 hover:underline"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
