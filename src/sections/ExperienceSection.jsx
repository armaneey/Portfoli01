import React from "react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Freelance",
      period: "2024 - Present",
      description: "Building responsive web applications and creating intuitive user interfaces for various clients in fintech and healthcare sectors.",
      technologies: ["React", "Vue.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      icon: "💻"
    },
    {
      title: "Web Designer/Developer",
      company: "Independent Projects",
      period: "2024 - present",
      description: "Designed and developed engaging websites and mobile app interfaces with focus on clean UI/UX design and user experience.",
      technologies: ["Figma", "Adobe XD", "React", "Responsive Design", "UI/UX"],
      icon: "🎨"
    },
    {
      title: "IT Support Specialist",
      company: "Various Organizations",
      period: "2024 - present",
      description: "Provided technical support and assistance with system maintenance, contributing to growing interest in cybersecurity.",
      technologies: ["Technical Support", "System Maintenance", "Troubleshooting", "Customer Service"],
      icon: "🔧"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey in tech and the roles that shaped my skills
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {exp.icon}
                </div>
                
                <div className="flex-1 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-purple-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-gray-600">
                        {exp.company}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200 hover:from-purple-100 hover:to-pink-100 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">What I Do Best</h3>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
                A frontend developer with a passion for creating beautiful, functional, and user-centered digital experiences. 
                With a background in International Relations and Diplomacy, I bring a unique perspective to development, 
                combining analytical thinking with creativity to build applications that resonate globally.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <span className="text-2xl font-bold">React</span>
                </div>
                <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <span className="text-2xl font-bold">UI/UX</span>
                </div>
                <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <span className="text-2xl font-bold">Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
