import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import ScrollToTop from '../common/ScrollToTop'
import { useTheme } from '../../context/ThemeContext'

function Layout({ children }) {
  const { theme } = useTheme()
  const wrapperClass =
    theme === 'dark'
      ? 'min-h-screen bg-slate-950 text-slate-100'
      : 'min-h-screen bg-slate-50 text-slate-slate-950'

  return (
    <div className={wrapperClass}>
      <Navbar />
      <div className="flex min-h-[calc(100vh-124px)] pt-16 lg:pt-20">
        <Sidebar />
        <main className="flex-1 px-4 py-6 lg:px-8 xl:px-12">
          {children}
        </main>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Layout
