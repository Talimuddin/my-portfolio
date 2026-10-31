import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { personal, stats } from '../data/portfolioData'

export default function Hero() {
  const canvasContainerRef = useRef(null)

  useEffect(() => {
    const container = canvasContainerRef.current
    if (!container) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Three.js Scene Setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    )
    camera.position.z = 4.5

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Outer Wireframe Polyhedron (Signal Orange)
    const outerGeo = new THREE.IcosahedronGeometry(1.6, 1)
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0xff5b1f,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    })
    const outerMesh = new THREE.Mesh(outerGeo, outerMat)
    scene.add(outerMesh)

    // Inner Geometric Core (Bone White)
    const innerGeo = new THREE.OctahedronGeometry(0.9, 0)
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xe8e6df,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    })
    const innerMesh = new THREE.Mesh(innerGeo, innerMat)
    scene.add(innerMesh)

    // Orbiting Point Cloud Particle Core
    const particleCount = 180
    const particlePositions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 1.2 + Math.random() * 0.8
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta)
      particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta)
      particlePositions[i + 2] = radius * Math.cos(phi)
    }
    const particleGeo = new THREE.BufferGeometry()
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    const particleMat = new THREE.PointsMaterial({
      color: 0xff5b1f,
      size: 0.035,
      transparent: true,
      opacity: 0.75,
    })
    const particleSystem = new THREE.Points(particleGeo, particleMat)
    scene.add(particleSystem)

    // Mouse Parallax Interaction
    let targetX = 0
    let targetY = 0
    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      targetX = x * 0.8
      targetY = y * 0.8
    }
    window.addEventListener('mousemove', onMouseMove)

    // Resize Observer
    const onResize = () => {
      if (!container) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', onResize)

    // Animation Loop with Visibility Optimization
    let animationFrameId
    let isVisible = true

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
      },
      { threshold: 0.1 },
    )
    observer.observe(container)

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      if (!isVisible) return

      if (!prefersReducedMotion) {
        outerMesh.rotation.y += 0.003
        outerMesh.rotation.x += 0.002
        innerMesh.rotation.y -= 0.004
        innerMesh.rotation.z += 0.003
        particleSystem.rotation.y += 0.0015

        // Smooth parallax damping
        outerMesh.rotation.x += (targetY - outerMesh.rotation.x) * 0.05
        outerMesh.rotation.y += (targetX - outerMesh.rotation.y) * 0.05
      }

      renderer.render(scene, camera)
    }
    animate()

    // Proper Three.js Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      observer.disconnect()

      outerGeo.dispose()
      outerMat.dispose()
      innerGeo.dispose()
      innerMat.dispose()
      particleGeo.dispose()
      particleMat.dispose()
      renderer.dispose()

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex flex-col justify-center overflow-hidden border-b border-bone/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top HUD Telemetry Line */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-dim mb-8 pb-3 border-b border-bone/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-signal" />
            <span className="text-bone tracking-widest">TACTICAL INTERFACE // SYSTEM ACTIVE</span>
          </div>
          <div className="flex items-center gap-4">
            <span>COORD: {personal.coordinates}</span>
            <span className="hidden sm:inline text-signal font-semibold">[{personal.status}]</span>
          </div>
        </div>

        {/* Main Grid: Info Left, 3D Canvas Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-signal/10 border border-signal/30 text-signal font-mono text-xs uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-signal animate-ping" />
              <span>{personal.role.toUpperCase()} // TAP ACADEMY INTERN</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-bone font-sans leading-[1.05]">
              HELLO, I'M <br />
              <span className="text-signal underline decoration-bone/20 underline-offset-8">
                {personal.name.toUpperCase()}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-dim font-sans max-w-2xl leading-relaxed">
              {personal.bio}
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-4 font-mono text-xs">
              <a
                href="#projects"
                className="hud-frame px-6 py-3.5 bg-signal text-ink font-bold hover:bg-bone hover:text-ink transition-colors tracking-widest inline-flex items-center gap-2"
              >
                <span>EXPLORE_PROJECTS</span>
                <span>→</span>
              </a>

              <a
                href="#contact"
                className="hud-frame px-6 py-3.5 bg-panel border border-bone/10 text-bone hover:border-signal hover:text-signal transition-colors tracking-widest inline-flex items-center gap-2"
              >
                <span>TRANSMIT_SIGNAL</span>
                <span>//</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Interactive Three.js Centerpiece */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square hud-frame bg-panel/40 border border-bone/10 flex items-center justify-center p-2">
              {/* Corner HUD labels */}
              <div className="absolute top-2 left-3 font-mono text-[10px] text-dim tracking-widest z-10">
                CORE_VISUALIZER // THREE.JS
              </div>
              <div className="absolute bottom-2 right-3 font-mono text-[10px] text-signal tracking-widest z-10">
                SYS_ORBIT // 60 FPS
              </div>

              {/* Canvas Mount */}
              <div ref={canvasContainerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-16 pt-8 border-t border-bone/10 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono">
          {stats.map((stat, idx) => (
            <div key={idx} className="hud-frame bg-panel/30 border border-bone/10 p-4">
              <div className="text-[10px] text-dim tracking-wider uppercase mb-1">
                {stat.label}
              </div>
              <div className="text-xl sm:text-2xl font-bold text-bone tracking-tight font-sans">
                {stat.value}
              </div>
              <div className="text-[11px] text-signal mt-1 tracking-wide">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
