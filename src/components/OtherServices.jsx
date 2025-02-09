import "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    title: "DIETETIC SERVICES",
    description:
      "At New Crystal Hospital, our Dietetic Services are dedicated to promoting health...",
    icon: "💊",
  },
  {
    title: "DENTAL SERVICE",
    description:
      "At New Crystal Hospital, our dental services are designed to provide comprehens...",
    icon: "🦷",
  },
  {
    title: "AMBULANCE SERVICE",
    description:
      "At New Crystal Hospital, we prioritize your safety and well-being with our relia...",
    icon: "🚑",
  },
  {
    title: "FAMILY PRACTICE HEALTH CENTRE",
    description:
      "At New Crystal Hospital, our Family Planning Services are designed to support in...",
    icon: "🏥",
  },
  {
    title: "PHYSIOTHERAPY",
    description:
      "Our physiotherapy services help patients recover from injuries and improve mobility...",
    icon: "🏋️",
  },
  {
    title: "PEDIATRIC CARE",
    description:
      "We provide specialized care for children, ensuring their health and well-being...",
    icon: "👶",
  },
  {
    title: "ONCOLOGY",
    description:
      "Our oncology department offers comprehensive cancer care, including diagnosis and treatment...",
    icon: "🩺",
  },
  {
    title: "CARDIOLOGY",
    description:
      "Our cardiology services include advanced diagnostics and treatment for heart conditions...",
    icon: "❤️",
  },
];

const OtherServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-50 py-10 ">
      <div className="w-[50%] m-auto my-5">
        <h2 className="text-4xl font-bold text-gray-800 text-center">
          Comprehensive Healthcare Services
        </h2>
        <p className="text-primary m-2  text-center">
          Discover our range of specialized healthcare services designed to meet
          your medical needs. We are committed to providing high-quality care
          with advanced medical technologies.
        </p>
      </div>
      <div className="container w-[80%] mx-auto px-4">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300 mx-2"
            >
              <div className="text-4xl text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-gray-800">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {service.description}
              </p>
              <button className="mt-4 text-blue-500 font-semibold hover:underline">
                READ MORE
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OtherServices;
