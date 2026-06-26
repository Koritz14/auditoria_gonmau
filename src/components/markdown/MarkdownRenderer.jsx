import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

/**
 * Renderizador Markdown completo con soporte para:
 * - Tablas (mediante remark-gfm)
 * - Imágenes responsivas
 * - Bloques de código con syntax highlighting
 * - Listas (numeradas y viñetas)
 * - Enlaces
 * - Todos los elementos Markdown estándar
 * 
 * Justificación técnica:
 * Se utiliza react-markdown con remark-gfm para soportar tablas GFM.
 * Las imágenes se renderizaban desde docs_gonmau/img_gonmau/ con rutas relativas.
 * El syntax highlighting se implementa con react-syntax-highlighter.
 * Todos los estilos se aplican mediante Tailwind CSS para coherencia visual.
 */
function MarkdownRenderer({ children }) {
  const components = {
    // Títulos
    h1: ({ children }) => (
      <h1 className="mb-6 mt-8 text-4xl font-bold text-slate-900 dark:text-slate-50">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-6 text-3xl font-bold text-slate-900 dark:text-slate-100">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-5 text-2xl font-semibold text-slate-900 dark:text-slate-200">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-2 mt-4 text-lg font-semibold text-slate-900 dark:text-slate-300">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="mb-2 mt-3 text-base font-semibold text-slate-900 dark:text-slate-300">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="mb-2 mt-3 text-sm font-semibold text-slate-900 dark:text-slate-400">
        {children}
      </h6>
    ),

    // Párrafos
    p: ({ children }) => (
      <p className="mb-4 leading-7 text-slate-700 dark:text-slate-300">
        {children}
      </p>
    ),

    // Listas sin numerar
    ul: ({ children }) => (
      <ul className="mb-4 ml-6 list-disc space-y-2 text-slate-700 dark:text-slate-300">
        {children}
      </ul>
    ),

    // Listas numeradas
    ol: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal space-y-2 text-slate-700 dark:text-slate-300">
        {children}
      </ol>
    ),

    // Items de lista
    li: ({ children }) => (
      <li className="ml-2">
        {children}
      </li>
    ),

    // Bloques de código
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || '')
      
      if (!inline && match) {
        return (
          <SyntaxHighlighter
            style={oneDark}
            language={match[1]}
            PreTag="div"
            className="mb-4 rounded-lg"
            {...props}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        )
      }

      // Código inline
      return (
        <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-red-600 dark:bg-slate-800 dark:text-red-400">
          {children}
        </code>
      )
    },

    // Bloque de preformateado
    pre: ({ children }) => (
      <pre className="mb-4 overflow-x-auto rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
        {children}
      </pre>
    ),

    // Tablas
    table: ({ children }) => (
      <div className="mb-4 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full border-collapse">
          {children}
        </table>
      </div>
    ),

    thead: ({ children }) => (
      <thead className="border-b border-slate-300 bg-slate-50 dark:border-slate-600 dark:bg-slate-900">
        {children}
      </thead>
    ),

    tbody: ({ children }) => (
      <tbody>
        {children}
      </tbody>
    ),

    tr: ({ children, isHeader }) => (
      <tr className="border-b border-slate-200 dark:border-slate-700">
        {children}
      </tr>
    ),

    th: ({ children }) => (
      <th className="border-r border-slate-300 px-4 py-3 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-100">
        {children}
      </th>
    ),

    td: ({ children }) => (
      <td className="border-r border-slate-200 px-4 py-3 text-slate-700 dark:border-slate-700 dark:text-slate-300">
        {children}
      </td>
    ),

    // Imágenes
    img: ({ src, alt }) => {
      // Asegurar que las rutas de imágenes sean relativas a docs_gonmau
      const imageSrc = src.startsWith('img_gonmau/') 
        ? `/docs_gonmau/${src}` 
        : src.startsWith('./') 
          ? `/docs_gonmau/${src.replace('./', '')}`
          : `/docs_gonmau/img_gonmau/${src}`

      return (
        <figure className="mb-6 flex justify-center">
          <img
            src={imageSrc}
            alt={alt || 'Imagen del informe'}
            className="max-w-full rounded-lg shadow-md"
            loading="lazy"
          />
          {alt && (
            <figcaption className="mt-2 text-center text-sm text-slate-600 dark:text-slate-400">
              {alt}
            </figcaption>
          )}
        </figure>
      )
    },

    // Enlaces
    a: ({ href, children }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      >
        {children}
      </a>
    ),

    // Blockquotes
    blockquote: ({ children }) => (
      <blockquote className="mb-4 border-l-4 border-slate-300 pl-4 italic text-slate-700 dark:border-slate-600 dark:text-slate-300">
        {children}
      </blockquote>
    ),

    // Líneas horizontales
    hr: () => (
      <hr className="my-6 border-slate-300 dark:border-slate-600" />
    ),
  }

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={components}
    >
      {children}
    </ReactMarkdown>
  )
}

export default MarkdownRenderer
