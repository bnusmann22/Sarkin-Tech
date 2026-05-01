'use client'

import { useState, useEffect, useRef } from 'react'

const WORDS = ['</ Code>', 'write 🖋️', 'build 🏗️']
const TYPE_SPEED = 120
const DELETE_SPEED = 80
const PAUSE_MS = 1500

const ProfileHero = () => {
  const [displayedWord, setDisplayedWord] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const wordIndexRef = useRef(0)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    const type = (word: string, charIndex: number) => {
      if (charIndex <= word.length) {
        setDisplayedWord(word.substring(0, charIndex))
        timeout = setTimeout(() => {
          if (charIndex === word.length) {
            // Pause then delete
            timeout = setTimeout(() => deleteWord(word, charIndex), PAUSE_MS)
          } else {
            type(word, charIndex + 1)
          }
        }, TYPE_SPEED)
      }
    }

    const deleteWord = (word: string, charIndex: number) => {
      if (charIndex >= 0) {
        setDisplayedWord(word.substring(0, charIndex))
        timeout = setTimeout(() => {
          if (charIndex === 0) {
            // Move to next word
            wordIndexRef.current = (wordIndexRef.current + 1) % WORDS.length
            type(WORDS[wordIndexRef.current], 0)
          } else {
            deleteWord(word, charIndex - 1)
          }
        }, DELETE_SPEED)
      }
    }

    // Blink cursor
    const cursorInterval = setInterval(() => setShowCursor(p => !p), 500)

    // Kick off
    timeout = setTimeout(() => type(WORDS[wordIndexRef.current], 0), 800)

    return () => {
      clearTimeout(timeout)
      clearInterval(cursorInterval)
    }
  }, []) // ✅ runs once only

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Blurred Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/assets/default-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900/50" />
      </div>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-none font-extrabold">
        <span className="font-clash text-gold drop-shadow-[0_0_12px_rgba(255,215,0,0.4)] text-6xl md:text-7xl lg:text-8xl">
          GUY
        </span>
        {`, i sabi `}
        <span>{displayedWord}</span>
        <span
          className="inline-block ml-0.5 translate-y-0.5"
          style={{ opacity: showCursor ? 1 : 0, transition: 'opacity 0.1s' }}
        >
          |
        </span>
      </h1>
      </div>
    </section>
  )
}

export default ProfileHero

