import { z } from "zod"

export const PlanSchema = z.object({
  title: z.any(),
  description: z.any(),
  points: z
    .object({
      value: z.any(),
      included: z.boolean().default(true).optional(),
    })
    .array()
    .optional(),
  price: z.string(),
  isSale: z.boolean().default(false).optional(),
  salePrice: z.string().optional(),
})

export type Plan = z.infer<typeof PlanSchema>
