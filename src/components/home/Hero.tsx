import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import hero from "../../assets/hero.png"

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center overflow-hidden">
      {/* Background image */}
      <img
        src={hero || "/placeholder.svg"}
        alt="Briklane Infra construction site in Hyderabad"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(28,39,65,0.78) 0%, rgba(28,39,65,0.55) 60%, rgba(28,39,65,0.85) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full px-6 lg:px-0"
        style={{ paddingLeft: "10%" }}
      >
        <motion.div variants={item} className="mb-5 h-px bg-gold" style={{ width: "60px" }} />

        <motion.p
          variants={item}
          className="font-sans uppercase text-gold"
          style={{ fontSize: "12px", letterSpacing: "4px", fontWeight: 400 }}
        >
          Hyderabad&apos;s Premier Infra Company
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-4 font-display font-bold text-white text-balance"
          style={{ fontSize: "clamp(44px, 7vw, 80px)", lineHeight: 1.05, maxWidth: "700px" }}
        >
          Building Trust,
          <br />
          Creating Futures
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 font-sans text-cream"
          style={{ fontSize: "18px", fontWeight: 300, opacity: 0.85, maxWidth: "500px" }}
        >
          Delivering excellence in construction and infrastructure across Hyderabad since 2010.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center" style={{ gap: "1rem" }}>
          <Link
            to="/projects"
            className="bg-gold font-sans font-semibold uppercase text-navy transition-colors duration-200 hover:bg-gold-dark"
            style={{
              fontSize: "13px",
              letterSpacing: "1.5px",
              padding: "0.875rem 2rem",
              borderRadius: 0,
            }}
          >
            Explore Our Projects
          </Link>
          <Link
            to="/contact"
            className="font-sans font-semibold uppercase text-white transition-colors duration-200 hover:bg-white/10"
            style={{
              fontSize: "13px",
              letterSpacing: "1.5px",
              padding: "0.875rem 2rem",
              borderRadius: 0,
              border: "1px solid rgba(255,255,255,0.6)",
            }}
          >
            Get In Touch
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <ChevronDown size={28} className="text-gold" />
      </motion.div>
    </section>
  )
}
