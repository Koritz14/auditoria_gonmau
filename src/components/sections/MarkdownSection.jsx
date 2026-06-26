import SectionContainer from '../common/SectionContainer'
import MarkdownRenderer from '../markdown/MarkdownRenderer'
import { useMarkdown } from '../../hooks/useMarkdown'

/**
 * Componente para renderizar una sección del informe desde un archivo Markdown
 * 
 * Props:
 * - section: { id, title, filename, description }
 * 
 * Justificación técnica:
 * Este componente encapsula la lógica de carga, renderizado y visualización de cada sección.
 * Utiliza el hook useMarkdown para cargar dinámicamente el contenido del archivo Markdown.
 * Cada sección es independiente y reutilizable.
 */
function MarkdownSection({ section }) {
  const { content, loading, error } = useMarkdown(section.filename)

  return (
    <SectionContainer id={section.id} title={section.title}>
      {loading && (
        <div className="flex items-center justify-center py-8">
          <div className="text-slate-600 dark:text-slate-400">Cargando contenido...</div>
        </div>
      )}
      
      {error && (
        <div className="rounded-lg bg-red-50 p-4 text-red-700 dark:bg-red-900/20 dark:text-red-300">
          Error al cargar {section.title}: {error}
        </div>
      )}
      
      {!loading && !error && content && (
        <MarkdownRenderer>{content}</MarkdownRenderer>
      )}
    </SectionContainer>
  )
}

export default MarkdownSection
