import { projects } from '../data/portfolioData'

// Dynamic project asset loader
const projectImages = import.meta.glob('../assets/projects/project-*.{png,jpg,jpeg,webp}', {
  eager: true,
})

function getProjectImage(projectId) {
  for (const [path, module] of Object.entries(projectImages)) {
    if (path.includes(projectId)) {
      return module.default
    }
  }
  return null
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-b border-bone/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section HUD Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-3 font-mono text-xs text-signal">
            <span className="w-4 h-0.5 bg-signal" />
            <span className="tracking-widest uppercase">03 // DEPLOYED SYSTEMS & WORK</span>
          </div>
          <div className="font-mono text-xs text-dim">
            SYSTEMS_LOADED: <span className="text-bone font-bold">{projects.length}</span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const imageSrc = getProjectImage(project.id)

            return (
              <article
                key={project.id}
                className="hud-frame bg-panel border border-bone/10 flex flex-col justify-between group hover:border-signal/50 transition-colors"
              >
                {/* Visual Header / Asset Preview */}
                <div className="relative aspect-video bg-ink/70 border-b border-bone/10 overflow-hidden flex items-center justify-center">
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    /* Technical HUD Wireframe Placeholder */
                    <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center hud-grid relative">
                      <div className="w-16 h-16 border border-dashed border-signal/40 flex items-center justify-center mb-3">
                        <span className="font-mono text-signal text-xs font-bold">
                          {project.number}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-bone tracking-widest uppercase">
                        {project.title}
                      </span>
                      <span className="font-mono text-[10px] text-dim mt-1">
                        TELEMETRY // LIVE PREVIEW STANDBY
                      </span>
                    </div>
                  )}

                  {/* Top-Right Category Tag */}
                  <div className="absolute top-3 right-3 font-mono text-[10px] px-2 py-0.5 bg-ink/80 border border-bone/10 text-signal">
                    {project.category}
                  </div>

                  {/* Top-Left Project Number */}
                  <div className="absolute top-3 left-3 font-mono text-[10px] px-2 py-0.5 bg-ink/80 border border-bone/10 text-bone">
                    {project.number}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold font-sans text-bone group-hover:text-signal transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm text-dim leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-1 bg-ink border border-bone/10 text-dim tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Performance Metric Telemetry */}
                    <div className="font-mono text-[10px] text-dim border-t border-bone/10 pt-3 flex items-center justify-between">
                      <span className="text-dim">METRICS:</span>
                      <span className="text-signal">{project.metrics}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center gap-4 font-mono text-xs">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-signal/15 border border-signal/40 text-signal hover:bg-signal hover:text-ink font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <span>LAUNCH</span>
                      <span>↗</span>
                    </a>

                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-ink border border-bone/10 text-bone hover:border-bone/30 transition-colors flex items-center gap-1.5"
                    >
                      <span>SOURCE</span>
                      <span>//</span>
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
