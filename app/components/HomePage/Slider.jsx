import Image from "next/image";
import { useState } from "react";

import Image1 from "../../../public/img10.jpg";
import Image2 from "../../../public/img2.jpg";
import Image3 from "../../../public/img3.jpg";
import Image4 from "../../../public/img4.jpg";

const images = [Image1, Image2, Image3, Image4];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [image, setImage] = useState(images[currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative overflow-hidden rounded-lg">
      <button
        className="absolute inset-y-0 left-0 z-10 flex items-center justify-center w-12 h-12 text-white transition-opacity duration-300 bg-black bg-opacity-25 hover:bg-opacity-50 focus:outline-none"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute inset-y-0 right-0 z-10 flex items-center justify-center w-12 h-12 text-white transition-opacity duration-300 bg-black bg-opacity-25 hover:bg-opacity-50 focus:outline-none"
        onClick={nextSlide}
      >
        &gt;
      </button>
      <div className="flex overflow-hidden max-h-[400px]">
        {images.map((image, i) => {
          return (
            <Image
              key={i}
              src={image}
              alt={`Slide ${currentSlide + 1}`}
              className={`w-full transition-transform duration-500 transform-gpu`}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              width={1300}
              height={300}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
