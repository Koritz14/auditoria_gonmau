import { useState } from 'react'
import { sections } from '../../data/sections'
import { ChevronRight, Home } from 'lucide-react'

function Sidebar({ activeSection, onSectionSelect = () => {} }) {
  const [panelOpen, setPanelOpen] = useState(false)

  return (
    <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-white/80 p-4 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80 lg:block lg:w-80 lg:p-6">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
        <div className="space-y-6">
          <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
            <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Índice</p>
            <h2 className="mt-3 text-lg font-semibold text-slate-950 dark:text-slate-100">Secciones del informe</h2>
          </div>

        <nav className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => onSectionSelect(section.id)}
              className={`flex items-center justify-between rounded-3xl border px-4 py-3 text-sm transition ${
                activeSection === section.id
                  ? 'border-slate-900 bg-slate-900 text-white shadow-sm dark:border-slate-100 dark:bg-slate-100 dark:text-slate-950'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800'
              }`}
              aria-current={activeSection === section.id ? 'page' : undefined}
            >
              <span>{section.title}</span>
              <ChevronRight size={18} />
            </button>
          ))}
        </nav>

          <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <Home size={18} />
              <span>Acceso rápido</span>
            </div>
            <p className="mt-3 text-sm leading-6">
              Esta barra lateral permite acceder a cada sección sin tocar el contenido del informe.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setPanelOpen((current) => !current)}
          className="mt-6 flex w-full items-center justify-center rounded-3xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
        >
          {panelOpen ? 'Ocultar guía' : 'Ver detalles de navegación'}
        </button>

        {panelOpen ? (
          <div className="mt-4 rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            <p>La aplicación está construida para que cada sección del informe esté lista para renderizar su Markdown con una lectura más clara.</p>
          </div>
        ) : null}
      </div>
    </aside>
  )
}

export default Sidebar
