import { InputHTMLAttributes } from "react"
import { FieldError } from "react-hook-form"

export type InputProps = {
  containerClassName?: string
  size?: "small" | "large"
  error?: FieldError
  label?: string
} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  | "size"
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationComplete"
  | "onAnimationIteration"
>
