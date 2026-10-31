import { journey, academy } from '../data/portfolioData'

export default function Journey() {
  return (
    <section id="journey" className="py-24 border-b border-bone/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section HUD Header */}
        <div className="flex items-center gap-3 font-mono text-xs text-signal mb-12">
          <span className="w-4 h-0.5 bg-signal" />
          <span className="tracking-widest uppercase">04 // TRAJECTORY & TRAINING LOG</span>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-bone/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {journey.map((item) => {
            const isAcademy = item.organization === academy.name

            return (
              <div key={item.id} className="relative group">
                {/* Node Target Reticle */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 bg-ink border-2 border-signal flex items-center justify-center">
                  <div className="w-1 h-1 bg-signal" />
                </div>

                {/* Card Container */}
                <div
                  className={`hud-frame bg-panel border p-6 sm:p-8 transition-colors ${
                    isAcademy
                      ? 'border-signal/40 bg-panel/90 shadow-lg shadow-signal/5'
                      : 'border-bone/10'
                  }`}
                >
                  {/* Top Bar: Year & Status Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs mb-3">
                    <span className="text-signal font-bold tracking-widest">{item.year}</span>
                    <span
                      className={`px-2 py-0.5 text-[10px] font-semibold tracking-wider ${
                        isAcademy
                          ? 'bg-signal/20 text-signal border border-signal/40'
                          : 'bg-ink text-dim border border-bone/10'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-2xl font-bold font-sans text-bone mb-1">
                    {item.title}
                  </h3>
                  <div className="font-mono text-xs text-dim mb-4 flex items-center gap-2">
                    <span>ORGANIZATION:</span>
                    {item.orgUrl ? (
                      <a
                        href={item.orgUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-bone hover:text-signal transition-colors underline decoration-bone/20"
                      >
                        {item.organization} ↗
                      </a>
                    ) : (
                      <span className="text-bone">{item.organization}</span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="font-sans text-sm text-dim leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Skills Tag Pills */}
                  <div className="space-y-2">
                    <div className="font-mono text-[10px] text-bone/60 tracking-wider">
                      CAPABILITIES HONED:
                    </div>
                    <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                      {item.skillsAcquired.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 bg-ink border border-bone/10 text-dim"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
