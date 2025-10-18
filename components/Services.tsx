"use client";

import {
  FaCogs,
  FaUsers,
  FaChartLine,
  FaClipboardCheck,
  FaFileAlt,
  FaHeadset,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCogs />,
      title: "Process Management & Optimization",
      description:
        "Streamline your operations with optimized workflows, SOPs, and continuous improvement strategies.",
      keywords: "process optimization, workflow management, SOP development",
    },
    {
      icon: <FaUsers />,
      title: "Resource Allocation & Planning",
      description:
        "Strategic resource planning to maximize efficiency and minimize waste across your organization.",
      keywords: "resource allocation, capacity planning, workforce optimization",
    },
    {
      icon: <FaChartLine />,
      title: "Sales Operations Support",
      description:
        "End-to-end sales ops support including CRM management, pipeline tracking, and performance analytics.",
      keywords: "sales operations outsourcing, CRM management, pipeline optimization",
    },
    {
      icon: <FaClipboardCheck />,
      title: "KPI Tracking & Reporting",
      description:
        "Real-time dashboards and comprehensive reports to monitor business metrics that matter.",
      keywords: "KPI tracking dashboard, business analytics, performance monitoring",
    },
    {
      icon: <FaFileAlt />,
      title: "Documentation & Compliance",
      description:
        "Maintain comprehensive documentation and ensure regulatory compliance across operations.",
      keywords: "compliance management, documentation services, audit support",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Operational Support",
      description:
        "Round-the-clock support to keep your operations running smoothly without interruption.",
      keywords: "operational support, business process outsourcing, 24/7 support",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary-500">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive operational solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 text-white text-3xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.keywords.split(", ").map((keyword, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-primary-50 text-primary-700 px-3 py-1 rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

