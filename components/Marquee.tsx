import { landingData } from "@/data/landing"

export default function Marquee() {
    const loop = [...landingData.marqueeItems, ...landingData.marqueeItems]

    return (
        <section
            aria-hidden="true"
            className="border-y border-border bg-card py-5 overflow-hidden"
        >
            <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
                {loop.map((item, i) => (
                    <div key={i} className="flex items-center gap-8">
                        <span className="font-display text-xl font-bold uppercase tracking-tight text-foreground/80">
                        {item}
                        </span>
                        <span className="size-2 rounded-full bg-primary" />
                    </div>
                ))}
            </div>
        </section>
    )
}