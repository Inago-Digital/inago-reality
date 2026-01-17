import { z } from "zod"

export const PlanSchema = z.object({
  title: z.any(),
  description: z.any(),
  points: z
    .object({
      value: z.any(),
      included: z.boolean().default(true).optional(),
    })
    .array(),
  price: z.string(),
  isSale: z.boolean().optional(),
  salePrice: z.string().optional(),
})

export type Plan = z.infer<typeof PlanSchema>
