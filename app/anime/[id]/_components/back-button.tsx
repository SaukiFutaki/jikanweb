'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function BackButton() {
  const router = useRouter()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: isInView ? 0 : -20, opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        variant="ghost"
        onClick={() => router.back()}
        className="p-0 hover:bg-transparent"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
    </motion.div>
  )
}

