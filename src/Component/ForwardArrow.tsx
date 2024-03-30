import React from "react"
const ForwardArrow = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    {...props}>
    <path
      d="M0 0h24v24H0V0z"
      fill="none"
    />
    <path
      fill="currentColor"
      d="M14.41 8.59L10.83 12l3.58 3.59L14 17l-6-6 6-6z"
    />
  </svg>
)

export default ForwardArrow
