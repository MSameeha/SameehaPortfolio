"use client";

import { Montserrat } from "@next/font/google";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; 

const montserrat = Montserrat({ 
    subsets: ["latin"], 
    weight: "variable" 
});

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    };

    return (
        <div className={montserrat.className}>
            <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
                <div className="hidden lg:flex justify-end space-x-12 pr-16 pt-6 p-6">
                    <a href="#about" className="cursor-pointer hover:text-emerald-800 font-semibold">
                        About
                    </a>
                    <a href="#certifications" className="cursor-pointer hover:text-emerald-800 font-semibold">
                        Certifications
                    </a>
                    <a href="#experience" className="cursor-pointer hover:text-emerald-800 font-semibold">
                        Experience
                    </a>
                    <a href="#contact" className="cursor-pointer hover:text-emerald-800 font-semibold">
                        Contact Me
                    </a>
                    <a href="/resume.pdf" target="_blank" className="cursor-pointer hover:text-emerald-800 font-semibold">
                        Resume
                    </a>
                </div>

                <div className="flex justify-between items-center lg:hidden p-4">
                    <span className="font-semibold text-lg text-emerald-800">
                        SM
                    </span>
                    <button 
                        onClick={toggleMenu} 
                        className="text-emerald-800 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="flex flex-col space-y-4 items-end pr-8 pb-4 bg-white shadow-md lg:hidden">
                        <a 
                            href="#about" 
                            className="cursor-pointer hover:text-emerald-800 font-semibold"
                            onClick={() => setIsMenuOpen(false)} // Close menu on click
                        >
                            About
                        </a>
                        <a 
                            href="#certifications" 
                            className="cursor-pointer hover:text-emerald-800 font-semibold"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Certifications
                        </a>
                        <a 
                            href="#experience" 
                            className="cursor-pointer hover:text-emerald-800 font-semibold"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Experience
                        </a>
                        <a 
                            href="#contact" 
                            className="cursor-pointer hover:text-emerald-800 font-semibold"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact Me
                        </a>
                        <a 
                            href="/resume.pdf" 
                            target="_blank" 
                            className="cursor-pointer hover:text-emerald-800 font-semibold"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Resume
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
