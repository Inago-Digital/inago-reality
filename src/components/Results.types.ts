import { z } from "zod"

export const ResultSchema = z.object({
  title: z.any(),
  color: z.string(),
  icon: z.string(),
  content: z.string(),
})

export type Result = z.infer<typeof ResultSchema>
