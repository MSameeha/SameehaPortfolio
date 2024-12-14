import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({ 
    subsets: ['latin'], 
    weight: 'variable' 
});

export default function Navbar() {
    return (
        // Will add a logo on the left side later if needed - can do an initial, image, or avatar
        <div className={montserrat.className}>
        <div className="fixed top-0 left-0 right-0 flex justify-end space-x-12 pr-16 pt-6 p-6 bg-white shadow-md z-50">
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
        </div>
    );
}
