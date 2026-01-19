import { AnimatePresence, motion } from "framer-motion"
import { FAQ } from "../types/FAQ.type"

export function FAQItem({
  faq,
  open,
  onClick,
}: {
  faq: FAQ
  open: boolean
  onClick: () => void
}) {
  return (
    <div className="py-3 lg:py-6 px-4 lg:px-12 border border-primary rounded-2xl">
      <button
        className="w-full flex items-center justify-between text-left"
        onClick={onClick}
        aria-expanded={open}
      >
        <h3 className="text-lg lg:text-2xl font-bold">{faq.question}</h3>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-4xl font-bold leading-none ml-4 flex-shrink-0"
        >
          <img
            src="/assets/icons/chevron.svg"
            alt="Toggle FAQ answer"
            width={24}
            height={24}
          />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-6">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
