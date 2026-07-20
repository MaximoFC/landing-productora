import Image from "next/image";
import {
    Disc3,
    Speaker,
    CloudFog,
    MonitorPlay,
    Lightbulb,
    Sparkles,
    ArrowUpRight,
} from "lucide-react";

export default function Services() {
    return (
        <section id="services" className="relative py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
                            Lo que ofrecemos
                        </p>
                        <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold leading-tight tracking-tight text-balance sm:text-5xl">
                            Todo el equipo y talento, en un solo lugar
                        </h2>
                    </div>
                    <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
                        Armamos paquetes a medida según tu evento. Alquiler por horas o producción completa llave en mano.
                    </p>
                </div>

                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Feature card: DJ */}
                    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-8 sm:col-span-2 lg:row-span-2">
                        <div className="absolute -right-16 -top-16 size-56 rounded-full bg-primary/20 blur-3xl transition-opacity group-hover:opacity-80" />
                        <div className="relative">
                            <div className="grid size-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                                <Disc3 className="size-6" />
                            </div>
                            <h3 className="mt-6 font-display text-2xl font-bold sm:text-3xl">
                                DJ profesional en vivo
                            </h3>
                            <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
                                Selección musical curada para tu público. House, techno,
                                reguetón, cumbia y sets personalizados. Incluye cabina, mixer y
                                monitoreo profesional.
                            </p>
                        </div>
                        <ul className="relative mt-8 flex flex-wrap gap-2">
                            {['Sets personalizados', 'Cabina premium', 'Warm up + prime time'].map(
                                (tag) => (
                                    <li
                                        key={tag}
                                        className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground"
                                    >
                                        {tag}
                                    </li>
                                ),
                            )}
                        </ul>
                    </article>

                    {/* Sound with image */}
                    <article className="group relative overflow-hidden rounded-2xl border border-border bg-card sm:col-span-2 lg:col-span-1 lg:row-span-2">
                        <div className="relative h-48 w-full overflow-hidden lg:h-56">
                            <Image
                                src="/images/sound.jpg"
                                alt="Sistema de sonido profesional line-array"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                        </div>
                        <div className="p-8">
                            <div className="grid size-12 place-items-center rounded-xl bg-secondary text-primary">
                                <Speaker className="size-6" />
                            </div>
                            <h3 className="mt-6 font-display text-2xl font-bold">
                                Alquiler de parlantes
                            </h3>
                            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                                Sistemas line-array y subwoofers de alta fidelidad. Potencia
                                escalable según el aforo, con montaje y calibración incluidos.
                            </p>
                        </div>
                    </article>

                    {/* Small cards */}
                    <ServiceCard
                        icon={<CloudFog className="size-6" />}
                        title="Máquina de humo"
                        desc="Humo denso y niebla baja para atmósferas de impacto y efectos de luz visibles."
                    />
                    <ServiceCard
                        icon={<Lightbulb className="size-6" />}
                        title="Iluminación"
                        desc="Cabezas móviles, beams y wash sincronizados con la música al ritmo del set."
                    />
                </div>

                {/* Screen full-width */}
                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                    <article className="group relative overflow-hidden rounded-2xl border border-border bg-card lg:col-span-2">
                        <div className="grid h-full items-center gap-0 sm:grid-cols-2">
                            <div className="p-8">
                                <div className="grid size-12 place-items-center rounded-xl bg-secondary text-primary">
                                    <MonitorPlay className="size-6" />
                                </div>
                                <h3 className="mt-6 font-display text-2xl font-bold">
                                    Pantallas LED
                                </h3>
                                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                                    Video walls modulares para visuales, branding y transmisiones
                                    en vivo. Resolución de alto brillo para interior y exterior.
                                </p>
                            </div>
                            <div className="relative h-48 w-full overflow-hidden sm:h-full">
                                <Image
                                    src="/images/screen.jpg"
                                    alt="Pantalla LED gigante en un escenario"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </article>

                    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-primary p-8 text-primary-foreground">
                        <div>
                            <div className="grid size-12 place-items-center rounded-xl bg-primary-foreground/15">
                                <Sparkles className="size-6" />
                            </div>
                            <h3 className="mt-6 font-display text-2xl font-bold">
                                Efectos especiales
                            </h3>
                            <p className="mt-3 text-pretty text-sm leading-relaxed text-primary-foreground/80">
                                Chispas frías, CO₂ jets, confeti y pirotecnia interior para
                                momentos inolvidables.
                            </p>
                        </div>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline"
                        >
                            Consultar disponibilidad
                            <ArrowUpRight className="size-4" />
                        </a>
                    </article>
                </div>
            </div>
        </section>
    )
}

function ServiceCard({
    icon,
    title,
    desc,
}: {
    icon: React.ReactNode
    title: string
    desc: string
}) {
    return (
        <article className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/50">
            <div className="grid size-12 place-items-center rounded-xl bg-secondary text-primary">
                {icon}
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold">{title}</h3>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {desc}
            </p>
        </article>
    )
}