"use client"

import { useEffect, useState } from "react"

export default function CursorSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let animationFrame: number
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const updateMousePosition = (e: MouseEvent | TouchEvent) => {
      let clientX: number, clientY: number

      if (e.type.startsWith("touch")) {
        const touchEvent = e as TouchEvent
        if (touchEvent.touches.length > 0) {
          clientX = touchEvent.touches[0].clientX
          clientY = touchEvent.touches[0].clientY
        } else {
          return
        }
      } else {
        const mouseEvent = e as MouseEvent
        clientX = mouseEvent.clientX
        clientY = mouseEvent.clientY
      }

      targetX = clientX
      targetY = clientY
      setIsVisible(true)
    }

    const animateSpotlight = () => {
      // Smooth interpolation for lazy following effect
      currentX += (targetX - currentX) * 0.1
      currentY += (targetY - currentY) * 0.1

      setMousePosition({ x: currentX, y: currentY })
      animationFrame = requestAnimationFrame(animateSpotlight)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Start animation loop
    animateSpotlight()

    // Add event listeners
    window.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Touch events for mobile
    window.addEventListener("touchmove", updateMousePosition, { passive: true })
    window.addEventListener("touchstart", updateMousePosition, { passive: true })
    window.addEventListener("touchend", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("touchmove", updateMousePosition)
      window.removeEventListener("touchstart", updateMousePosition)
      window.removeEventListener("touchend", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 spotlight-container"
      style={{
        background: isVisible
          ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(17, 63, 103, 0.05), transparent 40%)`
          : "transparent",
        transition: "background 0.3s ease",
      }}
    />
  )
}
