import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative isolate flex min-h-screen items-end overflow-hidden pb-16 pt-28 sm:pb-24">
            {/* Background image or video */}
            <div className="absolute inset-0 -z-30">
                <Image
                    src="/images/hero-image.jpg"
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover object-center scale-105 brightness-[0.85] contrast-110 saturate-125"
                />
            </div>

            {/* Oscurece toda la foto */}
            <div className="absolute inset-0 -z-20 bg-black/55" />
                
            {/* Gradiente inferior */}
            <div className="absolute inset-0 -z-20 bg-gradient-to-t from-background via-background/40 to-transparent" />
                
            {/* Luz violeta */}
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_65%_20%,rgba(197, 142, 249, 0.3),transparent_45%)]" />
                
            {/* Luz azul */}
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_25%_35%,rgba(59,130,246,.15),transparent_45%)]" />
                
            {/* Viñeta */}
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle,transparent_45%,rgba(0,0,0,.65)_100%)]" />
                
            {/* Grid */}
            <div className="absolute inset-0 -z-10 bg-grid opacity-20" />

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
                    <span
                        className="text-primary"
                        style={{
                            textShadow:
                                "0 0 35px rgba(176, 92, 1, 0.45)"
                        }}
                    >
                        experiencia sonora
                    </span>.
                </h1>

                <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
                    DJs, sonido profesional, iluminación, humo y pantallas LED. Producción
                    integral de alto calibre para fiestas, bodas y eventos corporativos que
                    la gente recuerda.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a
                        href="#contact"
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] shadow-[0_0_35px_rgba(176, 92, 1, 0.35)] hover:shadow-[0_0_45px_rgba(176,92,1,0.55)] duration-300"
                    >
                        Cotizar mi evento
                        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    <a
                        href="#works"
                        className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/5 border-white/15 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-white/10"
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
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
        </section>
    )
}