import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

export const ForwardArrow = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    className="text-yellow-500 dark:text-yellow-400"
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
