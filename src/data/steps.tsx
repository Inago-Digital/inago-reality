import { Step, StepSchema } from "../types/Step.type"

export const steps: Step[] = StepSchema.array().parse([
  {
    title: "Získáme od Vás podklady",
    content:
      "Jednoduše nám pošlete jakou nemovitost chcete zviditelnit a my se o vše postaráme.",
  },
  {
    title: "Vytvoříme kampaň",
    content:
      "Podle typu nemovitosti, regionu a dalších parametrů vytvoříme přesné zacílení. ",
  },
  {
    title: <>Optimalizujeme a&nbsp;reportujeme</>,
    content:
      "Sledujeme výkon a průběžně upravujeme kampaně pro maximální efekt.",
  },
])
