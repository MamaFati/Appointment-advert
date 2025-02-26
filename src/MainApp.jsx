import "react";
import CarouselComponent from "./components/Carousel";
// import NavBar from "./components/ Header.jsx";
import FirstAbout from "./components/FirstAbout";
import ServiceComponent from "./components/ServiceComponent";
import OtherServices from "./components/OtherServices";
import ServicesUi from "./UI/ServicesUi";
import servicesImage from "./assets/P3.jpg";
import AboutUs from "./components/AboutUs";
import NewsSection from "./components/NewsSection";
// import Footer from "./components/Footer";
import TestimonialCarousel from "./components/TestimonialSection";
import FloatingButtons from "./components/FloatingButtons";

const MainApp = () => {
  return (
    <body>
      {/* <NavBar /> */}
      <div className="flex flex-col items-center justify-center">
        <CarouselComponent />
        <FirstAbout />
      </div>
      <ServiceComponent />
      <OtherServices />
      <ServicesUi
        title="Revolutionizing Patient Treatment"
        description1="At New Crystal Hospital, we prioritize the latest advancements and best practices in medical treatment. Our innovative approach ensures that you receive the highest quality care tailored to your unique needs. From cutting-edge technology to personalized treatment plans, we strive to enhance your health and well-being through continuous improvement and compassionate care."
        image={servicesImage}
        className="flex flex-col-reverse items-center w-full m-auto gap-8 lg:flex-row-reverse"
        ImgClass="w-[80%]"
        textClass="lg:w-[50%] w-full lg:ml-40 m-auto"
      />
      <AboutUs />
      <FloatingButtons />
      <TestimonialCarousel />
      <NewsSection />
    </body>
  );
};
export default MainApp;
