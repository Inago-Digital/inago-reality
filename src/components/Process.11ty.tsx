import { motion } from "framer-motion"
import { Step } from "../types/Step.type"
import { useState } from "react"
import { Button } from "./Button.11ty"
import { Footer } from "./Footer.11ty"
import { StepCard } from "./StepCard.11ty"

export const processSteps: Step[][] = [
  [
    {
      title: "Vyberete si balíček",
      content:
        "Vyberete si balíček, který vám nejvíce vyhovuje, a spojíte se s naším obchodním manažerem.",
    },
    {
      title: "Podepíšeme spolupráci",
      content:
        "Souhlas podepíšete jednoduše online. Spolupráce je bez závazků a lze ji kdykoliv vypovědět.",
    },
    {
      title: "Vyplníte vstupní dotazník",
      content:
        "Získáme představu o tom, kdo jste a jak prodáváte. Předáte nám také váš branding.",
    },
  ],
  [
    {
      title: "Propojíme účty Meta",
      content:
        "Specialista vás provede nasdílením přístupů k vašemu reklamnímu účtu (Business Manageru).",
    },
    {
      title: "SSpouštíme kampaně",
      content:
        "Aktivujeme reklamy na platformách Meta (Facebook/Instagram) zacílené na Vaši cílovku.",
    },
    {
      title: "Optimalizace a reporting",
      content:
        "Sledujeme výkon kampaní, optimalizujeme cenu za poptávku a reportujeme vám výsledky.",
    },
  ],
]

export function Process() {
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

        <div className="max-w-[1800px] flex flex-col mx-auto mt-16 md:mt-24">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center">
            Jak probíhá spolupráce?
          </h2>
          <p className="text-xl mb-14 leading-relaxed text-center">
            Několik jednoduchých kroků vás dělí od toho, abyste měli perfektně
            nastavené výkonnostní kampaně.
          </p>
        </div>
      </header>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-secondary px-6 pt-20 pb-16 lg:px-20 rounded-3xl text-foreground"
      >
        <div className="max-w-[1800px] flex flex-col mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Týden 0</h2>
          <p className="text-xl mb-14 leading-relaxed">
            Na začátku se domluvíme na spolupráci. Získáme od vás přehled o tom,
            kdo jste, jaké máte cíle a jaká je vaše strategie prodeje. Na
            základě těchto informací se následně pustíme do optimální realizace
            kampaní.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {processSteps[0].map((step, index) => (
              <StepCard key={index} index={index + 1} step={step} />
            ))}
          </section>

          <Button href="/kontakt" variant="primary" size="large">
            Prohlédnout ceny
          </Button>
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
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Týden 1</h2>
          <p className="text-xl mb-14 leading-relaxed">
            V této fázi již připravujeme vše potřebné, abychom mohli začít s
            propagací vašich příspěvků a generovat poptávky po vašich
            nemovitostech nebo službách.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {processSteps[1].map((step, index) => (
              <StepCard
                key={index}
                index={index + 1}
                step={step}
                color="light"
              />
            ))}
          </section>
        </div>
      </motion.section>

      <Footer />

      <script
        id="cookieyes"
        type="text/javascript"
        src="https://cdn-cookieyes.com/client_data/5d45a5dfcfbd3be48e5ebffa/script.js"
      />
    </div>
  )
}
