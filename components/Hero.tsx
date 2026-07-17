import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative isolate flex min-h-screen items-end overflow-hidden pb-16 pt-28 sm:pb-24">
            {/* Background image or video */}
            <div className="absolute inset-0 -z-20">
                <Image
                    src="/images/hero-image.jpg"
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover object-center"
                />
            </div>
            {/* Gradient overlays */}
            <div className="absolute inset-0 -z-10 from-background via-background/70 to-background/30" />
            <div className="absolute inset-0 -z-10 bg-grid opacity-40" />

            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3">
                    <span className="flex h-2 w-2 items-center justify-center">
                        <span className="absolute h-2 w-2 animate-ping rounded-full bg-primary/70" />
                        <span className="h-2 w-2 rounded-full bg-primary" />
                    </span>
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                        Productora de eventos · Desde 2014
                    </p>
                </div>

                <h1 className="mt-6 max-w-4xl font-display text-[2.5rem] font-extrabold leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-8xl">
                    Convertimos tu evento en una{' '}
                    <span className="text-primary">experiencia sonora</span>.
                </h1>

                <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                    DJs, sonido profesional, iluminación, humo y pantallas LED. Producción
                    integral de alto calibre para fiestas, bodas y eventos corporativos que
                    la gente recuerda.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a
                        href="#contacto"
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                    >
                        Cotizar mi evento
                        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    <a
                        href="#trabajos"
                        className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-muted"
                    >
                        <Play className="size-4 text-primary" />
                        Ver trabajos
                    </a>
                </div>

                {/* Stats strip */}
                    <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8">
                        {[
                            { value: '850+', label: 'Eventos producidos' },
                            { value: '12k W', label: 'Potencia de sonido' },
                            { value: '10 años', label: 'De experiencia' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <dt className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                                    {stat.value}
                                </dt>
                                <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">
                                    {stat.label}
                                </dd>
                            </div>
                        ))}
                    </dl>
            </div>
        </section>
    )
}