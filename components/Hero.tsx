"use client";

import { FaRocket, FaChartLine } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-primary-50 via-white to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            You Create, We Serve –{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
              End-to-End Operational Excellence
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Streamline processes, allocate resources efficiently, and achieve
            measurable results with complete data transparency.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16">
            <a
              href="#contact"
              className="group w-full sm:w-auto bg-primary-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <FaRocket className="group-hover:translate-x-1 transition-transform" />
              Get Started
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto bg-white text-primary-500 border-2 border-primary-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-50 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <FaChartLine />
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
                365
              </div>
              <div className="text-gray-600 font-medium">Days of Support</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl md:text-5xl font-bold text-accent-green mb-2">
                100%
              </div>
              <div className="text-gray-600 font-medium">Data Transparency</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl md:text-5xl font-bold text-accent-orange mb-2">
                24/7
              </div>
              <div className="text-gray-600 font-medium">Process Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

