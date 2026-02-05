import { Plan, PlanSchema } from "../types/Plan.type"

export const plans: Plan[] = PlanSchema.array().parse([
  {
    title: (
      <>
        Reality Booster <span className="text-primary">STANDARD</span>
      </>
    ),
    description: (
      <>
        Pro makléře, kteří chtějí{" "}
        <span className="font-bold">
          zviditelnit své nabídky a&nbsp;získat stabilní přísun zájemců.
        </span>{" "}
        Ideální volba pro jednotlivce nebo menší realitní kanceláře.
      </>
    ),
    points: [
      {
        value: (
          <>
            Správa a optimalizace Meta Ads kampaní{" "}
            <span className="text-primary">(4x)</span>
          </>
        ),
      },
      {
        value: (
          <>
            Sponzoring příspěvků <span className="text-primary">(4x)</span>
          </>
        ),
      },
      { value: "Tvorba textů pro inzerci" },
      { value: "Cílení na aktivní zájemce o koupi" },
      { value: "Pravidelný měsíční report" },
      { value: "Základní grafické úpravy" },
      { value: "Škálování Meta Ads kampaní", included: false },
      { value: "Testování variant kampaní (A/B testy)", included: false },
      { value: "Osobní konzultace se specialistou", included: false },
    ],
    price: "8.990 Kč",
    isSale: true,
    salePrice: "5.990 Kč",
  },
  {
    title: (
      <>
        Reality Booster <span className="text-primary">PLATINUM</span>
      </>
    ),
    description: (
      <>
        Pro ty, kteří <span className="font-bold">chtějí dominovat trhu.</span>{" "}
        Balíček kombinuje{" "}
        <span className="font-bold">
          výkonnostní kampaně s&nbsp;remarketingem a&nbsp;pokročilou analýzou
        </span>{" "}
        pro kampaně s&nbsp;vyššími rozpočty.
      </>
    ),
    points: [
      {
        value: (
          <>
            Správa a optimalizace Meta Ads kampaní{" "}
            <span className="text-primary">(8x)</span>
          </>
        ),
      },
      {
        value: (
          <>
            Sponzoring příspěvků <span className="text-primary">(8x)</span>
          </>
        ),
      },
      { value: "Tvorba textů pro inzerci" },
      { value: "Cílení na aktivní zájemce o koupi" },
      { value: "Pravidelný měsíční report" },
      { value: "Základní grafické úpravy" },
      { value: "Škálování Meta Ads kampaní" },
      { value: "Testování variant kampaní (A/B testy)" },
      { value: "Osobní konzultace se specialistou" },
    ],
    price: "12.990 Kč",
    isSale: true,
    salePrice: "8.990 Kč",
  },
])
