"use client";

import { FaLightbulb, FaHandshake, FaChartBar } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-primary-500">Operations@365</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We are your reliable operations partner, helping businesses
              streamline processes, allocate resources efficiently, and improve
              performance — all backed by data transparency and measurable
              results.
            </p>
          </div>

          {/* Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                <FaLightbulb className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses by taking operational complexity off their
                plate, allowing them to focus on innovation and growth.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mb-6">
                <FaHandshake className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Our Approach
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We combine proven process management frameworks with
                cutting-edge tools to deliver efficient, scalable solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-accent-orange rounded-full flex items-center justify-center mb-6">
                <FaChartBar className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Our Promise
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Complete transparency in data, processes, and results. You'll
                always know exactly where you stand and where you're heading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

