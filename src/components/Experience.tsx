import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: 'variable',
});

export default function Experience() {
  return (
    <section id="experience" className="bg-emerald-800 text-white py-20">
  <div className={`${montserrat.className} max-w-screen-xl mx-auto relative`}>
    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12">
      Experience
    </h2>

    <div className="hidden md:flex w-full h-px bg-gray-400 transform translate-y-14 z-0"></div>

    <div className="flex flex-col md:flex-row flex-wrap justify-center lg:justify-between items-center relative z-10 space-y-8 lg:space-y-0 lg:space-x-12">
      
      <div className="relative bg-white text-emerald-800 p-6 rounded-lg shadow-xl w-64 transition-transform transform hover:scale-105 hover:shadow-2xl">
        <h3 className="text-xl font-semibold text-emerald-800">ServiceNow</h3>
        <p className="text-md text-gray-700">Software Engineer</p>
        <p className="text-sm text-gray-500">Aug 2023 - Present</p>
      </div>

      <div className="relative bg-white text-emerald-800 p-6 rounded-lg shadow-xl max-w-72 transition-transform transform hover:scale-105 hover:shadow-2xl">
        <h3 className="text-xl font-semibold text-emerald-800">Techsophy</h3>
        <p className="text-md text-gray-700">Software Engineer Trainee</p>
        <p className="text-sm text-gray-500">Feb 2023 - Jun 2023</p>
      </div>

      <div className="relative bg-white text-emerald-800 p-6 rounded-lg shadow-xl w-64 transition-transform transform hover:scale-105 hover:shadow-2xl">
        <h3 className="text-xl font-semibold text-emerald-800">TextHappen</h3>
        <p className="text-md text-gray-700">Technical Content Creator</p>
        <p className="text-sm text-gray-500">Sept 2021 - Jan 2022</p>
      </div>

      <div className="relative bg-white text-emerald-800 p-6 rounded-lg shadow-xl w-64 transition-transform transform hover:scale-105 hover:shadow-2xl">
        <h3 className="text-xl font-semibold text-emerald-800">SmartKnower</h3>
        <p className="text-md text-gray-700">Web Developer Trainee</p>
        <p className="text-sm text-gray-500">Feb 2021 - Mar 2021</p>
      </div>
    </div>
  </div>
</section>

  );
}
