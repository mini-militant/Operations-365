"use client";

import { FaBullseye, FaDollarSign, FaClock, FaRocket } from "react-icons/fa";

const Goals = () => {
  const goals = [
    {
      icon: <FaBullseye />,
      title: "Increase Efficiency",
      description: "Optimize processes to achieve 40% faster task completion",
      metric: "40%",
      color: "from-blue-500 to-primary-500",
    },
    {
      icon: <FaDollarSign />,
      title: "Reduce Operational Costs",
      description: "Cut overhead expenses by up to 30% with smart resource allocation",
      metric: "30%",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaClock />,
      title: "Save Time",
      description: "Free up 20+ hours per week for strategic initiatives",
      metric: "20+ hrs",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: <FaRocket />,
      title: "Scale Rapidly",
      description: "Build scalable operations infrastructure for 10x growth",
      metric: "10x",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="goals" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Help You <span className="text-primary-500">Achieve</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Measurable outcomes that drive business growth and operational excellence
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden group"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${goal.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${goal.color} rounded-2xl flex items-center justify-center mb-6 text-white text-3xl`}>
                {goal.icon}
              </div>
              
              {/* Metric */}
              <div className={`text-4xl font-bold bg-gradient-to-r ${goal.color} bg-clip-text text-transparent mb-3`}>
                {goal.metric}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {goal.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {goal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;

