import { Link } from "react-router-dom";

const DentalService = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Dietetic Services
      </h1>
      <img
        src="https://via.placeholder.com/600x300"
        alt="Dietetic Services"
        className="w-full h-60 object-cover rounded-lg mb-4"
      />
      <p className="text-lg text-gray-700">
        At New Crystal Hospital, our Dietetic Services are dedicated to
        promoting health and well-being through personalized nutrition plans.
      </p>
      <Link to="/" className="text-blue-500 hover:underline mt-4 block">
        Go Back
      </Link>
    </div>
  );
};

export default DentalService;
