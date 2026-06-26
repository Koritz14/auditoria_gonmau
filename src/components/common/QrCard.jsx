function QrCard() {
  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Código QR
          </p>
          <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
            Acceso rápido al informe
          </h3>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center rounded-[1.25rem] border border-dashed border-slate-300 bg-white p-6 dark:border-slate-700 dark:bg-slate-950">
        <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-slate-900 text-center text-sm font-semibold text-white dark:bg-slate-100 dark:text-slate-950">
          QR
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
        Este bloque representa un acceso rápido al informe para compartir o consultar desde dispositivos móviles.
      </p>
    </div>
  )
}

export default QrCard
