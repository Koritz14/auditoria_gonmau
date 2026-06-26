import { useState } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { sections } from '../../data/sections'

function Navbar({ activeSection }) {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-lg shadow-sm dark:border-slate-800/70 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
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
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Auditoría de Seguridad Web
            </p>
            <h1 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-slate-100">
              TI3034 – Informe interactivo
            </h1>
          </div>
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          className="inline-flex h-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 px-4 text-slate-700 transition hover:border-slate-300 hover:bg-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
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
        <div className="border-t border-slate-200/80 bg-slate-50/95 px-4 py-4 shadow-sm dark:border-slate-800/80 dark:bg-slate-950/95 lg:hidden">
          <p className="mb-3 text-sm text-slate-600 dark:text-slate-300">
            Navegación rápida entre secciones.
          </p>
          <nav className="space-y-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-3xl border px-4 py-3 text-sm transition ${
                  activeSection === section.id
                    ? 'border-slate-900 bg-slate-900 text-white dark:border-slate-100 dark:bg-slate-100 dark:text-slate-950'
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
