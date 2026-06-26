import { useEffect, useState } from 'react'
import Layout from './components/layout/Layout'
import { ThemeProvider } from './context/ThemeContext.jsx'
import SectionContainer from './components/common/SectionContainer'
import SectionHeader from './components/common/SectionHeader'
import PdfDownloadButton from './components/common/PdfDownloadButton'
import { sections } from './data/sections'
import Resumen from './components/sections/Resumen'
import InyeccionSQL from './components/sections/InyeccionSQL'
import XSS from './components/sections/XSS'
import InyeccionComandos from './components/sections/InyeccionComandos'
import Activos from './components/sections/Activos'
import MatrizRiesgo from './components/sections/MatrizRiesgo'
import Controles from './components/sections/Controles'
import Recuperacion from './components/sections/Recuperacion'
import BitacoraIA from './components/sections/BitacoraIA'

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

  const SectionComponent = {
    resumen: Resumen,
    'inyeccion-sql': InyeccionSQL,
    xss: XSS,
    'inyeccion-comandos': InyeccionComandos,
    activos: Activos,
    matriz: MatrizRiesgo,
    controles: Controles,
    recuperacion: Recuperacion,
    'bitacora-ia': BitacoraIA,
  }[activeSectionData.id] ?? Resumen

  return (
    <ThemeProvider>
      <Layout activeSection={activeSection} onSectionSelect={handleSectionSelect}>
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:gap-8">
          <SectionContainer>
            <SectionHeader
              title="Informe de Auditoría de Seguridad"
              subtitle="Resumen técnico del proyecto"
            />
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-5 text-white shadow-[0_25px_80px_-25px_rgba(15,23,42,0.65)] dark:border-slate-700 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 sm:p-7 lg:p-8">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-300">
                  Informe de auditoría
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Análisis de seguridad del proyecto
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  Navega por las secciones con el índice lateral para revisar el contenido del informe y los hallazgos de seguridad.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <PdfDownloadButton />
              </div>
            </div>
          </SectionContainer>

          <SectionContainer id={activeSectionData.id} title={activeSectionData.title}>
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                  Sección actual
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                  {activeSectionData.title}
                </h3>
                {activeSectionData.description ? (
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {activeSectionData.description}
                  </p>
                ) : null}
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
              <SectionComponent section={activeSectionData} />
            </div>
          </SectionContainer>
        </div>
      </Layout>
    </ThemeProvider>
  )
}

export default App
