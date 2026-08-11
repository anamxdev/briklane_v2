import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import type { Project } from "../../data/projects"

const FALLBACK_IMAGE = "/img/image.png"

type ProjectCardProps = {
  project: Project
  index: number
  variant: "ongoing" | "completed"
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function ProjectCard({ project, index, variant }: ProjectCardProps) {
  const badgeStyle =
    variant === "ongoing"
      ? { backgroundColor: "#B48845", color: "#1C2741" }
      : { backgroundColor: "#1C2741", color: "#B48845" }

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      className="group"
    >
      <Link
  to={
    (project as any).category
      ? `/listing/${project.slug}`
      : `/project/${project.slug}`
  }
  className="block"
>
        <div className="h-[620px] overflow-hidden">
          <img
            src={project.images?.[0] || (project as any).coverImage || FALLBACK_IMAGE}
            alt={`${project.name} — ${project.location}`}
            className="h-full w-full object-cover transition-transform duration-[450ms] ease-out group-hover:scale-[1.04]"
            onError={(e) => {
              e.currentTarget.src = FALLBACK_IMAGE
            }}
          />
        </div>

        <div className="pt-6">
          <div className="mb-5 h-[1.5px] bg-gold" style={{ width: "40px" }} />
          <span
            className="mb-3 inline-block font-sans uppercase"
            style={{
              ...badgeStyle,
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "2px",
              padding: "0.25rem 0.75rem",
              backgroundColor: "#B48845",
              color: "navy"
            }}
          >
            {project.status}
          </span>
          <h2 className="font-display font-bold text-navy" style={{ fontSize: "28px" }}>
            {project.name}
          </h2>
          <p className="mt-2 font-sans" style={{ fontSize: "15px", fontWeight: 500, color: "#6B7280" }}>
            {project.location}
          </p>
          <p
            className="mt-3 line-clamp-3 font-sans"
            style={{ fontSize: "15px", lineHeight: 1.8, color: "black" }}
          >
            {project.description}
          </p>
          <span
            className="mt-5 inline-block font-sans font-bold text-gold transition-all duration-200 group-hover:underline"
            style={{ fontSize: "17px" }}
          >
            View Project Details &rarr;
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
