import "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import person1 from "../assets/avatar.png";
import person2 from "../assets/AvatarMaker (1).png";
import person3 from "../assets/AvatarMaker.png";
import person4 from "../assets/avatar.png";

const testimonials = [
  {
    name: "John Doe",
    role: "Patient",
    image: person1,
    quote:
      "The care I received at New Crystal Hospital was exceptional. The staff was kind, professional, and attentive to my needs.",
  },
  {
    name: "Jane Smith",
    role: "Patient's Family",
    image: person2,
    quote:
      "I am so grateful for the support and care provided by the hospital. They made a difficult time much easier for our family.",
  },
  {
    name: "Michael Johnson",
    role: "Patient",
    image: person3,
    quote:
      "The doctors and nurses went above and beyond to ensure my recovery. I highly recommend this hospital.",
  },
  {
    name: "Sarah Williams",
    role: "Patient",
    image: person4,
    quote:
      "The facilities are top-notch, and the staff is incredibly knowledgeable. I felt well taken care of throughout my stay.",
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
    <div className="m-auto py-10 px-5 bg-[#f8f9fb] w-full">
      <div className="text-center w-[50%] m-auto">
        <h2 className="text-3xl font-bold mb-5">What Our Patients Say</h2>
        <p className="text-primary text-lg">
          Hear from our patients about their experiences at New Crystal
          Hospital. We are committed to providing exceptional care and support.
        </p>
      </div>
      <div className="w-[80%] m-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 container">
              <div className="bg-white shadow-lg rounded-lg p-6 w-[470px] text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover m-auto mb-4 border-2 border-primary"
                />
                <h5 className="text-lg font-semibold">{testimonial.name}</h5>
                <p className="text-sm text-gray-500 mb-3">{testimonial.role}</p>
                <div className="p-4">
                  <p className="text-gray-700 italic">{testimonial.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSection;
