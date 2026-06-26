import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import ScrollToTop from '../common/ScrollToTop'
import { useTheme } from '../../context/useTheme'

function Layout({ children, activeSection }) {
  const { theme } = useTheme()
  const wrapperClass =
    theme === 'dark'
      ? 'min-h-screen bg-slate-950 text-slate-100'
      : 'min-h-screen bg-slate-50 text-slate-950'

  return (
    <div className={wrapperClass}>
      <a
        href="#main-content"
        className="sr-only rounded-r-full bg-slate-950 px-4 py-2 text-sm font-medium text-white focus:not-sr-only focus:absolute focus:left-0 focus:top-4 focus:z-50"
      >
        Saltar al contenido principal
      </a>
      <Navbar activeSection={activeSection} />
      <div className="flex min-h-[calc(100vh-124px)] pt-16 sm:pt-18 lg:pt-20">
        <Sidebar activeSection={activeSection} />
        <main id="main-content" className="mx-auto flex-1 w-full px-3 py-5 sm:px-4 sm:py-6 lg:px-8 xl:max-w-7xl xl:px-12">
          {children}
        </main>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Layout
