import "react";
import DoctorImg from "../assets/homepage_about.png";

const AboutUs = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 w-full lg:w-[90%] flex flex-col-reverse md:flex-row items-center">
        <div className="  lg:w-1/2 flex justify-center mb-6 md:mb-0">
          <img src={DoctorImg} alt="Doctor" className="w-full lg:max-w-full" />
        </div>

        <div className="  lg:w-1/2 bg-blue-500 p-6 text-white text-left">
          <h5 className="text-blue-500 font-semibold uppercase text-sm mb-2">
            Learn More About Us
          </h5>
          <h2 className="text-4xl text-white font-bold  mb-4">Who We Are</h2>
          <p className="text-white mb-4">
            New Crystal Health Services Limited is a leading and one of Ghana
            fastest-growing private healthcare service providers.
          </p>
          <p className="text-white mb-4">
            rounded-lg shadow-lg At New Crystal, we are committed to meeting the
            ever-changing needs of our communities by constantly monitoring the
            environmental and social landscape to identify existing and emerging
            healthcare threats that confront our communities.
          </p>
          <p className="text-white mb-4">
            New Crystal Health Services Limited currently operates seven
            networked branches in two regions and has won the prestigious Ghana
            Club 100 on four (4) occasions in 2012, 2014, 2015, and 2019. We go
            a long way in providing high-quality, safe, and effective care to
            our communities.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 border-2 border-white rounded-lg   hover:bg-blue-600 transition duration-200">
            Find Out More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
