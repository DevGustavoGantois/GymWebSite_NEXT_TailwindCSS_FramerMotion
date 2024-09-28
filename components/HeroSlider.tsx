'use client'

import {Swiper, SwiperSlide} from 'swiper/react';
//import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { CustomButton } from './CustomButton';
import { SwiperNavButtons } from './SwiperNavButtons';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

export function HeroSlider() {
    return (
        <Swiper className="h-full">
            <SwiperSlide>
                <div className="h-full flex justify-end pt-48">
                    <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
                        <motion.h1 variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.2}} className="h1 text-center lg:text-left mb-2">
                        <span>Tenha o<span> Shape dos sonhos</span></span>
                        </motion.h1>
                        <motion.p variants={fadeIn('up', 0.6)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.2}} className="text-white italic text-center lg:text-left mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nisi ea fugit, veritatis pariatur natus soluta, nobis esse officia quae eaque delectus distinctio ab labore voluptas cum! Expedita, corrupti neque.</motion.p>
                        <motion.div variants={fadeIn('up', 0.8)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.2}}>
                        <CustomButton containerStyles='w-[194px] h-[62px] bg-red-300' text='Começar Agora' />
                        </motion.div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-full flex justify-end pt-48">
                    <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
                        <h1 className="h1 text-center lg:text-left mb-2">
                            <span>Melhore o seu <span>treino</span></span>
                        </h1>
                        <p className="text-white italic text-center lg:text-left mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nisi ea fugit, veritatis pariatur natus soluta, nobis esse officia quae eaque delectus distinctio ab labore voluptas cum! Expedita, corrupti neque.</p>
                        <CustomButton containerStyles='w-[194px] h-[62px] bg-red-300' text='Começar Agora' />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-full flex justify-end pt-48">
                    <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
                        <h1 className="h1 text-center lg:text-left mb-2">
                            <span>Treine com<span> os melhores</span></span>
                        </h1>
                        <p className="text-white italic text-center lg:text-left mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nisi ea fugit, veritatis pariatur natus soluta, nobis esse officia quae eaque delectus distinctio ab labore voluptas cum! Expedita, corrupti neque.</p>
                        <CustomButton containerStyles='w-[194px] h-[62px] bg-red-300' text='Começar Agora' />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperNavButtons containerStyles='absolute bottom-2 lg:bottom-0 right-0 h-[130px] w-full lg:w-[700px] z-50 flex justify-center lg:justify-start gap-1' btnStyles='hidden border border-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300' iconStyles='text-2xl' />
        </Swiper>
    )
}