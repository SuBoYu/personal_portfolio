import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./slide-up"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "InvestingPal",
    description:
      "Investingpal is an algorithmic trading platform with a monthly trading volume of 800K across 2320 equities",
    image: "/investingpal.png",
    github: "https://github.com/SuBoYu/quant_engine",
    link: "https://linktr.ee/quantx",
    details: [
      "Architected an Investing Management service containing 1M+ transaction volume with Python FastAPI featuring RESTful API, JWT and OAuth2.0; developed the frontend using Figma, React, Typescript, MUI and Next.js",
      "Designed a 3rd normalized ER schema MySQL database; sped up query performance by 57% through indexing",
      "Constructed an automated deployment pipeline using Docker to compose the production environment and Gitlab CI/CD on GCP Cloud Engine, Cloud Storage and Cloud SQL; reduced deploying time by over 90%",
      "Established a backtesting system and optimized its efficiency by 42% through dynamic programming; devised an abstract layer for 20 trading models, reducing code complexity and duplication by 84.3%",
      "Built an Airflow ETL pipeline to crawl 60M+ financial data stored in Sqlite3; constructed an automatic trading program incorporating a chatbot interface, integrating external APIs from various brokers",
    ],
  },
  {
    name: "WhatNext",
    description: "an advanced music recommendation system that utilizes LLM and IR techniques",
    image: "/whatnext.png",
    github: "https://github.com/SuBoYu/WhatNext",
    link: "https://whatnext-io.streamlit.app/",
    details: [
      "Developed a playlist recommendation platform leveraging GPT-3.5 Turbo and Spotify API for interactive experiences; integrated TF-IDF and cosine similarity for context-aware recommendation, trained on a million-playlist dataset",
      "Architected a full-stack application with Streamlit for visualization and validated its performance through user studies",
    ],
  },
  {
    name: "Maskbook",
    description:
      "a mask booking and managing system",
    image: "/maskbook.png",
    github: "https://github.com/SuBoYu/mask_booking_system",
    link: "",
    details: [
      "Architected an Investing ManaDesigned a college mask booking system to assist 4 local pharmacies in distributing masks to those in need during COVID",
      "Built a web application using JavaScript, HTML, CSS; developed the PHP-based backend service in a team of 3 people",
    ],
  },
  {
    name: "Questy",
    description:
      "a deep reinforcement learning conversational recommender chatbot",
    image: "/questy.png",
    github: "https://github.com/SuBoYu/CRS_Chatbot",
    link: "",
    details: [
      "Enhanced an AI precision marketing recommendation system for an FMCG company using a Question-based Recommender System, Knowledge Graph, graph embedding and Deep Reinforcement Learning",
      "Created an algorithm called ’hierarchical action space’ to increase purchase rates by 5.3% while reducing conversation",
      "Trained Deep learning models (GRU4REC, STAMP, EAR) on the LIFE8 dataset with PyTorch and deployed on Heroku",
    ],
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/3">
                  {project.link ? (
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  ) : (
                    <Image
                    src={project.image}
                    alt=""
                    width={1000}
                    height={1000}
                    className="rounded-xl shadow-xl hover:opacity-70"
                  />
                  )}
                  </div>
                  <div className="mt-8 md:w-2/3">
                    <h1 className="text-3xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <ul className="list-disc ml-5 space-y-2 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                    <div className="flex flex-row align-bottom space-x-4 ">
                      {project.github && (
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      )}
                      {project.link && (
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      )}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
