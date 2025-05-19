import React from "react";
import Github from "../icons/Github";
import CheckWebsite from "../icons/CheckWebsite";
// import { Element } from "react-scroll";

const Proj = () => {
  const projects = [
    {
      title: "Food Delivery App",
      desc: "Developed a user-friendly food delivery app using ReactJS, ensuring intuitive navigation and enhanced user experience.",
      siteImg: "images/Projects/FoodieFeast.png",
      websiteLink: "https://shubhamfoodiefeast.vercel.app/",
      codeLink: "https://github.com/shubhamshahane1234/foodiefeast",
    },

    {
      title: "Latest PortFolio",
      desc: "Discover a showcase of my latest front-end development projects, blending functionality with sleek design and seamless user experiences",
      siteImg: "images/Projects/newportfolio.png",
      websiteLink: "",
      codeLink: "",
    },
    // {
    //   title: "E-Commerce Site",
    //   siteImg: "images/Projects/cealum.png",
    //   desc: "Developed a modern web app facilitating online product browsing and purchase",
    //   websiteLink:
    //     "https://caelumgaurav-65468-react-native.b65468.dev.eastus.az.svc.builder.cafe/Home",
    //   codeLink: "",
    // },

    {
      title: "Chat-App",
      desc: "Real-Time chat appllication created using Reactjs, Tailwindcss and Firebase",
      siteImg: "images/Projects/chatapp.png",
      websiteLink: "https://chatapp-ochre-theta.vercel.app/",
      codeLink: "https://github.com/shubhamshahane1234/chatapp",
    },
  ];
  return (
    <>
      <div class="relative w-full m-auto p-4 mt-16">
        <div class="text-center">
          {/* <Element name="projects"> */}{" "}
          <h2 class="text-3xl font-bold text-center">Projects</h2>
          {/* </Element> */}
          <p class="font-light text-center text-gray-600 ">
            Here are few project i worked on recently
          </p>
        </div>
        <div
          class="flex overflow-x-auto justify-center scroll "
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE 10+
          }}
        >
          {projects.map((project) => {
            return (
              <div class="flex justify-center px-4 py-10 space-y-4 ">
                <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg ">
                  <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 border-indigo-200 border-2 ">
                    <img src={project.siteImg} alt="site"></img>
                  </div>
                  <div class="p-6 h-[180px] ">
                    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                      {project.title}
                    </h5>
                    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                      {project.desc}
                    </p>
                  </div>
                  <div class="p-6  ">
                    <div class="flex justify-around items-center">
                      <a href={project.websiteLink} alt="link">
                        <CheckWebsite webName={project.title} />
                      </a>
                      <a href={project.codeLink} alt="link">
                        {" "}
                        <Github />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Proj;
