import React from "react";

const projects = [
  {
    title: "MAIZ",
    description: "A unique saudi arabia restaurant with delicious cuisines which were being inspired by their culture.",
    liveLink: "https://maiz-hub.netlify.app/",
    githubLink: "#",
    image: "/public/restaurant.jpeg",
  },
  {
    title: "BUMA LOGISTICS",
    description: "This is a logistics company that helps to deliver goods across the nation and globe, It's very fast and reliable.",
    liveLink: "https://buma022.netlify.app",
    githubLink: "#",
    image: "/public/log.jpeg",
  },
  {
    title: "COM",
    description: "This is a non-profit organization and a spiritual body with the message of salvation,restoration, deliverance and show of charity to better lives",
    liveLink: "https://com-hub.netlify.app",
    githubLink: "#",
    image: "/public/com.jpeg",
  },
  {
    title: "Quiz App",
    description: "This is a brain like quiz app for all age type filled with questions that make you question.",
    liveLink: "https://quizap-y1vo.onrender.com",
    githubLink: "#",
    image: "/public/quiz.jpeg",
  },
];

const Projects = () => {
  return (
    <section className="container  mx-auto my-8">
    <h2 className="text-3xl font-bold mb-4">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="border p-4 rounded-lg transform transition-transform hover:scale-105 hover:shadow-lg bg-white"
        >
          <div className="overflow-hidden rounded-lg h-48 w-full mb-6">
            <img 
              src={project.image} 
              alt={project.title} 
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-center">{project.title}</h3>
          <p className="text-gray-700 mb-4 text-center">{project.description}</p>
          <div className="flex justify-center gap-4">
            <a
              href={project.liveLink}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
            <a
              href={project.githubLink}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default Projects;