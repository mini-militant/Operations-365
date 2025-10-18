"use client";

import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      name: "Aman Anand",
      role: "Operations Director",
      bio: "15+ years in process optimization and operations management across Fortune 500 companies.",
      linkedin: "https://linkedin.com",
      email: "rajesh@operations365.com",
      image: "👨‍💼",
    },
    {
      name: "Kunal Sinha",
      role: "Sales Operations Lead",
      bio: "Expert in CRM systems and sales process automation with proven track record in B2B sales.",
      linkedin: "https://linkedin.com",
      email: "priya@operations365.com",
      image: "👩‍💼",
    },
    {
      name: "Dheeraj Kumar",
      role: "Data Analytics Manager",
      bio: "Specialized in business intelligence, KPI tracking, and data-driven decision making.",
      linkedin: "https://linkedin.com",
      email: "amit@operations365.com",
      image: "👨‍💻",
    },
    {
      name: "Shailesh Kumar Singh",
      role: "Process Excellence Lead",
      bio: "Lean Six Sigma Black Belt with expertise in continuous improvement and quality management.",
      linkedin: "https://linkedin.com",
      email: "sneha@operations365.com",
      image: "👩‍🔬",
    },
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-primary-500">Expert Team</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Experienced professionals dedicated to your operational success
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center"
            >
              {/* Avatar */}
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-6xl md:text-7xl">
                {member.image}
              </div>

              {/* Name & Role */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-primary-500 font-semibold mb-3">
                {member.role}
              </p>

              {/* Bio */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  aria-label={`${member.name}'s LinkedIn profile`}
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <FaEnvelope size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

