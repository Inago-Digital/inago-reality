import { z } from "zod"

export const StepSchema = z.object({
  title: z.any(),
  content: z.string(),
})

export type Step = z.infer<typeof StepSchema>
