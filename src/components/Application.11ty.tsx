import { useState } from "react"
import { Button } from "./Button.11ty"
import { motion } from "framer-motion"
import { applicationInfo } from "../data/applicationInfo"
import { ResultCard } from "./ResultCard.11ty"
import { applicationBenefits } from "../data/applicationBenefits"
import { StepCard } from "./StepCard.11ty"
import { Step } from "../types/Step.type"
import { Footer } from "./Footer.11ty"

export const applicationProcessSteps: Step[] = [
  {
    title: "Přihlásíte se do aplikace",
    content:
      "Vyberete si balíček, který vám nejvíce vyhovuje, a spojíte se s naším obchodním manažerem.",
  },
  {
    title: "Vyplníte onboarding",
    content:
      "Souhlas podepíšete jednoduše online. Spolupráce je bez závazků a lze ji kdykoliv vypovědět.",
  },
  {
    title: "Zadáváte kampaně",
    content:
      "Získáme představu o tom, kdo jste a jak prodáváte. Předáte nám také svůj branding.",
  },
]

export function Application() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="m-4 lg:m-6 space-y-10">
      <header className="p-6 md:py-8 md:px-12 text-dark">
        <div className="max-w-[1800px] flex flex-col mx-auto">
          <nav className="flex justify-between items-center flex-grow-0">
            <a href="/" className="sr-only">
              Inago Home
            </a>

            <a href="/" className="sr-only-focusable">
              <img
                src="/assets/graphics/inago-logo-dark.svg"
                alt="Inago Logo"
                className="h-16"
              />
            </a>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center space-x-8 text-white font-bold text-xl">
              <li>
                <a href="/" className="hover:light transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/ceny" className="hover:light transition-colors">
                  Ceny
                </a>
              </li>
              <li>
                <a href="/prubeh" className="hover:light transition-colors">
                  Průběh
                </a>
              </li>
              <li>
                <a href="/aplikace" className="hover:light transition-colors">
                  Aplikace
                </a>
              </li>
              <li>
                <Button href="/kontakt" variant="primary" size="small">
                  Kontakt
                </Button>
              </li>
            </ul>

            {/* Mobile nav overlay */}
            <div
              className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${isOpen ? "block" : "hidden"}`}
              aria-hidden={!isOpen}
              onClick={() => setIsOpen(false)}
            />
            <nav
              className={`fixed top-0 right-0 left-0 z-50 bg-light text-dark shadow-lg transition-transform duration-300 md:hidden ${isOpen ? "translate-y-0" : "-translate-y-full"} p-8 pt-24`}
              style={{ minHeight: "100vh" }}
              aria-label="Mobile menu"
              role="dialog"
              aria-modal="true"
              tabIndex={isOpen ? 0 : -1}
            >
              <ul className="flex flex-col items-center space-y-8 text-dark font-bold text-2xl">
                <li>
                  <a href="/" onClick={() => setIsOpen(false)}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/ceny" onClick={() => setIsOpen(false)}>
                    Ceny
                  </a>
                </li>
                <li>
                  <a href="/prubeh" onClick={() => setIsOpen(false)}>
                    Průběh
                  </a>
                </li>
                <li>
                  <a
                    href="/aplikace"
                    className="hover:light transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Aplikace
                  </a>
                </li>
                <li>
                  <Button
                    href="/kontakt"
                    variant="primary"
                    size="large"
                    onClick={() => setIsOpen(false)}
                  >
                    Kontakt
                  </Button>
                </li>
              </ul>
            </nav>

            <button
              className="md:hidden w-10 h-10 flex flex-col justify-center items-end gap-1 cursor-pointer ml-5 md:ml-0 z-50"
              onClick={toggleMenu}
              aria-label={isOpen ? "Zavřít menu" : "Otevřít menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
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
        </div>
      </header>

      <motion.main
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-[1800px] flex-col md:flex-row mx-auto flex gap-24 px-2 lg:px-20 text-dark items-center"
      >
        <div className="md:flex-1 w-full md:w-auto">
          <img
            src="/assets/images/app-mobile.png"
            className="w-[750px] h-auto m-auto"
            alt="Illustration of a person using a laptop"
          />
        </div>
        <div className="md:flex-1 w-full md:w-auto">
          <h1 className="text-3xl md:text-6xl font-bold mb-8 block">
            Kampaně <span className="text-primary">v aplikaci</span> a&nbsp;pod
            kontrolou
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            Konec nepřehledným e-mailům a zmatkům. Vaše{" "}
            <span className="font-bold">kampaně máte pod kontrolou</span> v naší
            aplikaci, která vám šetří čas a vše v ní ovládáte i najdete na
            jednom místě.
          </p>
          <ul>
            {applicationInfo.map((info, index) => (
              <li
                key={index}
                className="font-semibold text-2xl border-t border-light py-10 last:border-b"
              >
                <img
                  src="/assets/icons/flag.svg"
                  alt=""
                  className="inline-block w-6 h-6 mr-4"
                />
                {info}
              </li>
            ))}
          </ul>
        </div>
      </motion.main>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-secondary px-6 pt-20 pb-16 lg:px-20 rounded-3xl text-foreground"
      >
        <div className="max-w-[1800px] flex flex-col mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Na jednom místě
          </h2>
          <p className="text-xl mb-14 leading-relaxed">
            S marketingovým specialistou, který pro vás spravuje kampaně,
            komunikujete v naší aplikaci.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {applicationBenefits.map((benefit, index) => (
              <ResultCard key={index} result={benefit} darkMode />
            ))}
          </section>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-[1800px] flex-col md:flex-row mx-auto flex gap-24 px-2 lg:pt-20 lg:pb-16 lg:px-20 text-dark items-center"
      >
        <div className="md:flex-1 w-full md:w-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 block">
            Lepší přehled jste ještě neměli
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            Jaké kampaně fungují nejlépe a přivádějí vám{" "}
            <span className="font-bold">nejvíce dosahu nebo leadů?</span>{" "}
            Všechna data najdete v naší aplikaci a můžete se leadů? Všechna data
            najdete v naší aplikaci a můžete se kvalifikovaně rozhodnout, do
            čeho investovat příště.
          </p>
          <Button href="/kontakt" variant="primary" size="large">
            Mám zájem
          </Button>
        </div>
        <div className="md:flex-1 w-full md:w-auto">
          <img
            src="/assets/images/app-tablet.png"
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
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Jak to funguje
          </h2>

          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {applicationProcessSteps.map((step, index) => (
              <StepCard
                key={index}
                index={index + 1}
                step={step}
                color="light"
              />
            ))}
          </section>

          <Button href="/ceny" variant="primary" size="large">
            Prohlédnout ceny
          </Button>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
