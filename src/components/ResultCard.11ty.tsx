import { Result } from "./Result.types"

export function ResultCard(result: Result) {
  return (
    <div className="p-8 rounded-2xl flex flex-col justify-between space-y-10 bg-foreground">
      <div className="flex items-center gap-8 w-full justify-between">
        <h2 className="text-3xl text-primary font-bold">{result.title}</h2>
        <div
          className={`w-20 h-20 aspect-square rounded-xl flex items-center justify-center ${result.color}`}
        >
          <img src={result.icon} alt={`${result.title} icon`} className="h-8" />
        </div>
      </div>
      <p>{result.content}</p>
    </div>
  )
}
