import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const services = [
  {
    title: "Residential Construction",
    desc: "Crafting homes that blend comfort, durability, and timeless design for modern living.",
  },
  {
    title: "Commercial Construction",
    desc: "Delivering offices, retail, and mixed-use spaces engineered for performance and scale.",
  },
  {
    title: "Renovation & Remodeling",
    desc: "Transforming existing spaces with thoughtful upgrades and meticulous finishing.",
  },
  {
    title: "Project Management",
    desc: "End-to-end oversight ensuring every project is delivered on time and on budget.",
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

export default function ServicesSnapshot() {
  return (
    <section className="bg-white px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <p
            className="font-sans uppercase text-gold"
            style={{ fontSize: "11px", letterSpacing: "4px", fontWeight: 400 }}
          >
            What We Do
          </p>
          <div className="my-4 h-px bg-gold" style={{ width: "40px" }} />
          <h2
            className="font-display font-semibold text-navy text-balance"
            style={{ fontSize: "clamp(36px, 5vw, 52px)" }}
          >
            Our Core Expertise
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="group border border-[#E2D9C8] bg-white p-8 transition-all duration-300 hover:border-gold hover:shadow-[0_20px_40px_rgba(28,39,65,0.08)] lg:p-10"
              style={{ borderRadius: 0 }}
              whileHover={{ y: -6 }}
            >
              <div className="h-0.5 bg-gold" style={{ width: "40px" }} />
              <h3
                className="mt-5 font-display font-semibold text-navy"
                style={{ fontSize: "24px" }}
              >
                {s.title}
              </h3>
              <p className="mt-3 font-sans" style={{ fontSize: "15px", lineHeight: 1.8, color: "#6B7280" }}>
                {s.desc}
              </p>
              <Link
                to="/services"
                className="mt-6 inline-flex items-center font-sans font-medium text-gold"
                style={{ fontSize: "13px" }}
              >
                Learn More
                <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Link
            to="/services"
            className="border border-navy bg-transparent font-sans font-semibold uppercase text-navy transition-colors duration-200 hover:bg-navy hover:text-white"
            style={{ fontSize: "13px", letterSpacing: "1.5px", padding: "0.75rem 2rem", borderRadius: 0 }}
          >
            View All Services &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
