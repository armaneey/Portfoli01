import React from "react";

const EducationSection = () => {
  const education = [
    {
      degree: "International Relations and Diplomacy",
      institution: "University",
      period: "2021 - 2024",
      description: "Studied international relations with focus on global diplomacy, bringing analytical thinking and cross-cultural perspective to technology development.",
      highlights: ["Analytical Thinking", "Cross-cultural Communication", "Global Perspective"],
      icon: "🌍",
      color: "from-blue-500 to-purple-500"
    },
    {
      degree: "Frontend Development",
      institution: "Self-Learning & Online Courses",
      period: "2024 - Present",
      description: "Continuous learning in modern web technologies through online platforms and hands-on project experience.",
      highlights: ["React", "Vue.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
      icon: "💻",
      color: "from-purple-500 to-pink-500"
    },
    {
      degree: "IT Support & Cybersecurity Fundamentals",
      institution: "Technical Training",
      period: "2025 - present",
      description: "Gained foundational knowledge in IT support and cybersecurity, complementing development skills with security awareness.",
      highlights: ["Technical Support", "System Security", "Troubleshooting", "Network Fundamentals"],
      icon: "🔒",
      color: "from-pink-500 to-red-500"
    }
  ];

  const skills = [
    { name: "UI/UX Design", icon: "🎨", level: 90 },
    { name: "Frontend Dev", icon: "💻", level: 85 },
    { name: "Responsive", icon: "📱", level: 95 },
    { name: "Security", icon: "🔒", level: 75 },
    { name: "React", icon: "⚛️", level: 88 },
    { name: "JavaScript", icon: "🟨", level: 92 }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Education & Skills
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic background and technical expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${edu.color}`}></div>
              
              <div className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${edu.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {edu.icon}
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {edu.period}
                  </p>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {edu.description}
                </p>
                
                <div className="space-y-2">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center gap-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${edu.color} rounded-full`}></div>
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-8 text-center">Technical Skills</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <p className="font-semibold mb-2">{skill.name}</p>
                  <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-white h-full rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-sm mt-1 opacity-75">{skill.level}%</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Continuously learning and adapting to new technologies to deliver cutting-edge solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
