import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div
      key={darkMode} // Force re-render when darkMode changes
      className={`font-sans ${
        darkMode
          ? 'bg-[#0e0e0e] text-white' // Dark mode styles
          : 'bg-gray-50 text-gray-800' // Light mode styles
      }`}
    >
      <nav
        className={`sticky top-0 p-6 flex justify-between items-center z-50 shadow-md ${
          darkMode ? 'bg-[#1a1a1a] text-white' : 'bg-white text-gray-800'
        }`}
      >
        <div className="text-2xl font-bold">Portfolio</div>
        <div className="flex space-x-16">
          <a href="#home" className="text-lg font-medium hover:underline">
            Home
          </a>
          <a href="#about" className="text-lg font-medium hover:underline">
            About
          </a>
          <a href="#projects" className="text-lg font-medium hover:underline">
            Projects
          </a>
          <a href="#skills" className="text-lg font-medium hover:underline">
            Skills
          </a>
          <a href="#contact" className="text-lg font-medium hover:underline">
            Contact
          </a>
        </div>
        <div className="ml-8">
          <label className="inline-flex items-center cursor-pointer">
            <span className="mr-3 text-lg">{darkMode ? 'Dark' : 'Light'} Mode</span>
            <div className="relative">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => {
                  setDarkMode(!darkMode);
                  AOS.refreshHard();
                }}
                className="sr-only"
              />
              <div className="w-12 h-6 bg-gray-300 rounded-full shadow-inner" />
              <div
                className={`dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition-transform duration-300 ${
                  darkMode ? 'translate-x-full' : ''
                }`}
              />
            </div>
          </label>
        </div>
      </nav>

      <section
        id="home"
        className={`min-h-screen flex flex-col md:flex-row justify-center items-center text-center px-4 py-4 ${
          darkMode ? 'bg-[#1a1a1a]' : 'bg-gray-100'
        }`}
        data-aos="fade-up"
      >
        <div className="md:w-1/2 order-2 md:order-1">
          <h1 className="text-5xl font-bold mb-4 animate-bounce">
            Hi, I'm Soham Nandanwar
          </h1>
          <p className="text-lg md:text-xl mt-1">
            Frontend & Full Stack Developer | React | Node.js | Open to
            Opportunities
          </p>
          <div className="flex justify-center gap-6 mt-2">
            <a
              href="https://www.facebook.com/jhandu.bam.71619"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-blue-500 hover:text-blue-700 transition-transform transform hover:scale-110"
            >
              <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-lg transition-opacity duration-300 hover:opacity-50"></div>
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/_soham.257/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-pink-500 hover:text-pink-700 transition-transform transform hover:scale-110"
            >
              <div className="absolute inset-0 rounded-full bg-pink-500 opacity-20 blur-lg transition-opacity duration-300 hover:opacity-50"></div>
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://x.com/sohamn343"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-blue-400 hover:text-blue-600 transition-transform transform hover:scale-110"
            >
              <div className="absolute inset-0 rounded-full bg-blue-400 opacity-20 blur-lg transition-opacity duration-300 hover:opacity-50"></div>
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/soham-nandanwar-93010a284/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-110"
            >
              <div className="absolute inset-0 rounded-full bg-blue-600 opacity-20 blur-lg transition-opacity duration-300 hover:opacity-50"></div>
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
          <p className="text-md mt-4">You can download my resume from here:</p>
          <a
            href="/Soham_Nandanwar - Resume.pdf"
            className={`inline-block px-4 py-2 mt-2 rounded-full transform transition-transform duration-300 hover:scale-105 ${
              darkMode
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
            download
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Download CV
          </a>
        </div>
        <div
          className="md:w-1/2 order-1 md:order-2"
          data-aos="fade-in"
          data-aos-duration="1200"
        >
          <img
            src="/Portfolio/images/Soham.jpeg"
            alt="Soham Nandanwar"
            className="w-80 h-80 md:w-96 md:h-96 rounded-full mx-auto animate-bounce-slow transform transition-transform duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl"
          />
        </div>
      </section>

      {/* About Me */}
      <section
        id="about"
        className={`max-w-5xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-20 ${
          darkMode
            ? 'bg-[#0e0e0e] text-white' // Dark mode: Match darker black background
            : 'bg-white shadow-md border border-gray-300 rounded-2xl' // Light mode: Keep the border and background
        }`}
        data-aos="fade-right"
      >
        {/* Image Section */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src="/Portfolio/images/Soham.jpeg" // Replace with the actual path to your image
            alt="About Me"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-7">
            Computer Engineering student seeking to leverage my programming skills and academic knowledge to contribute to a progressive IT organization, while continuously learning and growing within a collaborative team environment. I have completed internships at IBM as a Front-end Web Developer and ML Engineer. These experiences have helped me apply my skills to real-world problems and create meaningful solutions. I'm particularly interested in frontend and full-stack development.
          </p>
          {/* Read More Button */}
          <a
            href={`${process.env.PUBLIC_URL}/Certificates.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 mt-4 rounded-full hover:bg-blue-700 transform transition-transform duration-300 hover:scale-105"
          >
            Read More
          </a>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className={`${darkMode ? 'bg-[#1a1a1a]' : 'bg-gray-100'} py-16 px-4`}
        data-aos="fade-left"
      >
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
          <div className={`${darkMode ? 'bg-[#2a2a2a]' : 'bg-white'} p-6 rounded-2xl shadow-xl`} data-aos="zoom-in">
            <h3 className="text-2xl font-semibold mb-2">ChatBot</h3>
            <ul className="list-disc pl-5 text-sm mb-4">
              <li>Built a cross-platform voice assistant app with real-time voice recognition using React Native.</li>
              <li>Implemented NLP-based chatbot using transformer models, achieving 90% query accuracy.</li>
              <li>Led API development and integration to enhance functionality and user experience.</li>
            </ul>
            <p className="text-xs text-gray-400">Tech Stack: React Native, OpenAI, Anthropic, Cohere, Fal.ai, Expo</p>
          </div>
          <div className={`${darkMode ? 'bg-[#2a2a2a]' : 'bg-white'} p-6 rounded-2xl shadow-xl`} data-aos="zoom-in">
            <h3 className="text-2xl font-semibold mb-2">Blog App</h3>
            <ul className="list-disc pl-5 text-sm mb-4">
              <li>Developed a full-stack blog application using the MERN stack.</li>
              <li>Implemented secure JWT-based authentication and optimized API performance with caching and pagination.</li>
              <li>Tested the app with 10 beta users and resolved 95% of reported bugs.</li>
            </ul>
            <p className="text-xs text-gray-400">Tech Stack: MongoDB, Express.js, React.js, Node.js</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="max-w-3xl mx-auto px-4 py-16"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <ul className="flex flex-wrap gap-3 text-sm">
          {['JavaScript', 'C++', 'SQL', 'React', 'Node.js', 'Express', 'MongoDB', 'React Native', 'Git', 'HTML', 'CSS'].map(skill => (
            <li key={skill} className="bg-blue-600 text-white px-4 py-1 rounded-full">{skill}</li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className={`max-w-xl mx-auto px-4 py-16 text-center ${
          darkMode
            ? ''
            : 'bg-white shadow-md border border-gray-300 rounded-2xl'
        } mb-16`}
        data-aos="fade-in"
      >
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="mb-6">Feel free to reach out via the form below or connect with me on LinkedIn or GitHub.</p>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            emailjs
              .sendForm(
                'service_gxht04q', // Replace with your EmailJS Service ID
                'template_935qi8u', // Replace with your EmailJS Template ID
                e.target,
                'C3SJnXgIzpBx4HDzT' // Replace with your EmailJS Public Key
              )
              .then(
                (result) => {
                  alert('Message sent successfully!');
                },
                (error) => {
                  alert('Failed to send the message. Please try again.');
                }
              );
            e.target.reset(); // Reset the form after submission
          }}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="p-3 rounded bg-[#2a2a2a] text-white"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="p-3 rounded bg-[#2a2a2a] text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="p-3 rounded bg-[#2a2a2a] text-white h-32"
            required
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className={`inline-block px-4 py-2 mt-2 rounded-full transform transition-transform duration-300 hover:scale-105 ${
                darkMode
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
              style={{ width: 'fit-content' }} // Explicitly set the width to fit the content
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="mt-4 flex justify-center gap-6">
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-[#1a1a1a] text-white">
        <div className="flex justify-between items-center px-4">
          <p className="ml-4 text-sm text-gray-400">
            Copyrights &copy; 2025 Soham Nandanwar | All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transform transition-transform duration-300 hover:scale-105"
          >
            <FontAwesomeIcon icon={faChevronUp} /> {/* Upward arrowhead icon */}
          </a>
        </div>
      </footer>
    </div>
  );
}