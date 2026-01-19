import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react"

export type ButtonProps = {
  size?: "small" | "medium" | "large"
  variant?: "primary" | "secondary" | "accent"
  href?: string
} &
  (
    | ButtonHTMLAttributes<HTMLButtonElement>
    | AnchorHTMLAttributes<HTMLAnchorElement>
  )
