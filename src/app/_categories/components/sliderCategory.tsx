"use client";
import { useState } from "react";
import { sliderIcons } from "@/consts";
import Image from "next/image";
import { SlidesType } from "@/types";
import SlidesDisplay from "./SlidesDisplay";
const SliderCategory = ({ slides }: SlidesType) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <SlidesDisplay slides={slides} currentIndex={currentIndex} />
      {/* <div className="overflow-hidden w-full flex items-center justify-center p-4">
        {slides[currentIndex]}
      </div> */}
      <div className="flex justify-between mt-4">
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2">
          <Image
            src={sliderIcons.leftSlider}
            alt="leftArrow"
            onClick={prevSlide}
          ></Image>
        </button>
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
          <Image
            src={sliderIcons.rightSlider}
            alt="rightArrow"
            onClick={nextSlide}
          ></Image>
        </button>
      </div>
    </div>
  );
};

export default SliderCategory;
