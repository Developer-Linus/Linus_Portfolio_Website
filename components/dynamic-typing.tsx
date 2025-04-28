"use client"

import { useEffect, useState } from "react"

export default function DynamicTyping() {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const skills = [
    "Software Engineer",
    "API Architect",
    "Backend Developer",
    "Full Stack Developer",
    "Python Savvy",
  ]

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % skills.length
      const fullText = skills[current]

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1))

      // Adjust typing speed
      if (!isDeleting) {
        setTypingSpeed(150)
      } else {
        setTypingSpeed(80)
      }

      // Handle the typing cycle
      if (!isDeleting && text === fullText) {
        // Delay before starting to delete
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum((prevLoopNum) => prevLoopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, skills])

  return (
    <span className="text-purple-400">
      {text}
      <span className="animate-blink">|</span>
    </span>
  )
}
