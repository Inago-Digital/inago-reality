import { Button } from "./Button.11ty"
import { ResultCard } from "./ResultCard.11ty"
import { Result } from "./Result.types"
import { motion } from "framer-motion"
import { Step } from "./Step.type"
import { StepCard } from "./StepCard.11ty"
import { Plan } from "./Plan.type"
import { PlanCard } from "./PlanCard.11ty"
import { Footer } from "./Footer.11ty"
import { useState } from "react"
import { CookieConsent } from "@meui-creative/cookies"

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

const plans: Plan[] = [
  {
    title: "Reality Booster STANDARD",
    description: (
      <>
        Pro makléře, kteří chtějí zviditelnit své nabídky a&nbsp;získat stabilní
        přísun zájemců. Ideální volba pro jednotlivce nebo menší realitní
        kanceláře.
      </>
    ),
    points: [
      "Správa a optimalizace Meta Ads kampaní",
      "Tvorba textů pro inzerci",
      "Cílení na aktivní zájemce o koupi",
      "Pravidelný měsíční report",
    ],
    price: "8.990 Kč",
    isSale: true,
    salePrice: "5.990 Kč",
  },
  {
    title: "Reality Booster PLATINUM",
    description: (
      <>
        Pro ty, které chtějí dominovat trhu. Balíček kombinuje výkonnostní
        kampaně s&nbsp;remarketingem a&nbsp;pokročilou analýzou pro kampaně
        s&nbsp;vyššími rozpočty.
      </>
    ),
    points: [
      "Správa a optimalizace Meta Ads kampaní",
      "Testování variant kampaní",
      "Tvorba vizuálů a textů na míru",
      "Pravidelný měsíční report a konzultace",
    ],
    price: "12.990 Kč",
    isSale: true,
    salePrice: "8.990 Kč",
  },
]

