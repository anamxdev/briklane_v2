import { useQuery } from "@tanstack/react-query"
import { projects } from "../data/projects"
import { getCompletedProjects } from "../sanity/projectService"

export function useCombinedCompletedProjects() {
  return useQuery({
    queryKey: ["combined-completed-projects"],

    queryFn: async () => {
      const sanityProjects = await getCompletedProjects()

      const formattedProjects = sanityProjects.map((project: any) => ({
        slug: project.slug.current,
        name: project.name,
        status: project.status,
        type: project.category,
        location: project.location || "",
        area: "",
        description:
          project.shortDescription ||
          project.description ||
          "",

        images: project.coverImage
          ? [project.coverImage]
          : [],

        features: [],
        amenities: [],

        featuresText: "",
        amenitiesText: "",

        brochure: project.brochure || "",

        locationMap: project.map || "",

        youtubeId: "",
      }))

      const hardcodedProjects = projects.filter(
        (project) => project.status === "Completed"
      )

      return [...hardcodedProjects, ...formattedProjects]
    },
  })
}