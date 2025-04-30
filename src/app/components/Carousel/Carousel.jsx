"use client";

import { useState, useEffect } from "react";
import Image from 'next/image'

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
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden m-20" 
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}>
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
          {images.map((src, index) => (
            <div
              key={index}
              className="min-w-full flex items-center justify-center"
              onClick={() => setFullscreenSrc(src)}
            >
              <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-lg">
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
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-40 transform -translate-y-1/2 rounded-full p-2"
      >
        <svg className="w-6 h-6 text-black/30" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
            <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z"/>
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-40 transform -translate-y-1/2 rounded-full p-2"
      >
        <svg className="w-6 h-6 text-black/30" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
            <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z"/>
        </svg>
      </button>

      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-gray-600' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
      {fullscreenSrc && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setFullscreenSrc(null)}
        >
          <Image
            src={fullscreenSrc}
            alt="Fullscreen"
            fill
            className="object-contain"
            sizes="100vw"
          />
        </div>
      )}
    </div>
  );
}
