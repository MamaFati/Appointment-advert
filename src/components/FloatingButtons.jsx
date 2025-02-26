import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FloatingButtons = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  // Toggle arrow based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY + window.innerHeight >=
        document.body.scrollHeight - 20
      ) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll Function
  const handleScroll = () => {
    if (showScrollUp) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center gap-4 z-50">
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/+555940407"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Scroll Up/Down Button */}
      <button
        onClick={handleScroll}
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all"
      >
        {showScrollUp ? <FaChevronUp size={24} /> : <FaChevronDown size={24} />}
      </button>
    </div>
  );
};

export default FloatingButtons;
