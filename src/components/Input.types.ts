import { InputHTMLAttributes } from "react"
import { FieldError } from "react-hook-form"
import { z } from "zod"

export const InputPropsSchema = z.object({
  containerClassName: z.string().optional(),
  size: z.enum(["small", "large"]).optional(),
  error: z.custom<FieldError>().optional(),
  label: z.string().optional(),
})

export type InputProps = z.infer<typeof InputPropsSchema> &
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    | "size"
    | "onDrag"
    | "onDragStart"
    | "onDragEnd"
    | "onAnimationStart"
    | "onAnimationComplete"
    | "onAnimationIteration"
  >
