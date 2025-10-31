"use client"

import { cn } from "../utils/cn"
import { ButtonProps } from "./Button.types"
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"

export function Button(props: ButtonProps) {
  const {
    size = "small",
    variant = "primary",
    className,
    href,
    ...rest
  } = props

  const baseClasses =
    "font-bold rounded-full focus:outline-none text-xl transition-colors cursor-pointer flex items-center justify-center"

  const sizes = {
    small: "h-14 w-48",
    medium: "h-20 w-52",
    large: "h-20 w-64",
  }

  const variants = {
    primary: "bg-primary hover:bg-primary-light",
    secondary: "bg-secondary hover:bg-secondary-light",
    accent: "bg-accent hover:bg-accent-light",
  }

  const restAsAnchor = rest as AnchorHTMLAttributes<HTMLAnchorElement>
  const restAsButton = rest as ButtonHTMLAttributes<HTMLButtonElement>

  const disabled = Boolean((rest as unknown as { disabled?: boolean }).disabled)

  const finalClassName = cn(
    baseClasses,
    sizes[size],
    variants[variant],
    disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "",
    className
  )

  const isExternal = typeof href === "string" && /^(https?:)?\/\//.test(href)

  if (href) {
    return (
      <a
        href={href}
        className={finalClassName}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
          if (disabled) e.preventDefault()
          restAsAnchor.onClick?.(e)
        }}
        {...restAsAnchor}
      >
        {props.children}
      </a>
    )
  }

  return (
    <button
      type={restAsButton.type ?? "button"}
      className={finalClassName}
      {...restAsButton}
    >
      {props.children}
    </button>
  )
}
