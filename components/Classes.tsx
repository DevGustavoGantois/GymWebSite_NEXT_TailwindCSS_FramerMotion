'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { CustomButton } from "./CustomButton";

const classes = [
    {
        name: 'Bodybuilding',
        img: '/assets/img/classes/bodybuilding.jpg',
        description: 'Aqui na nossa academia temos estrutura para atletas de alto rendimento que pensam em uma dia competir subindo nos palcos.'
    },
    {
        name: 'Cardio',
        img: '/assets/img/classes/cardio.jpg',
        description: 'Atividade focada 100% no aeróbico, excelente para quem gosta de correr, e fazer atividades mais voltadas a parte cardiovascular.'
    }, 
    {
        name: 'Fitness',
        img: '/assets/img/classes/fitness.jpg',
        description: 'Esta modalidade mistura um pouco de tudo, proporcionando uma experiência única para quem prática!'
    },
    {
        name: 'CrossFit',
        img: '/assets/img/classes/crossfit.jpg',
        description: 'Pratica esportiva que favorece muito o sistema cardiovascular, além do endurance, proporcionando uma musculatura rigida e um bom cardio.',
    }
]



export function Classes() {
    return (
        <section className="h-screen" id="class">
        <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.2}}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                    {classes.map((item, index) => {
                        return (
                            <div className="relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center" key={index}>
                                <div className="bg-black/50 absolute w-full h-full top-0 z-10" />
                                <Image src={item.img} fill className="object-cover" alt="" />
                                <div className="z-30 max-w-[380px] text-center flex flex-col items-center justify-center gap-4">
                                    <motion.h3 variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.2}} className="h3 text-accent">{item.name}</motion.h3>
                                    <motion.p variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.2}} className="text-white">{item.description}</motion.p>
                                    <motion.div variants={fadeIn('up', 0.8)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.2}}>
                                        <CustomButton containerStyles="w-[164px] h-[46px]" text="Saiba mais"/>
                                    </motion.div>
                                </div>
                            </div>  
                        )
                    })}
                </div>
           </motion.div>
        </section>
    )
}