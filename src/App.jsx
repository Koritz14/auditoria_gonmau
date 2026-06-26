import { useEffect, useState } from 'react'
import Layout from './components/layout/Layout'
import { ThemeProvider } from './context/ThemeContext.jsx'
import SectionContainer from './components/common/SectionContainer'
import SectionHeader from './components/common/SectionHeader'
import PdfDownloadButton from './components/common/PdfDownloadButton'
import MarkdownSection from './components/sections/MarkdownSection'
import { sections } from './data/sections'

function App() {
  const [activeSection, setActiveSection] = useState('resumen')

  const activeSectionData = sections.find((section) => section.id === activeSection) ?? sections[0]

  useEffect(() => {
    if (typeof window === 'undefined') return

    const hash = window.location.hash.replace('#', '')
    const matchedSection = sections.find((section) => section.id === hash)
    if (matchedSection) {
      setActiveSection(matchedSection.id)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${activeSection}`)
    }
  }, [activeSection])

  const handleSectionSelect = (sectionId) => {
    setActiveSection(sectionId)
  }

  const handlePrevSection = () => {
    const currentIndex = sections.findIndex((section) => section.id === activeSection)
    const previousIndex = currentIndex <= 0 ? sections.length - 1 : currentIndex - 1
    setActiveSection(sections[previousIndex].id)
  }

  const handleNextSection = () => {
    const currentIndex = sections.findIndex((section) => section.id === activeSection)
    const nextIndex = currentIndex === -1 || currentIndex === sections.length - 1 ? 0 : currentIndex + 1
    setActiveSection(sections[nextIndex].id)
  }

  return (
    <ThemeProvider>
      <Layout activeSection={activeSection} onSectionSelect={handleSectionSelect}>
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:gap-8">
          <SectionContainer>
            <SectionHeader
              title="Informe de Auditoría de Seguridad"
              subtitle="Presentación interactiva del contenido del informe"
            />
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-5 text-white shadow-[0_25px_80px_-25px_rgba(15,23,42,0.65)] dark:border-slate-700 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 sm:p-7 lg:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-300">
                    Diseño visual mejorado
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                    Presentación profesional del informe académico y técnico.
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                    Ahora cada sección se muestra como una diapositiva independiente, con navegación rápida desde el índice y un recorrido mucho más claro para el lector.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Modo claro/oscuro', 'Navegación clara', 'Lectura mejorada'].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm font-medium text-slate-100 backdrop-blur"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <PdfDownloadButton />
              </div>
            </div>
          </SectionContainer>

          <SectionContainer id={activeSectionData.id} title={`Diapositiva activa: ${activeSectionData.title}`}>
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                  Presentación interactiva
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                  {activeSectionData.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {activeSectionData.description || 'Contenido del informe preparado para lectura en modo diapositiva.'}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={handlePrevSection}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
                >
                  ← Anterior
                </button>
                <button
                  type="button"
                  onClick={handleNextSection}
                  className="rounded-full border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 dark:border-slate-700 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200"
                >
                  Siguiente →
                </button>
              </div>
            </div>

            <div className="mt-6 rounded-[1.75rem] border border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 shadow-inner dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 sm:p-6 lg:p-8">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 pb-4 dark:border-slate-800/80">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                    Sección actual
                  </p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{activeSectionData.title}</p>
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  {sections.findIndex((section) => section.id === activeSection) + 1} / {sections.length}
                </div>
              </div>
              <MarkdownSection section={activeSectionData} />
            </div>
          </SectionContainer>
        </div>
      </Layout>
    </ThemeProvider>
  )
}

export default App
