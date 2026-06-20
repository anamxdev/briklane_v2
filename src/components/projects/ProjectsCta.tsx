import { Link } from "react-router-dom"
import { motion } from "framer-motion"

type ProjectsCtaProps = {
  heading: string
  sub: string
}

export default function ProjectsCta({ heading, sub }: ProjectsCtaProps) {
  return (
    <section className="bg-navy py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
      >
        <h2 className="font-display font-semibold text-white text-balance" style={{ fontSize: "40px" }}>
          {heading}
        </h2>
        <p className="mt-3 font-sans text-cream" style={{ fontSize: "16px", fontWeight: 300 }}>
          {sub}
        </p>
        <Link
          to="/contact"
          className="mt-8 bg-gold font-sans font-semibold uppercase text-navy transition-opacity duration-200 hover:opacity-90"
          style={{
            fontSize: "14px",
            letterSpacing: "1.5px",
            padding: "0.875rem 2.5rem",
            borderRadius: 0,
          }}
        >
          Enquire Now
        </Link>
      </motion.div>
    </section>
  )
}
