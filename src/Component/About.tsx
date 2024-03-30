import { ReactElement } from "react"
import { experiences } from "../util/experienceItems"

function About(): ReactElement {
  const items = experiences.map((item) => <h1 className="py-4">{item}</h1>)
  return (
    <div className="bg-[#cfcfcf] rounded-tr-[100px] grid md:grid-cols-2 gap-4 md:p-8 my-4">
      <div className="p-10 gap-10">
        <h1 className="text-gray-700 text-3xl">About</h1>
        <div className="font-normal text-lg my-6">
          I am software developer who always eager to learn new things. I am
          looking forward to use my skills and expertise to contribute o
          projects that has good impact on users.
        </div>
        <div className="font-semibold">
          <span className="text-yellow-500 text-[80px] md:text-[140px] font-bold">
            2+
          </span>
          Years of experience
        </div>
      </div>
      <div className="p-10 gap-10 ">
        <h1 className="text-gray-700 text-3xl">Experience</h1>
        <div className="font-normal text-lg my-6 gap-10">{items}</div>
      </div>
    </div>
  )
}

export default About
