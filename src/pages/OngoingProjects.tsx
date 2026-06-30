import { projects } from "../data/projects"
import ProjectsHero from "../components/projects/ProjectsHero"
import ProjectCard from "../components/projects/ProjectCard"
import ProjectsCta from "../components/projects/ProjectsCta"

const ongoingProjects = projects.filter((project) => project.status === "Ongoing")

export default function OngoingProjects() {
  return (
    <>
      <ProjectsHero eyebrow="CURRENTLY UNDERWAY" title="Ongoing Projects" />

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2">
          {ongoingProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} variant="ongoing" />
          ))}
        </div>
      </section>

      <ProjectsCta
        heading="Interested?"
        sub="Contact us today for site visits and pricing information."
      />
    </>
  )
}
