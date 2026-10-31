import { personal, academy } from '../data/portfolioData'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-ink border-t border-bone/10 py-12 relative z-10 font-mono text-xs text-dim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Tier: Callout & Back-to-top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-bone/10 pb-8">
          <div className="space-y-1">
            <div className="text-bone font-bold tracking-wider text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-signal" />
              <span>{personal.callsign}</span>
            </div>
            <p className="text-[11px] text-dim">{personal.role}</p>
          </div>

          {/* TAP Academy Visible Training Credit */}
          <div className="hud-frame px-4 py-2 bg-panel border border-bone/10 flex items-center gap-2">
            <span className="text-[11px]">Trained at</span>
            <a
              href={academy.url}
              target="_blank"
              rel="noreferrer"
              className="text-signal hover:text-bone transition-colors font-semibold underline decoration-signal/30 underline-offset-4"
            >
              {academy.name}
            </a>
          </div>

          {/* Return to Top Anchor */}
          <button
            type="button"
            onClick={scrollToTop}
            className="px-3 py-1.5 bg-panel border border-bone/10 text-bone hover:text-signal hover:border-signal transition-colors flex items-center gap-2 text-[11px]"
          >
            <span>SYS_RETURN_TOP</span>
            <span>↑</span>
          </button>
        </div>

        {/* Bottom Tier: Telemetry & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-dim">
          <div className="flex flex-wrap items-center gap-4">
            <span>CORE: REACT 19 + VITE</span>
            <span>//</span>
            <span>STYLE: TAILWIND CSS V4</span>
            <span>//</span>
            <span>MOTION: GSAP + LENIS</span>
            <span>//</span>
            <span>3D: THREE.JS</span>
          </div>

          <div className="flex items-center gap-2">
            <span>© {CURRENT_YEAR} {personal.name}. ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
