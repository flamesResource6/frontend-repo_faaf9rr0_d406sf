import { useI18n } from '../i18n'

export default function LanguageSwitch() {
  const { lang, setLang } = useI18n()
  return (
    <div className="flex items-center gap-2">
      <button
        aria-label="Italiano"
        onClick={() => setLang('it')}
        className={`text-xs underline-offset-4 hover:underline ${lang === 'it' ? 'text-slate-900' : 'text-slate-600'}`}
      >
        IT
      </button>
      <span className="text-slate-400">/</span>
      <button
        aria-label="English"
        onClick={() => setLang('en')}
        className={`text-xs underline-offset-4 hover:underline ${lang === 'en' ? 'text-slate-900' : 'text-slate-600'}`}
      >
        EN
      </button>
    </div>
  )
}
