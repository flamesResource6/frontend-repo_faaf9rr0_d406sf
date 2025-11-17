import { createContext, useContext, useMemo, useState } from 'react'

const strings = {
  it: {
    nav: {
      home: 'Home',
      about: 'Chi sono',
      pb: 'Private Banking',
      analysis: 'Analisi Investimenti',
      planning: 'Pianificazione finanziaria',
      contact: 'Contatti',
    },
    hero: {
      title: 'Consulenza finanziaria indipendente',
      body:
        'Metodo, trasparenza e disciplina al servizio del tuo patrimonio. Private Banking, Analisi degli Investimenti e Pianificazione finanziaria.',
      ctaPrimary: 'Prenota un incontro',
      ctaSecondary: 'Scopri di più',
    },
    sections: {
      about: 'Chi sono',
      pb: 'Private Banking',
      analysis: 'Analisi Investimenti',
      planning: 'Pianificazione finanziaria',
      contact: 'Contatti',
      legal: 'Note legali & Informativa',
      backToTop: 'Torna su',
      values: 'Valori',
      thanks: 'Grazie! Ti contatterò al più presto.',
      email: 'Email',
      phone: 'Telefono',
      name: 'Nome',
      message: 'Messaggio',
      send: 'Invia richiesta',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      pb: 'Private Banking',
      analysis: 'Investment Analysis',
      planning: 'Financial Planning',
      contact: 'Contact',
    },
    hero: {
      title: 'Independent financial advisory',
      body:
        'Method, transparency and discipline to serve your wealth. Private Banking, Investment Analysis and Financial Planning.',
      ctaPrimary: 'Book a meeting',
      ctaSecondary: 'Learn more',
    },
    sections: {
      about: 'About',
      pb: 'Private Banking',
      analysis: 'Investment Analysis',
      planning: 'Financial Planning',
      contact: 'Contact',
      legal: 'Legal notes & Privacy',
      backToTop: 'Back to top',
      values: 'Values',
      thanks: 'Thanks! I will get back to you shortly.',
      email: 'Email',
      phone: 'Phone',
      name: 'Name',
      message: 'Message',
      send: 'Send request',
    },
  },
}

const I18nContext = createContext({ lang: 'it', setLang: () => {}, t: (k) => k })

export function I18nProvider({ children }) {
  const [lang, setLang] = useState('it')
  const t = useMemo(() => {
    const dict = strings[lang]
    return (path) => path.split('.').reduce((acc, k) => (acc ? acc[k] : undefined), dict)
  }, [lang])

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
