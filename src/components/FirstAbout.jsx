import { useEffect, useState } from "react";
import FirstAboutUI from "../UI/FirstAboutUi";

const FirstAbout = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative z-10 px-4 md:px-8 mx-auto w-[90%]">
      <div
        className={`grid grid-cols-1 mt-7 lg:-mt-32 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch 
        transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <FirstAboutUI
          title="About Us"
          text="We are dedicated to providing compassionate healthcare with a focus on excellence, innovation, and patient satisfaction."
          className="bg-[#36a8eb] text-white min-h-[180px] px-4 py-6 break-words leading-relaxed"
        />
        <FirstAboutUI
          title="Medical Services"
          text="From general consultations to advanced surgical procedures, we deliver expert  medical care tailored to your needs."
          className="bg-[#088edd] text-white min-h-[180px]  py-6 break-words leading-relaxed"
        />
        <FirstAboutUI
          title="Appointments"
          text="Scheduling your appointment is quick and easy. Let us help you take charge of your health today."
          className="bg-[#1077cc] text-white min-h-[180px] py-6 break-words leading-relaxed flex flex-col justify-between"
          btn={
            <button className="text-white border-2 rounded-md border-white px-4 py-2 hover:bg-white hover:text-[#1077cc] transition-all duration-300">
              Make an Appointment
            </button>
          }
        />
        <FirstAboutUI
          title="Emergency Cases +233 544 347 239"
          text="Our emergency team is available 24/7, ensuring immediate and effective medical attention when you need it the most."
          className="bg-[#1063af] text-white min-h-[180px] px-4 py-6 break-words leading-relaxed"
        />
      </div>
    </section>
  );
};

export default FirstAbout;
