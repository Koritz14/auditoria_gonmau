import { useEffect, useState } from 'react'
import Layout from './components/layout/Layout'
import { ThemeProvider } from './context/ThemeContext.jsx'
import SectionContainer from './components/common/SectionContainer'
import SectionHeader from './components/common/SectionHeader'
import PdfDownloadButton from './components/common/PdfDownloadButton'
import HeatMapCard from './components/common/HeatMapCard'
import QrCard from './components/common/QrCard'
import MarkdownSection from './components/sections/MarkdownSection'
import { sections } from './data/sections'

function App() {
  const [activeSection, setActiveSection] = useState('resumen')

  useEffect(() => {
    const sectionIds = sections.map((section) => section.id)
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting)
        if (visibleSections.length > 0) {
          const topSection = visibleSections.reduce((current, entry) => {
            return entry.boundingClientRect.top < current.boundingClientRect.top ? entry : current
          })
          setActiveSection(topSection.target.id)
        }
      },
      {
        root: null,
        rootMargin: '-35% 0px -60% 0px',
        threshold: 0,
      }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <ThemeProvider>
      <Layout activeSection={activeSection}>
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
                    Esta aplicación organiza la información de forma clara, con jerarquía visual, tarjetas de navegación y una experiencia más cómoda para leer cada sección.
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

          <SectionContainer id="indice" title="Índice del informe">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {sections.map((section) => (
                <article
                  key={section.id}
                  className="group rounded-[1.5rem] border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:from-slate-900 dark:to-slate-950"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-sky-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">
                      Sección
                    </span>
                    <span className="text-sm text-slate-400 transition group-hover:text-slate-600 dark:group-hover:text-slate-300">
                      ↗
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100">{section.title}</h3>
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

          <SectionContainer id="componentes-especiales" title="Componentes especiales">
            <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
              <HeatMapCard />
              <QrCard />
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
