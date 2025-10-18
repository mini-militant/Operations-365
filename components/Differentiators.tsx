"use client";

import { FaShieldAlt, FaSmile, FaEye, FaLeaf } from "react-icons/fa";

const Differentiators = () => {
  const differentiators = [
    {
      icon: <FaShieldAlt />,
      title: "Data Privacy First",
      description:
        "Your data is sacred. We implement bank-level security, strict NDAs, and compliance with GDPR, SOC 2, and industry standards. Your information stays confidential and protected.",
      color: "from-blue-500 to-primary-500",
      bgColor: "from-blue-50 to-primary-50",
    },
    {
      icon: <FaSmile />,
      title: "Happy Team Culture",
      description:
        "We believe happy teams deliver better results. Our people are treated with respect, given growth opportunities, and empowered to make decisions — resulting in dedicated service for you.",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
    {
      icon: <FaEye />,
      title: "No Micromanagement",
      description:
        "We trust our expertise and yours. You set the goals, we deliver the results. Regular updates keep you informed without drowning you in unnecessary details or constant check-ins.",
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-50 to-amber-50",
    },
    {
      icon: <FaLeaf />,
      title: "Sustainable Growth",
      description:
        "We're not about quick fixes. Our solutions are designed for long-term sustainability, scalability, and continuous improvement — growing with your business every step of the way.",
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50",
    },
  ];

  return (
    <section id="differentiators" className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What Makes Us <span className="text-primary-400">Different</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We&apos;re not just another operations vendor. We&apos;re your partner in building a better business.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${item.bgColor} p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700`}
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 text-white text-3xl md:text-4xl`}>
                {item.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-xl md:text-2xl font-semibold mb-6 text-gray-200">
            Ready to experience the Operations@365 difference?
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Let&apos;s Talk About Your Operations
          </a>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;

