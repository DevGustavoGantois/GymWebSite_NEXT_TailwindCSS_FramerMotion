'use client';

import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "./CustomButton";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const trainerData = [
    {
        image: '/assets/img/trainers/david.jpg',
        name: 'Brandon Hendrickson',
        role: 'Bodybuilding Coach',
        description: '4x campeão da Mens Physique no Mr Olympia, ele é um ótimo treinador com uma consultoria diferenciada.',

        social: [
            {icon: FaFacebook, href: 'http://www.facebook.com'},
            {icon: FaTwitter, href: 'http://twitter.com'},
            {icon: FaYoutube, href: 'http://www.youtube.com'},
        ]
    },
    {
        image: '/assets/img/trainers/rosy.jpg',
        name: 'Rosy Rivera',
        role: 'Crossfit Coaching',
        description: 'Uma excelente treinadora e campeã de vários campeonatos regionais de crossfit',

        social: [
            {icon: FaFacebook, href: 'http://www.facebook.com'},
            {icon: FaTwitter, href: 'http://twitter.com'},
            {icon: FaYoutube, href: 'http://www.youtube.com'},
        ]
    },
    {
        image: '/assets/img/trainers/matt.jpg',
        name: 'Matt Stone',
        role: 'Fitness Coach',
        description: 'Fitness Coaching, formado em 2020, atua hoje na área da educação física com mais de 15.000 alunos.',

        social: [
            {icon: FaFacebook, href: 'http://www.facebook.com'},
            {icon: FaTwitter, href: 'http://twitter.com'},
            {icon: FaYoutube, href: 'http://www.youtube.com'},
        ]
    },
    {   
        image: '/assets/img/trainers/sofia.jpg',
        name: 'Sofia Lauren',
        role: 'Cardio Coach',
        description: 'Cardio Coach, Sofia toma conta de todas as turmas e aulas de cardio, excelente modalidade para todos.',

        social: [
            {icon: FaFacebook, href: 'http://www.facebook.com'},
            {icon: FaTwitter, href: 'http://twitter.com'},
            {icon: FaYoutube, href: 'http://www.youtube.com'},
        ]
    }
]


export function Team() {
    return (
        <section className="py-12 xl:h-[110vh]" id="team">
            <div className="container mx-auto h-full flex flex-col items-center justify-center mt-[22rem] lg:mt-0">
                <motion.h2 variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.2}} className="h2 text-center mb-6">Nossos Treinadores</motion.h2>
                <motion.div variants={fadeIn('up', 0.6)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.2}} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12">
                    {trainerData.map((trainer, index) => {
                        return (
                            <div key={index} className="flex flex-col items-center text-center">
                                <div className="relative w-[320px] h-[360px] mx-auto mb-4">
                                    <Image src={trainer.image} fill alt="" />
                                </div>
                                <h4 className="h4 mb-2">{trainer.name}</h4>
                                <p className="uppercase text-xs tracking-[3px] mb-2">{trainer.role}</p>
                                <p className="mb-6 max-w-[320px] mx-auto">{trainer.description}</p>
                                <div className="flex justify-center gap-12">
                                    {trainer.social.map((social, index) => {
                                        return (
                                            <div key={index}>
                                                <Link href={social.href} className="hover:text-accent transition-all">
                                                    <social.icon className="text-lg" />
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </motion.div>
                <motion.div variants={fadeIn('up', 0.8)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.2}}>
                    <CustomButton containerStyles="w-[196px] h-[62px]" text="Veja os treinos" />
                </motion.div>
            </div>
        </section>
    )
}