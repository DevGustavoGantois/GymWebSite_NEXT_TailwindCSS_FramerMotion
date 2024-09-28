'use client';

import { FaUsers } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa";

import{ motion } from 'framer-motion';
import { fadeIn } from "@/lib/variants";
import { Achievments } from "./Achievements";

const featured = [
    {
        icon: <FaUsers />,
        title: 'Treinadores Premiados',
        subtitle: 'Os melhores treinadores você encontra aqui na FitPhysique.'
    },
    {
        icon: <IoIosPricetag />,
        title: 'Excelentes Preços',
        subtitle: 'Veja os nossos planos, eles estão com excelentes preços.'
    },
    {
        icon: <FaDumbbell />,
        title: 'Equipamento Moderno',
        subtitle: 'Nosso equipamento de ultima linha para fazer você ter uma melhor experiência.',
    }
]



export function About() {
    return (
        <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
            <div className="container mx-auto">
                <div className="flex flex-col items-center gap-2 mb-8">
                    <motion.h2 variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.2}} className="h2 text-center">Sobre nós</motion.h2>
                    <motion.p variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.1}}  className="max-w-[600px] mx-auto text-center">Somos uma academia inteligente, prezamos sempre pelo atendimento ao cliente sua satisfação é a nossa satisfação.</motion.p>
                </div>
                <motion.div variants={fadeIn('up', 0.8)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.4}}  className="grid grid-cols-1 md:grid-cols-2 xL:grid-cols-3 gap-4 mb-16">
                    {featured.map((feature, index) => {
                        return (
                            <div key={index} className="flex flex-col justify-center items-center gap-4 border p-10">
                                <div className="text-4xl bg-primary-200 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center">{feature.icon}</div>
                                <div className="flex flex-col justify-center items-center gap-2 text-center">
                                    <h4 className="h4 text-accent">{feature.title}</h4>
                                    <p>{feature.subtitle}</p>
                                </div>
                            </div>
                        )
                    })}
                </motion.div>
                <motion.div variants={fadeIn('up', 0.9)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.6}}>
                    <Achievments />
                </motion.div>
            </div>
        </section>
    )
}