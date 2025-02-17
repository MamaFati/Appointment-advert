import "react";
import backgroundImage from "../assets/health-still-life-with-copy-space.jpg";

const AboutUs = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-20"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${backgroundImage})`,
      }}
    >
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-6 uppercase tracking-wide text-[#36a8eb]">
          About Us
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-12 leading-relaxed text-gray-200">
          Welcome to{" "}
          <span className="font-bold text-[#36a8eb]">
            New Crystal Health Services
          </span>
          , where we provide top-notch healthcare with compassion, innovation,
          and excellence. Your health is our priority!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card Component */}
          {[
            {
              title: "Who We Are",
              content:
                "We are a dedicated team of professionals providing premium medical care. Our mission is to deliver high-quality treatment tailored to individual needs.",
            },
            {
              title: "Why Choose Us?",
              content: (
                <ul>
                  <li>✔ Expert Medical Staff</li>
                  <li>✔ Cutting-edge Facilities</li>
                  <li>✔ 24/7 Emergency Services</li>
                  <li>✔ Patient-first Approach</li>
                </ul>
              ),
            },
            {
              title: "Our Services",
              content: (
                <ul>
                  <li>🔹 General Consultation</li>
                  <li>🔹 Specialized Treatments</li>
                  <li>🔹 Diagnostic & Imaging Services</li>
                  <li>🔹 Wellness Programs</li>
                </ul>
              ),
            },
            {
              title: "Our Vision",
              content:
                "To be the leading healthcare provider, setting new standards in medical excellence and patient satisfaction.",
            },
            {
              title: "What Our Patients Say",
              content: (
                <p className="italic">
                  "The best healthcare experience I've ever had. Professional
                  and caring staff!"
                </p>
              ),
            },
            {
              title: "Get in Touch",
              content: (
                <>
                  <p>
                    📞 <strong>Call Us:</strong> +233 55 807 5940
                  </p>
                  <p>
                    📧 <strong>Email Us:</strong> support@mail.com
                  </p>
                </>
              ),
            },
          ].map(({ title, content }, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-blur-md transition-transform transform hover:scale-105 hover:bg-opacity-30"
            >
              <h3 className="text-2xl font-bold text-[#36a8eb] mb-4">
                {title}
              </h3>
              <p className="text-gray-700">{content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
