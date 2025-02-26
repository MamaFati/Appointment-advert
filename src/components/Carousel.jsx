import { useState, useEffect } from "react";
import slide1 from "../assets/slider 2 - NCHS.png";
import slide2 from "../assets/P9.jpg";
import slide3 from "../assets/webbanner1.png";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: slide1,
    // text: "Welcome to the home of quality and affordable health care services.",
  },
  {
    image: slide2,
    // text: "ur deserunt vel animi hic totam autem, corrupti aliquid facere incidunt itaque culpa reiciendis.",
  },
  {
    image: slide3,
    // text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dicta libero ciendis.",
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full mt-16  mx-auto max-w-2xl-hidden ">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={slides[currentIndex].image}
          alt="Slide"
          rounded-2xl
          className=" md:h-dvh lg:h-dvh object-fit-cover  "
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
      <div className="absolute inset-0     bg-transparent flex items-center justify-center">
        <motion.h2
          className="text-grey-800 text-2xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {slides[currentIndex].text}
        </motion.h2>
      </div>
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2   text-[#36a8eb] p-2 rounded-full shadow-lg"
        onClick={prevSlide}
      >
        <div className="absolute inset-0     bg-transparent flex items-center justify-center">
          <motion.h2
            className="text-grey-800 text-2xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {slides[currentIndex].text}
          </motion.h2>
        </div>
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2   text-[#36a8eb] p-2 rounded-full shadow-lg"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
export default Carousel;
