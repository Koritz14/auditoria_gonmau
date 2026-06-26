const heatMapData = [
  { label: 'Confidencialidad', value: 'Alta' },
  { label: 'Integridad', value: 'Media' },
  { label: 'Disponibilidad', value: 'Alta' },
  { label: 'Exposición', value: 'Alta' },
]

function HeatMapCard() {
  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
        Mapa de calor
      </p>
      <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
        Riesgo operativo y exposición
      </h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {heatMapData.map((item) => (
          <div
            key={item.label}
            className="rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-950"
          >
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.label}</p>
            <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeatMapCard
