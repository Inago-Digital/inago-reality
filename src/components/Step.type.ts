import { z } from "zod"

export const StepSchema = z.object({
  title: z.any(),
  content: z.any(),
})

export type Step = z.infer<typeof StepSchema>
