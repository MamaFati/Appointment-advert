import "react";

const News = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Latest Health News & Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">CSSD Services</h3>
            <p>
              The New Year is here - a time to reflect, reset, and prioritize
              your health.
            </p>
          </div>
          {/* Add more news items here */}
        </div>
      </div>
    </section>
  );
};

export default News;
