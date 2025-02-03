import React from "react"
import Image from "next/image"

const experienceData = [
  {
    institution: "Trend Micro",
    logo: "/trend-micro-logo.png",
    position: "LLM Software Development Intern",
    date: "July 2024 - August 2024",
  },
  {
    institution: "Quant Illinois",
    logo: "/quant-logo.png",
    position: "Director of quantitative trading",
    date: "Feb. 2024 - Jan. 2025",
  },
  {
    institution: "QuantX",
    logo: "/quantx-logo.png",
    position: "Co-Founder and Lead Developer",
    date: "July. 2021 - Dec. 2024",
  },
  {
    institution: "OTSO Fintech",
    logo: "/otso-logo.png",
    position: "Software Engineer",
    date: "Aug. 2022 - Feb. 2023",
  },
  {
    institution: "DBS Bank",
    logo: "/dbs-logo.png",
    position: "Software Development Intern",
    date: "July 2022 - Aug. 2022",
  },
];

const ExperienceSection = () => {
  return ( 
    <section id="experience">
      <h1 className="my-10 text-center font-bold text-4xl">
        Experiences
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-20">
        {experienceData.map((experience, idx) => {
          return (
            <div key={idx}>
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="md:w-1/2">
                  <Image
                    src={experience.logo}
                    alt=""
                    width={350}
                    height={350}
                  />
                </div>
                <div className="md:w-1/2">
                  <h1 className="text-3xl font-bold mb-6">{experience.institution}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {experience.position}
                  </p>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {experience.date}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </section>

  )
}

export default ExperienceSection
