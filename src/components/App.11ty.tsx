import { Button } from "./Button.11ty"
import { ResultCard } from "./ResultCard.11ty"
import { motion } from "framer-motion"
import { StepCard } from "./StepCard.11ty"
import { PlanCard } from "./PlanCard.11ty"
import { Footer } from "./Footer.11ty"
import { useState } from "react"
import { CTA } from "./CTA"
import { plans } from "../data/plants"
import { results } from "../data/results"
import { musts } from "../data/musts"
import { steps } from "../data/steps"

export function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
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
                <Button href="/kontakt" variant="secondary" size="small">
                  Kontakt
                </Button>
              </li>
            </ul>

            <div
              className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${isOpen ? "block" : "hidden"}`}
              aria-hidden={!isOpen}
              onClick={() => setIsOpen(false)}
            />
            <nav
              className={`fixed top-0 right-0 left-0 z-50 bg-primary text-foreground shadow-lg transition-transform duration-300 md:hidden ${isOpen ? "translate-y-0" : "-translate-y-full"} p-8 pt-24`}
              style={{ minHeight: "100vh" }}
              aria-label="Mobile menu"
              role="dialog"
              aria-modal="true"
              tabIndex={isOpen ? 0 : -1}
            >
              <ul className="flex flex-col items-center space-y-8 text-white font-bold text-2xl">
                <li>
                  <a
                    href="/"
                    className="hover:light transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/ceny"
                    className="hover:light transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Ceny
                  </a>
                </li>
                <li>
                  <a
                    href="/prubeh"
                    className="hover:light transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Průběh
                  </a>
                </li>
                <li>
                  <Button
                    href="/kontakt"
                    variant="secondary"
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
                <ResultCard key={index} result={result} />
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
            <motion.div
              className="w-full"
              onViewportEnter={() => {
                const v = document.getElementById(
                  "main-video",
                ) as HTMLVideoElement | null
                v?.play().catch(() => {
                  /* ignore play rejection (browser/autoplay) */
                })
              }}
              onViewportLeave={() => {
                const v = document.getElementById(
                  "main-video",
                ) as HTMLVideoElement | null
                v?.pause()
              }}
              viewport={{ amount: 0.5 }}
            >
              <video
                id="main-video"
                className="w-full md:w-[560px] object-cover h-auto rounded-3xl"
                muted
                loop
                playsInline
              >
                <source src="/assets/videos/main-video.mp4" type="video/mp4" />
                Váš prohlížeč nepodporuje přehrávání videa.
              </video>
            </motion.div>
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
                <StepCard key={index} index={index + 1} step={step} />
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
            <q className="text-2xl md:text-3xl font-bold leading-snug md:leading-10 mb-8 block">
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
                <PlanCard key={index} plan={plan} />
              ))}
            </section>

            <CTA />
          </div>
        </motion.section>
      </article>

      <Footer />

      <script
        id="cookieyes"
        type="text/javascript"
        src="https://cdn-cookieyes.com/client_data/5d45a5dfcfbd3be48e5ebffa/script.js"
      />
    </div>
  )
}
