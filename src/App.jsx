import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Section, FeaturesGrid } from './components/Sections'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />

        <Section id="chi-sono" title="Chi sono">
          <div className="grid gap-8 lg:grid-cols-3 items-start">
            <div className="lg:col-span-2">
              <p>
                Sono un consulente finanziario indipendente con un approccio rigoroso e orientato ai risultati. Affianco famiglie, imprenditori e professionisti nella gestione del patrimonio con trasparenza e disciplina.
              </p>
              <p className="mt-4">
                La mia missione è proteggere e far crescere il tuo capitale nel tempo, costruendo strategie personalizzate che rispettano il tuo profilo di rischio e i tuoi obiettivi.
              </p>
            </div>
            <div className="rounded-xl border bg-blue-50 p-6">
              <p className="font-semibold text-blue-800">Valori</p>
              <ul className="mt-2 list-disc pl-5 text-blue-900/90">
                <li>Indipendenza e trasparenza</li>
                <li>Metodo e disciplina</li>
                <li>Ascolto e relazione</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="private-banking" title="Private Banking">
          <p>
            Servizi di gestione patrimoniale su misura: architettura aperta, selezione dei migliori strumenti, controllo dei costi e governance del rischio.
          </p>
          <FeaturesGrid
            items={[
              { title: 'Allocazione strategica', desc: 'Portafogli costruiti per la resilienza nel lungo periodo.' },
              { title: 'Selezione strumenti', desc: 'Fondi, ETF e soluzioni alternative con criteri quantitativi e qualitativi.' },
              { title: 'Controllo costi', desc: 'Analisi dei costi totali e ottimizzazione della struttura commissionale.' },
            ]}
          />
        </Section>

        <Section id="analisi-investimenti" title="Analisi Investimenti">
          <p>
            Analisi indipendente delle soluzioni di investimento: performance, rischio, drawdown, correlazioni e coerenza con gli obiettivi.
          </p>
          <FeaturesGrid
            items={[
              { title: 'Due diligence', desc: 'Processo rigoroso per selezionare strumenti efficienti.' },
              { title: 'Monitoraggio', desc: 'Report periodici chiari e comprensibili.' },
              { title: 'Ribilanciamento', desc: 'Interventi puntuali per mantenere l’asset allocation target.' },
            ]}
          />
        </Section>

        <Section id="pianificazione" title="Pianificazione finanziaria">
          <p>
            Pianificazione patrimoniale completa: previdenza, protezione, passaggio generazionale, fiscalità e obiettivi di vita.
          </p>
          <FeaturesGrid
            items={[
              { title: 'Piano personalizzato', desc: 'Roadmap chiara con tappe misurabili.' },
              { title: 'Scenario analysis', desc: 'Valutazione di ipotesi e stress test.' },
              { title: 'Ottimizzazione fiscale', desc: 'Strategie per l’efficienza a livello personale e societario.' },
            ]}
          />
        </Section>

        <Contact />

        <footer className="py-10 border-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} Andrea Bornaghi. Tutti i diritti riservati.</p>
            <a href="#home" className="text-sm font-medium text-blue-700 hover:text-blue-800">Torna su</a>
          </div>
        </footer>
      </main>
    </div>
  )
}
