import Layout from './components/layout/Layout'
import { ThemeProvider } from './context/ThemeContext'
import SectionContainer from './components/common/SectionContainer'
import SectionHeader from './components/common/SectionHeader'
import MarkdownRenderer from './components/markdown/MarkdownRenderer'
import { sections } from './data/sections'
import MarkdownSection from './components/sections/MarkdownSection'

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <div className="mx-auto max-w-7xl space-y-8">
          <SectionContainer>
            <SectionHeader
              title="Informe de Auditoría de Seguridad"
              subtitle="Presentación interactiva del contenido del informe"
            />
            <p className="max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-300">
              Esta aplicación está construida para presentar el informe existente mediante una arquitectura modular,
              sin modificar el contenido del documento original.
            </p>
          </SectionContainer>

          <SectionContainer id="indice" title="Índice del informe">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sections.map((section) => (
                <article key={section.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{section.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {section.description || 'Sección del informe de auditoría'}
                  </p>
                  <a
                    href={`#${section.id}`}
                    className="mt-4 inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200"
                  >
                    Ver sección
                  </a>
                </article>
              ))}
            </div>
          </SectionContainer>

          {sections.map((section) => (
            <MarkdownSection key={section.id} section={section} />
          ))}
        </div>
      </Layout>
    </ThemeProvider>
  )
}

export default App
