import { useState, useEffect } from 'react'
import { loadMarkdown } from '../services/markdownLoader'

/**
 * Hook personalizado para cargar archivos Markdown
 * 
 * Uso:
 * const { content, loading, error } = useMarkdown('01_resumen_gonmau.md')
 */
export function useMarkdown(filename) {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        const markdown = await loadMarkdown(filename)
        setContent(markdown)
        setError(null)
      } catch (err) {
        setError(err.message)
        setContent('')
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [filename])

  return { content, loading, error }
}
