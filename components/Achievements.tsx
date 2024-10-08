'use client'

import CountUp from "react-countup";
import { FaBriefcase, FaClock, FaTrophy } from "react-icons/fa";
import {ImUsers} from 'react-icons/im';
import { useRef } from "react";

const stats = [
    {
        number: 19,
        icon: FaBriefcase,
        text: 'Cursos de treino'
    },
    {
        number: 879,
        icon: FaClock,
        text: 'Horas de treino',
    },
    {
        number: 150,
        icon: ImUsers,
        text: 'Clientes satisfeitos'
    },
    {
        number: 9,
        icon: FaTrophy,
        text: 'Premios internacionais',
    }
]

export function Achievments() {

    const ref = useRef(null);

    return (
        <section className="">
            <div className="container mx-auto">
                <div className="grid gridc-cols-2 md:grid-cols-4 gap-16">
                    {stats.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-col justify-center items-center">
                                <div className="border border-accent/90 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-6">
                                    <div ref={ref} className="border border-accent/30 w-full h-full flex items-center justify-center text-5xl rounded-full">
                                        <CountUp start={0} end={item.number} duration={6} />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center text-center">
                                <item.icon className="text-3xl mb-2" />
                                <h4 className="h4">{item.text}</h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}