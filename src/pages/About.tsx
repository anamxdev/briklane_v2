import { motion } from "framer-motion"
import PageHero from "../components/PageHero"
import aboutImg from "../assets/about.png"
import team1 from "../assets/team-1.png"
import team2 from "../assets/team-2.png"
import team3 from "../assets/team-3.png"
import team4 from "../assets/team-4.png"

const values = [
  {
    title: "Transparency & Trust",
    desc: "Honest transactions, clear legal documentation, ethical business practices, and hassle-free property registrations at every step.",
  },
  {
    title: "Quality & Excellence",
    desc: "Premium construction, verified properties, and modern developments that meet the highest market standards.",
  },
  {
    title: "Client-First Approach",
    desc: "Expert guidance, end-to-end support, and exceptional customer service for every homebuyer, investor, and business.",
  },
  {
    title: "Growth & Value",
    desc: "Strategic investments, sustainable developments, and long-term value creation for customers, investors, and communities.",
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

const heading = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
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
              Briklane Infra Private Limited is a trusted and professionally managed real estate company dedicated to
              helping clients buy, sell, and invest in properties with confidence. With extensive industry experience
              and a customer-centric approach, we specialize in residential apartments, villas, independent houses,
              commercial properties, farm houses, farm lands, and open plots.
            </p>
            <p className="mt-6 font-sans" style={{ fontSize: "17px", lineHeight: 1.9, color: "#4A5568" }}>
              Our experienced team offers professional guidance at every stage of the process, ensuring a seamless,
              efficient, and rewarding experience for every client. We believe that real estate is more than just
              property transactions — it is about creating value, securing futures, and helping families and businesses
              achieve their goals.
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

      {/* Section 2 — Vision */}
      <section className="bg-navy px-6 py-20 md:px-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center"
          >
            <p
              className="font-sans uppercase text-gold"
              style={{ fontSize: "11px", letterSpacing: "4px", fontWeight: 400 }}
            >
              OUR VISION
            </p>
            <h2 className="mt-4 font-display font-semibold text-white text-balance" style={{ fontSize: "clamp(36px, 5vw, 48px)" }}>
              Where We Are Headed
            </h2>
            <div className="mt-5 h-px bg-gold" style={{ width: "60px" }} />
            <p className="mt-8 font-sans text-cream" style={{ fontSize: "17px", lineHeight: 1.9, opacity: 0.85 }}>
              To be a leading and trusted real estate company, delivering premium property solutions, innovative
              developments, and long-term value to customers and investors. We are committed to excellence,
              transparency, and sustainable growth while creating vibrant communities and investment opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3 — Mission & Values */}
      <section className="bg-cream px-6 py-20 md:px-16 md:py-24">
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
              className="font-display font-semibold text-navy text-balance"
              style={{ fontSize: "44px" }}
            >
              Our Mission
            </motion.h2>
            <motion.div variants={heading} className="mt-5 h-px bg-gold" style={{ width: "60px" }} />
          </motion.div>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
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
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            className="flex flex-col items-center text-center"
          >
            <motion.h2
              variants={heading}
              className="font-display font-semibold text-navy text-balance"
              style={{ fontSize: "44px" }}
            >
              Our Leadership
            </motion.h2>
            <motion.div variants={heading} className="mt-5 h-px bg-gold" style={{ width: "60px" }} />
          </motion.div>
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
          <motion.h2
            variants={heading}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center font-display font-semibold text-navy text-balance"
            style={{ fontSize: "36px" }}
          >
            Certifications &amp; Affiliations
          </motion.h2>
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
