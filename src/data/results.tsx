import { Result, ResultSchema } from "../types/Result.types"

export const results: Result[] = ResultSchema.array().parse([
  {
    title: <>Více poptávek od&nbsp;zájemců</>,
    color: "bg-lavender-light",
    icon: "assets/icons/meter.svg",
    content:
      "Pomocí cílené reklamy na sociálních sítích přivedeme zájemce o inzerovanou nemovitost.",
  },
  {
    title: "Budete vidět online",
    color: "bg-primary",
    icon: "assets/icons/globe.svg",
    content:
      "Vaše nabídky se zobrazí relevantním lidem, kteří právě hledají nové bydlení.",
  },
  {
    title: <>Méně starostí s&nbsp;reklamou</>,
    color: "bg-mustard-light",
    icon: "assets/icons/bookmark.svg",
    content:
      "O celý výkonnostní marketing se postaráme za vás. Od strategie až po reporting.",
  },
])
