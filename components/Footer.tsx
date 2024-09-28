'use client'
import Image from "next/image"
import Link from "next/link"

import { FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaYoutube, FaMapMarkerAlt, FaInstagram} from 'react-icons/fa'

import { CustomButton } from "./CustomButton"



export function Footer() {
    return (
        <footer className="bg-primary-300 pt-24">
    <div className="container mx-auto pb-24 flex flex-col">
        <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {/* Logo e Informações de Contato */}
        <div className="flex flex-col gap-4">
            <Link href="#">
            <Image src={'/assets/img/logo.png'} width={117} height={55} alt="" />
            </Link>
            <p className="max-w-sm">A melhor academia de todos os tempos!</p>
            <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-accent" />
                <span>Horto Floresta, Salvador BA</span>
            </li>
            <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-accent" />
                <span>+55 (71) 9865-8273</span>
            </li>
            <li className="flex items-center gap-4">
                <FaEnvelope className="text-xl text-accent" />
                <Link href="mailto:gugagantois@gmail.com">
                <span>gugagantois@gmail.com</span>
                </Link>
            </li>
            </ul>
        </div>

        {/* Posts Recentes no Blog */}
        <div>
            <h4 className="h4 text-accent mb-4">Posts Recentes no Blog</h4>
            {Array(3).fill(0).map((_, index) => (
            <div key={index} className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
                <Link className="hover:text-accent transition-all duration-300" href="#">
                <h5 className="h5 leading-snug">Como se motivar com todos esses exercícios</h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">22 de Setembro, 2024</p>
                </Link>
            </div>
            ))}
        </div>

        {/* Galeria */}
        <div>
            <h4 className="h4 text-accent">Galeria</h4>
            <div className="flex flex-wrap gap-2">
            {['david', 'matt', 'rosy', 'sofia'].map((trainer, index) => (
                <Link key={index} href="#">
                <Image src={`/assets/img/trainers/${trainer}.jpg`} width={100} height={100} alt="" />
                </Link>
            ))}
            </div>
        </div>

        {/* Newsletter */}
        <div>
            <h4 className="h4 text-accent mb-4">Newsletter</h4>
            <div className="flex flex-col gap-4">
            <p>Entre em contato conosco, para tentarmos esclarecer todas as suas dúvidas caso ainda tenha!</p>
            <form className="flex flex-col items-start w-full">
                <input type="email" placeholder="Digite seu email" className="h-[50px] w-full outline-none  px-4 text-primary-300" />
                <CustomButton containerStyles="h-[50px] px-8 mt-4" text="Enviar" />
            </form>
            </div>
        </div>
        </div>
    </div>

    {/* Footer Bottom */}
    <div className="container mx-auto border-t border-white/20 py-12">
        <p className="text-center text-gray-300">&copy; Todos os Direitos Reservados FitPhysique 2024.</p>
        <ul className="flex justify-center items-center gap-4 mt-4 text-xl">
        <li>
            <Link href="#" className="text-white hover:text-accent transition-all duration-300">
            <FaFacebook />
            </Link>
        </li>
        <li>
            <Link href="#" className="text-white hover:text-accent transition-all duration-300">
            <FaTwitter />
            </Link>
        </li>
        <li>
            <Link href="#" className="text-white hover:text-accent transition-all duration-300">
            <FaYoutube />
            </Link>
        </li>
        <li>
            <Link href="https://www.instagram.com/devgustavogantois_/?hl=pt-br" target="_blank" className="text-white hover:text-accent transition-all duration-300">
            <FaInstagram />
            </Link>
        </li>
        </ul>
    </div>
    <div className="container mx-auto">
            <p className="text-white text-center hover:text-accent transition-all duration-300">Desenvolvido por @devgustavogantois_</p>
    </div>
    </footer>

    )
}