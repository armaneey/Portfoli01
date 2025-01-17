import React, { useState } from 'react';

const Contact = () => {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
    
      return (
        <section className="min-h-screen bg-white bg-[url('/phone.jpeg')] bg-cover bg-center py-12 px-6"id="contact">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h2>
            <p className="text-gray-600 mb-8">
              I'd love to hear from you! Whether you have a question, feedback, or want to collaborate, feel free to reach out.
            </p>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>

                  <button type="submit" className="w-full py-3 bg-slate-900 text-white font-semibold rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-white">
                    Send Message
                  </button>
                </form>
              </div>
    
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                <p className="text-gray-600 mb-4">Feel free to contact me directly using any of the methods below:</p>
                <ul className="space-y-6">
                  <li className="flex items-center text-gray-600">
                    <span>Phone Number: +2349036674477</span>
                  </li>

                  <li className="flex items-center text-gray-600">
                    <span>Email Address: imanshuaibu1@gmail.com</span>
                  </li>

                  <li className="flex items-center text-gray-600">
                    <span>Location: Abuja, Nigeria</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      );
    };
        <a href="assets/resume.pdf" download className="text-blue-500 hover:underline">Download My Resume</a>
     

export default Contact;