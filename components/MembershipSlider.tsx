'use client'

import Image from "next/image"
import { MdClose } from "react-icons/md"
import { FaCheck } from "react-icons/fa"

import { CustomButton } from "./CustomButton"

//import swiper components
import {Swiper, SwiperSlide} from 'swiper/react'

//import required modules
import { Pagination } from "swiper/modules"
//import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//membership data
const membershipData = [
    {
        title: 'Standart',
        price: '30',
        benefits: [
            {
                icon: FaCheck,
                text: 'Membros Inclusos.'
            },
            {
                icon: FaCheck,
                text: 'Acesso a todas as nossas academias.'
            },
            {
                icon: MdClose,
                text: 'Plano de dieta incluso.'
            },
            {
                icon: FaCheck,
                text: 'Dicas de saúde e fitness.'
            },
            {
                icon: MdClose,
                text: 'Acesso a academia aos sabados e domingos.'
            },
            {
                icon: FaCheck,
                text: 'Acesso a qualquer hora.'
            },
            {
                icon: MdClose,
                text: 'Nenhuma comodidade adicional.'
            },
        ]
    },
    {
        title: 'Ultimate',
        price: '45',
        benefits: [
            {
                icon: FaCheck,
                text: 'Membros Inclusos.'
            },
            {
                icon: FaCheck,
                text: 'Acesso a todas as nossas academias.'
            },
            {
                icon: FaCheck,
                text: 'Plano de dieta incluso.'
            },
            {
                icon: FaCheck,
                text: 'Dicas de saúde e fitness.'
            },
            {
                icon: FaCheck,
                text: 'Acesso a academia aos sabados e domingos.'
            },
            {
                icon: FaCheck,
                text: 'Acesso a qualquer hora.'
            },
            {
                icon: MdClose,
                text: 'Nenhuma comodidade adicional.'
            },
        ]
    },
    {
        title: 'Premium',
        price: '60',
        benefits: [
            {
                icon: FaCheck,
                text: 'Membros Inclusos.'
            },
            {
                icon: FaCheck,
                text: 'Acesso a todas as nossas academias.'
            },
            {
                icon: FaCheck,
                text: 'Plano de dieta incluso.'
            },
            {
                icon: FaCheck,
                text: 'Dicas de saúde e fitness.'
            },
            {
                icon: FaCheck,
                text: 'Acesso a academia aos sabados e domingos.'
            },
            {
                icon: FaCheck,
                text: 'Acesso a qualquer hora.'
            },
            {
                icon: FaCheck,
                text: 'Nenhuma comodidade adicional.'
            },
        ]
    }
    
]

export function MembershipSlider() {
    return (
        <Swiper
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }}
            className="min-h-[680px]"
        >
            {membershipData.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className="border border-accent hover:bg-primary-300/80 transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto">
                            <div className="py-5 px-[60px] border-b border-accent">
                                <h4 className="">{item.title}</h4>
                            </div>
                            <div className="py-[30px] px-[60px]">
                                <ul className="flex flex-col gap-5 mb-7">
                                    {item.benefits.map((benefit, idx) => {
                                        return (
                                            <li className="flex items-center gap-2" key={idx}>
                                                <benefit.icon className="text-accent text-lg" />
                                                {benefit.text}
                                            </li>
                                        )
                                    })}
                                </ul>
                                <p className="text-accent mb-8 flex gap-1 items-center">
                                    <sup className="text-4xl">R$</sup>
                                    <strong className="text-6xl">{item.price}</strong>
                                    <em className="self-end text-2xl">/Mês</em>
                                </p>
                                <CustomButton containerStyles="w-[196px] h-[62px]" text="Compre agora" />
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}
