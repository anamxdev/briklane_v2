import { motion } from "framer-motion"
import { ShieldCheck, CircleCheck as CheckCircle, Users, Award, MapPin, Handshake } from "lucide-react"

const reasons = [
  {
    icon: ShieldCheck,
    title: "Transparent Transactions",
    desc: "100% honest dealings with clear legal documentation and hassle-free registration.",
  },
  {
    icon: CheckCircle,
    title: "Verified Properties",
    desc: "Every residential, commercial, villa, farm land and plot listing is fully verified.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    desc: "Professional advice for homebuyers, investors and businesses at every stage.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    desc: "High-quality construction and infrastructure meeting modern standards and market demands.",
  },
  {
    icon: MapPin,
    title: "Strategic Locations",
    desc: "Properties in high-growth areas with strong investment potential across Hyderabad.",
  },
  {
    icon: Handshake,
    title: "End-to-End Support",
    desc: "From property selection to ownership — we are with you every step of the way.",
  },
]

const card = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const heading = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
}

export default function WhyChooseUs() {
  return (
    <section className="bg-navy px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="flex flex-col items-center text-center"
        >
          <motion.h2
            variants={heading}
            className="font-display font-semibold text-white text-balance"
            style={{ fontSize: "clamp(36px, 5vw, 52px)" }}
          >
            Why Choose Briklane?
          </motion.h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                custom={i}
                variants={card}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col p-8"
                style={{ border: "1px solid #C9A338", borderRadius: 0 }}
              >
                <Icon className="text-gold" size={28} aria-hidden="true" />
                <h3 className="mt-5 font-display font-semibold text-white" style={{ fontSize: "22px" }}>
                  {r.title}
                </h3>
                <p className="mt-3 font-sans" style={{ fontSize: "15px", lineHeight: 1.8, color: "rgba(250,247,240,0.8)" }}>
                  {r.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
