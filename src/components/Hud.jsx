import { useState, useEffect } from 'react'
import { personal, navLinks } from '../data/portfolioData'

export default function Hud() {
  const [time, setTime] = useState('')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Live telemetry clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const utcString = now.toISOString().substring(11, 19) + ' UTC'
      setTime(utcString)
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  // Scroll depth tracking
  useEffect(() => {
    const onScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, Math.round((window.scrollY / totalHeight) * 100)))
        setScrollProgress(progress)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-ink/80 backdrop-blur-md border-b border-bone/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between font-mono text-xs">
        {/* Left Callsign & Status */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group text-bone hover:text-signal transition-colors font-bold tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-signal animate-pulse" />
            <span>{personal.callsign}</span>
          </a>
          <span className="hidden sm:inline-block text-dim">|</span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 bg-panel border border-bone/10 text-dim text-[10px]">
            {personal.coordinates}
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-dim hover:text-bone hover:text-signal transition-colors tracking-widest text-[11px]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noreferrer"
            className="px-2.5 py-1 bg-signal/15 border border-signal/40 text-signal hover:bg-signal hover:text-ink font-semibold tracking-wider text-[10px] transition-colors inline-flex items-center gap-1"
          >
            <span>RESUME</span>
            <span>↗</span>
          </a>
        </nav>

        {/* Right Telemetry: Time & Scroll percentage */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-dim text-[10px]">
            <span>TEL_TIME:</span>
            <span className="text-bone">{time || '00:00:00 UTC'}</span>
          </div>

          <div className="flex items-center gap-1.5 px-2 py-0.5 bg-panel border border-bone/10 text-[10px]">
            <span className="text-dim">DEPTH:</span>
            <span className="text-signal font-semibold">{scrollProgress}%</span>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-bone hover:text-signal border border-bone/10 bg-panel focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="square" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="square" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-panel border-b border-bone/10 px-4 py-4 space-y-3 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block py-2 text-dim hover:text-signal tracking-widest border-b border-bone/5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 text-[10px] text-dim flex justify-between">
            <span>LOCATION: {personal.location}</span>
            <span className="text-signal">{personal.status}</span>
          </div>
        </div>
      )}
    </header>
  )
}
