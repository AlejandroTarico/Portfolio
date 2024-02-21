import React, { useEffect, useState } from 'react';

function Carrusel ({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 4000);
    
        // Limpia el intervalo al desmontar el componente
        return () => clearInterval(intervalId);
      }, [images.length]);
  
    return (
        <div className="relative w-full overflow-hidden rounded-xl shadow-slate-400 shadow-lg ">
            <div className="flex transition-transform duration-500 ease-in " style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                    <img src={image} alt={`Slide ${index}`} className="w-full"/>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Carrusel;