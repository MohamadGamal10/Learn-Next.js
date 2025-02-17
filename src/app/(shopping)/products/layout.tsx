import { Metadata } from "next";
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "All Products",
  description: "All Products Description",
};

interface IProps {
    children: ReactNode
}

const layout = ({ children }: IProps) => {
  return (
    <div>
      <h2>Products layout</h2>
      {children}
    </div>
  )
}

export default layout