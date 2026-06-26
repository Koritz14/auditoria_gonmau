import { useState } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { sections } from '../../data/sections'

function Navbar({ activeSection }) {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl shadow-sm dark:border-slate-800/70 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 lg:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
              Auditoría de Seguridad Web
            </p>
            <h1 className="text-base font-semibold tracking-tight text-slate-950 dark:text-slate-100 sm:text-lg">
              TI3034 – Informe interactivo
            </h1>
          </div>
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          className="inline-flex h-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 px-3 text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 sm:px-4"
        >
          {theme === 'dark' ? (
            <Sun className="mr-2" size={18} />
          ) : (
            <Moon className="mr-2" size={18} />
          )}
          {theme === 'dark' ? 'Claro' : 'Oscuro'}
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-slate-200/80 bg-slate-50/95 px-3 py-4 shadow-sm dark:border-slate-800/80 dark:bg-slate-950/95 sm:px-6 lg:hidden">
          <p className="mb-3 text-sm text-slate-600 dark:text-slate-300">
            Navegación rápida entre secciones.
          </p>
          <nav className="max-h-[70vh] space-y-2 overflow-y-auto">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-3xl border px-4 py-3 text-sm transition ${
                  activeSection === section.id
                    ? 'border-slate-900 bg-slate-900 text-white shadow-sm dark:border-slate-100 dark:bg-slate-100 dark:text-slate-950'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-900'
                }`}
                aria-current={activeSection === section.id ? 'page' : undefined}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
