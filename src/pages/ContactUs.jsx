import "react";
import backgroundImage from "../assets/health-still-life-with-copy-space.jpg";

const ContactUs = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-12 mt-16 md:py-20"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url(${backgroundImage})`,
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-wide text-[#36a8eb]">
            Contact Us
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-gray-200">
            We’re here to help! Reach out to us for any inquiries, appointments,
            or feedback. Our team is ready to assist you.
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 md:mb-16">
          {[
            {
              title: "Phone",
              content: "+233 55 807 5940",
              icon: "📞",
              bgColor: "bg-[#36a8eb]",
            },
            {
              title: "Email",
              content: "support@mail.com",
              icon: "📧",
              bgColor: "bg-[#4CAF50]",
            },
            {
              title: "Address",
              content: " Adum, Kumasi, Ghana",
              icon: "📍",
              bgColor: "bg-[#2196F3]",
            },
          ].map(({ title, content, icon, bgColor }, index) => (
            <div
              key={index}
              className={`${bgColor} p-6 sm:p-8 rounded-2xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-3xl`}
            >
              <div className="text-3xl sm:text-4xl mb-4 text-white">{icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-gray-100">{content}</p>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="bg-[#36a8eb] bg-opacity-10 p-6 sm:p-8 md:p-12 rounded-2xl backdrop-blur-md mb-12 md:mb-16 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
            Send Us a Message
          </h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm sm:text-base font-medium text-gray-200"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full p-3 rounded-lg bg-white bg-opacity-20 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#36a8eb]"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-base font-medium text-gray-200"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full p-3 rounded-lg bg-white bg-opacity-20 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#36a8eb]"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm sm:text-base font-medium text-gray-200"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full p-3 rounded-lg bg-white bg-opacity-20 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#36a8eb]"
                placeholder="Subject"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm sm:text-base font-medium text-gray-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full p-3 rounded-lg bg-white bg-opacity-20 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#36a8eb]"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-white text-[#36a8eb] px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-[#2d8ac7] transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center bg-[#36a8eb] bg-opacity-20 p-6 sm:p-8 md:p-12 rounded-2xl backdrop-blur-md">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Visit Us Today!
          </h3>
          <p className="text-sm sm:text-base text-gray-200 mb-6">
            We’re located at Adum, Kumasi, Ghana. Feel free to drop by or
            contact us for more information.
          </p>
          <button className="bg-white text-[#36a8eb] px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-all">
            Get Directions
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
