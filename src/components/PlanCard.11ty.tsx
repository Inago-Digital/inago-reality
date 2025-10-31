import { Button } from "./Button.11ty"
import { Plan } from "./Plan.type"

export function PlanCard(plan: Plan) {
  return (
    <div className="px-8 pt-16 pb-14 rounded-2xl flex flex-col justify-between bg-foreground">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold mb-6">{plan.title}</h2>
        <p className="md:mr-24 mb-6">{plan.description}</p>
        <ul className="space-y-4 mb-12">
          {plan.points.map((point, index) => (
            <li
              key={index}
              className="flex items-center text-2xl font-semibold"
            >
              <img
                src="/assets/icons/checkmark.svg"
                alt="Checkmark icon"
                className="inline-block w-5 h-5 mr-4"
              />
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between">
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
          <span className="text-2xl font-bold text-primary">{plan.price}</span>
        )}
        <Button
          href="https://calendly.com/adam-bitez/"
          variant="accent"
          size="medium"
        >
          Mám zájem
        </Button>
      </div>
    </div>
  )
}
