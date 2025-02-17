import { useEffect, useState } from "react";
import FirstAboutUI from "../UI/FirstAboutUi";

const FirstAbout = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative z-10 px-4 md:px-4 md:m-auto  ">
      <div
        className={`grid grid-cols-1 mt-7 lg:-mt-32 lg:gap-0  md:grid-cols-2 md:w-[90%] lg:w-[85%] m-auto md:gap-3 lg:grid-cols-4 gap-6 items-stretch justify-center 
        transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <FirstAboutUI
          title="About Us"
          text="Lorem ipsum dolor sit abet consectetur adipisicing edit. Dignissimos dicta libero quasi."
          className="bg-[#36a8eb] text-white"
        />
        <FirstAboutUI
          title="Medical Services"
          text="We offer general care, surgical procedures, inpatient, and outpatient services. Our goal is to deliver professional, ethical, and quality care to all of our clients."
          className="bg-[#088edd] text-white"
        />
        <FirstAboutUI
          title="Appointments"
          text="Feel free to reach out to us. Booking an appointment with your doctor has never been easier."
          className="bg-[#1077cc] text-white"
          btn={
            <button className="text-white border-2 rounded-md border-white px-4 py-2 hover:bg-white hover:text-[#1077cc] transition-all duration-300">
              Make an Appointment
            </button>
            // <BottomUi
            //   text="Make an Appointment"
            //   className="text-white border-2 border-white px-4 py-2 hover:bg-white hover:text-[#1077cc] transition-all duration-300"
            // />
          }
        />
        <FirstAboutUI
          title="Emergency Cases  +233 544 347 239"
          text="The Emergency Department provides care to all age groups, 24 hours a day, 365 days a year."
          className="bg-[#1063af] text-white"
        />
      </div>
    </section>
  );
};

export default FirstAbout;
