import { Step } from "../types/Step.type"

export function StepCard({
  index,
  step,
  color = "dark",
}: {
  index: number
  step: Step
  color?: "dark" | "light"
}) {
  return (
    <div
      className={`p-4 md:p-8 rounded-2xl flex flex-col justify-between space-y-10 ${color === "dark" ? "bg-secondary-light" : "bg-foreground"}`}
    >
      <div className="flex gap-8 w-full justify-between">
        <h2 className="text-3xl font-bold">{step.title}</h2>
        <span className="text-5xl text-primary font-bold">
          {index.toString().padStart(2, "0")}
        </span>
      </div>
      <p>{step.content}</p>
    </div>
  )
}
