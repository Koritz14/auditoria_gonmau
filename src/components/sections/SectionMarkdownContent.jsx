import { useMarkdown } from '../../hooks/useMarkdown'
import MarkdownRenderer from '../markdown/MarkdownRenderer'

function SectionMarkdownContent({ section }) {
  const { content, loading, error } = useMarkdown(section.filename)

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="text-slate-600 dark:text-slate-400">Cargando contenido...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-lg bg-red-50 p-4 text-red-700 dark:bg-red-900/20 dark:text-red-300">
        Error al cargar {section.title}: {error}
      </div>
    )
  }

  if (!content) {
    return null
  }

  return <MarkdownRenderer>{content}</MarkdownRenderer>
}

export default SectionMarkdownContent
