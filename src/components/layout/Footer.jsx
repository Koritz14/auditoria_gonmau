import { ExternalLink, Calendar } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/90 px-4 py-6 text-sm text-slate-600 shadow-inner dark:border-slate-800 dark:bg-slate-950/90 dark:text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-[1.5rem] border border-slate-200/70 bg-slate-50/70 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-semibold text-slate-900 dark:text-slate-100">Auditoría de Seguridad Web</p>
          <p>TI3034 – Fundamentos de Seguridad de la Información • INACAP</p>
          <p className="mt-1">Mauro Gonzalez Soto • Ingeniería en Informática</p>
        </div>
        <div className="flex flex-col gap-2 text-slate-600 dark:text-slate-400 lg:items-end">
          <a href="https://github.com/Koritz14" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100">
            <ExternalLink size={16} /> Repositorio GitHub
          </a>
          <div className="inline-flex items-center gap-2">
            <Calendar size={16} /> 2026
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
