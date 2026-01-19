import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Button } from "./Button.11ty"
import { PlanCard } from "./PlanCard.11ty"
import { plans } from "../data/plants"
import { Plan, PlanSchema } from "../types/Plan.type"
import { faqs } from "../data/faq"
import { FAQItem } from "./FAQ"
import { Footer } from "./Footer.11ty"

export const additionalPlans: Plan[] = PlanSchema.array().parse([
  {
    title: (
      <>
        Grafika k balíčku <span className="text-primary">STANDARD</span>
      </>
    ),
    description:
      "Vytvoříme prodejní vizuály pro vaše kampaně k balíčku STANDARD.",
    price: "1.490 Kč",
  },
  {
    title: (
      <>
        Grafika k balíčku <span className="text-primary">PLATINUM</span>
      </>
    ),
    description:
      "Vytvoříme prodejní vizuály pro vaše kampaně k balíčku PLATINUM.",
    price: "2.990 Kč",
  },
])

export function Prices() {
  const [isOpen, setIsOpen] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="m-4 lg:m-6 space-y-10">
      <header className="bg-light p-6 md:py-8 min-h-[calc(100vh-48px)] md:px-12 rounded-3xl text-dark">
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
                <Button href="/kontakt" variant="primary" size="small">
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
        </div>

        <div className="max-w-[1800px] flex flex-col mx-auto mt-16 md:mt-24">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center">
            Co obsahují balíčky
          </h2>
          <p className="text-xl mb-14 leading-relaxed text-center">
            Získejte víc poptávek na vaše nemovitosti díky výkonnostnímu
            marketingu na sociálních sítích.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </section>

          <h3 className="text-4xl md:text-5xl font-bold mb-8 text-center mt-20">
            Objednejte si navíc
          </h3>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalPlans.map((plan, index) => (
              <PlanCard key={index} plan={plan} cta={false} />
            ))}
          </section>
        </div>
      </header>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-[1000px] mx-auto py-12 md:py-18 px-6 md:px-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Často kladené otázky
        </h2>
        <p className="text-lg mb-12 leading-relaxed text-center">
          Přehledně jsme sepsali otázky, na které se nás nejčastěji ptáte před
          zahájením spolupráce.
        </p>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              open={openFaqIndex === index}
              onClick={() =>
                setOpenFaqIndex(openFaqIndex === index ? null : index)
              }
            />
          ))}
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
