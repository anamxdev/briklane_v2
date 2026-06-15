import { useRef, useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import emailjs from "emailjs-com"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import PageHero from "../components/PageHero"

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string

// Initialize EmailJS once with the public key
emailjs.init(PUBLIC_KEY)

// `name` matches the EmailJS template variable names
const fields = [
  { id: "name", name: "from_name", label: "Full Name", type: "text", placeholder: "Your full name" },
  { id: "email", name: "from_email", label: "Email Address", type: "email", placeholder: "you@example.com" },
  { id: "phone", name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 1234567890" },
  { id: "subject", name: "subject", label: "Subject", type: "text", placeholder: "How can we help?" },
] as const

type Status = "idle" | "loading" | "success" | "error"

const inputBase =
  "w-full bg-white font-sans text-navy outline-none transition-shadow duration-200 focus:shadow-[0_0_0_3px_rgba(201,163,56,0.12)]"

const inputStyle = {
  border: "1px solid rgba(201,163,56,0.4)",
  borderRadius: 0,
  padding: "0.875rem 1rem",
  fontSize: "16px",
  fontWeight: 400,
} as const

const infoBlocks = [
  {
    icon: MapPin,
    label: "Address",
    lines: ["#16-1-30/1/25/1,", "Near Lokayuktha Colony Park,", "Sayeedabad, Hyderabad, TG - 500 059"],
  },
  { icon: Phone, label: "Phone", lines: ["+91 96668 80542"] },
  { icon: Mail, label: "Email", lines: ["info@briklane.co.in"] },
  { icon: Clock, label: "Working Hours", lines: ["Monday – Saturday", "9:00 AM – 6:00 PM"] },
]

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle")
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!formRef.current) return
    setStatus("loading")
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      formRef.current.reset()
      setStatus("success")
    } catch (err) {
      console.error("[v0] EmailJS sendForm failed:", err)
      setStatus("error")
    }
  }

  return (
    <>
      <PageHero eyebrow="Reach Out To Us" title="Get In Touch" />

      <section className="bg-white px-6 py-24 md:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 lg:grid-cols-2">
          {/* LEFT — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-display font-semibold text-navy" style={{ fontSize: "40px", lineHeight: 1.1 }}>
              Send Us a Message
            </h2>
            <p className="mt-2 font-sans" style={{ fontSize: "16px", fontWeight: 300, color: "#6B7280" }}>
              We&apos;ll get back to you within 24 hours
            </p>
            <div className="mb-10 mt-4 h-px bg-gold" style={{ width: "60px" }} />

            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 gap-6">
                {fields.map((f) => (
                  <div key={f.id} className="flex flex-col">
                    <label
                      htmlFor={f.id}
                      className="mb-2 font-sans font-medium text-navy"
                      style={{ fontSize: "14px", letterSpacing: "0.5px" }}
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      name={f.name}
                      type={f.type}
                      required
                      placeholder={f.placeholder}
                      className={inputBase}
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.border = "1px solid #C9A338")}
                      onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(201,163,56,0.4)")}
                    />
                  </div>
                ))}

                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="mb-2 font-sans font-medium text-navy"
                    style={{ fontSize: "14px", letterSpacing: "0.5px" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us about your project"
                    className={inputBase}
                    style={{ ...inputStyle, minHeight: "140px", resize: "vertical" }}
                    onFocus={(e) => (e.currentTarget.style.border = "1px solid #C9A338")}
                    onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(201,163,56,0.4)")}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-8 w-full font-sans font-semibold uppercase text-navy transition-opacity duration-200 disabled:opacity-70"
                style={{
                  backgroundColor: "#C9A338",
                  fontSize: "14px",
                  letterSpacing: "2px",
                  padding: "1rem",
                  borderRadius: 0,
                }}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <div
                  role="status"
                  className="mt-6 border font-sans"
                  style={{
                    backgroundColor: "rgba(34,197,94,0.08)",
                    borderColor: "rgba(34,197,94,0.4)",
                    color: "#15803D",
                    padding: "1rem 1.25rem",
                    fontSize: "15px",
                  }}
                >
                  Thank you! We&apos;ll be in touch soon.
                </div>
              )}
              {status === "error" && (
                <div
                  role="alert"
                  className="mt-6 border font-sans"
                  style={{
                    backgroundColor: "rgba(220,38,38,0.08)",
                    borderColor: "rgba(220,38,38,0.4)",
                    color: "#B91C1C",
                    padding: "1rem 1.25rem",
                    fontSize: "15px",
                  }}
                >
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </motion.div>

          {/* RIGHT — Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-display font-semibold text-navy" style={{ fontSize: "32px", lineHeight: 1.15 }}>
              Briklane Infra Private Limited
            </h2>
            <p className="mt-1 font-display italic text-gold" style={{ fontSize: "18px" }}>
              Building Trust | Creating Futures
            </p>
            <div className="mb-8 mt-6 h-px bg-gold" style={{ width: "60px" }} />

            <div className="flex flex-col">
              {infoBlocks.map((block, i) => {
                const Icon = block.icon
                return (
                  <div key={block.label} className={`flex gap-4 ${i > 0 ? "mt-6" : ""}`}>
                    <Icon className="mt-1 shrink-0 text-gold" size={20} aria-hidden="true" />
                    <div className="font-sans" style={{ color: "#4A5568", fontSize: "16px", lineHeight: 1.9 }}>
                      <span className="font-medium text-navy">{block.label}</span>
                      <br />
                      {block.lines.map((line) => (
                        <span key={line}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-10">
              <iframe
                title="Briklane Infra location — Sayeedabad, Hyderabad"
                src="https://www.google.com/maps?q=Sayeedabad,+Hyderabad&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: "1px solid #E2D9C8", borderRadius: 0, display: "block" }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
