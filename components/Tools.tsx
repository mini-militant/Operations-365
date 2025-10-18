"use client";

import { SiSalesforce, SiTrello, SiSlack, SiNotion, SiJira } from "react-icons/si";
import { FaChartBar, FaDatabase, FaFileExcel } from "react-icons/fa";

const Tools = () => {
  const tools = [
    {
      name: "Salesforce CRM",
      icon: <SiSalesforce />,
      description: "Customer relationship management and sales tracking",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Power BI",
      icon: <FaChartBar />,
      description: "Business analytics and interactive dashboards",
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "Microsoft Excel",
      icon: <FaFileExcel />,
      description: "Advanced data analysis and reporting",
      color: "from-green-500 to-green-700",
    },
    {
      name: "Trello",
      icon: <SiTrello />,
      description: "Project management and task tracking",
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Slack",
      icon: <SiSlack />,
      description: "Team communication and collaboration",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Notion",
      icon: <SiNotion />,
      description: "Documentation and knowledge management",
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "Jira",
      icon: <SiJira />,
      description: "Agile project management",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "Custom Databases",
      icon: <FaDatabase />,
      description: "Tailored data solutions for your needs",
      color: "from-teal-500 to-cyan-600",
    },
  ];

  return (
    <section id="tools" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary-500">Technology Stack</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Enterprise-grade tools and platforms we use to deliver exceptional results
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center mb-4 text-white text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300`}>
                {tool.icon}
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                {tool.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                {tool.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 max-w-3xl mx-auto">
            <strong className="text-primary-500">Plus many more...</strong> We continuously evaluate and adopt the best tools to ensure your operations run on cutting-edge technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tools;

