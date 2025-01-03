'use client'

import { motion, useInView } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface AnimatedWrapperProps {
  children: ReactNode
  className?: string
  initial?: Record<string, number | string>
  animate?: Record<string, number | string>
  transition?: Record<string, number | string>
  // Optional props for customizing the scroll behavior
  threshold?: number // How much of the element needs to be in view
  once?: boolean // Whether to animate only once or every time it comes into view
  amount?: "some" | "all" | number // How much of the element should be in view
}

export default function AnimatedWrapper({
  children,
  className,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5 },
  // threshold = 0.2,
  once = true,
  amount = "some"
}: AnimatedWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: once,
    amount: amount,
  })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}