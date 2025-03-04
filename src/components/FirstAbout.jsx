import { useEffect, useState } from "react";
import FirstAboutUI from "../UI/FirstAboutUi";

const FirstAbout = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative z-10 px-4 md:px-8 mx-auto">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 mt-7 lg:-mt-32 items-stretch justify-center 
    transition-all duration-700 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
      >
        <FirstAboutUI
          title="We Operate 24/7"
          text={
            <>
              <p>
                Mon - Wed <strong>6:00 AM - 6:00 PM</strong>
              </p>
              <p>
                Thursday <strong>6:00 AM - 6:00 PM</strong>
              </p>
              <p>
                Friday <strong>6:00 AM - 6:00 PM</strong>
              </p>
              <p>
                Sat - Sun <strong>6:00 AM - 6:00 PM</strong>
              </p>
            </>
          }
          className="bg-[#36a8eb] text-white  lg:rounded-l-2xl lg:rounded-r-xs  min-h-full p-6 break-words leading-relaxed"
        />
        <FirstAboutUI
          title="Medical Services"
          text={
            <>
              <p>From general consultations </p>
              <p>to advanced surgical procedures,</p>
              <p>we deliver expert medical care</p>
              <p> tailored to your needs.</p>
            </>
          }
          className="bg-[#088edd] text-white min-h-[180px] lg:rounded-none py-6 break-words leading-relaxed"
        />
        <FirstAboutUI
          title="Appointments"
          text={
            <>
              <p>Scheduling your appointment </p>
              <p>is quick and easy.</p>
              <p>Let us help you take </p>
              <p>charge of your health today.</p>{" "}
            </>
          }
          className="bg-[#1077cc] text-white min-h-[180px] lg:rounded-none py-2 break-words leading-relaxed flex flex-col justify-between"
          btn={
            <button className="text-white border-2 rounded-md border-white px-4 py-2 hover:bg-white hover:text-[#1077cc] transition-all duration-300">
              Make an Appointment
            </button>
          }
        />
        <FirstAboutUI
          title="Emergency Cases "
          text={
            <>
              <p>Our emergency team is available 24/7,</p>
              <p>ensuring immediate and effective medical</p>
              <p> attention when you need it the most.</p>
            </>
          }
          className="bg-[#1063af] text-white min-h-[180px] lg:rounded-r-2xl lg:rounded-l-xs  px-4 py-6 break-words leading-relaxed"
        />
      </div>
    </section>
  );
};

export default FirstAbout;
