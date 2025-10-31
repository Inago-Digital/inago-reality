import { motion } from "framer-motion"
import { Button } from "./Button.11ty"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-primary grid grid-cols-2 gap-6 pt-10 pb-14 px-20 rounded-3xl text-foreground"
    >
      <div className="pt-14">
        <h2 className="text-4xl font-bold mb-6">Potřebujete více informací?</h2>
        <p className="mb-8 text-xl">
          Rádi vám vše vysvětlíme na osobním callu.
        </p>
        <div className="flex items-center space-x-8">
          <Button href="/kontakt" variant="secondary" size="large">
            Chci call
          </Button>
          <a href="">
            <img
              src="/assets/graphics/calendly-logo.svg"
              alt="Calendly logo"
              className="h-12 mt-2"
            />
          </a>
        </div>
      </div>
      <img
        src="assets/images/footer.png"
        className="w-[650px] h-auto ml-auto"
        alt="Mobile open with facebook page"
      />
      <div className="flex space-x-10">
        <p>&copy; 2025 Inago Digital</p>
        <a href="/cookies" className="hover:underline">
          Nastavení cookies
        </a>
        <a href="/privacy" className="hover:underline">
          Ochrana osobních údajů
        </a>
      </div>
      <div className="flex ml-auto space-x-8 items-center">
        <a href="https://inago.cz" target="_blank" rel="noopener noreferrer">
          <img
            src="assets/graphics/powered-by-inago.svg"
            className="w-44 h-auto"
            alt="Powered by Inago Digital"
          />
        </a>
        <a
          href="https://www.instagram.com/inagocz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/icons/instagram-light.svg"
            className="w-7 h-7 h-auto"
            alt="Instagram Inago Digital"
          />
        </a>
        <a
          href="https://www.facebook.com/inagocz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/icons/facebook-light.svg"
            className="w-7 h-7 h-auto"
            alt="Facebook Inago Digital"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/15787031"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/icons/linkedin-light.svg"
            className="w-7 h-7 h-auto"
            alt="Instagram Inago Digital"
          />
        </a>
      </div>
    </motion.footer>
  )
}
