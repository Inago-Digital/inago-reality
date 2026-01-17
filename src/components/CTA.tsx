export function CTA() {
  const getSeatsAvailable = () => {
    const now = new Date()
    const startDate = new Date("2026-01-18T00:00:00Z")
    const diffTime = Math.abs(now.getTime() - startDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const seatsReduced = Math.floor(diffDays / 3)
    const initialSeats = 18
    const seatsLeft = initialSeats - seatsReduced
    return seatsLeft > 0 ? seatsLeft : 0
  }

  if (getSeatsAvailable() === 0) {
    return null
  }

  const getSetsCorrectWord = () => {
    const seats = getSeatsAvailable()
    if (seats === 1) return "místo"
    if (seats >= 2 && seats <= 4) return "místa"
    return "míst"
  }

  return (
    <section className="bg-primary rounded-3xl px-6 md:px-8 py-6 md:py-10 flex flex-row items-center justify-center mt-8">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
        Zbývá{" "}
        <span className="text-dark">
          {getSeatsAvailable()} {getSetsCorrectWord()}
        </span>{" "}
        za zvýhodněné ceny!
      </h2>
    </section>
  )
}
