import React from 'react';
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import AnalogWatch from "../assets/portfolio/AnalogWatch.png";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      redLink: "",
    },
    {
      id: 2,
      src: installNode,
      redLink: "",
    },
    {
      id: 3,
      src: navbar,
      redLink: "",
    },
    {
      id: 4,
      src: reactParallax,
      redLink: "",
    },
    {
      id: 5,
      src: reactWeather,
      redLink: "",
    },
    {
      id: 6,
      src: reactSmooth,
      redLink: "",
    },
    {
      id: 7,
      src: AnalogWatch,
      redLink: "https://euphonious-banoffee-069cbf.netlify.app/",
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, redLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
              <div className="flex items-center justify-center">
                <button onClick={() => window.open(redLink, "_blank")} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
