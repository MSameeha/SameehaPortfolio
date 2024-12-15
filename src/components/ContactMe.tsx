import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa6";


export default function ContactMe() {
    return (
        <section id="contact" className="flex justify-center items-center py-16 md:py-20">
            <div className="flex flex-col md:flex-row mx-auto px-6 md:px-64 py-0 md:py-20">
                    <div className="mb-8 md:mb-0 md:mr-10 w-full md:w-1/3">
                        <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">Get in touch with me!</h3>
                        <div className="flex justify-center md:justify-normal">
                            <div className="transform -translate-x-1/2 h-2 md:h-20 border-l-2 border-gray-300 hidden md:block"></div>
                            <a href="https://www.linkedin.com/in/sameehamubeen/" target="_blank" rel="noopener noreferrer" className='mt-10 md:mt-24 -mx-4'>
                                <FaLinkedin className="text-3xl text-gray-800 hover:text-emerald-800 transition duration-300" />
                            </a>
                            <a href="https://www.linkedin.com/in/sameehamubeen/" target="_blank" rel="noopener noreferrer" className='mt-10 md:mt-24 md:mb-2 mx-7 text-xl py-1 hover:text-emerald-800 font-medium'>LinkedIn</a>
                        </div>

                        <div className="flex justify-center md:justify-normal">
                            <div className="transform -translate-x-1/2 h-2 md:h-20 border-l-2 border-gray-300 hidden md:block"></div>
                            <a href="https://github.com/MSameeha" target="_blank" rel="noopener noreferrer" className='mt-10 md:mt-28 -mx-4'>
                                <FaGithub className="text-3xl text-gray-800 hover:text-emerald-800 transition duration-300" />
                            </a>
                            <a href="https://github.com/MSameeha" target="_blank" rel="noopener noreferrer" className='mt-10 md:mt-28 mx-7 text-xl py-1 hover:text-emerald-800 font-medium'>Github</a>
                        </div>

                        <div className="flex justify-center md:justify-normal items-center">
                            <div className="transform -translate-x-1/2 md:h-20 border-l-2 border-gray-300 hidden md:block"></div>
                            <a href="tel:+918688669479" className='mt-10 md:mt-24 -mx-4'>
                                <FaPhone className="text-3xl md:mt-6 text-gray-800 hover:text-emerald-800 transition duration-300" />
                            </a>
                            <a href="tel:+918688669479" className='mt-10 md:mt-32 mx-7 text-xl hover:text-emerald-800 font-medium'>Phone</a>
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
        </section>
    );
}