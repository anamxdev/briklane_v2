import { useEffect, useState } from "react"
import {
  getCompletedProjects,
  getCompletedFarmhouses,
} from "../sanity/projectService"
import {
  getCategories,
  getListingsByCategory,
} from "../sanity/projectService"
import { Link } from "react-router-dom"
import ProjectsHero from "../components/projects/ProjectsHero"
import ProjectCard from "../components/projects/ProjectCard"
import ProjectsCta from "../components/projects/ProjectsCta"

export default function CompletedProjects() {
  const [activeTab, setActiveTab] = useState("residential")
const [categories, setCategories] = useState<any[]>([])
const [dynamicListings, setDynamicListings] = useState<any[]>([])

  const [completedProjects, setCompletedProjects] = useState<any[]>([])
  const [allFarmhouses, setAllFarmhouses] = useState<any[]>([])

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getCompletedProjects()
        setCompletedProjects(data)
      } catch (err) {
        console.error(err)
      }
    }

    loadProjects()
  }, [])

  useEffect(() => {
    async function loadFarmhouses() {
      try {
        const data = await getCompletedFarmhouses()
        setAllFarmhouses(data)
      } catch (err) {
        console.error(err)
      }
    }

    loadFarmhouses()
  }, [])

  useEffect(() => {
  async function loadCategories() {
    try {
      const data = await getCategories()

      setCategories(data)
    } catch (err) {
      console.error(err)
    }
  }

  loadCategories()
}, [])

useEffect(() => {
  async function loadDynamicListings() {
    if (
      activeTab === "residential" ||
      activeTab === "farmhouses"
    )
      return

    try {
      const data = await getListingsByCategory(activeTab)

      setDynamicListings(data)
    } catch (err) {
      console.error(err)
    }
  }

  loadDynamicListings()
}, [activeTab])

  return (
    <>
      <ProjectsHero eyebrow="OUR ACHIEVEMENTS" title="Completed Projects" />

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mb-8 flex justify-center">
          <div className="flex flex-wrap border border-navy">
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

          {categories.map((category) => (
            <button
              key={category.slug?.current}
              onClick={() => setActiveTab(category.slug?.current)}
              className={`border-l border-navy px-6 py-3 font-sans text-sm font-bold uppercase tracking-[0.12em] transition-colors duration-300 ${
                activeTab === category.slug.current
                  ? "bg-navy text-white"
                  : "bg-white text-navy hover:bg-navy hover:text-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        </div>

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

) : activeTab === "farmhouses" ? (

  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {allFarmhouses.map((farmhouse) => (
      <Link
        key={farmhouse.slug}
        to={`/farmhouse/${farmhouse.slug}`}
        className="group"
      >
        <div
          className="overflow-hidden"
          style={{ height: "340px" }}
        >
          <img
            src={farmhouse.coverImage}
            alt={farmhouse.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="pt-6">
          <p
            className="font-sans uppercase text-gold"
            style={{
              fontSize: "12px",
              letterSpacing: "3px",
              fontWeight: 600,
            }}
          >
            {farmhouse.location}
          </p>

          <h3
            className="mt-2 font-display font-bold text-navy"
            style={{ fontSize: "24px" }}
          >
            {farmhouse.name}
          </h3>

          <p
            className="mt-2 line-clamp-2"
            style={{
              color: "#030E27",
              lineHeight: 1.8,
            }}
          >
            {farmhouse.description}
          </p>

          <div className="mt-5 inline-flex items-center font-semibold text-gold">
            View Project
            <span className="ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </Link>
    ))}
  </div>

) : (

  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
  {dynamicListings.map((listing) => (
    <Link
      key={listing.slug}
      to={`/${listing.category}/${listing.slug}`}
      className="group"
    >
      <div
        className="overflow-hidden"
        style={{ height: "340px" }}
      >
        <img
          src={listing.coverImage}
          alt={listing.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="pt-6">
        <p
          className="font-sans uppercase text-gold"
          style={{
            fontSize: "12px",
            letterSpacing: "3px",
            fontWeight: 600,
          }}
        >
          {listing.location}
        </p>

        <h3
          className="mt-2 font-display font-bold text-navy"
          style={{ fontSize: "24px" }}
        >
          {listing.name}
        </h3>

        <p
          className="mt-2 line-clamp-2"
          style={{
            color: "#030E27",
            lineHeight: 1.8,
          }}
        >
          {listing.description}
        </p>

        <div className="mt-5 inline-flex items-center font-semibold text-gold">
          View Project
          <span className="ml-2 transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  ))}
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