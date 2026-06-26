function SectionContainer({ id, title, children }) {
  return (
    <section id={id} className="mb-10 scroll-mt-28">
      <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/90">
        {title ? <h2 className="mb-4 text-2xl font-semibold text-slate-900 dark:text-slate-100">{title}</h2> : null}
        {children}
      </div>
    </section>
  )
}

export default SectionContainer
