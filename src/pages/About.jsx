import React from "react";

const About = () => {
  return (
    <section className="container mx-auto my-8 px-6 space-y-8">
    <h2 className="text-6xl font-bold mb-4 text-center">HELLO THERE!!!</h2>
  
    <div className="flex flex-col md:flex-row items-start gap-6">
      <img
        src="/her.jpeg"
        alt="About Me"
        className="w-full md:w-1/3 h-auto object-cover border border-gray-300 shadow-md" />
  
     
      <div className="flex flex-col space-y-4 md:w-2/3">
        <p className="text-4xl font-bold">I AM IMAN SHU'AIBU ELE-OJO, A FRONT-END DEVELOPER.</p>
        <p>
          As someone with a background in International Relations and Diplomacy, I bring a unique perspective
          to front-end development, combining analytical thinking and creativity to craft digital experiences
          that resonate globally. My journey into coding began with a passion for building intuitive, user-friendly
          interfaces, and I’ve since honed my skills in frameworks like React and Vue.
        </p>
        <p>
          I specialize in creating responsive websites, dynamic dashboards, and engaging mobile app designs, with
          expertise in sectors like fintech and healthcare. My focus on clean, intuitive UI/UX design ensures every
          project is not only functional but also visually captivating.
        </p>
        <p>
          Beyond development, I have a growing interest in cybersecurity, complemented by IT support experience,
          enabling me to deliver secure, robust, and well-rounded solutions. Whether it’s prototyping ideas, designing
          captivating graphics, or building seamless digital products, I thrive on the intersection of creativity and
          technology to elevate brands and deliver impactful user experiences.
        </p>
      </div>
    </div>
  
    
    <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      <p><strong className="font-semibold">Age:</strong> 20</p>
      <p><strong className="font-semibold">Gender:</strong> Female</p>
      <p><strong className="font-semibold">Languages:</strong> English, French, Arabic, Yoruba, and Igala</p>
      <p><strong className="font-semibold">Work:</strong> Diplomat | Frontend Developer | Web Designer/Devloper</p>
      <p><strong className="font-semibold">Phone:</strong> +2349036674477</p>
      <p><strong className="font-semibold">Email:</strong> <a href="mailto:imanshuaibu1@gmail.com" className="text-blue-500 hover:underline">imanshuaibu1@gmail.com</a></p>
      <p><strong className="font-semibold">Country:</strong> Nigeria</p>
    </div>
  </section>
  );
};
  export default About;