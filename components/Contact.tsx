import { MessageCircle, ArrowUpRight } from 'lucide-react'
import { landingData } from "@/data/landing"

export default function Contact() {
    return (
        <section id="contact" className="relative py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12 lg:p-16">
                    <div className="absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
                    <div className="relative grid gap-12 lg:grid-cols-2">
                        <div>
                            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
                                Hablemos
                            </p>
                            <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
                                ¿Tenés un evento en mente?
                            </h2>
                            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
                                Escribinos y en menos de 24 horas te enviamos una propuesta a
                                medida. Cotización sin costo ni compromiso.
                            </p>

                            <a
                                href="https://wa.me/5491155550198"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                            >
                                <MessageCircle className="size-4" />
                                Escribinos por WhatsApp
                            </a>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {landingData.contacts.map((c) => {
                                const Icon = c.icon
                                return (
                                    <a
                                        key={c.label}
                                        href={c.href}
                                        target={c.href.startsWith('http') ? '_blank' : undefined}
                                        rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-background/50 p-5 transition-colors hover:border-primary/50 hover:bg-secondary"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="grid size-11 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                                <Icon className="size-5" />
                                            </span>
                                            <div>
                                                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                                                {c.label}
                                                </p>
                                                <p className="mt-0.5 text-sm font-semibold text-foreground">
                                                    {c.value}
                                                </p>
                                            </div>
                                        </div>
                                        <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}