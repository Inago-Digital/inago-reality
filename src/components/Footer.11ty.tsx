import { motion } from "framer-motion"
import { Button } from "./Button.11ty"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-primary  px-6 gap-6 pt-10 pb-14 lg:px-20 rounded-3xl text-foreground"
    >
      <div className="max-w-[1800px] grid grid-cols-1 lg:grid-cols-2 mx-auto">
        <div className="pt-14">
          <h2 className="text-4xl font-bold mb-6">
            Potřebujete více informací?
          </h2>
          <p className="mb-8 text-xl">
            <strong>Prodávejte nemovitosti rychleji</strong> díky chytré reklamě
            na sociálních sítích.
          </p>
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <Button href="/kontakt" variant="secondary" size="large">
              Chci konzultaci
            </Button>
            <a
              href="https://calendly.com/adam-bitez/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/graphics/calendly-logo.svg"
                alt="Calendly logo"
                className="h-12 mt-2"
              />
            </a>
          </div>
        </div>
        <img
          src="/assets/images/footer.png"
          className="w-[650px] h-auto ml-auto"
          alt="Mobile open with facebook page"
        />
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 space-x-0 md:space-x-10">
          <p>&copy; 2025 Inago Digital</p>
          <a
            href="https://inago.cz/ochrana-osobnich-udaju/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline w-fit"
          >
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
              src="/assets/graphics/powered-by-inago-light.svg"
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
                src="/assets/icons/instagram-light.svg"
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
                src="/assets/icons/facebook-light.svg"
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
                src="/assets/icons/linkedin-light.svg"
                className="w-7 h-7"
                alt="Instagram Inago Digital"
              />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
