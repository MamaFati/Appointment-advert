import CarouselComponent from "./components/Carousel";
import NavBar from "./components/ Header";
import FirstAbout from "./components/FirstAbout";
import ServiceComponent from "./components/ServiceComponent";
import OtherServices from "./components/OtherServices";
import ServicesUi from "./UI/ServicesUi";
import servicesImage from "./assets/website_700x700_service.png";
import AboutUs from "./components/AboutUs";
// import PhilosophySection from "./components/ PhilosophySection";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";
import TestimonialCarousel from "./components/TestimonialSection";
function App() {
  return (
    <>
      <body>
        <NavBar />
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
          className="flex flex-col-reverse items-center w-full gap-8 lg:flex-row-reverse"
          ImgClass="w-[80%]"
          textClass="lg:w-[50%] lg:ml-40"
        />
        <AboutUs />
        {/* <PhilosophySection /> */}
        <TestimonialCarousel />
        <NewsSection />
        <Footer />
      </body>
    </>
  );
}

export default App;