export function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="m-4 lg:m-6 space-y-10 min-h-[calc(100vh-48px)]">
      <header className="bg-primary rounded-3xl text-foreground p-6 md:py-8 md:px-12">
        <div className="max-w-[1800px] flex flex-col mx-auto space-y-10">
          <nav className="flex justify-between items-center flex-grow-0">
            <a href="/" className="sr-only">
              Inago Home
            </a>

            <a href="/" className="sr-only-focusable">
              <img
                src="/assets/graphics/inago-logo-light.svg"
                alt="Inago Logo"
                className="h-16"
              />
            </a>

            <ul className="hidden md:flex items-center space-x-8 text-white font-bold text-xl">
              <li>
                <a href="/" className="hover:light transition-colors">
                  Home
                </a>
              </li>
              {/* <li>
              <a href="/o-nas" className="hover:light transition-colors">
                O nás
              </a>
            </li> */}
              <li>
                <Button href="/kontakt" variant="secondary" size="small">
                  Kontakt
                </Button>
              </li>
            </ul>

            <button
              className="md:hidden w-10 h-10 flex flex-col justify-center items-end gap-1 cursor-pointer ml-5 md:ml-0"
              onClick={toggleMenu}
            >
              <motion.span
                className="bg-dark w-full h-1"
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 8 : 0,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              />
              <motion.span
                className="bg-dark w-full h-1"
                animate={{
                  opacity: isOpen ? 0 : 1,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              />
              <motion.span
                className="bg-dark w-1/2 h-1"
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -8 : 0,
                  width: isOpen ? "100%" : "50%",
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              />
            </button>
          </nav>

          <div className="flex flex-col mt-10 lg:mt-0 gap-10 lg:gap-0 lg:flex-row relative flex-grow items-center lg:mx-6">
            <div className="lg:w-1/2">
              <h1 className="text-5xl md:text-6xl xl:text-8xl font-bold mb-6">
                Výkonnostní marketing pro&nbsp;makléře
              </h1>
              <p className="text-xl mb-8 max-w-2xl leading-relaxed">
                <strong>Prodávejte nemovitosti rychleji</strong> díky chytré
                reklamě na sociálních sítích. Vaše nabídky{" "}
                <strong>uvidí lidé, kteří skutečně kupují.</strong>
              </p>
              <Button href="/kontakt" variant="secondary" size="large">
                Mám zájem
              </Button>
            </div>
            <div className="lg:w-1/2 m-4 lg:m-0">
              <img
                src="/assets/images/hero.png"
                className="md:w-[500px] h-auto m-auto"
                alt="Illustration of a person using a laptop"
              />
            </div>

            <aside className="absolute bottom-0 right-0 bg-mustard-light w-32 md:w-64 h-32 md:h-64 rounded-full text-dark flex flex-col justify-center items-center text-center tex-xl md:text-4xl">
              jen za
              <span className="font-bold text-3xl md:text-5xl block">
                5.990 Kč
              </span>
              měsíčně
            </aside>
          </div>
        </div>
      </header>

      <article className="space-y-10">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-light flex p-6 pt-20 pb-16 lg:px-20 rounded-3xl text-dark"
        >
          <div className="max-w-[1800px] flex flex-col mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Prodávejte rychleji
            </h2>
            <p className="text-xl mb-14 leading-relaxed">
              Pomáháme realitním makléřům získávat víc zájemců a prodávat
              nemovitosti rychleji pomocí online kampaní.
            </p>

            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {results.map((result, index) => (
                <ResultCard key={index} {...result} />
              ))}
            </section>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-[1800px] flex-col md:flex-row gap-10 mx-auto flex px-2 pt-0 lg:pt-20 pb-0 lg:pb-16 lg:px-20 text-dark"
        >
          <div className="md:w-1/2 flex items-center">
            <img
              src="/assets/images/wunsch.png"
              alt="Vladimr Wünsch"
              className="w-full md:w-[560px] object-cover h-auto rounded-3xl"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-5xl font-bold mb-8 leading-snug">
              Abyste prodali,
              <br />
              musíte být vidět
            </h2>
            <p className="text-xl leading-relaxed mb-14">
              Doba, kdy lidé sami aktivně hledali byty, je pryč. Nastavíme{" "}
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
                    src="/assets/icons/flag.svg"
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
          className="bg-secondary px-6 pt-20 pb-16 lg:px-20 rounded-3xl text-foreground"
        >
          <div className="max-w-[1800px] flex flex-col mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Jak to probíhá
            </h2>
            <p className="text-xl mb-14 leading-relaxed">
              Prodávat nemovitost nebylo nikdy jednodušší. Díky přesnému
              know-how víme, jak na to.
            </p>

            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
              {steps.map((step, index) => (
                <StepCard key={index} index={index + 1} {...step} />
              ))}
            </section>

            <Button href="/kontakt" variant="primary" size="large">
              Mám zájem
            </Button>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-[1800px] flex-col md:flex-row mx-auto flex px-2 lg:pt-20 lg:pb-16 lg:px-20 text-dark items-center"
        >
          <div className="md:w-1/2">
            <q className="text-2xl md:text-3xl font-bold leading-snug mb-8 block">
              Naše balíčky výkonnostního marketingu jsme navrhli tak, aby
              odpovídaly dynamickému prostředí realit. Nabízejí tak maximální
              využití výkonu za rozumnou cenu.
            </q>
            <div className="flex items-center">
              <img
                src="/assets/images/testimonial-wunsch.png"
                alt="Photo of Vladimír Wünsch"
                className="w-20 h-20 rounded-full inline-block mr-6"
              />
              <div>
                <p className="text-2xl font-semibold">Vladimír Wünsch</p>
                <p>CEO a majitel Inago Digital</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/assets/images/testemonial.jpg"
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
          className="bg-light px-6 pt-20 pb-16 lg:px-20 rounded-3xl text-dark"
        >
          <div className="max-w-[1800px] flex flex-col mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center">
              Výhodné balíčky
            </h2>
            <p className="text-xl mb-14 leading-relaxed text-center">
              Získejte víc poptávek na vaše nemovitosti díky výkonnostnímu
              marketingu na sociálních sítích.
            </p>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {plans.map((plan, index) => (
                <PlanCard key={index} {...plan} />
              ))}
            </section>
          </div>
        </motion.section>
      </article>

      <Footer />

      <CookieConsent
        language="cs"
        accentColor="#FF4157"
        mode="strict"
        preset="minimal"
      />
    </div>
  )
}
