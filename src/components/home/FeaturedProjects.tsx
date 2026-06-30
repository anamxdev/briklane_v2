import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { projects } from "../../data/projects"

const featuredSlugs = ["asmangarh-new-malakpet", "new-sayeedabad-colony", "azampura"]

const featured = featuredSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project))

const card = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

const heading = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function FeaturedProjects() {
  return (
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
            style={{ fontSize: "clamp(36px, 5vw, 52px)" }}
          >
            Signature Projects
          </motion.h2>
          <motion.p
            variants={heading}
            className="mt-3 font-sans"
            style={{ fontSize: "16px", fontWeight: 300, color: "#6B7280" }}
          >
            A glimpse into our craftsmanship
          </motion.p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              custom={i}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="group"
            >
              <div className="overflow-hidden" style={{ height: "420px" }}>
                <img
                  src={project.images[0]}
                  alt={`${project.name} — ${project.location}`}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                />
              </div>
              <div className="pt-6">
                <p
                  className="font-sans uppercase text-gold"
                  style={{ fontSize: "12px", letterSpacing: "3px", fontWeight: 600 }}
                >
                  {project.type} &middot; {project.location}
                </p>
                <h3 className="mt-2 font-display font-bold text-navy" style={{ fontSize: "24px" }}>
                  {project.name}
                </h3>
                <p className="mt-2 line-clamp-2 font-sans" style={{ fontSize: "15px", lineHeight: 1.8, color: "#030E27" }}>
                  {project.description}
                </p>
                <Link
                  to={`/project/${project.slug}`}
                  className="mt-4 inline-flex items-center font-sans font-bold text-gold"
                  style={{ fontSize: "18px", fontWeight: 600 }}
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

      </div>
    </section>
  )
}
