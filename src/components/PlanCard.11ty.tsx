import { Button } from "./Button.11ty"
import { Plan } from "../types/Plan.type"

export function PlanCard({ plan, cta = true }: { plan: Plan; cta?: boolean }) {
  return (
    <div className="px-6 md:px-8 pt-16 pb-14 rounded-2xl flex flex-col bg-foreground h-full">
      <div className="flex flex-col gap-4 h-full">
        <h2 className="text-3xl font-bold mb-4">{plan.title}</h2>
        <p className="mb-6">{plan.description}</p>
        {plan.points && (
          <ul className="space-y-4 mb-16 mt-auto">
            {plan.points.map((point, index) => (
              <li
                key={index}
                className="flex items-center gap-4 text-lg lg:text-xl font-semibold"
              >
                <img
                  src={
                    point.included
                      ? "/assets/icons/checkmark.svg"
                      : "/assets/icons/cross.svg"
                  }
                  alt="Checkmark icon"
                  className="inline-block w-5 h-5"
                />
                <p>{point.value}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-0 xl:items-center justify-between">
        {plan.isSale && plan.salePrice ? (
          <div className="flex flex-col space-y-2">
            <span className="flex text-4xl font-bold text-primary">
              {plan.salePrice}
              <aside className="text-foreground bg-primary rounded-lg text-sm font-normal ml-4 px-3 py-1 h-fit flex items-center">
                Akce
              </aside>
            </span>
            <span className="text-sm text-gray-500">
              měsíčně bez DPH / <strong>původní cena {plan.price}</strong>
            </span>
          </div>
        ) : (
          <span className="text-4xl font-bold text-primary">{plan.price}</span>
        )}
        {cta && (
          <Button href="/kontakt" variant="accent" size="medium">
            Mám zájem
          </Button>
        )}
      </div>
    </div>
  )
}
