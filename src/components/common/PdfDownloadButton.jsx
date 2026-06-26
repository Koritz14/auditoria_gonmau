import { Download } from 'lucide-react'

function PdfDownloadButton() {
  const handleDownload = () => {
    if (typeof window !== 'undefined') {
      window.print()
    }
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-700 dark:border-slate-700 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200"
    >
      <Download size={16} />
      Descargar PDF
    </button>
  )
}

export default PdfDownloadButton
