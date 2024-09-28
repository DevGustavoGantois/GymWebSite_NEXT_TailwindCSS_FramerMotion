'use client'

import Image from "next/image"
import Link from "next/link"

const brandImages = [
    {
        src: '/assets/img/brands/brand-1.png',
        href: ''
    },
    {
        src: '/assets/img/brands/brand-2.png',
        href: ''
    },
    {
        src: '/assets/img/brands/brand-3.png',
        href: ''
    },
    {
        src: '/assets/img/brands/brand-4.png',
        href: ''
    },
    {
        src: '/assets/img/brands/brand-5.png',
        href: ''
    }
]

export function Brands() {
    return (
        <section className="py-8" id="contact">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-5 py-8">
                    {brandImages.map((img, index) => {
                        return (
                            <div key={index}>
                                <Link className="group" href={img.href}>
                                    <Image className="opacity-50 group-hover:opacity-100 transition-all mx-auto" src={img.src} width={204} height={106} alt="" />
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}