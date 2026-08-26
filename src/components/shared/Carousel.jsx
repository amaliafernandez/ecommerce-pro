import { useState } from "react";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full bg-bg max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg aspect-video group">
      {/* Contenedor de Slides */}
      <div 
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full shrink-0 relative">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover"
            />
            {/* Capa de texto decorativa */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-bold md:text-4xl">{slide.title}</h3>
              <p className="text-sm md:text-base text-gray-200 mt-2">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botón Anterior */}
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 focus:outline-none"
      >
        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Botón Siguiente */}
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 focus:outline-none"
      >
        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Indicadores Inferiores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${current === index ? "w-8 bg-white" : "w-2.5 bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;