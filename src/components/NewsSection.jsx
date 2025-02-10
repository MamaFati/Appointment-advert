import "react";
import image1 from "../assets/cssd.png";
import image2 from "../assets/familyNews.png";
import image3 from "../assets/new2.jpg";

const News = () => {
  const newsItems = [
    {
      title: "CSSD Services",
      description:
        "The New Year is here - a time to reflect, reset, and prioritize your health.",
      image: image1,
      date: "January 1, 2024",
    },
    {
      title: "New Cancer Treatment",
      description:
        "Discover the latest advancements in cancer treatment and how they can benefit patients.",
      image: image2,
      date: "December 15, 2023",
    },
    {
      title: "Mental Health Awareness",
      description:
        "Learn about the importance of mental health and how to seek help when needed.",
      image: image3,
      date: "November 20, 2023",
    },
    // {
    //   title: "Healthy Eating Tips",
    //   description:
    //     "Explore our top tips for maintaining a healthy diet and improving your overall well-being.",
    //   image: image1,
    //   date: "October 10, 2023",
    // },
    // {
    //   title: "Exercise and Fitness",
    //   description:
    //     "Find out how regular exercise can boost your physical and mental health.",
    //   image: "https://via.placeholder.com/400x250", // Replace with actual image URL
    //   date: "September 5, 2023",
    // },
    // {
    //   title: "Preventive Care",
    //   description:
    //     "Understand the importance of preventive care and how it can save lives.",
    //   image: "https://via.placeholder.com/400x250", // Replace with actual image URL
    //   date: "August 1, 2023",
    // },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container w-full lg:w-[80%] mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Latest Health News & Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <p className="text-sm text-gray-500">{item.date}</p>
              <button className="mt-4 text-blue-500 font-semibold hover:underline">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
