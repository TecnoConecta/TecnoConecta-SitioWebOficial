import React, { useState } from "react";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="relative mt-4 overflow-hidden carousel" data-aos="flip-up">
      <div className="flex p-10 transition-all duration-500 ease-in-out carousel-inner snap-x ">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item relative animate-fade-down animate-once animate-duration-[2000ms] animate-delay-[50ms] animate-ease-in-out ${
              currentIndex === index ? "block" : "hidden"
            }`}
          >
            <img
              src={item.image || "Cargando..."}
              alt={item.title || "Servicios de TecnoConecta"}
              title={item.title || "Servicios de TecnoConecta"}
              className="carousel-image rounded-md w-auto h-auto object-fit md:w-[850px] md:h-[400px] lg:h-[480px] text-black cursor-pointer text-center"
            />
          </div>
        ))}
      </div>
      <button
        id="prev"
        role="button"
        aria-label="Anterior Imagen"
        aria-labelledby="Anterior Imagen"
        className="carousel-control ml-1 text-[#006068] prev absolute top-1/2 left-0 transform-all -translate-y-1/2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#006068]"
        onClick={handlePrev}
      >
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          stroke="#ffffff"
          fill="none"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 6h-6a1 1 0 0 0 -.78 .375l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78 .375h6l.112 -.006a1 1 0 0 0 .669 -1.619l-3.501 -4.375l3.5 -4.375a1 1 0 0 0 -.78 -1.625z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button
        id="next"
        role="button"
        aria-label="Siguiente Imagen"
        aria-labelledby="Siguiente Imagen"
        className="carousel-control mr-1 text-[#006068] next absolute top-1/2 right-0 transform-all -translate-y-1/2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#006068]"
        onClick={handleNext}
      >
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          stroke="#ffffff"
          fill="none"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
