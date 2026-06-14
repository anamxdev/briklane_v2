import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import project1 from "../../assets/project-1.png"
import project2 from "../../assets/project-2.png"
import project3 from "../../assets/project-3.png"

const projects = [
  {
    name: "Prestige Heights",
    category: "Residential",
    location: "Sayeedabad, Hyderabad",
    desc: "A premium residential tower offering modern apartments with skyline views.",
    image: project1,
  },
  {
    name: "Metro Commerce Hub",
    category: "Commercial",
    location: "Mehdipatnam, Hyderabad",
    desc: "A landmark commercial complex designed for businesses to thrive and grow.",
    image: project2,
  },
  {
    name: "The Lakeview Villas",
    category: "Residential",
    location: "Kismatpur, Hyderabad",
    desc: "Exclusive lakeside villas blending luxury living with serene surroundings.",
    image: project3,
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

export default function FeaturedProjects() {
  return (
    <section className="bg-cream px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <h2
            className="font-display font-semibold text-navy text-balance"
            style={{ fontSize: "clamp(36px, 5vw, 52px)" }}
          >
            Signature Projects
          </h2>
          <p className="mt-3 font-sans" style={{ fontSize: "16px", fontWeight: 300, color: "#6B7280" }}>
            A glimpse into our craftsmanship across Hyderabad
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              custom={i}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="group"
            >
              <div className="overflow-hidden" style={{ height: "260px" }}>
                <img
                  src={p.image || "/placeholder.svg"}
                  alt={`${p.name} — ${p.category} project in ${p.location}`}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                />
              </div>
              <div className="pt-6">
                <p
                  className="font-sans uppercase text-gold"
                  style={{ fontSize: "11px", letterSpacing: "3px", fontWeight: 400 }}
                >
                  {p.category} &middot; {p.location}
                </p>
                <h3 className="mt-2 font-display font-semibold text-navy" style={{ fontSize: "24px" }}>
                  {p.name}
                </h3>
                <p className="mt-2 font-sans" style={{ fontSize: "14px", lineHeight: 1.8, color: "#6B7280" }}>
                  {p.desc}
                </p>
                <Link
                  to="/projects"
                  className="mt-4 inline-flex items-center font-sans font-medium text-gold"
                  style={{ fontSize: "13px" }}
                >
                  View Project
                  <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Link
            to="/projects"
            className="border border-navy bg-transparent font-sans font-semibold uppercase text-navy transition-colors duration-200 hover:bg-navy hover:text-white"
            style={{ fontSize: "13px", letterSpacing: "1.5px", padding: "0.75rem 2rem", borderRadius: 0 }}
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
