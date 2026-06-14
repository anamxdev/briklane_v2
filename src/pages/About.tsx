import { motion } from "framer-motion"
import PageHero from "../components/PageHero"
import aboutImg from "../assets/about.png"
import team1 from "../assets/team-1.png"
import team2 from "../assets/team-2.png"
import team3 from "../assets/team-3.png"
import team4 from "../assets/team-4.png"

const values = [
  {
    title: "Integrity & Trust",
    desc: "We build relationships on transparency and honesty, earning the confidence of every client we serve.",
  },
  {
    title: "Quality Craftsmanship",
    desc: "Every structure reflects our uncompromising commitment to materials, detail, and engineering excellence.",
  },
  {
    title: "On-Time Delivery",
    desc: "Disciplined planning and execution ensure we honour our timelines without ever compromising on quality.",
  },
]

const team = [
  { name: "Rajesh Verma", role: "Founder & Chairman", image: team1 },
  { name: "Priya Nair", role: "Managing Director", image: team2 },
  { name: "Arjun Mehta", role: "Head of Engineering", image: team3 },
  { name: "Sneha Reddy", role: "Design Director", image: team4 },
]

const certs = ["ISO 9001:2015 Certified", "CREDAI Member", "Green Building Council", "RERA Registered"]

const fade = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function About() {
  return (
    <>
      <PageHero eyebrow="Our Story" title="About Briklane" />

      {/* Section 1 — Company Story */}
      <section className="bg-white px-6 py-20 md:px-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <h2 className="font-display font-semibold text-navy text-balance" style={{ fontSize: "44px", lineHeight: 1.1 }}>
              Who We Are
            </h2>
            <div className="mt-5 h-px bg-gold" style={{ width: "60px" }} />
            <p className="mt-8 font-sans" style={{ fontSize: "17px", lineHeight: 1.9, color: "#4A5568" }}>
              Briklane Infra Private Limited is a Hyderabad-based construction and infrastructure company built on a
              foundation of trust, precision, and forward-thinking design. Since our inception, we have delivered
              residential, commercial, and renovation projects that stand as a testament to our commitment to quality.
            </p>
            <p className="mt-6 font-sans" style={{ fontSize: "17px", lineHeight: 1.9, color: "#4A5568" }}>
              Our team of seasoned engineers, architects, and project managers approaches every build with meticulous
              care, blending modern construction techniques with timeless craftsmanship. We don&apos;t just build
              structures; we create spaces where communities thrive and futures take shape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <img
              src={aboutImg || "/placeholder.svg"}
              alt="Briklane project manager reviewing plans with an architect on site"
              className="w-full object-cover"
              style={{ borderLeft: "4px solid #C9A338", height: "520px" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2 — Mission & Values */}
      <section className="bg-cream px-6 py-20 md:px-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <h2 className="font-display font-semibold text-navy text-balance" style={{ fontSize: "44px" }}>
              Our Values
            </h2>
            <div className="mt-5 h-px bg-gold" style={{ width: "60px" }} />
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="border border-[#E2D9C8] bg-white p-10"
                style={{ borderRadius: 0 }}
              >
                <div className="h-0.5 bg-gold" style={{ width: "40px" }} />
                <h3 className="mt-5 font-display font-semibold text-navy" style={{ fontSize: "24px" }}>
                  {v.title}
                </h3>
                <p className="mt-3 font-sans" style={{ fontSize: "15px", lineHeight: 1.8, color: "#6B7280" }}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Team */}
      <section className="bg-white px-6 py-20 md:px-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <h2 className="font-display font-semibold text-navy text-balance" style={{ fontSize: "44px" }}>
              Our Leadership
            </h2>
            <div className="mt-5 h-px bg-gold" style={{ width: "60px" }} />
          </div>
          <div className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="overflow-hidden" style={{ aspectRatio: "3 / 4" }}>
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name}, ${member.role} at Briklane Infra`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-display font-semibold text-navy" style={{ fontSize: "22px" }}>
                  {member.name}
                </h3>
                <p
                  className="mt-1 font-sans uppercase text-gold"
                  style={{ fontSize: "13px", letterSpacing: "2px", fontWeight: 400 }}
                >
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Certifications */}
      <section className="bg-cream px-6 py-16 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-display font-semibold text-navy text-balance" style={{ fontSize: "36px" }}>
            Certifications &amp; Affiliations
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {certs.map((c, i) => (
              <motion.div
                key={c}
                custom={i}
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="flex items-center justify-center border border-[#E2D9C8] p-6 text-center"
                style={{ borderRadius: 0, minHeight: "96px" }}
              >
                <span className="font-sans font-medium text-navy" style={{ fontSize: "15px" }}>
                  {c}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
