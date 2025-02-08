import "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import healthCheck from "../assets/health-check.png";
import cardiology from "../assets/cardiology.png";
import qualityOfLife from "../assets/quality-of-life.png";
import firstAidBox from "../assets/first-aid-box.png";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    service: "Orthotics and Bracing Service",
    image: firstAidBox,
    description:
      "At New Crystal Hospital, we provide specialized orthotic services to enhance mob...",
    read: "READ MORE",
  },
  {
    service: "ENT service",
    image: healthCheck,
    description:
      "Our ENT Centre provides specialized ENT care with comprehensive ENT therapy, com...",
    read: "READ MORE",
  },
  {
    service: "Physiotherapy",
    image: cardiology,
    description:
      "Physiotherapy helps restore movement and function when someone is affected by in...",
    read: "READ MORE",
  },
  {
    service: "Dental Services",
    image: qualityOfLife,
    description:
      "At New Crystal Hospital, our Dietetic Services are dedicated to promoting health...",
    read: "READ MORE",
  },
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className=" m-auto py-10 px-5 bg-[#f8f9fb] w-full">
      <div className="text-center w-[50%] m-auto ">
        <h2 className="text-3xl font-bold mb-5">
          Comprehensive Healthcare Services
        </h2>
        <p className="text-primary text-lg">
          Discover our range of specialized healthcare services designed to meet
          your medical needs. We are committed to providing high-quality care
          with advanced medical technologies.
        </p>
      </div>
      <div className="w-[80%] m-auto">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="p-4  container   ">
              <div className="bg-white shadow-lg rounded-lg p-6 w-[470px] text-center">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-20 h-20 rounded-full bg-[#00afef] text-white   m-auto mb-4 border-0 border-primary p-1"
                />
                <h5 className="text-lg font-semibold">{service.name}</h5>
                <p className="text-sm text-gray-500 mb-3">{service.service}</p>
                <div className=" p-4 ">
                  <p className="text-gray-700">{service.description}</p>
                </div>
                <hr className="my-4 text-gray-500" />
                <a
                  href="#"
                  className="text-primary     hover:text-primary-dark"
                >
                  {service.read}
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSection;
