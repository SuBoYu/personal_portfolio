"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { BsFillMicFill } from "react-icons/bs";
import { HiArrowDown, HiArrowCircleRight} from "react-icons/hi";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-2/5">
          <Image
            src="/headshot.jpg"
            alt=""
            width={300}
            height={300}
            className="rounded-full w-64 h-auto border-4 border-gray-400"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Tony
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            <span className="font-semibold text-teal-600">
              Software Engineer <br />
              Entrepreneur <br />
              <span className="flex items-end">
                Podcaster
                <a
                  href="https://solink.soundon.fm/moonshot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-800 ml-2"
                >
                  <HiArrowCircleRight size={20} />
                  <span>Moonshot Podcast</span>
                </a>
              </span>
            </span>
          </p>
          <div className="mt-8 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1946dbMKu_5XgrsrOKLC9mIazPahqbh6X/view?usp=sharing"
              className="text-neutral-100 flex items-center justify-center w-full md:w-1/4 font-semibold px-3 py-3 bg-black rounded shadow hover:bg-teal-700"
            >
              Resume
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/boyusu"
              className="text-neutral-100 flex items-center justify-center w-full md:w-1/4 font-semibold px-3 py-3 bg-black rounded shadow hover:bg-teal-700"
            >
              <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.68 19h-3v-11.5h3v11.5zm-1.5-13c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.18 13h-3v-5.5c0-1.32-.02-3.02-1.84-3.02s-2.12 1.44-2.12 2.94v5.58h-3v-11.5h2.88v1.57h.04c.4-.75 1.36-1.54 2.8-1.54 2.99 0 3.54 1.96 3.54 4.51v6.96z"/>
              </svg>
              LinkedIn
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/SuBoYu"
              className="text-neutral-100 flex items-center justify-center w-full md:w-1/4 font-semibold px-3 py-3 bg-black rounded shadow hover:bg-teal-700"
            >
              <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.05-3.34.72-4.05-1.41-4.05-1.41-.54-1.38-1.32-1.75-1.32-1.75-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.81 2.78 1.29 3.46.99.11-.77.42-1.29.77-1.59-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.51.12-3.15 0 0 1-.32 3.3 1.23.95-.26 1.97-.39 2.98-.39 1.01 0 2.03.13 2.98.39 2.3-1.55 3.3-1.23 3.3-1.23.65 1.64.24 2.85.12 3.15.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22 0 1.6-.02 2.88-.02 3.27 0 .32.22.69.82.58 4.76-1.59 8.2-6.09 8.2-11.39 0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="education"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
