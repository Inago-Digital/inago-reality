import { cn } from "../utils/cn"
import { InputProps } from "../types/Input.types"
import { InputHTMLAttributes, useId } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Input(props: InputProps) {
  const {
    containerClassName,
    size = "small",
    className,
    error,
    label,
    ...rest
  } = props

  const baseClasses = `border ${
    error ? "border-primary" : "border-light"
  } rounded-xl bg-white w-full focus:outline-none`

  const sizes = {
    small: "p-5",
    large: "px-6 py-8 text-xl",
  }

  const finalClassName = cn(baseClasses, sizes[size], className)

  const generatedId = useId()
  const passedId = (rest as Omit<InputHTMLAttributes<HTMLInputElement>, "size">)
    .id as string | undefined
  const inputId = passedId ?? generatedId
  const errorId = `${inputId}-error`

  return (
    <div
      className={cn(
        "relative inline-block text-left w-full",
        containerClassName,
      )}
    >
      {label && (
        <label htmlFor={inputId} className="block mb-2 font-medium">
          {label}
        </label>
      )}

      <motion.input
        id={inputId}
        className={finalClassName}
        aria-labelledby={label ? inputId : undefined}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        animate={error ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        {...rest}
      />

      <AnimatePresence>
        {error && (
          <motion.p
            key="error"
            id={errorId}
            className="text-sm text-primary mt-2"
            role="alert"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {error.message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
