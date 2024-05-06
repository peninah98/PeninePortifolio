import { ReactElement } from "react"
import { experiences } from "../util/experienceItems"
import StyleWrapper from "./StyleWrapper"

function About(): ReactElement {
  const items = experiences.map((item) => <h1 className="py-4">{item}</h1>)
  return (
    <StyleWrapper className="bg-[#cfcfcf] rounded-tr-[100px] grid md:grid-cols-2 gap-4 md:p-8 my-4">
      <div className="md:p-10 gap-10 py-4 px-2">
        <h1 className="text-gray-700 text-4xl font-bold">About</h1>
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
      <div className="md:p-10 gap-10 p8-4 px-2">
        <h1 className="text-gray-700 text-4xl font-bold">Experience</h1>
        <div className="font-normal text-lg my-6 gap-10">{items}</div>
      </div>
    </StyleWrapper>
  )
}

export default About
