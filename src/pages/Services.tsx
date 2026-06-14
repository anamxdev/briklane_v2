import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import PageHero from "../components/PageHero"

const services = [
  {
    title: "Residential Construction",
    desc: "From individual villas to multi-storey apartments, we craft homes that balance comfort, durability, and timeless design for modern family living.",
  },
  {
    title: "Commercial Construction",
    desc: "We deliver offices, retail outlets, and mixed-use developments engineered for performance, scale, and long-term operational efficiency.",
  },
  {
    title: "Renovation & Remodeling",
    desc: "Breathe new life into existing structures with thoughtful upgrades, structural improvements, and meticulous finishing that respects the original character.",
  },
  {
    title: "Project Management",
    desc: "Our experts provide end-to-end oversight, coordinating teams, budgets, and timelines to ensure every project is delivered seamlessly.",
  },
  {
    title: "Interior Finishing",
    desc: "Premium interior execution covering carpentry, flooring, lighting, and finishes that turn raw spaces into refined, functional environments.",
  },
  {
    title: "Site Development",
    desc: "Comprehensive groundwork including land grading, drainage, roads, and utilities to prepare a strong foundation for any build.",
  },
]

const card = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function Services() {
  return (
    <>
      <PageHero eyebrow="What We Do" title="Our Services" />

      {/* Services grid */}
      <section className="bg-white px-6 py-20 md:px-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              className="border border-[#E2D9C8] bg-white p-10 transition-all duration-300 hover:border-gold hover:shadow-[0_20px_40px_rgba(28,39,65,0.08)]"
              style={{ borderRadius: 0 }}
            >
              <div className="h-0.5 bg-gold" style={{ width: "40px" }} />
              <h3 className="mt-5 font-display font-semibold text-navy" style={{ fontSize: "24px" }}>
                {s.title}
              </h3>
              <p className="mt-3 font-sans" style={{ fontSize: "15px", lineHeight: 1.8, color: "#6B7280" }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-navy px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <h2 className="font-display font-semibold text-white text-balance" style={{ fontSize: "clamp(32px, 5vw, 44px)" }}>
            Have a project in mind? Let&apos;s talk.
          </h2>
          <Link
            to="/contact"
            className="mt-8 bg-gold font-sans font-semibold uppercase text-navy transition-colors duration-200 hover:bg-gold-dark"
            style={{ fontSize: "13px", letterSpacing: "1.5px", padding: "1rem 3rem", borderRadius: 0 }}
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </>
  )
}
