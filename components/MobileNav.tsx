'use client';

import { useMediaQuery } from 'react-responsive';
import { Link as ScrollLink } from 'react-scroll';

const links = [
    {name: 'Início', target: 'home', offset: -100},
    {name: 'Sobre', target: 'about', offset: -100},
    {name: 'Classe' , target: 'class', offset: -80},
    {name: 'Time' , target: 'team', offset: 0},
    {name: 'Preços' , target: 'prices', offset: -40},
    {name: 'Depoimentos' , target: 'testimonials', offset: 0},
    {name: 'Blog' , target: 'blog', offset: 0},
    {name: 'Contato', target: 'contact', offset: 0}
]


export function MobileNav({containerStyles}: {containerStyles: string}) {

    const isMobile = useMediaQuery({
        query: '(max-width: 640px)'
    })

    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => {
                return (
                    <ScrollLink offset={link.offset} to={link.target} smooth spy activeClass={`${!isMobile && 'active'}`} className="cursor-pointer hover:text-accent transition-all">
                        {link.name}
                    </ScrollLink>
                )
            })}
        </nav>
    )
}