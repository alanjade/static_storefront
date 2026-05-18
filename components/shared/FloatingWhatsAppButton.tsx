'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { generateGeneralInquiryLink } from '@/lib/utils'

export function FloatingWhatsAppButton() {
  const waLink = generateGeneralInquiryLink()

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      className="fixed z-50 right-4 bottom-6 md:bottom-8 md:right-8"
    >
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full text-white shadow-2xl wa-pulse transition-transform hover:scale-110 active:scale-95"
        style={{ background: 'var(--color-primary)', width: '52px', height: '52px' }}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
      </a>
    </motion.div>
  )
}