import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "./Button.11ty"
import { Footer } from "./Footer.11ty"

export function GDPR() {
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
    <div className="m-4 lg:m-6 space-y-10">
      <header className="p-6 md:py-8 md:px-12 rounded-3xl text-dark">
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
      </header>

      <main className="mb-20 mt-42 mx-6 md:mx-12 lg:mx-24 space-y-10">
        <header>
          <h1 className="text-4xl font-bold mb-14">
            Ochrana osobních údajů (GDPR)
          </h1>
        </header>

        <article className="space-y-10">
          <section>
            <h2 className="text-3xl font-bold mb-6">Správce osobních údajů</h2>

            <address className="not-italic mb-6">
              <p>Společnost: Inago Digital s.r.o.</p>
              <p>
                Sídlo: Ruprechtická 387/49, Liberec I-Staré Město, 460 01
                Liberec
              </p>
              <p>IČO: 08322562</p>
              <p>
                Kontakt:{" "}
                <a
                  className="text-primary hover:underline"
                  href="mailto:info@inago.cz"
                >
                  info@inago.cz
                </a>
              </p>
            </address>

            <p className="mb-6">
              Při zpracování údajů správce dodržuje povinnosti uvedené
              v&nbsp;nařízení EU č. 2016/679 ze dne 27. 4. 2016 o&nbsp;ochraně
              osobních údajů (GDPR).
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">
              Jaké osobní údaje zpracováváme
            </h2>

            <p className="mb-6">
              Správce zpracovává osobní údaje návštěvníků internetových stránek{" "}
              <a
                className="text-primary hover:underline"
                href="https://reality.inago.cz"
              >
                reality.inago.cz
              </a>{" "}
              a&nbsp;dalších fyzických osob (“subjekt údajů”) zejména
              v&nbsp;rozsahu:
            </p>

            <h3 className="text-2xl font-bold mb-4">Jméno a&nbsp;příjmení</h3>

            <ul className="list-disc list-inside mb-6">
              <li>Adresa</li>
              <li>E-mailová adresa</li>
              <li>Telefonní číslo</li>
              <li>
                U&nbsp;některých fyzických osob jsou zpracovávány jen některé
                osobní údaje.
              </li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">Technické údaje</h3>

            <p className="mb-6">
              Při pouhém informativním využívání internetových stránek správce
              získá jen ty údaje, které prohlížeč předá na server. Patří
              k&nbsp;nim:
            </p>

            <ul className="list-disc list-inside mb-6">
              <li>IP adresa</li>
              <li>Datum a&nbsp;čas dotazu/požadavku</li>
              <li>Rozdíl časových zón vůči greenwichskému času (GMT)</li>
              <li>Obsah požadavku (konkrétní stránka)</li>
              <li>Přístupový status/stavový kód HTTP</li>
              <li>Aktuálně přenášené množství dat</li>
              <li>Internetové stránky, od kterých přichází požadavek</li>
              <li>Prohlížeč a&nbsp;verze</li>
              <li>Informace o&nbsp;používaném zařízení</li>
              <li>HW nastavení, zejména rozlišení obrazovky</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">Cookies</h3>

            <p className="mb-6">
              Kromě výše uvedených údajů správce využívá tzv. cookies. Cookies
              jsou malé textové soubory, které server správce zasílá na
              prohlížeč návštěvníka v&nbsp;rámci návštěvy na internetových
              stránkách.
            </p>

            <p className="mb-6">
              Cookies slouží k&nbsp;tomu, aby zvýšily uživatelskou vlídnost
              a&nbsp;efektivitu internetové stránky. Internetové stránky správce
              využívají dočasné cookies, zejména tzv. session cookies.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">
              Právní základ zpracování
            </h2>

            <p className="mb-6">Správce zpracovává údaje na&nbsp;základě:</p>

            <ul className="list-disc list-inside mb-6">
              <li>Uzavřené smlouvy nebo opatření před uzavřením smlouvy</li>
              <li>Právní povinnosti, je-li správci uložena</li>
              <li>
                Ochrany oprávněných zájmů správce (v&nbsp;případě návštěvy
                internetových stránek)
              </li>
              <li>
                Souhlasu subjektu údajů (jen ve&nbsp;výjimečných případech)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Účely zpracování</h2>

            <p className="mb-6">
              Správce zpracovává údaje k&nbsp;těmto účelům:
            </p>

            <ul className="list-disc list-inside mb-6">
              <li>Uzavření a&nbsp;splnění smlouvy</li>
              <li>Propagační a&nbsp;marketingové účely</li>
              <li>Provoz internetových stránek</li>
              <li>Komunikace se&nbsp;zákazníky</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">
              Předávání údajů třetím stranám
            </h2>

            <p className="mb-6">
              Správce předává údaje správci internetových stránek
              a&nbsp;externímu účetnímu poradci, mají-li jimi být dále
              zpracovány.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Zásady zpracování údajů</h2>

            <p className="mb-6">
              Správce dodržuje při zpracování následující zásady:
            </p>

            <ul className="list-disc list-inside mb-6">
              <li>
                Údaje zpracovává korektně, zákonným a&nbsp;transparentním
                způsobem
              </li>
              <li>Údaje zpracovává pro konkrétní účel</li>
              <li>Zpracovává jen ty údaje, které potřebuje</li>
              <li>Zpracovává údaje přesně</li>
              <li>Nezpracovává údaje po dobu delší, než je nezbytné</li>
              <li>
                Zpracovává údaje způsobem, který zajistí náležité zabezpečení
                osobních údajů
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Vaše práva</h2>

            <p className="mb-6">Jako subjekt údajů máte právo:</p>

            <ul className="list-disc list-inside mb-6">
              <li>Požadovat od správce přístup ke&nbsp;zpracovávaným údajům</li>
              <li>Na&nbsp;opravu údajů</li>
              <li>Na&nbsp;výmaz údajů</li>
              <li>Na&nbsp;omezení zpracování údajů</li>
              <li>Vznést námitku proti zpracování údajů</li>
              <li>Na přenositelnost údajů</li>
              <li>Podat stížnost u&nbsp;Úřadu na ochranu osobních údajů</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Stížnosti a&nbsp;dotazy</h2>

            <p className="mb-6">
              Stížnost můžete podat u&nbsp;Úřadu na ochranu osobních údajů:
            </p>

            <address className="not-italic mb-6">
              <p>Adresa: Pplk. Sochora 27, 170 00 Praha 7</p>
              <p>
                Web:{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://www.uoou.cz"
                >
                  www.uoou.cz
                </a>
              </p>
            </address>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Důležité informace</h2>

            <p className="mb-6">
              Poskytnutí údajů: Poskytnutí údajů není povinností, ale
              v&nbsp;některých případech nebude bez poskytnutí údajů možné
              využít některou službu nebo funkci.
            </p>

            <p className="mb-6">
              Automatické rozhodování: Nedochází k&nbsp;automatickému
              rozhodování ani k&nbsp;profilování pomocí údajů.
            </p>

            <p className="mb-6">
              Potvrzení zpracování: Subjekt údajů má právo získat od správce
              potvrzení, zda údaje jsou či&nbsp;nejsou zpracovávány, případně
              kopie zpracovávaných údajů.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">
              Kontakt pro uplatnění práv
            </h2>

            <p className="mb-6">
              Žádosti, ve&nbsp;kterých subjekt údajů uplatňuje svá práva,
              námitky proti zpracování údajů nebo odvolání souhlasu lze zasílat:
            </p>

            <address className="not-italic mb-6">
              <p>
                Písemně: Ruprechtická 387/49, Liberec I-Staré Město, 460 01
                Liberec
              </p>
              <p>
                E-mailem:{" "}
                <a
                  className="text-primary hover:underline"
                  href="mailto:info@inago.cz"
                >
                  info@inago.cz
                </a>
              </p>
            </address>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  )
}
