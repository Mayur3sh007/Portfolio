'use client'

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { IconHome, IconMessage, IconUser, IconX } from "@tabler/icons-react"
import { cn } from "@/utils/cn"

const navItems = [
  {
    name: "Home",
    link: "#header",
    icon: <IconHome className="h-6 w-6 text-purple-400" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <IconMessage className="h-6 w-6 text-purple-400" />,
  },
  {
    name: "Skills",
    link: "#skills",
    icon: <IconUser className="h-6 w-6 text-purple-400" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <IconMessage className="h-6 w-6 text-purple-400" />,
  },
]

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => setIsOpen(!isOpen)

  return (
    <>
      <button
        onClick={toggleNavbar}
        className="fixed top-4 left-4 z-50 rounded-full bg-purple-600 p-3 text-white shadow-lg"
      >
        {isOpen ? (
          <IconX className="h-6 w-6" />
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed top-0 left-0 right-0 z-40 rounded-b-3xl bg-gray-900 bg-opacity-95 shadow-lg backdrop-blur-sm"
          >
            <nav className="flex flex-col items-center space-y-4 p-6 pt-16">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className={cn(
                    "flex w-full items-center justify-center space-x-2 rounded-full bg-gray-800 p-3 text-white transition-colors hover:bg-purple-600"
                  )}
                  onClick={toggleNavbar}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}