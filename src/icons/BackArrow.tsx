import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

export const BackArrow = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
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
      d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
    />
  </svg>
)
