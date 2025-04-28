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
    {
      title: "E-Commerce Site",
      siteImg: "images/Projects/cealum.png",
      desc: "Developed a modern web app facilitating online product browsing and purchase",
      websiteLink:
        "https://caelumgaurav-65468-react-native.b65468.dev.eastus.az.svc.builder.cafe/Home",
      codeLink: "",
    },
    {
      title: "Old Portfolio Site",
      desc: "Created a single-page application showcasing personal projects and skills",
      siteImg: "images/Projects/oldportfolio.png",
      websiteLink: "https://shubhamshahane1234.github.io/home/",
      codeLink: "https://github.com/shubhamshahane1234/home",
    },
    {
      title: "Latest News",
      desc: "Created a single-page application showcasing latest news.",
      siteImg: "images/Projects/latestnews.png",
      websiteLink: "https://shubhamshahane1234.github.io/latestnews/",
      codeLink: "https://github.com/shubhamshahane1234/latestnews",
    },
    {
      title: "News site (old)",
      desc: "a foundational piece in my portfolio that highlights my early mastery of front-end development, paving the way for my current innovations.",
      siteImg: "images/Projects/oldnewssite.png",
      websiteLink: "https://shubhamshahane1234.github.io/news/",
      codeLink: "https://github.com/shubhamshahane1234/news",
    },

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
      <div class="px-4 py-8 mx-auto my-auto max-w-7xl">
        <div class="space-y-4">
          {/* <Element name="projects"> */}{" "}
          <h2 class="text-3xl font-bold text-center">Projects</h2>
          {/* </Element> */}
          <p class="mx-auto font-light text-center text-gray-600 max-w-96">
            Here are few project i worked on recently
          </p>
        </div>
        <div class="relative w-full p-4 mt-16">
          {/* <div class="absolute left-0 hidden w-full h-px -translate-y-1/2 bg-gray-950/10 lg:top-1/2 md:top-1/3 md:block"></div>
          <div class="absolute hidden w-px h-full md:block bg-gray-950/10 left-1/2 lg:left-1/3"></div>
          <div class="absolute left-0 hidden w-full h-px lg:w-px lg:h-full bg-gray-950/10 lg:left-2/3 top-2/3 lg:top-0 md:block"></div> */}
          <div class="grid grid-cols-1 gap-4 p-4  md:grid-cols-2 lg:grid-cols-3 ">
            {projects.map((project) => {
              return (
                <div>
                  <div class="flex flex-col items-center justify-center px-4 py-8 space-y-4 ">
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Proj;
