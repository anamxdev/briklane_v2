import { useRef, useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import PageHero from "../components/PageHero"

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string

const fields = [
  { id: "name", name: "from_name", label: "Full Name", type: "text", placeholder: "Your full name" },
  { id: "email", name: "from_email", label: "Email Address", type: "email", placeholder: "you@example.com" },
  { id: "phone", name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 1234567890" },
  { id: "subject", name: "subject", label: "Subject", type: "text", placeholder: "How can we help?" },
] as const

type Status = "idle" | "loading" | "success" | "error" | "invalid"

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateForm(form: HTMLFormElement): { valid: boolean; message: string } {
  const data = new FormData(form)
  const name = (data.get("from_name") as string)?.trim()
  const email = (data.get("from_email") as string)?.trim()
  const phone = (data.get("phone") as string)?.trim()
  const subject = (data.get("subject") as string)?.trim()
  const message = (data.get("message") as string)?.trim()

  if (!name || !email || !phone || !subject || !message) {
    return { valid: false, message: "All fields are required." }
  }
  if (!emailRegex.test(email)) {
    return { valid: false, message: "Please enter a valid email address." }
  }
  const phoneDigits = phone.replace(/\D/g, "")
  if (phoneDigits.length < 10) {
    return { valid: false, message: "Please enter a valid phone number (at least 10 digits)." }
  }
  return { valid: true, message: "" }
}

const inputBase =
  "w-full bg-white font-sans text-navy outline-none transition-shadow duration-200 focus:shadow-[0_0_0_3px_rgba(201,163,56,0.12)]"

const inputStyle = {
  border: "1px solid rgba(201,163,56,0.4)",
  borderRadius: 0,
  padding: "0.875rem 1rem",
  fontSize: "16px",
  fontWeight: 400,
} as const

const MAPS_URL = "https://maps.app.goo.gl/wwL2NZSpfXrEFKPr7"
const MAP_EMBED_URL = "https://www.google.com/maps?q=17.359292,78.515044&z=17&output=embed"

const infoBlocks = [
  {
    icon: MapPin,
    label: "Address",
    lines: ["#16-1-30/1/25/1,", "Near Lokayuktha Colony Park,", "Sayeedabad, Hyderabad, TG - 500 059"],
  },
  { icon: Phone, label: "Phone", lines: ["+91 7095 658 707 | +91 9666 880 542"] },
  { icon: Mail, label: "Email", lines: ["info@briklane.co.in"] },
  { icon: Clock, label: "Working Hours", lines: ["Monday – Saturday", "9:00 AM – 6:00 PM"] },
]

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle")
  const [validationMsg, setValidationMsg] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
  if (!formRef.current) return

  const { valid, message } = validateForm(formRef.current)

  if (!valid) {
    setValidationMsg(message)
    setStatus("invalid")
    return
  }

  setValidationMsg("")
  setStatus("loading")

  try {
    const formData = new FormData(formRef.current)

    formData.append("access_key", ACCESS_KEY)

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    )

    const result = await response.json()

    if (result.success) {
      formRef.current.reset()
      setStatus("success")
    } else {
      setStatus("error")
    }
  } catch (err) {
    console.error(err)
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
                      placeholder={f.placeholder}
                      className={inputBase}
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.border = "1px solid #C9A338")}
                      onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(201,163,56,0.4)")}
                      onChange={() => status === "invalid" && setStatus("idle")}
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
                    placeholder="Tell us about your project"
                    className={inputBase}
                    style={{ ...inputStyle, minHeight: "140px", resize: "vertical" }}
                    onFocus={(e) => (e.currentTarget.style.border = "1px solid #C9A338")}
                    onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(201,163,56,0.4)")}
                    onChange={() => status === "invalid" && setStatus("idle")}
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

              {status === "invalid" && (
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
                  {validationMsg}
                </div>
              )}
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

            <div className="relative mt-10">
              <iframe
                title="Briklane Infra location — Near Lokayuktha Colony Park, Sayeedabad, Hyderabad"
                src={MAP_EMBED_URL}
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: "1px solid #E2D9C8", borderRadius: 0, display: "block" }}
              />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-2 bg-white px-4 py-2 font-sans font-semibold text-navy shadow-md transition-opacity duration-200 hover:opacity-90"
                style={{ border: "1px solid #E2D9C8", fontSize: "14px" }}
              >
                <MapPin size={16} className="text-gold" aria-hidden="true" />
                Open in Maps
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}