import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import about from "../../assets/about.png"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function IntroStrip() {
  return (
    <section className="bg-cream px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[55fr_45fr] lg:gap-16">
        {/* Left */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p
            className="font-sans uppercase text-gold"
            style={{ fontSize: "11px", letterSpacing: "4px", fontWeight: 400 }}
          >
            About Briklane Infra
          </p>
          <div className="mb-5 mt-2 h-px bg-gold" style={{ width: "40px" }} />

          <h2
            className="font-display font-semibold text-navy text-balance"
            style={{ fontSize: "clamp(34px, 4vw, 48px)", lineHeight: 1.15 }}
          >
            Built on Trust,
            <br />
            Designed for the Future
          </h2>

          <p
            className="mt-6 font-sans"
            style={{ fontSize: "16px", lineHeight: 1.9, color: "#4A5568" }}
          >
            Briklane Infra Private Limited is a trusted and professionally managed real estate company dedicated to
            helping clients buy, sell, and invest in properties with confidence. With extensive industry experience and
            a customer-centric approach, we specialize in residential apartments, villas, commercial properties, farm
            houses, farm lands, and open plots.
          </p>
          <p
            className="mt-6 font-sans"
            style={{ fontSize: "16px", lineHeight: 1.9, color: "#4A5568" }}
          >
            We believe that real estate is more than just property transactions &mdash; it is about creating value,
            securing futures, and helping families and businesses achieve their goals.
          </p>

          <Link
            to="/about"
            className="group mt-8 inline-flex items-center font-sans font-medium text-gold"
            style={{ fontSize: "15px" }}
          >
            <span className="border-b border-transparent transition-colors duration-200 group-hover:border-gold">
              Discover Our Story
            </span>
            <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </motion.div>

        {/* Right */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
          style={{ borderLeft: "4px solid #C9A338" }}
        >
          <img
            src={about || "/placeholder.svg"}
            alt="Briklane Infra project manager reviewing plans on site"
            className="h-full w-full object-cover"
            style={{ aspectRatio: "4 / 3" }}
          />
        </motion.div>
      </div>
    </section>
  )
}
