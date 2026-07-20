'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const NAV = [
    { label: 'Servicios', href: '#services' },
    { label: 'Trabajos', href: '#works' },
    { label: 'Proceso', href: '#process' },
    { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled ? 'border-b border-border bg-background/80 backdrop-blur-xl' : 'border-b border-transparent'
            }`}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                <a href="#" className="flex items-center gap-2" aria-label="Producciones inicio">
                    PRODUCCIONES
                </a>

                <nav className="hidden items-center gap-8 md:flex">
                    {NAV.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <a
                    href="#contacto"
                    className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] md:inline-flex"
                >
                    <Phone className="size-4" />
                    Cotizar evento
                </a>

                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    className="grid size-10 place-items-center rounded-md border border-border text-foreground md:hidden"
                    aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={open}
                >
                    {open ? <X className="size-5" /> : <Menu className="size-5" />}
                </button>
            </div>

            {open && (
                <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
                  <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
                    {NAV.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="rounded-md px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        {item.label}
                      </a>
                    ))}
                    <a
                      href="#contacto"
                      onClick={() => setOpen(false)}
                      className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                    >
                      <Phone className="size-4" />
                      Cotizar evento
                    </a>
                  </nav>
                </div>
            )}
        </header>
    )
}