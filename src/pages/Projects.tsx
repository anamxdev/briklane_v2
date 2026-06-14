import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import PageHero from "../components/PageHero"
import project1 from "../assets/project-1.png"
import project2 from "../assets/project-2.png"
import project3 from "../assets/project-3.png"
import project4 from "../assets/project-4.png"
import project5 from "../assets/project-5.png"
import project6 from "../assets/project-6.png"

type Category = "Residential" | "Commercial" | "Renovation"

const projects: {
  name: string
  category: Category
  desc: string
  image: string
}[] = [
  {
    name: "Prestige Heights",
    category: "Residential",
    desc: "A premium residential tower offering modern apartments with skyline views and curated amenities.",
    image: project1,
  },
  {
    name: "Green Valley Residences",
    category: "Residential",
    desc: "Eco-conscious homes set amid landscaped greenery, blending comfort with sustainable living.",
    image: project2,
  },
  {
    name: "Metro Commerce Hub",
    category: "Commercial",
    desc: "A landmark commercial complex designed for businesses to thrive in a connected environment.",
    image: project3,
  },
  {
    name: "Tech Park Tower",
    category: "Commercial",
    desc: "A future-ready office tower built for technology firms seeking flexible, premium workspaces.",
    image: project4,
  },
  {
    name: "Heritage Bungalow Restoration",
    category: "Renovation",
    desc: "A careful restoration that preserves classic character while introducing modern comforts.",
    image: project5,
  },
  {
    name: "Modern Office Makeover",
    category: "Renovation",
    desc: "A complete interior transformation reimagining a dated workspace into a contemporary hub.",
    image: project6,
  },
]

const filters = ["All", "Residential", "Commercial", "Renovation"] as const
type Filter = (typeof filters)[number]

const card = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.25 } },
}

export default function Projects() {
  const [active, setActive] = useState<Filter>("All")

  const visible = active === "All" ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <PageHero eyebrow="Our Portfolio" title="Our Projects" />

      {/* Filter bar */}
      <section className="bg-white px-6 pt-14 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3"
        >
          {filters.map((f) => {
            const isActive = active === f
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                aria-pressed={isActive}
                className="font-sans uppercase transition-colors duration-200"
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "1.5px",
                  padding: "0.5rem 1.5rem",
                  borderRadius: 0,
                  border: "1px solid #1C2741",
                  backgroundColor: isActive ? "#C9A338" : "transparent",
                  color: "#1C2741",
                  borderColor: isActive ? "#C9A338" : "#1C2741",
                }}
              >
                {f}
              </button>
            )
          })}
        </motion.div>
      </section>

      {/* Project grid */}
      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((p, i) => (
                <motion.article
                  key={p.name}
                  layout
                  custom={i}
                  variants={card}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="group"
                >
                  <div className="overflow-hidden" style={{ height: "280px" }}>
                    <img
                      src={p.image || "/placeholder.svg"}
                      alt={`${p.name} — ${p.category} project by Briklane Infra`}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="pt-6">
                    <p
                      className="font-sans uppercase text-gold"
                      style={{ fontSize: "11px", letterSpacing: "3px", fontWeight: 400 }}
                    >
                      {p.category}
                    </p>
                    <h3 className="mt-2 font-display font-semibold text-navy" style={{ fontSize: "24px" }}>
                      {p.name}
                    </h3>
                    <p className="mt-2 font-sans" style={{ fontSize: "15px", lineHeight: 1.8, color: "#6B7280" }}>
                      {p.desc}
                    </p>
                    <button
                      type="button"
                      className="mt-4 inline-flex items-center font-sans font-medium text-gold"
                      style={{ fontSize: "13px" }}
                    >
                      View Details
                      <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  )
}
