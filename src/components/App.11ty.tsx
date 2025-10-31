import { Button } from "./Button.11ty"
import { ResultCard } from "./ResultCard.11ty"
import { Result } from "./Results.types"
import { motion } from "framer-motion"
import { Step } from "./Step.type"
import { StepCard } from "./StepCard.11ty"

const results: Result[] = [
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
]

const musts = [
  "Cílení dle lokality, nemovitosti a chování uživatelů",
  "Reklamy optimalizujeme a vyhodnocujeme",
  "Makléř má neustálý přehled o výkonu",
]

const steps: Step[] = [
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
]

export function App() {
  return (
    <div className="m-6 space-y-10">
      <header className="bg-primary flex flex-col py-8 min-h-[calc(100vh-48px)] px-12 rounded-3xl text-foreground">
        <nav className="flex justify-between items-center flex-grow-0">
          <a href="/" className="sr-only">
            Inago Home
          </a>

          <a href="/" className="sr-only-focusable">
            <img
              src="assets/graphics/inago-logo-light.svg"
              alt="Inago Logo"
              className="h-16"
            />
          </a>

          <ul className="flex items-center space-x-8 text-white font-bold text-xl">
            <li>
              <a href="/" className="hover:light transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/o-nas" className="hover:light transition-colors">
                O nás
              </a>
            </li>
            <li>
              <Button variant="secondary" size="small">
                Kontakt
              </Button>
            </li>
          </ul>
        </nav>

        <div className="flex relative flex-grow items-center mx-6">
          <div className="w-1/2">
            <h1 className="text-8xl font-bold mb-6">
              Výkonnostní marketing pro&nbsp;makléře
            </h1>
            <p className="text-xl mb-8 max-w-2xl leading-relaxed">
              <strong>Prodávejte nemovitosti rychleji</strong> díky chytré
              reklamě na sociálních sítích. Vaše nabídky{" "}
              <strong>uvidí lidé, kteří skutečně kupují</strong>.
            </p>
            <Button variant="secondary" size="large">
              Mám zájem
            </Button>
          </div>
          <div className="w-1/2">
            <img
              src="assets/images/hero.png"
              className="w-[500px] h-auto m-auto"
              alt="Illustration of a person using a laptop"
            />
          </div>

          <aside className="absolute bottom-4 right-4 bg-mustard-light w-64 h-64 rounded-full text-dark flex flex-col justify-center items-center text-center text-4xl">
            jen za
            <span className="font-bold text-5xl block">5.990 Kč</span>
            měsíčně
          </aside>
        </div>
      </header>

      <article className="space-y-10">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-light flex flex-col pt-20 pb-16 px-20 rounded-3xl text-dark"
        >
          <h2 className="text-6xl font-bold mb-8">Prodávejte rychleji</h2>
          <p className="text-xl mb-14 leading-relaxed">
            Pomáháme realitním makléřům získávat víc zájemců a prodávat
            nemovitosti rychleji pomocí online kampaní.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <ResultCard key={index} {...result} />
            ))}
          </section>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex pt-20 pb-16 px-20 text-dark"
        >
          <div className="w-1/2">
            <img
              src="assets/images/wunsch.png"
              alt="Vladimr Wünsch"
              className="w-[560px] object-cover h-auto rounded-3xl"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center">
            <h2 className="text-5xl font-bold mb-8 leading-snug">
              Abyste prodali,
              <br />
              musíte být vidět
            </h2>
            <p className="text-xl leading-relaxed mb-14">
              Doba, kdy lidé sami aktivně hledali byty, je pryč. Nastavíme
              <strong>cílené reklamy na Facebooku a Instagramu</strong>, které
              dostanou Vaše nabídky přímo před oči lidí, které hledáte.
            </p>

            <ul>
              {musts.map((must, index) => (
                <li
                  key={index}
                  className="font-semibold text-2xl border-t border-light py-10 last:border-b"
                >
                  <img
                    src="assets/icons/flag.svg"
                    alt=""
                    className="inline-block w-6 h-6 mr-4"
                  />
                  {must}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-secondary flex flex-col pt-20 pb-16 px-20 rounded-3xl text-foreground"
        >
          <h2 className="text-6xl font-bold mb-8">Jak to probíhá</h2>
          <p className="text-xl mb-14 leading-relaxed">
            Prodávat nemovitost nebylo nikdy jednodušší. Díky přesnému know-how
            víme, jak na to.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {steps.map((step, index) => (
              <StepCard key={index} index={index + 1} {...step} />
            ))}
          </section>

          <Button variant="primary" size="large">
            Mám zájem
          </Button>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex pt-20 pb-16 px-20 text-dark items-center"
        >
          <div className="w-1/2">
            <q className="text-3xl font-bold leading-snug mb-8 block">
              Naše balíčky výkonnostního marketingu jsme navrhli tak, aby
              odpovídaly dynamickému prostředí realit. Nabízejí tak maximální
              využití výkonu za rozumnou cenu.
            </q>
            <div className="flex items-center">
              <img
                src="assets/images/testimonial-wunsch.png"
                alt="Photo of Vladimír Wünsch"
                className="w-20 h-20 rounded-full inline-block mr-6"
              />
              <div>
                <p className="text-2xl font-semibold">Vladimír Wünsch</p>
                <p>CEO a majitel Inago Digital</p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <img
              src="assets/images/app.png"
              className="w-[750px] h-auto m-auto"
              alt="Illustration of a person using a laptop"
            />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-light flex flex-col pt-20 pb-16 px-20 rounded-3xl text-dark"
        >
          <h2 className="text-6xl font-bold mb-8 text-center">
            Výhodné balíčky
          </h2>
          <p className="text-xl mb-14 leading-relaxed">
            Pomáháme realitním makléřům získávat víc zájemců a prodávat
            nemovitosti rychleji pomocí online kampaní.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <ResultCard key={index} {...result} />
            ))}
          </section>
        </motion.section>
      </article>
    </div>
  )
}
