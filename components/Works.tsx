import Image from "next/image";
import { landingData } from "@/data/landing"

export default function Works() {
    return (
        <section id="works" className="relative py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
                            Trabajos recientes
                        </p>
                        <h2 className="mt-3 max-w-2xl font-display font-extrabold leading-tight leading-[1.05] text-[2rem] sm:text-[2.5rem] md:text-5xl">
                            Producciones que hablan por sí solas
                        </h2>
                    </div>
                </div>

                <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-3">
                    {landingData.works.map((work) => (
                        <article
                            key={work.title}
                            className={`group relative overflow-hidden rounded-2xl border border-border ${work.className}`}
                        >
                            <Image
                                src={work.img || '/placeholder.svg'}
                                alt={work.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-6">
                                <p className="text-xs font-medium uppercase tracking-widest text-primary">
                                    {work.type}
                                </p>
                                <h3 className="mt-1 font-display text-xl font-bold text-foreground sm:text-2xl">
                                    {work.title}
                                </h3>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}