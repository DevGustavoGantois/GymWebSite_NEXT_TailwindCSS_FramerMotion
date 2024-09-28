'use client';

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

//import swiper components
import { Swiper, SwiperSlide } from 'swiper/react';

//import required modules
import { Pagination } from "swiper/modules";

//testimonials data
const testimonialData = [
    {
        img: '/assets/img/testimonial/lucy.jpg',
        message: 'Incrível o maquinário da academia, além disso os instrutores super recepctivos.',
        name: 'Luciana Silva'
    },
    {
        img: '/assets/img/testimonial/michael.jpg',
        message: 'Recomendo a todos virem um dia aqui na FitPhysique, aparelhos sensacionais!',
        name: 'Michael Jorge'
    },
    {
        img: '/assets/img/testimonial/maria.jpg',
        message: 'Academia completa, simplismente incrível, além de ter várias modalidades para praticar.',
        name: 'Maria Garcia',
    },
    {
        img: '/assets/img/testimonial/michael.jpg',
        message: 'Recomendo muito, a minha primeira impressão foi muito boa, só aparelhos de qualidade!',
        name: 'Marcio Otávio',
    },
    {
        img: '/assets/img/testimonial/lucy.jpg',
        message: 'Incrível o maquinário da academia, além disso os instrutores super recepctivos.',
        name: 'Luciana Silva'
    },
    {
        img: '/assets/img/testimonial/michael.jpg',
        message: 'Recomendo a todos virem um dia aqui na FitPhysique, aparelhos sensacionais!',
        name: 'Michael Jorge'
    },
    {
        img: '/assets/img/testimonial/maria.jpg',
        message: 'Academia completa, simplismente incrível, além de ter várias modalidades para praticar.',
        name: 'Maria Garcia',
    },
    {
        img: '/assets/img/testimonial/michael.jpg',
        message: 'Recomendo muito, a minha primeira impressão foi muito boa, só aparelhos de qualidade!',
        name: 'João Lucas',
    }
]

import { motion } from 'framer-motion';
import { fadeIn } from "@/lib/variants";

export function Testimonials() {
    return (
        <section className="py-12 xl:py-28" id="testimonials">
            <div className="container mx-auto">
                <motion.h2 variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.2}} className="h2 text-center">Depoimentos dos nossos alunos</motion.h2>
                <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.2}}>
                    <Swiper className="h-[320px]" slidesPerView={1} spaceBetween={30} modules={[Pagination]} pagination={{clickable: true }} breakpoints={{768: {slidesPerView: 2, spaceBetween: 30}, 1024: {slidesPerView: 3, spaceBetween: 30}}}>
                        {testimonialData.map((person, index) => {
                            return (
                                <SwiperSlide className="h-full" key={index}>
                                    <div className=" flex flex-col justify-center items-center gap-6 text-center h-full">
                                        <Image src={person.img} width={90} height={90} alt="" className="rounded-full border-2 border-accent" />
                                        <div className="flex flex-col justify-center items-center">
                                            <FaQuoteLeft className="text-2xl text-gray-300" />
                                            <p className="max-w-[380px] mb-4">{person.message}</p> 
                                            <span className="text-2xl text-accent">{person.name}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    )
}