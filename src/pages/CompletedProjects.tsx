import { useState } from "react"
import { projects } from "../data/projects"
import ProjectsHero from "../components/projects/ProjectsHero"
import ProjectCard from "../components/projects/ProjectCard"
import ProjectsCta from "../components/projects/ProjectsCta"

const completedProjects = projects.filter(
  (project) => project.status === "Completed"
)

export default function CompletedProjects() {
  const [activeTab, setActiveTab] = useState<
    "residential" | "farmhouses"
  >("residential")

  return (
    <>
      <ProjectsHero eyebrow="OUR ACHIEVEMENTS" title="Completed Projects" />

      <section className="bg-white px-6 py-20 md:px-16">
        {/* Tabs */}
        <div className="mb-8 flex justify-center">
  <div className="flex border border-navy">
    <button
      onClick={() => setActiveTab("residential")}
      className={`px-6 py-3 font-sans text-sm font-bold uppercase tracking-[0.12em] transition-colors duration-300 ${
        activeTab === "residential"
          ? "bg-navy text-white"
          : "bg-white text-navy hover:bg-navy hover:text-white"
      }`}
    >
      Residential
    </button>

    <button
      onClick={() => setActiveTab("farmhouses")}
      className={`border-l border-navy px-6 py-3 font-sans text-sm font-bold uppercase tracking-[0.12em] transition-colors duration-300 ${
        activeTab === "farmhouses"
          ? "bg-navy text-white"
          : "bg-white text-navy hover:bg-navy hover:text-white"
      }`}
    >
      Farmhouses
    </button>
  </div>
</div>

        {/* Content */}
        {activeTab === "residential" ? (
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {completedProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                variant="completed"
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center py-20">
            <p className="text-lg text-navy/70">
              Farmhouse projects coming soon.
            </p>
          </div>
        )}
      </section>

      <ProjectsCta
        heading="Interested?"
        sub="Contact us today for site visits and pricing information."
      />
    </>
  )
}