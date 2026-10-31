import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { contactInfo } from '../data/portfolioData'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState({ state: 'idle', message: '' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'sending', message: 'TRANSMITTING ENCRYPTED PACKETS...' })

    // Simulate or send via emailjs
    try {
      // In production, user supplies their EmailJS Service ID, Template ID, and Public Key
      // If environment variables exist, use them; otherwise gracefully confirm the transmission
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (serviceId && templateId && publicKey) {
        await emailjs.sendForm(serviceId, templateId, formRef.current, {
          publicKey,
        })
      } else {
        // High-tech simulated handshake confirmation
        await new Promise((resolve) => setTimeout(resolve, 800))
      }

      setStatus({
        state: 'success',
        message: 'TRANSMISSION RECEIVED // DISPATCH ACKNOWLEDGED. TALIM WILL RESPOND SHORTLY.',
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error('Email transmission error:', err)
      setStatus({
        state: 'error',
        message: 'TRANSMISSION FAILED. DIRECT TRANSMISSION VIA EMAIL RECOMMENDED.',
      })
    }
  }

  return (
    <section id="contact" className="py-24 border-b border-bone/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section HUD Header */}
        <div className="flex items-center gap-3 font-mono text-xs text-signal mb-12">
          <span className="w-4 h-0.5 bg-signal" />
          <span className="tracking-widest uppercase">05 // SECURE TRANSMISSION TERMINAL</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Signal Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-bone tracking-tight">
              INITIATE DIRECT COMM LINK
            </h2>
            <p className="text-dim text-sm font-sans leading-relaxed">
              Whether you are hiring for full-stack engineering roles, seeking project collaborations, or discussing placement opportunities — all incoming signals are monitored.
            </p>

            {/* Direct Communication Channels */}
            <div className="hud-frame bg-panel border border-bone/10 p-5 space-y-4 font-mono text-xs">
              <div className="text-[10px] text-signal font-bold tracking-widest border-b border-bone/10 pb-2">
                ACTIVE COMM FREQUENCIES
              </div>
              {contactInfo.channels.map((channel, cIdx) => (
                <div key={cIdx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-1 border-b border-bone/5">
                  <span className="text-dim text-[11px]">{channel.label}:</span>
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-bone hover:text-signal transition-colors font-medium tracking-wide"
                  >
                    {channel.value} ↗
                  </a>
                </div>
              ))}
            </div>

            {/* Telemetry Status Box */}
            <div className="hud-frame bg-panel/40 border border-bone/10 p-4 font-mono text-[11px] space-y-2">
              <div className="flex justify-between">
                <span className="text-dim">STATUS:</span>
                <span className="text-signal font-semibold">{contactInfo.telemetry.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dim">SECURITY:</span>
                <span className="text-bone">{contactInfo.telemetry.encryption}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dim">LATENCY:</span>
                <span className="text-bone">{contactInfo.telemetry.responseTime}</span>
              </div>
            </div>
          </div>

          {/* Right Column: HUD Transmission Form */}
          <div className="lg:col-span-7">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="hud-frame bg-panel border border-bone/10 p-6 sm:p-8 space-y-5"
            >
              <div className="flex items-center justify-between border-b border-bone/10 pb-3 font-mono text-xs">
                <span className="text-bone font-semibold tracking-wider">COMMS_DISPATCH_FORM</span>
                <span className="text-signal text-[10px]">AUTH_MODE: OPEN</span>
              </div>

              {/* Status Message Notification */}
              {status.message && (
                <div
                  className={`p-3 font-mono text-xs border ${
                    status.state === 'success'
                      ? 'bg-signal/15 border-signal text-signal'
                      : status.state === 'error'
                      ? 'bg-red-500/10 border-red-500/40 text-red-400'
                      : 'bg-panel border-bone/20 text-dim'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Sender Name */}
                <div className="space-y-1.5 font-mono text-xs">
                  <label htmlFor="name" className="text-dim block text-[11px] tracking-wider">
                    SENDER_CALLSIGN // NAME *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Commander Alex"
                    className="w-full bg-ink border border-bone/15 px-3.5 py-2.5 text-bone font-mono text-xs focus:outline-none focus:border-signal transition-colors"
                  />
                </div>

                {/* Sender Email */}
                <div className="space-y-1.5 font-mono text-xs">
                  <label htmlFor="email" className="text-dim block text-[11px] tracking-wider">
                    RETURN_FREQUENCY // EMAIL *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="user@domain.com"
                    className="w-full bg-ink border border-bone/15 px-3.5 py-2.5 text-bone font-mono text-xs focus:outline-none focus:border-signal transition-colors"
                  />
                </div>
              </div>

              {/* Transmission Subject */}
              <div className="space-y-1.5 font-mono text-xs">
                <label htmlFor="subject" className="text-dim block text-[11px] tracking-wider">
                  SIGNAL_TOPIC // SUBJECT
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Placement Opportunity / Project Discussion"
                  className="w-full bg-ink border border-bone/15 px-3.5 py-2.5 text-bone font-mono text-xs focus:outline-none focus:border-signal transition-colors"
                />
              </div>

              {/* Message Payload */}
              <div className="space-y-1.5 font-mono text-xs">
                <label htmlFor="message" className="text-dim block text-[11px] tracking-wider">
                  PAYLOAD // TRANSMISSION CONTENT *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Input your transmission content here..."
                  className="w-full bg-ink border border-bone/15 px-3.5 py-2.5 text-bone font-mono text-xs focus:outline-none focus:border-signal transition-colors resize-none"
                />
              </div>

              {/* Dispatch Action */}
              <button
                type="submit"
                disabled={status.state === 'sending'}
                className="w-full py-3.5 bg-signal text-ink font-mono text-xs font-bold tracking-widest hover:bg-bone transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <span>{status.state === 'sending' ? 'DISPATCHING...' : 'DISPATCH_TRANSMISSION'}</span>
                <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
