function SectionContainer({ id, title, children }) {
  return (
    <section id={id} className="mb-10 scroll-mt-28">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.2)] backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-950/85">
        {title ? (
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">{title}</h2>
          </div>
        ) : null}
        {children}
      </div>
    </section>
  )
}

export default SectionContainer
