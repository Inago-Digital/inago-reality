import { Result } from "./Result.types"

export function ResultCard(result: Result) {
  return (
    <div className="p-6 md:p-8 rounded-2xl flex flex-col justify-between space-y-6 md:space-y-10 bg-foreground">
      <div className="flex items-center gap-4 md:gap-8 w-full justify-between">
        <h2 className="text-2xl md:text-3xl text-primary font-bold">
          {result.title}
        </h2>
        <div
          className={`w-16 md:w-20 h-16 md:h-20 aspect-square rounded-xl flex items-center justify-center ${result.color}`}
        >
          <img src={result.icon} alt={`${result.title} icon`} className="h-8" />
        </div>
      </div>
      <p>{result.content}</p>
    </div>
  )
}
