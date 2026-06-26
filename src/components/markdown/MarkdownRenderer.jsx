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
 * Las imágenes se renderizan desde docs_gonmau/img_gonmau/ con rutas relativas.
 * El syntax highlighting se implementa con react-syntax-highlighter.
 * Todos los estilos se aplican mediante Tailwind CSS para coherencia visual.
 */
function MarkdownRenderer({ children }) {
  const components = {
    h1: ({ children }) => (
      <h1 className="mb-6 mt-8 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-6 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-5 text-xl font-semibold text-slate-900 dark:text-slate-200 sm:text-2xl">
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
      <h6 className="mb-2 mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
        {children}
      </h6>
    ),

    p: ({ children }) => (
      <p className="mb-4 leading-8 text-slate-700 dark:text-slate-300">
        {children}
      </p>
    ),

    ul: ({ children }) => (
      <ul className="mb-4 ml-6 list-disc space-y-2 text-slate-700 dark:text-slate-300">
        {children}
      </ul>
    ),

    ol: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal space-y-2 text-slate-700 dark:text-slate-300">
        {children}
      </ol>
    ),

    li: ({ children }) => (
      <li className="ml-2 leading-7">
        {children}
      </li>
    ),

    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || '')

      if (!inline && match) {
        return (
          <SyntaxHighlighter
            style={oneDark}
            language={match[1]}
            PreTag="div"
            className="mb-4 rounded-xl"
            {...props}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        )
      }

      return (
        <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-rose-600 dark:bg-slate-800 dark:text-rose-400">
          {children}
        </code>
      )
    },

    pre: ({ children }) => (
      <pre className="mb-4 overflow-x-auto rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
        {children}
      </pre>
    ),

    table: ({ children }) => (
      <div className="mb-4 overflow-x-auto rounded-xl border border-slate-200 shadow-sm dark:border-slate-700">
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

    tr: ({ children }) => (
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

    img: ({ src, alt }) => {
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
            className="max-w-full rounded-xl border border-slate-200 shadow-md dark:border-slate-700"
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

    a: ({ href, children }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-sky-700 underline decoration-sky-300 underline-offset-2 transition hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300"
      >
        {children}
      </a>
    ),

    blockquote: ({ children }) => (
      <blockquote className="mb-4 rounded-r-xl border-l-4 border-slate-300 bg-slate-50 p-4 italic text-slate-700 dark:border-slate-600 dark:bg-slate-900/60 dark:text-slate-300">
        {children}
      </blockquote>
    ),

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
