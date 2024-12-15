import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";


export default function Hero() {
    return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start">
        <section className="flex flex-col justify-center px-8 sm:px-12 md:px-64 py-12 sm:py-28 md:py-80 mt-20 sm:mt-20 md:mt-0">
            <div>
            <h1 className="text-4xl sm:text-3xl md:text-5xl font-bold text-gray-800">
                Hi, I am
                <span className="px-2 sm:px-3 md:px-4 text-emerald-800">Sameeha.</span>
            </h1>
            <h1 className="text-2xl sm:text-xl md:text-3xl py-2 font-semibold mt-2 text-gray-800">
                Software Engineer | ServiceNow Developer
            </h1>
            <div className="flex items-center text-lg md:text-xl sm:text-lg mt-3 text-gray-600">
                <HiOutlineLocationMarker className="text-emerald-800 mr-2" />
                <span>Toronto, Canada [</span>
                <span className="text-emerald-800 font-semibold">PR Holder</span>
                <span>]</span>
            </div>
            <a
                href="#contact"
                className="inline-block px-4 sm:px-6 py-2 mt-4 text-white bg-emerald-800 rounded-lg shadow hover:bg-emerald-700 transition duration-300"
            >
                <p className="text-base sm:text-lg">Get in Touch!</p>
            </a>
            </div>
        </section>

        <div className="hidden sm:flex flex-col items-center">
            <div className="relative mx-44 sm:mx-0 md:mx-44 h-16 sm:h-48 md:h-64 border-l-2 border-gray-300"></div>
            <a
            href="https://www.linkedin.com/in/sameehamubeen/"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2"
            >
            <FaLinkedin className="text-3xl sm:text-4xl text-gray-800 hover:text-emerald-800 transition duration-300" />
            </a>
            <div className="relative h-6 sm:h-10 border-l-2 border-gray-300"></div>
            <a
            href="https://github.com/MSameeha"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2"
            >
            <FaGithub className="text-3xl sm:text-4xl text-gray-800 hover:text-emerald-800 transition duration-300" />
            </a>
            <div className="relative h-6 sm:h-10 border-l-2 border-gray-300"></div>
            <a
            href="tel:+918688669479" 
            className="py-2"
            >
            <FaPhone className="text-9xl px-1 sm:text-4xl text-gray-800 hover:text-emerald-800 transition duration-300" />
            </a>
        </div>
    </div>
    );
}