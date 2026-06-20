export type Project = {
  slug: string
  name: string
  status: "Ongoing" | "Completed"
  type: string
  location: string
  area: string
  description: string
  images: string[]
  features: string
  amenities: string
  locationMap: string
  youtubeId: string
}

export declare const projects: Project[]
export declare function getProjectBySlug(slug: string): Project | undefined
