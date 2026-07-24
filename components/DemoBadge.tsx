export default function DemoBadge() {
    return (
        <div className="fixed bottom-5 left-5 z-[100] hidden sm:flex items-center gap-3 rounded-xl border border-white/10 bg-background/70 px-4 py-3 backdrop-blur-xl shadow-lg">
            <span className="h-2 w-2 rounded-full bg-primary" />

            <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Demo Template
                </p>

                <p className="mt-1 text-sm font-medium">
                    Designed by{" "}
                    <span className="text-primary">
                        Máximo Callejas
                    </span>
                </p>
            </div>
        </div>
    )
}