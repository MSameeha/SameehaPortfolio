"use client";
import { Montserrat } from '@next/font/google';
import { useState } from 'react';

const montserrat = Montserrat({ 
    subsets: ['latin'], 
    weight: 'variable' 
});

export default function About() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section id="about" className="relative flex flex-col lg:flex-row lg:gap-16 justify-between px-8 lg:px-64 py-20 bg-emerald-800 text-white">
        
            <div className={`${montserrat.className} lg:w-2/3`}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    About
                </h2>
                <p className="text-lg leading-relaxed">
                    I am Sameeha, a passionate ServiceNow Developer and Full Stack Engineer with experience in building scalable web applications, backend systems, and cloud-based solutions. 
                    I am proficient with modern technologies like AWS, Node.js, PostgreSQL, React.js and the ServiceNow platform to create efficient and high-performance solutions.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                    In my current role, I focus on enhancing CRM(Customer relationship management) and CPQ(Configure, Price, Quote) solutions, delivering optimizations, and ensuring smooth project implementations. With a strong background in Computer Science fundamentals, 
                    I am always looking for opportunities to learn new technologies and expand my skills in the backend and full stack development areas.
                </p>
            </div>

            <div
    className={`relative lg:w-1/3 mt-10 lg:mt-0 bg-white text-emerald-800 rounded-lg shadow-lg p-6 transform transition-transform duration-300 ease-in-out ${
        isHovered ? 'translate-y-2 scale-105' : ''
    } 
    sm:w-full md:w-2/3 lg:w-1/3`} // Added responsive width for small and medium devices
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
>
    <h3 className="text-xl font-bold text-center md:text-left">TL;DR - Quick Overview</h3>  {/* Center text for small screens */}
    <ul className="space-y-3 py-2">
        <li>
            <span className="font-semibold">Who I Am:</span> ServiceNow Developer and Full Stack Engineer with a knack for building efficient, scalable solutions.
        </li>
        <li>
            <span className="font-semibold">Worked On:</span> ServiceNow (CSA, CAD, & CIS - ITSM Certified), AWS (Lambda, DynamoDB, Cognito), Node.js, PostgreSQL, React, Spring Boot.
        </li>
        <li>
            <span className="font-semibold">What Drives Me:</span> Solving complex problems, learning new technologies, and adapting to dynamic roles.
        </li>
        <li>
            <span className="font-semibold">Looking For:</span> Software Engineer or ServiceNow Developer roles where I can grow and contribute.
        </li>
    </ul>
</div>

        </section>
    );
}