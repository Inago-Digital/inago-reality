import { useForm } from "react-hook-form"
import { Button } from "./Button.11ty"
import { Input } from "./Input.11ty"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

type ContactUsFormProps = {
  name: string
  phone: string
  acknowledge: boolean
}

export function Contact() {
  const [isOpen, setIsOpen] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactUsFormProps>()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const onSubmit = (data: ContactUsFormProps) => {
    console.log(data)
  }

  return (
    <div className="m-4 lg:m-6 space-y-10">
      <header className="bg-light flex flex-col p-6 md:py-8 min-h-[calc(100vh-48px)] md:px-12 rounded-3xl text-dark">
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
            {/* <li>
              <a href="/o-nas" className="hover:light transition-colors">
                O nás
              </a>
            </li> */}
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

        <div className="flex flex-col lg:flex-row lg:space-x-12 flex-grow">
          <div className="lg:w-1/2 m-0 lg:ml-6 mt-16">
            <h1 className="font-bold text-5xl mb-8">Prodávejte rychleji</h1>
            <p className="text-xl">
              Doba, kdy lidé sami aktivně hledali byty, je pryč. Nastavíme{" "}
              <strong>cílené reklamy na Facebooku a Instagramu.</strong>
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-10 space-y-6 bg-foreground px-6 py-8 rounded-3xl mt-10 md:mt-32"
            >
              <h2 className="text-xl font-bold mb-6">
                Nechte nám kontakt a ozveme vám
              </h2>
              <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-4 mb-6">
                <Input
                  id="name"
                  type="text"
                  {...register("name", {
                    required: "Toto pole je povinné.",
                  })}
                  error={errors.name}
                  placeholder="Jméno a příjmení"
                />
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone", {
                    required: "Toto pole je povinné.",
                    pattern: {
                      value: /^\+?[0-9]{9,15}$/,
                      message: "Neplatné telefonní číslo.",
                    },
                  })}
                  error={errors.phone}
                  placeholder="Telefonní číslo"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
                <div className="flex flex-col">
                  <div className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      id="acknowledge"
                      {...register("acknowledge", {
                        required: "Musíte souhlasit.",
                      })}
                      className="w-4 h-4 border-primary focus:ring-primary accent-primary"
                    />
                    <label
                      htmlFor="acknowledge"
                      className="text-sm cursor-pointer"
                    >
                      Souhlasím se{" "}
                      <a href="/privacy" className="underline">
                        zpracovním osobních údajů
                      </a>
                    </label>
                  </div>
                  <AnimatePresence>
                    {errors.acknowledge && (
                      <motion.p
                        key="acknowledge-error"
                        className="text-sm text-primary mt-1"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        {errors.acknowledge.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <Button type="submit" variant="secondary" size="small">
                  Odeslat
                </Button>
              </div>
            </form>

            <div className="mt-10 space-y-6 bg-foreground px-6 py-8 rounded-3xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="/assets/images/testimonial-wunsch.png"
                    alt="Photo of Vladimír Wünsch"
                    className="w-16 h-16 rounded-full inline-block mr-6"
                  />
                  <div>
                    <p className="text-xl font-semibold">Vladimír Wünsch</p>
                    <p>CEO a majitel Inago Digital</p>
                  </div>
                </div>

                <div className="space-x-2 hidden md:flex">
                  <a
                    href="https://wa.me/420602202876"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-[#25D366] rounded-full"
                  >
                    <img
                      src="/assets/graphics/whatsapp-logo.svg"
                      alt="WhatsApp logo"
                      className="w-6 h-6"
                    />
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-[#27A7E7] rounded-full"
                  >
                    <img
                      src="/assets/graphics/telegram-logo.svg"
                      alt="Telegram logo"
                      className="w-6 h-6 mr-1"
                    />
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <a
                  href="tel:+420602202876"
                  className="text-lg md:text-xl xl:text-2xl font-bold block hover:underline"
                >
                  <img
                    src="/assets/icons/phone.svg"
                    alt="Phone icon"
                    className="w-5 h-5 inline-block mr-2"
                  />
                  +420 602 202 876
                </a>

                <a
                  href="mailto:vladimir.wunsch@inago.cz"
                  className="text-lg md:text-xl xl:text-2xl font-bold block hover:underline"
                >
                  <img
                    src="/assets/icons/email.svg"
                    alt="Phone icon"
                    className="w-5 h-5 inline-block mr-2"
                  />
                  vladimir.wunsch@inago.cz
                </a>
              </div>

              <div className="flex md:hidden space-x-2">
                <a
                  href="https://wa.me/420602202876"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-[#25D366] rounded-full"
                >
                  <img
                    src="/assets/graphics/whatsapp-logo.svg"
                    alt="WhatsApp logo"
                    className="w-6 h-6"
                  />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-[#27A7E7] rounded-full"
                >
                  <img
                    src="/assets/graphics/telegram-logo.svg"
                    alt="Telegram logo"
                    className="w-6 h-6 mr-1"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-10">
            <div
              className="calendly-inline-widget"
              data-resize="true"
              data-url="https://calendly.com/adam-bitez/30min"
            ></div>
            <script
              type="text/javascript"
              src="https://assets.calendly.com/assets/external/widget.js"
              async
            ></script>
          </div>
        </div>

        <footer className="flex flex-col lg:flex-row mt-20 mt-10 gap-10 lg:gap-0">
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 space-x-0 md:space-x-10">
            <p>&copy; 2025 Inago Digital</p>
            <a href="/cookies" className="hover:underline w-fit">
              Nastavení cookies
            </a>
            <a href="/privacy" className="hover:underline w-fit">
              Ochrana osobních údajů
            </a>
          </div>
          <div className="flex flex-col md:flex-row lg:ml-auto gap-6 md:space-x-8 md:items-center">
            <a
              className="order-2 md:order-1 w-fit"
              href="https://inago.cz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/graphics/powered-by-inago-dark.svg"
                className="w-44 h-auto"
                alt="Powered by Inago Digital"
              />
            </a>
            <div className="flex order-1 md:order-2 space-x-8 items-center">
              <a
                href="https://www.instagram.com/inagocz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/icons/instagram-dark.svg"
                  className="w-7 h-7"
                  alt="Instagram Inago Digital"
                />
              </a>
              <a
                href="https://www.facebook.com/inagocz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/icons/facebook-dark.svg"
                  className="w-7 h-7"
                  alt="Facebook Inago Digital"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/15787031"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/icons/linkedin-dark.svg"
                  className="w-7 h-7"
                  alt="Instagram Inago Digital"
                />
              </a>
            </div>
          </div>
        </footer>
      </header>
    </div>
  )
}
