import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { TbFileCv } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";


export default function Hero() {
    return (
        <div className='flex'>
            <section className="flex flex-col justify-center px-64 py-80">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Hi, I am  
                        <span className="px-4 text-emerald-800">Sameeha.</span>
                    </h1>
                    <h1 className="text-2xl md:text-3xl py-2 font-semibold mt-2 text-gray-800">
                        Software Engineer | ServiceNow Developer
                    </h1>
                    <div className="flex items-center text-xl mt-3 text-gray-600">
                        <HiOutlineLocationMarker className="text-emerald-800 mr-2" />
                        <span>Toronto, Canada [</span>
                        <span className="text-emerald-800 font-semibold">PR Holder</span>
                        <span>]</span>
                    </div>
                    <a href="/resume.pdf" target="_blank" className="inline-block px-6 py-2 mt-4 text-white bg-emerald-800 rounded-lg shadow hover:bg-emerald-700 transition duration-300">
                        <p className='text-lg'>Check out my Resume!</p>
                    </a>
                </div>
            </section>

            <div>
                <div className='flex flex-col'>
                    <div className="relative mx-44 h-64 border-l-2 border-gray-300"></div>
                    <a href="https://www.linkedin.com/in/sameehamubeen/" target="_blank" rel="noopener noreferrer" className='mx-40 py-2'>
                        <FaLinkedin className="text-4xl text-gray-800 hover:text-emerald-800 transition duration-300" />
                    </a>
                    <div className="relative mx-44 h-10 border-l-2 border-gray-300"></div>
                    <a href="https://github.com/MSameeha" target="_blank" rel="noopener noreferrer" className='mx-40 py-2'>
                        <FaGithub className="text-4xl text-gray-800 hover:text-emerald-800 transition duration-300" />
                    </a>
                    <div className="relative mx-44 h-10 border-l-2 border-gray-300"></div>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className='mx-40 py-2'>
                        <TbFileCv className="text-4xl text-gray-800 hover:text-emerald-800 transition duration-300" />
                    </a>
                </div>
            </div>
        </div>
    );
}