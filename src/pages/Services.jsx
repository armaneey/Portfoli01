import React from "react";

const Services = () => {
  const services = [
    {
      title: "Responsive Website Design",
      description:
        "Crafting user-friendly and responsive websites that adapt seamlessly across all devices, ensuring an optimal user experience.",
      icon: "🌐",
    },
    {
      title: "Mobile and Web App Design",
      description:
        "Designing engaging and efficient mobile and web applications tailored to meet user needs and business goals.",
      icon: "📱",
    },
    {
      title: "Landing Page Design",
      description:
        "Building captivating and high-converting landing pages that grab attention and deliver results.",
      icon: "📄",
    },
    {
      title: "Web Development",
      description:
        "Developing robust and scalable websites using modern frameworks like React, Vue, and Next.js.",
      icon: "💻",
    },
    {
      title: "Cybersecurity",
      description:
        "Ensuring your digital solutions are secure, leveraging my growing expertise in cybersecurity and IT support.",
      icon: "🔒",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6" id="services">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">My Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          I specialize in delivering modern and innovative digital solutions
          that combine technical expertise and creativity to help you achieve
          your goals.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-200 rounded-lg shadow-md hover:shadow-xl transform transition-transform hover:scale-105"
            >
              <div className="text-5xl mb-4 text-blue-500">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;