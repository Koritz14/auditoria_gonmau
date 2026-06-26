/**
 * Servicio para cargar archivos Markdown desde la carpeta docs_gonmau
 * 
 * Justificación técnica:
 * Se utiliza import.meta.glob() de Vite para cargar dinámicamente los archivos Markdown.
 * Esto es la forma recomendada por Vite para manejar importaciones de múltiples archivos
 * de forma eficiente. Los archivos se cargan bajo demanda (lazy loading).
 */

// Cargamos todos los archivos Markdown de la carpeta docs_gonmau
const markdownModules = import.meta.glob('/docs_gonmau/*.md', { query: '?raw', import: 'default' })

export async function loadMarkdown(filename) {
  try {
    const path = `/docs_gonmau/${filename}`
    
    if (!markdownModules[path]) {
      throw new Error(`Archivo no encontrado: ${filename}`)
    }
    
    const content = await markdownModules[path]()
    return content
  } catch (error) {
    console.error(`Error cargando ${filename}:`, error)
    return `# Error\n\nNo se pudo cargar el archivo ${filename}`
  }
}

export const markdownFiles = {
  resumen: '01_resumen_gonmau.md',
  sqli: '02_sqli_gonmau.md',
  xss: '03_xss_gonmau.md',
  comandos: '04_comandos_gonmau.md',
  activos: '05_activos_gonmau.md',
  matriz: '06_matriz_gonmau.md',
  controles: '07_controles_gonmau.md',
  recuperacion: '08_recuperacion_gonmau.md',
  bitacora: '09_prompts_gonmau.md',
}
