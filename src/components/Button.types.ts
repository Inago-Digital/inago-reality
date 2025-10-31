import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react"
import { z } from "zod"

export const ButtonPropsSchema = z.object({
  size: z.enum(["small", "medium", "large"]).optional(),
  variant: z.enum(["primary", "secondary", "accent"]).optional(),
  href: z.string().optional(),
})

export type ButtonProps = z.infer<typeof ButtonPropsSchema> &
  (
    | ButtonHTMLAttributes<HTMLButtonElement>
    | AnchorHTMLAttributes<HTMLAnchorElement>
  )
