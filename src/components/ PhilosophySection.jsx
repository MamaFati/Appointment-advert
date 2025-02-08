import "react";

const PhilosophySection = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h5 className="text-blue-500 font-semibold uppercase text-sm mb-2">
            Our Philosophy
          </h5>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            A Commitment to Exceptional Medical Care
          </h2>
          <ul className="list-disc text-gray-600 pl-6">
            <li className="mb-3">
              We believe in providing the highest quality care with a
              patient-centered approach, ensuring every individuals needs are
              met with compassion and expertise.
            </li>
            <li className="mb-3">
              Our vision is to be the leading healthcare provider, offering
              innovative solutions and advanced treatments to improve the health
              and well-being of our community.
            </li>
            <li>
              We strive for excellence in every aspect of care, from diagnosis
              to treatment, with a commitment to continuous improvement and
              patient satisfaction.
            </li>
          </ul>
        </div>

        {/* Video Section */}
        <div className="lg:w-1/2 flex justify-center relative">
          <img
            src="path-to-your-video-thumbnail.jpg" // Replace with your image path
            alt="Video Thumbnail"
            className="rounded-lg shadow-lg w-full max-w-lg"
          />
          <button
            className="absolute inset-center bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-200"
            aria-label="Play Video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.752 11.168l-3.197-1.999a1 1 0 00-1.555.832v3.998a1 1 0 001.555.832l3.197-2a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhilosophySection;
