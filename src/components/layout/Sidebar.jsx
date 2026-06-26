import { useState } from 'react'
import { sections } from '../../data/sections'
import { ChevronRight, Home } from 'lucide-react'

function Sidebar() {
  const [panelOpen, setPanelOpen] = useState(false)

  return (
    <aside className="hidden w-80 shrink-0 border-r border-slate-200 bg-white/80 p-6 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80 lg:block">
      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Índice</p>
          <h2 className="mt-3 text-lg font-semibold text-slate-950 dark:text-slate-100">Secciones del informe</h2>
        </div>

        <nav className="space-y-1">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800"
            >
              <span>{section.title}</span>
              <ChevronRight size={18} />
            </a>
          ))}
        </nav>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
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
        <div className="mt-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
          <p>La aplicación está construida para que cada sección del informe esté lista para renderizar su Markdown en la siguiente fase.</p>
        </div>
      ) : null}
    </aside>
  )
}

export default Sidebar
