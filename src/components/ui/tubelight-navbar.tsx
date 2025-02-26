"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Home, Code, Lightbulb, GraduationCap, Mail, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: React.ElementType
}

interface NavBarProps {
  items?: NavItem[]
  className?: string
}

export function NavBar({ className, items: propItems }: NavBarProps) {
  const defaultItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "Education", url: "#education", icon: GraduationCap },
    { name: "Skills", url: "#skills", icon: Code },
    { name: "Projects", url: "#projects", icon: Lightbulb },
    { name: "Contact", url: "#contact", icon: Mail },
  ]
  
  const items = propItems || defaultItems
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Handle mobile detection
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    // Handle scroll-based navigation highlighting
    const handleScroll = () => {
      const sections = items.map(item => ({
        id: item.url.replace('#', ''),
        name: item.name,
        element: document.getElementById(item.url.replace('#', ''))
      }))

      const scrollPosition = window.scrollY + 100 // Offset for better detection

      for (const section of sections) {
        if (section.element) {
          const { offsetTop, offsetHeight } = section.element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveTab(section.name)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [items])

  return (
    <div
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-[9999] pt-6", // Increased z-index to maximum
        className,
      )}
      style={{ pointerEvents: "auto" }} // Ensures clickability
    >
      <div className="flex items-center gap-3 bg-background/95 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(item.name);
                const element = document.getElementById(item.url.replace('#', ''));
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}