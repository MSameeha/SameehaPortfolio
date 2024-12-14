"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { StaticImageData } from "next/image";
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({ 
    subsets: ['latin'], 
    weight: 'variable' 
});
export default function Certifications({
  autoSlide = true,
  autoSlideInterval = 8000,
  slides,
}: {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  slides: StaticImageData[];
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <section id="certifications">
      <div className={montserrat.className}>
        <div className="flex flex-col justify-center px-64 mt-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Certifications</h2>
        </div>
      <div className="overflow-hidden relative max-w-4xl mx-auto mt-8 bg-emerald-700 p-4 rounded-lg shadow-lg border border-gray-700">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="relative w-full h-64 flex-shrink-0">
              <Image src={slide} alt={`Slide ${i}`} fill objectFit="contain" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <ChevronLeft size={24} /> 
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <ChevronRight size={24} /> 
          </button>
        </div>

        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`transition-all w-2 h-2 bg-white rounded-full ${
                  curr === i ? "p-2" : "bg-opacity-50"
                }`}
              /> 
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
