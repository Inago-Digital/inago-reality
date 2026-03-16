import { Result, ResultSchema } from "../types/Result.types"

export const applicationBenefits: Result[] = ResultSchema.array().parse([
  {
    title: "Zadávání a kontrola",
    color: "bg-lavender-light",
    icon: "../assets/icons/badge.svg",
    content:
      "Pomocí cílené reklamy na sociálních sítích přivedeme zájemce o inzerovanou nemovitost.",
  },
  {
    title: "Komunikace se správcem",
    color: "bg-primary",
    icon: "../assets/icons/messages.svg",
    content:
      "Vaše nabídky se zobrazí relevantním lidem, kteří právě hledají nové bydlení.",
  },
  {
    title: "Reporty, útraty a data",
    color: "bg-mustard-light",
    icon: "../assets/icons/chart.svg",
    content:
      "O celý výkonnostní marketing se postaráme za vás. Od strategie až po reporting.",
  },
])
