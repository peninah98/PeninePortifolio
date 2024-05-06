import { ReactElement, ReactNode } from "react"

interface Styles {
  className: string
  children: ReactNode
}

function StyleWrapper({ children, className }: Styles): ReactElement {
  return <div className={`mx-auto px-20 ${className}`}>{children}</div>
}

export default StyleWrapper
