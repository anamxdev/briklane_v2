import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import PageHero from "../components/PageHero"

const services = [
  {
    title: "Residential Apartments & Gated Communities",
    desc: "Premium apartment projects and gated community developments designed for modern living.",
  },
  {
    title: "Villas & Independent Houses",
    desc: "Luxury villas and independent houses built to the highest standards of comfort and design.",
  },
  {
    title: "Commercial Properties & Business Spaces",
    desc: "Office spaces, retail units and commercial developments in prime Hyderabad locations.",
  },
  {
    title: "Farm Houses & Weekend Retreats",
    desc: "Exclusive farm house developments and holiday stay properties for leisure and investment.",
  },
  {
    title: "Farm House Rentals & Holiday Stay Management",
    desc: "Professional management of farm house rentals and holiday stays for owners and guests.",
  },
  {
    title: "Open Plots & DTCP/RERA Layouts",
    desc: "Fully compliant open plot layouts with clear titles and approved DTCP/RERA documentation.",
  },
  {
    title: "Property Investment Consultancy",
    desc: "Strategic portfolio planning and investment consultancy to maximise your real estate returns.",
  },
  {
    title: "Construction & Infrastructure Development",
    desc: "End-to-end construction and infrastructure services delivered with quality and precision.",
  },
  {
    title: "Real Estate Project Development & Management",
    desc: "Full-cycle project development and management from concept to completion.",
  },
  {
    title: "Property Marketing & Sales",
    desc: "Targeted marketing and professional sales support to achieve the best outcomes for your property.",
  },
  {
    title: "Legal Verification & Registration Assistance",
    desc: "Complete documentation support, legal verification and hassle-free property registration.",
  },
  {
    title: "Land Acquisition & Joint Ventures",
    desc: "Strategic land acquisition, joint venture structuring and development opportunity identification.",
  },
  {
    title: "End-to-End Real Estate Solutions",
    desc: "Comprehensive real estate services for individuals, investors and businesses of all sizes.",
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
              <h3 className="mt-5 font-display font-extrabold text-navy" style={{ fontSize: "24px" }}>
                {s.title}
              </h3>
              <p className="mt-3 font-sans" style={{ fontSize: "16px", lineHeight: 1.8, color: "#030E27" }}>
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
