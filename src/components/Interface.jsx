import React from "react";
import { motion } from "motion/react";
import { TbBrandThreejs } from "react-icons/tb";
import Proj from "./Proj";

const Section = (props) => {
  const { children } = props;
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center "
    >
      {children}
    </motion.section>
  );
};

const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <Aboutsection />
      <Skillsection />
      <Projectsection />
      <Contactsection />
    </div>
  );
};

const Aboutsection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Hi, I'm <br />
        <span className="bg-white px-1 italic">Shubham Shahane</span>
      </h1>
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-gray-700 font-serif"
      >
        FrontEnd Developer (ReactJS)
      </motion.p>
    </Section>
  );
};

const skills = [
  { language: "HTML", icon: "🟧" },
  { language: "CSS", icon: "🟦" },
  { language: "JavaScript", icon: "🟨" },
  { language: "ReactJS", icon: "⚛️" },
  { language: "TypeScript", icon: "🔵" },
  { language: "Redux", icon: "🌀" },
  { language: "Jest", icon: "🧪" },
  { language: "Enzyme", icon: "🧬" },
  { language: "Three.js", icon: "🎨" },
  { language: "React Three Fiber", icon: "🌐" },
  { language: "Tailwind CSS", icon: "🌊" },
  { language: "Material UI", icon: "🖌️" },
];
const Skillsection = () => {
  return (
    <Section className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <span className="text-lg font-semibold text-gray-700">
                {skill.language} {"   "}
                {/* <span>{skill.icon}</span> */}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Projectsection = () => {
  return (
    // <Section>
    <Proj />
    // </Section>
  );
};

const Contactsection = () => {
  return (
    <div className="w-[80%] flex items-center ">
      <div class="w-full max-w-[500px] bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Contact Form</h2>

        <form class="flex flex-col">
          <input
            type="text"
            class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Full Name"
          />
          <input
            type="email"
            class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Email"
          />
          <input
            type="number"
            class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Phone Number"
          />
          <textarea
            name="message"
            class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Message"
          ></textarea>

          <button
            type="submit"
            class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Interface;
