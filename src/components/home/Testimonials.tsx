import { motion } from "framer-motion"

const testimonials = [
  {
    quote:
      "Briklane delivered our project on time with exceptional quality. Their team's professionalism and attention to every detail gave us complete peace of mind.",
    name: "Rajesh Kumar",
    role: "Business Owner",
  },
  {
    quote:
      "From foundation to finishing, their attention to detail is unmatched. Our home turned out exactly as we envisioned, and the process was seamless.",
    name: "Priya Sharma",
    role: "Homeowner",
  },
  {
    quote:
      "Truly a professional team that understands what quality construction means. Briklane has become our trusted partner for every new development.",
    name: "Mohammed Imran",
    role: "Developer",
  },
]

const card = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Testimonials() {
  return (
    <section className="bg-white px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-center">
          <h2
            className="font-display font-semibold text-navy text-balance"
            style={{ fontSize: "clamp(36px, 5vw, 52px)" }}
          >
            Words of Trust
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col bg-white p-10"
              style={{ border: "1px solid #E2D9C8", borderRadius: 0 }}
            >
              <span
                className="font-display font-bold text-gold"
                style={{ fontSize: "80px", lineHeight: 0.5, opacity: 0.4, height: "40px" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p
                className="font-display italic text-navy"
                style={{ fontSize: "18px", lineHeight: 1.8 }}
              >
                {t.quote}
              </p>
              <div className="mt-8 h-px bg-gold" style={{ width: "40px" }} />
              <p className="mt-6 font-sans font-semibold text-navy" style={{ fontSize: "15px" }}>
                {t.name}
              </p>
              <p className="mt-1 font-sans" style={{ fontSize: "13px", fontWeight: 300, color: "#6B7280" }}>
                {t.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
