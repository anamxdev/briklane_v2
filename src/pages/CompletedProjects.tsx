import { projects } from "../data/projects"
import ProjectsHero from "../components/projects/ProjectsHero"
import ProjectCard from "../components/projects/ProjectCard"
import ProjectsCta from "../components/projects/ProjectsCta"

const completedProjects = projects.filter((project) => project.status === "Completed")

export default function CompletedProjects() {
  return (
    <>
      <ProjectsHero eyebrow="OUR ACHIEVEMENTS" title="Completed Projects" />

      <section className="bg-white py-14">
        <p
          className="mx-auto max-w-[680px] px-6 text-center font-sans"
          style={{ fontSize: "17px", lineHeight: 1.9, color: "#4A5568", fontWeight: 400 }}
        >
          Our portfolio represents years of dedicated work. Each completed project is a testament to
          Briklane Infra&apos;s unwavering commitment to quality construction and client satisfaction.
        </p>
      </section>

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {completedProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} variant="completed" />
          ))}
        </div>
      </section>

      <ProjectsCta
        heading="Looking for a property in these areas?"
        sub="Contact us today for site visits and pricing information."
      />
    </>
  )
}
