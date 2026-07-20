const STEPS = [
    {
        n: '01',
        title: 'Contanos tu idea',
        desc: 'Nos escribís por WhatsApp con la fecha, el lugar y el tipo de evento. Sin compromiso.',
    },
    {
        n: '02',
        title: 'Diseñamos el paquete',
        desc: 'Te armamos una propuesta a medida con equipo, DJ y efectos según tu presupuesto.',
    },
    {
        n: '03',
        title: 'Montaje y prueba',
        desc: 'Llegamos con anticipación, montamos todo y calibramos sonido y luces antes de arrancar.',
    },
    {
        n: '04',
        title: 'La noche perfecta',
        desc: 'Nos encargamos de todo durante el evento para que vos solo disfrutes.',
    },
]

export default function Process() {
    return (
        <section id="proceso" className="relative border-t border-border py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
                    Cómo trabajamos
                </p>
                <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold leading-tight tracking-tight text-balance sm:text-5xl">
                    Simple, rápido y sin dolores de cabeza
                </h2>

                <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
                    {STEPS.map((step) => (
                        <div
                            key={step.n}
                            className="group flex flex-col gap-4 bg-card p-8 transition-colors hover:bg-secondary"
                        >
                            <span className="font-display text-5xl font-extrabold text-primary/30 transition-colors group-hover:text-primary">
                                {step.n}
                            </span>
                            <h3 className="font-display text-xl font-bold">{step.title}</h3>
                            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}