function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-6 flex flex-col gap-3">
      <div className="rounded-[1.5rem] border border-slate-200/80 bg-gradient-to-r from-slate-50 to-white p-4 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-950 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-500 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-400 sm:text-[11px]">
            {subtitle}
          </span>
        </div>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-100 sm:text-3xl">{title}</h3>
      </div>
    </div>
  )
}

export default SectionHeader
