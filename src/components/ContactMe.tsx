import { Montserrat } from '@next/font/google';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa6";

const montserrat = Montserrat({ 
    subsets: ['latin'], 
    weight: 'variable' 
});

export default function ContactMe() {
    return (
        <section id="contact" className="flex justify-center items-center py-20">
            <div className={montserrat.className}>
                <div className="flex mx-auto px-64 py-20">
                    <div className="mb-8 md:mb-0 md:mr-10 w-full md:w-1/3">
                        <h3 className="text-2xl font-semibold mb-4">Get in touch with me!</h3>
                        <div className="flex">
                            <div className="transform -translate-x-1/2 h-20 border-l-2 border-gray-300"></div>
                            <a href="https://www.linkedin.com/in/sameehamubeen/" target="_blank" rel="noopener noreferrer" className='mt-24 -mx-4'>
                                <FaLinkedin className="text-3xl text-gray-800 hover:text-emerald-800 transition duration-300" />
                            </a>
                            <a href="https://www.linkedin.com/in/sameehamubeen/" target="_blank" rel="noopener noreferrer" className='mt-24 mx-7 text-xl py-1 hover:text-emerald-800 font-medium'>LinkedIn</a>
                        </div>
                        <div className="flex">
                            <div className="transform -translate-x-1/2 h-20 border-l-2 border-gray-300 mt-2"></div>
                            <a href="https://github.com/MSameeha" target="_blank" rel="noopener noreferrer" className='mt-24 -mx-4'>
                                <FaGithub className="text-3xl text-gray-800 hover:text-emerald-800 transition duration-300" />
                            </a>
                            <a href="https://github.com/MSameeha" target="_blank" rel="noopener noreferrer" className='mt-24 mx-7 text-xl py-1 hover:text-emerald-800 font-medium'>Github</a>
                        </div>
                        <div className="flex">
                            <div className="transform -translate-x-1/2 h-20 border-l-2 border-gray-300 mt-2"></div>
                            <a href="tel:+918688669479" className='mt-24 -mx-4'>
                                <FaPhone className="text-3xl text-gray-800 hover:text-emerald-800 transition duration-300" />
                            </a>
                            <a href="tel:+918688669479" className='mt-24 mx-7 text-xl py-1 hover:text-emerald-800 font-medium'>Phone</a>
                        </div>
                    </div>
                    
                    <div className="p-8 max-w-screen-sm bg-emerald-800 rounded-lg shadow-lg text-white">
                        <h3 className="text-2xl font-semibold mb-4">You can contact me!</h3>
                        <h4 className="text-xl font-semibold mt-6">Looking for Exciting Opportunities in Toronto:</h4>
                        <p className="mt-2">I'm currently seeking new and exciting job opportunities in Toronto, particularly in the fields of software development and full-stack solutions. If you're hiring or know of any opportunities, I'd love to connect!</p>

                        <p className="text-lg font-medium mt-2">Email: <a href="mailto:sameehamubeen81@gmail.com" className="text-emerald-200 hover:text-emerald-400">sameehamubeen81@gmail.com</a></p>
                        <p className="mt-4">Alternatively, you can connect with me on LinkedIn or give me a call. Find the links handy on the left icons!</p>
                        <p className="mt-4">Thank you for checking out my profile! I'm always looking forward to connecting with like-minded individuals and exploring new ventures.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
