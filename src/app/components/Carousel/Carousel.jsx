"use client";

import { useState, useEffect } from "react";
import Image from 'next/image'
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import Dots from './Dots';

export function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [fullscreenSrc, setFullscreenSrc] = useState(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  
  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, [isHovering, images.length]);

  return (
    <div className="flex flex-row">
      <LeftArrow prevSlide={prevSlide}/>
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden m-20" 
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}>
        <div className="flex flex-col">
          <div
            className="flex transition-transform duration-500 w-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((src, index) => (
                <div
                key={index}
                className="min-w-full flex items-center justify-center"
                onClick={() => setFullscreenSrc(src)}
                >
                  <div className="relative aspect-square w-full max-w-[500px] overflow-hidden">
                  <Image
                    src={src}
                    alt={`Slide ${index}`}
                    fill
                    className="object-cover cursor-pointer"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                    />
                  </div>
                </div>
              ))}
          </div>     
          {/* Dots */}
          <Dots images={images} goToSlide={goToSlide} currentIndex={currentIndex}/>
        </div>
      </div>

      <RightArrow nextSlide={nextSlide}/>
      {fullscreenSrc && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setFullscreenSrc(null)}
        > 
          <div className="relative h-[60vh] w-[90vw]">
            <Image
              src={fullscreenSrc}
              alt="Fullscreen"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 60vh, 100vw"
              quality={100}
            />
          </div>
        </div>
      )}
    </div>
  );
}
