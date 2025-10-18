"use client";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Advantages = () => {
  const comparison = [
    {
      aspect: "Cost Structure",
      inHouse: "High fixed costs (salaries, benefits, infrastructure)",
      outsourced: "Flexible pricing based on actual usage and needs",
    },
    {
      aspect: "Scalability",
      inHouse: "Slow hiring and training processes",
      outsourced: "Rapid scaling up or down based on demand",
    },
    {
      aspect: "Expertise Access",
      inHouse: "Limited to hired team's knowledge",
      outsourced: "Access to diverse specialists and best practices",
    },
    {
      aspect: "Technology",
      inHouse: "Significant investment in tools and licenses",
      outsourced: "Enterprise-grade tools included in service",
    },
    {
      aspect: "Focus",
      inHouse: "Divided attention between operations and core business",
      outsourced: "100% focus on your core business and innovation",
    },
    {
      aspect: "Risk Management",
      inHouse: "Full responsibility for compliance and errors",
      outsourced: "Shared responsibility with expert guidance",
    },
  ];

  return (
    <section id="advantages" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why <span className="text-primary-500">Outsource</span> Operations?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Compare in-house vs. outsourced operations and see the clear benefits
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <div className="hidden md:grid md:grid-cols-3 gap-4 mb-4 font-semibold text-lg">
            <div className="text-gray-700">Aspect</div>
            <div className="text-red-600 flex items-center gap-2">
              <FaTimesCircle /> In-House Operations
            </div>
            <div className="text-green-600 flex items-center gap-2">
              <FaCheckCircle /> Outsourced to Operations@365
            </div>
          </div>

          <div className="space-y-4">
            {comparison.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
                  <div className="font-bold text-gray-900 md:border-r border-gray-200 pr-4">
                    {item.aspect}
                  </div>
                  <div className="text-gray-700 md:border-r border-gray-200 pr-4">
                    <span className="md:hidden font-semibold text-red-600 flex items-center gap-2 mb-2">
                      <FaTimesCircle /> In-House:
                    </span>
                    {item.inHouse}
                  </div>
                  <div className="text-gray-700">
                    <span className="md:hidden font-semibold text-green-600 flex items-center gap-2 mb-2">
                      <FaCheckCircle /> Outsourced:
                    </span>
                    {item.outsourced}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-primary-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Optimizing Your Operations Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Advantages;

