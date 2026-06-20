import { motion } from "framer-motion"
import pageHero from "../../assets/page-hero.png"

type ProjectsHeroProps = {
  eyebrow: string
  title: string
}

export default function ProjectsHero({ eyebrow, title }: ProjectsHeroProps) {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden" style={{ height: "55vh" }}>
      <img
        src={pageHero}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "rgba(28,39,65,0.82)" }} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <p
          className="font-sans uppercase text-gold"
          style={{ fontSize: "12px", letterSpacing: "4px", fontWeight: 400 }}
        >
          {eyebrow}
        </p>
        <div className="mt-4 h-px bg-gold" style={{ width: "60px" }} />
        <h1
          className="mt-4 font-display font-bold text-white text-balance"
          style={{ fontSize: "60px", lineHeight: 1.1 }}
        >
          {title}
        </h1>
      </motion.div>
    </section>
  )
}
