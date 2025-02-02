import { ReactNode } from "react";

const SlidesDisplay = ({
  slides,
  currentIndex,
}: {
  slides: ReactNode[];
  currentIndex: number;
}) => {
  return (
    <>
      <div className="flex justify-center space-x-2 mb-2">
        {slides.map((_: unknown, index: number) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
      <div className="overflow-hidden w-full flex items-center justify-center p-4">
        {slides[currentIndex]}
      </div>
    </>
  );
};

export default SlidesDisplay;
