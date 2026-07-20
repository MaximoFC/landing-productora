import { AtSign, MessageCircle, Mail } from 'lucide-react'

export default function SiteFooter() {
    return (
        <footer className="border-t border-border">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-sm">
                        <div className="flex items-center gap-2">
                            <span className="grid size-8 place-items-center rounded-md bg-primary text-primary-foreground">
                                <span className="font-display text-lg font-extrabold leading-none">
                                    P
                                </span>
                            </span>
                            <span className="font-display text-lg font-extrabold tracking-tight">
                                PRODUCCIONES
                            </span>
                        </div>
                        <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                            Productora de eventos y experiencias sonoras. DJs, sonido,
                            iluminación y producción integral de alto calibre.
                        </p>
                        <div className="mt-6 flex gap-3">
                            {[
                                { icon: AtSign, href: 'https://instagram.com', label: 'Instagram' },
                                {
                                    icon: MessageCircle,
                                    href: 'https://wa.me/5491155550198',
                                    label: 'WhatsApp',
                                },
                                { icon: Mail, href: 'mailto:hola@noctura.studio', label: 'Email' },
                            ].map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                                >
                                    <Icon className="size-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-10 sm:gap-16">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-foreground">
                                Servicios
                            </p>
                            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                                {['DJ en vivo', 'Sonido', 'Iluminación', 'Pantallas LED'].map(
                                    (item) => (
                                        <li key={item}>
                                            <a href="#services" className="transition-colors hover:text-foreground">
                                                {item}
                                            </a>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </div>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-foreground">
                                Empresa
                            </p>
                            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                                {[
                                    { label: 'Trabajos', href: '#works' },
                                    { label: 'Proceso', href: '#process' },
                                    { label: 'Contacto', href: '#contact' },
                                ].map((item) => (
                                    <li key={item.label}>
                                        <a href={item.href} className="transition-colors hover:text-foreground">
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} PRODUCCIONES. Todos los derechos reservados.</p>
                    <p>Producción de eventos · Sonido · Iluminación</p>
                </div>
            </div>
        </footer>
    )
}