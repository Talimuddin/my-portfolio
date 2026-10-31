import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const [isActive] = useState(() => {
    if (typeof window === 'undefined') return false
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    return !prefersReducedMotion && !isTouch
  })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isActive) return

    document.body.classList.add('has-cursor')

    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    // Quick-setter for high-performance positioning
    const setCursorX = gsap.quickTo(cursor, 'x', { duration: 0.05, ease: 'power3' })
    const setCursorY = gsap.quickTo(cursor, 'y', { duration: 0.05, ease: 'power3' })
    const setFollowerX = gsap.quickTo(follower, 'x', { duration: 0.2, ease: 'power3' })
    const setFollowerY = gsap.quickTo(follower, 'y', { duration: 0.2, ease: 'power3' })

    const onMouseMove = (e) => {
      setCursorX(e.clientX)
      setCursorY(e.clientY)
      setFollowerX(e.clientX)
      setFollowerY(e.clientY)
    }

    const onMouseOver = (e) => {
      const target = e.target
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('textarea')
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)

    return () => {
      document.body.classList.remove('has-cursor')
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
    }
  }, [isActive])

  if (!isActive) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {/* Central Target Point */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] bg-signal rounded-full pointer-events-none"
      />

      {/* Outer Tactical Reticle */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 -ml-4 -mt-4 w-8 h-8 rounded-full pointer-events-none transition-[width,height,transform,background-color] duration-150 flex items-center justify-center border ${
          isHovered
            ? 'scale-150 border-signal bg-signal/15'
            : 'scale-100 border-signal/40 bg-transparent'
        }`}
      >
        <div className="w-1 h-1 bg-signal/60 rounded-full" />
      </div>
    </div>
  )
}
