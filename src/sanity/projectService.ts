import { client } from "./client"
import {
  completedProjectsQuery,
  ongoingProjectsQuery,
  projectBySlugQuery,
} from "./queries"
import {
  categoriesQuery,
  listingsByCategoryQuery,
  listingBySlugQuery,
} from "./queries";
import { completedFarmhousesQuery } from "./queries"

function mapProject(project: any) {
  return {
    slug: project.slug.current,

    name: project.name,

    status: project.status,

    type: project.category,

    location: project.location || "",

    area: "",

    description:
      project.shortDescription || "",

    images: project.coverImage ? [project.coverImage] : [],

    features:
      project.features
        ?.filter((x: any) => x.image)
        .map((x: any) => x.image) || [],

    amenities:
      project.amenities
        ?.filter((x: any) => x.image)
        .map((x: any) => x.image) || [],

    featuresText:
      project.features
        ?.filter((x: any) => x.text)
        .map((x: any) => x.text)
        .join(" • ") || "",

    amenitiesText:
      project.amenities
        ?.filter((x: any) => x.text)
        .map((x: any) => x.text)
        .join(" • ") || "",

    brochure: project.brochure || "",

    locationMap: project.map || "",

    youtubeId: "",
  }
}

export async function getCompletedProjects() {
  const projects = await client.fetch(completedProjectsQuery)

  return projects.map(mapProject)
}

export async function getOngoingProjects() {
  const projects = await client.fetch(ongoingProjectsQuery)

  return projects.map(mapProject)
}

export async function getProjectBySlug(slug: string) {
  const project = await client.fetch(projectBySlugQuery, {
    slug,
  })

  if (!project) return null

  return mapProject(project)
}



export async function getCompletedFarmhouses() {
  const farmhouses = await client.fetch(completedFarmhousesQuery)

  return farmhouses.map((farmhouse: any) => ({
    slug: farmhouse.slug.current,
    name: farmhouse.name,
    location: farmhouse.location || "",
    description: farmhouse.description || "",
    details: farmhouse.details || [],
    coverImage: farmhouse.coverImage || "",
    galleryImages:
      farmhouse.galleryImages?.map((img: any) => img.url) || [],
    galleryVideos:
      farmhouse.galleryVideos?.map((video: any) => video.url) || [],
    locationMap: farmhouse.locationMap || "",
  }))
}

export async function getFarmhouseBySlug(slug: string) {
  const farmhouse = await client.fetch(
    `
    *[
      _type == "farmhouse" &&
      slug.current == $slug
    ][0]{
      name,
      slug,
      location,
      description,

      "coverImage": coverImage.asset->url,

      "galleryImages": galleryImages[]{
        "url": asset->url
      },

      "galleryVideos": galleryVideos[]{
        "url": asset->url
      },

      details,
      locationMap
    }
    `,
    { slug }
  )

  if (!farmhouse) return null

  return {
    slug: farmhouse.slug.current,
    name: farmhouse.name,
    location: farmhouse.location || "",
    description: farmhouse.description || "",
    details: farmhouse.details || [],
    coverImage: farmhouse.coverImage || "",
    galleryImages:
      farmhouse.galleryImages?.map((img: any) => img.url) || [],
    galleryVideos:
      farmhouse.galleryVideos?.map((video: any) => video.url) || [],
    locationMap: farmhouse.locationMap || "",
  }
}

export async function getCategories() {
  return await client.fetch(categoriesQuery);
}

export async function getListingsByCategory(slug: string) {
  const listings = await client.fetch(
    listingsByCategoryQuery,
    { slug }
  );

  return listings.map((listing: any) => ({
    slug: listing.slug.current,

    name: listing.name,

    location: listing.location || "",

    description: listing.description || "",

    coverImage:
      listing.coverImage?.asset?.url || "",

    category: listing.category?.slug?.current || "",
  }));
}

export async function getListingBySlug(slug: string) {
  const listing = await client.fetch(
    listingBySlugQuery,
    { slug }
  );

  if (!listing) return null;

  return {
    slug: listing.slug.current,

    name: listing.name,

    location: listing.location || "",

    description: listing.description || "",

    details: listing.details || [],

    coverImage:
      listing.coverImage?.asset?.url || "",

    galleryImages:
      listing.galleryImages?.map(
        (img: any) => img.asset.url
      ) || [],

    galleryVideos:
      listing.galleryVideos?.map(
        (video: any) => video.asset.url
      ) || [],

    locationMap:
      listing.locationMap || "",

    category:
      listing.category?.slug?.current || "",
  };
}