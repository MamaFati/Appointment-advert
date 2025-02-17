import "react";
import backgroundImage from "../assets/13313271_v870-tang-36.jpg";

const OurServices = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-12 md:py-20"
      style={{
        backgroundImage: `  url(${backgroundImage})`,
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-wide text-[#36a8eb]">
            Our Services
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-gray-500">
            At{" "}
            <span className="font-bold text-[#36a8eb]">
              New Crystal Health Services
            </span>
            , we are dedicated to providing exceptional healthcare through a
            wide range of services tailored to your needs. Explore our offerings
            below.
          </p>
        </div>

        {/* Service Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 md:mb-16">
          {[
            {
              title: "General Consultation",
              content:
                "Comprehensive health assessments and personalized treatment plans by experienced physicians.",
              icon: "🩺",
              bgColor: "bg-[#36a8eb]",
            },
            {
              title: "Specialized Treatments",
              content:
                "Advanced care in cardiology, orthopedics, neurology, and more.",
              icon: "💉",
              bgColor: "bg-[#ff6b6b]",
            },
            {
              title: "Diagnostic & Imaging",
              content:
                "Cutting-edge technology for accurate and timely diagnoses.",
              icon: "📷",
              bgColor: "bg-[#4ecdc4]",
            },
            {
              title: "Wellness Programs",
              content:
                "Holistic programs to promote long-term health and prevent illnesses.",
              icon: "🏋️‍♂️",
              bgColor: "bg-[#f9c74f]",
            },
            {
              title: "Emergency Care",
              content:
                "24/7 emergency services with a team of skilled professionals.",
              icon: "🚑",
              bgColor: "bg-[#ff7f50]",
            },
            {
              title: "Telemedicine",
              content:
                "Virtual consultations and remote monitoring for convenient care.",
              icon: "📱",
              bgColor: "bg-[#9a8c98]",
            },
          ].map(({ title, content, icon, bgColor }, index) => (
            <div
              key={index}
              className={`${bgColor} p-6 sm:p-8 rounded-2xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-3xl`}
            >
              <div className="text-3xl sm:text-4xl mb-4">{icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-gray-100">{content}</p>
            </div>
          ))}
        </div>

        {/* Detailed Services Section */}
        <div className="bg-white bg-opacity-10 p-6 sm:p-8 md:p-12 rounded-2xl backdrop-blur-md mb-12 md:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#36a8eb] mb-6 text-center">
            Detailed Services
          </h3>
          <div className="space-y-6">
            {[
              {
                title: "Preventive Care",
                description:
                  "Regular check-ups, vaccinations, and screenings to detect and prevent health issues early.",
                benefits: [
                  "Early detection of diseases",
                  "Personalized health plans",
                  "Lifestyle counseling",
                ],
              },
              {
                title: "Chronic Disease Management",
                description:
                  "Comprehensive care for conditions like diabetes, hypertension, and asthma.",
                benefits: [
                  "Personalized treatment plans",
                  "Regular monitoring",
                  "Support for lifestyle changes",
                ],
              },
              {
                title: "Surgical Services",
                description:
                  "Advanced surgical procedures performed by experienced surgeons.",
                benefits: [
                  "Minimally invasive techniques",
                  "State-of-the-art operating rooms",
                  "Post-surgical rehabilitation",
                ],
              },
              {
                title: "Mental Health Services",
                description:
                  "Counseling and therapy for mental health conditions like anxiety, depression, and stress.",
                benefits: [
                  "Licensed therapists",
                  "Confidential sessions",
                  "Holistic approaches",
                ],
              },
            ].map(({ title, description, benefits }, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-20 p-6 sm:p-8 rounded-2xl"
              >
                <h4 className="text-xl sm:text-2xl font-bold text-[#36a8eb] mb-4">
                  {title}
                </h4>
                <p className="text-sm sm:text-base text-gray-900 mb-4">
                  {description}
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-800">
                  {benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
