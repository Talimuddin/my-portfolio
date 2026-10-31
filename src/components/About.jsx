import { personal, academy, skillCategories } from '../data/portfolioData'

// Load portrait dynamically via import.meta.glob with placeholder fallback
const portraitImports = import.meta.glob('../assets/about/about-portrait.{png,jpg,jpeg,webp}', {
  eager: true,
})
const portraitSrc = Object.values(portraitImports)[0]?.default || null

export default function About() {
  return (
    <section id="about" className="py-24 border-b border-bone/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section HUD Header */}
        <div className="flex items-center gap-3 font-mono text-xs text-signal mb-12">
          <span className="w-4 h-0.5 bg-signal" />
          <span className="tracking-widest uppercase">02 // DOSSIER & ARCHITECTURE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Portrait Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="hud-frame relative bg-panel border border-bone/10 p-3 group overflow-hidden">
              <div className="relative aspect-[4/5] overflow-hidden bg-ink/60 flex items-center justify-center">
                {portraitSrc ? (
                  <img
                    src={portraitSrc}
                    alt={personal.name}
                    className="w-full h-full object-cover grayscale contrast-125 transition-all duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-dim font-mono text-xs p-6 text-center">
                    <span className="w-12 h-12 border border-signal/40 rounded-full flex items-center justify-center text-signal text-xl mb-3">
                      +
                    </span>
                    <span>PORTRAIT_ASSET_MISSING</span>
                    <span className="text-[10px] mt-1 text-dim/70">src/assets/about/about-portrait.*</span>
                  </div>
                )}

                {/* Tactical Scanline & Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 font-mono text-[10px] text-bone flex justify-between items-center bg-ink/70 px-2.5 py-1.5 border border-bone/10">
                  <span>SUBJECT: {personal.name.toUpperCase()}</span>
                  <span className="text-signal">VERIFIED // HUMAN</span>
                </div>
              </div>
            </div>

            {/* Academy Training Badge */}
            <div className="hud-frame bg-panel/60 border border-bone/10 p-5 font-mono">
              <div className="flex items-center justify-between text-xs text-signal mb-2">
                <span className="font-semibold tracking-wider">AFFILIATION // TRAINING</span>
                <span className="text-[10px] px-2 py-0.5 bg-signal/10 border border-signal/30 text-signal">
                  {academy.period}
                </span>
              </div>
              <h4 className="text-bone font-sans font-bold text-lg mb-1">{academy.name}</h4>
              <p className="text-dim text-xs font-sans mb-3">{academy.description}</p>
              <a
                href={academy.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-signal hover:text-bone transition-colors"
              >
                <span>VERIFY_ACADEMY_PROGRAM</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Details & Skills Column */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-bone font-sans tracking-tight mb-4">
                ENGINEERING HIGH-SPEED WEB PLATFORMS & AUGMENTED EXPERIENCES
              </h2>
              <p className="text-dim text-base font-sans leading-relaxed mb-4">
                {personal.bio}
              </p>
              <p className="text-dim text-base font-sans leading-relaxed">
                Trained through rigorous software engineering bootcamps at {academy.name}, specializing in high-throughput frontend ecosystems, component architecture, responsive spatial 3D interfaces, and modern full-stack workflows.
              </p>
            </div>

            {/* Technical Skills Matrix */}
            <div className="space-y-6">
              <h3 className="font-mono text-xs text-bone tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-signal" />
                TECHNICAL COMPETENCY MATRIX
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {skillCategories.map((cat) => (
                  <div
                    key={cat.code}
                    className="hud-frame bg-panel/40 border border-bone/10 p-4 space-y-3"
                  >
                    <div className="flex items-center justify-between border-b border-bone/10 pb-2">
                      <span className="font-mono text-[10px] text-signal font-bold tracking-widest">
                        {cat.code}
                      </span>
                      <span className="font-mono text-[9px] text-dim">INDEX</span>
                    </div>
                    <div className="font-mono text-xs text-bone font-semibold tracking-wider">
                      {cat.category}
                    </div>
                    <ul className="space-y-1.5 pt-1">
                      {cat.skills.map((skill, sIdx) => (
                        <li
                          key={sIdx}
                          className="flex items-center justify-between font-mono text-[11px] text-dim hover:text-bone transition-colors"
                        >
                          <span>{skill.name}</span>
                          <span className="text-[9px] text-signal/80 bg-signal/5 px-1">
                            {skill.tag}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
