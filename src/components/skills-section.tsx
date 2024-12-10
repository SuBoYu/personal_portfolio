import React from "react"
import Image from "next/image"

const programmingLanguages = [
  { skill: "Python" },
  { skill: "Go" },
  { skill: "Javascript," },
  { skill: "TypeScript" },
  { skill: "Java" },
  { skill: "C/C++" },
  { skill: "PHP" },
  { skill: "SQL" },
  { skill: "HTML/CSS" },
  { skill: "Lua" },
]

const frameworks = [
  { skill: "Flask" },
  { skill: "FastAPI" },
  { skill: "Django" },
  { skill: "Gin" },
  { skill: "Next.js" },
  { skill: "Charts.js" },
  { skill: "React" },
  { skill: "MUI" },
  { skill: "Tailwind CSS" },
  { skill: "Pytorch" },
  { skill: "MySQL" },
  { skill: "PostgreSQL" },
  { skill: "SQLite" },
  { skill: "MongoDB" },
  { skill: "Neo4j" },
  { skill: "Redis" },
  { skill: "Apache Airflow" },
  { skill: "RabbitMQ" },
  { skill: "Celery" },
  { skill: "JWT" },
  { skill: "OAuth" },
  { skill: "Streamlit" },
  { skill: "LangChain" },
  { skill: "FlatBuffers" },
];

const tools = [
  { skill: "Kubernetes" },
  { skill: "Docker" },
  { skill: "CICD" },
  { skill: "Git" },
  { skill: "Jira" },
  { skill: "Postman" },
  { skill: "Azure" },
  { skill: "GCP" },
  { skill: "AWS" },
  { skill: "Heroku" },
  { skill: "Vercel" },
  { skill: "Figma (UI)" },
  { skill: "Android Studio" },
  { skill: "Selenium" },
  { skill: "GNS3" },
];


const SkillsSection = () => {
  return (
    <section id="skills">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Skills
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="text-center md:w-1/3 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Programming Languages</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {programmingLanguages.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
          <div className="text-center md:w-1/3 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Frameworks</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {frameworks.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
          <div className="text-center md:w-1/3 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Tools</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {tools.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection;
