function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-6 flex flex-col gap-3">
      <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{subtitle}</p>
        <h3 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-slate-100">{title}</h3>
      </div>
    </div>
  )
}

export default SectionHeader
