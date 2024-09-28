'use client';

import Link from "next/link"
import Image from "next/image"
import { MobileNav } from "./MobileNav"
import { Nav } from "./Nav"
import { useEffect, useState } from "react"
import { MdMenu } from "react-icons/md";

export function Header() {
    const [headerActive, setHeaderActive] = useState(false); 
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHeaderActive(window.scrollY > 50)
        }

        //add scroll event
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])


    return (
        <header className={`${headerActive ? 'h-[100px]' : 'h-[124px]'} fixed max-w-[1920px] top-0 w-full bg-primary-200 cursor-pointer h-[90px] transition-all z-50`}>
            <div className="container mx-auto h-full flex items-center justify-between">
                <Link href=''>
                <Image src={'/assets/img/logo.png'} width={117} height={55} alt="logo" />
                </Link>
                <MobileNav containerStyles={`${headerActive ? 'top-[90px]' : 'top-[124px]'} ${openNav ? 'max-h-max pt-8 pb-10 border-t border-white/10' : 'max-h-0 pt-0 overflow-hidden border-white-0'} flex flex-col text-center gap-8 fixed bg-primary-200 w-full left-0 top-[124px] text-base transition-all uppercase font-medium text-white xl:hidden`} />
                <Nav containerStyles="py-12 flex uppercase text-base font-medium text-white gap-4 hidden xl:flex" />
                <div className="flex items-center gap-4">
                <div className="text-white flex items-center gap-4">
                    <button className="hover:text-accent transition-all text-base uppercase font-medium">Entrar</button>
                    <button className="hover:text-accent transition-all text-base uppercase font-medium">Cadastre-se</button>
                </div>
                <button onClick={() => setOpenNav(!openNav)} className="text-white xl:hidden">
                        <MdMenu className="text-4xl" />
                </button>
                </div>
            </div>
        </header>
    )
}