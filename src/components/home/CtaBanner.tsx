import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function CtaBanner() {
  return (
    <section className="relative bg-navy py-20 md:py-24">
      {/* Top gold line */}
      <div className="absolute left-0 top-0 h-px w-full bg-gold" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
      >
        <h2
          className="font-display font-bold text-white text-balance"
          style={{ fontSize: "clamp(40px, 6vw, 60px)", lineHeight: 1.1 }}
        >
          Ready to Build Something Great?
        </h2>
        <p
          className="mt-4 font-sans text-cream"
          style={{ fontSize: "18px", fontWeight: 300, opacity: 0.8 }}
        >
          Let&apos;s discuss your vision. We&apos;ll make it a reality.
        </p>
        <Link
          to="/contact"
          className="mt-10 bg-gold font-sans font-semibold uppercase text-navy transition-colors duration-200 hover:bg-gold-dark"
          style={{ fontSize: "13px", letterSpacing: "1.5px", padding: "1rem 3rem", borderRadius: 0 }}
        >
          Contact Us Today
        </Link>
      </motion.div>
    </section>
  )
}
