import type { JSX } from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  newVal: boolean
}

export function Card({ children, newVal, ...other}: ButtonProps): JSX.Element {
  return (
    <button type="button" {...other}>
      {newVal}
      Card button{children}
    </button>
  )
}

Card.displayName = "Card"
