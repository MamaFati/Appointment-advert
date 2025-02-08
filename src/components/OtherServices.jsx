// import "react";
// export default OtherServices;
import "react";

const services = [
  {
    title: "DIETETIC SERVICES",
    description:
      "At New Crystal Hospital, our Dietetic Services are dedicated to promoting health...",
    icon: "💊", // Replace with an SVG or an appropriate icon
  },
  {
    title: "DENTAL SERVICE",
    description:
      "At New Crystal Hospital, our dental services are designed to provide comprehens...",
    icon: "🦷", // Replace with an SVG or an appropriate icon
  },
  {
    title: "AMBULANCE SERVICE",
    description:
      "At New Crystal Hospital, we prioritize your safety and well-being with our relia...",
    icon: "🚑", // Replace with an SVG or an appropriate icon
  },
  {
    title: "FAMILY PRACTICE HEALTH CENTRE",
    description:
      "At New Crystal Hospital, our Family Planning Services are designed to support in...",
    icon: "🏥", // Replace with an SVG or an appropriate icon
  },
];

const OtherServices = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
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
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
