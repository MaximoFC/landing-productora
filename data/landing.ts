import {
    MessageCircle,
    Phone,
    Mail,
    AtSign,
} from "lucide-react";

export const landingData = {
    marqueeItems: [
        'DJ en vivo',
        'Sonido profesional',
        'Iluminación',
        'Máquina de humo',
        'Pantallas LED',
        'Cabinas DJ',
        'Efectos especiales',
    ],

    processSteps: [
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
    ],

    works: [
        {
            img: '/images/private-fest.jpg',
            title: 'Neon Warehouse',
            type: 'Fiesta privada · 800 personas',
            className: 'sm:col-span-2 sm:row-span-2',
        },
        {
            img: '/images/corporative-show.jpg',
            title: 'Lanzamiento LMX',
            type: 'Evento corporativo',
            className: '',
        },
        {
            img: '/images/open-air-fest.jpg',
            title: 'Open Air Fest',
            type: 'Festival al aire libre',
            className: '',
        },
    ],

    contacts: [
        {
            icon: MessageCircle,
            label: 'WhatsApp',
            value: '+54 9 11 5555-0198',
            href: 'https://wa.me/549123456?text=Hola%20N%C3%93CTURA,%20quiero%20cotizar%20un%20evento',
            primary: true,
        },
        {
            icon: Phone,
            label: 'Teléfono',
            value: '+54 11 4444-0100',
            href: 'tel:+541144440100',
        },
        {
            icon: Mail,
            label: 'Email',
            value: 'hola@producciones.com',
            href: 'mailto:hola@producciones.com',
        },
        {
            icon: AtSign,
            label: 'Instagram',
            value: '@producciones',
            href: 'https://instagram.com',
        },
    ],
}