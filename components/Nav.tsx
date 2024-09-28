'use client';

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

export function Nav({containerStyles}: {containerStyles: string}) {
    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => {
                return (
                    <ScrollLink offset={link.offset} to={link.target} smooth spy activeClass='active' className="hover:text-accent transition-all" key={index}>{link.name}</ScrollLink>
                )
            })}
        </nav>
    )
}