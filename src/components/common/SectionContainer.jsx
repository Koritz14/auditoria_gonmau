function SectionContainer({ id, title, children }) {
  return (
    <section id={id} className="mb-8 scroll-mt-24 sm:mb-10 sm:scroll-mt-28 lg:scroll-mt-32">
      <div className="overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/85 p-4 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.2)] backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-950/85 sm:rounded-[2rem] sm:p-6 lg:p-8">
        {title ? (
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-sky-500" />
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-2xl">{title}</h2>
          </div>
        ) : null}
        {children}
      </div>
    </section>
  )
}

export default SectionContainer
