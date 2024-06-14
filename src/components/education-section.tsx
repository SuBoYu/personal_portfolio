import React from "react"
import Image from "next/image"

const educationData = [
  {
    institution: "University of Illinois at Urbana-Champaign",
    logo: "/uiuc-logo.png",
    degree: "Master of Computer Science",
    graduation: "Jan. 2024 - May 2025",
  },
  {
    institution: "University of Southampton",
    logo: "/uos-logo.png",
    degree: "Exchange program in Computer Science",
    graduation: "Jan. 2022 - June 2022",
  },
  {
    institution: "National Yang Ming Chiao Tung University",
    logo: "/nycu-logo.png",
    degree: "Bachelor of Science in Computer Science",
    graduation: "Sep. 2018 - June 2022",
  },
];

const EducationSection = () => {
  return ( 
    <section id="education">
      <h1 className="my-10 text-center font-bold text-4xl">
        Educations
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-20">
        {educationData.map((education, idx) => {
          return (
            <div key={idx}>
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="md:w-1/3">
                  <Image
                    src={education.logo}
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
                <div className="md:w-2/3">
                  <h1 className="text-3xl font-bold mb-6">{education.institution}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {education.degree}
                  </p>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {education.graduation}
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

export default EducationSection
