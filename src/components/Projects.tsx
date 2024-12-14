import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({ 
    subsets: ['latin'], 
    weight: 'variable' 
});

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col justify-center px-64 py-40">
            <div className={montserrat.className}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Projects
                </h2>
                <p className="text-lg leading-relaxed">
                    I am Sameeha, a passionate ServiceNow Developer and Full Stack Developer with experience in building scalable web applications, backend systems, and cloud-based solutions. 
                    I enjoy working with modern technologies like AWS, Node.js, PostgreSQL, and the ServiceNow platform to create efficient and high-performance solutions.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                    In my current role, I focus on enhancing CRM and CPQ solutions, delivering optimizations, and ensuring smooth project implementations. With a strong background in AWS tools, 
                    I am always looking for opportunities to learn new technologies and expand my skills in the backend and full stack development areas.
                </p>
            </div>
        </section>
    );
}
