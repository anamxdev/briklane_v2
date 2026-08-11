import groq from "groq"

const projectFields = `
  _id,
  name,
  slug,
  status,
  category,
  location,
  shortDescription,

  "coverImage": coverImage.asset->url,

  "brochure": brochure.asset->url,

  map,

  features[]{
    text,
    "image": image.asset->url
  },

  amenities[]{
    text,
    "image": image.asset->url
  },
  
`

export const completedProjectsQuery = groq`
*[
  _type == "property" &&
  status == "Completed" &&
  category == "Residential"
] | order(_createdAt desc){
  ${projectFields}
}
`

export const ongoingProjectsQuery = groq`
*[
  _type == "property" &&
  status == "Ongoing" &&
  category == "Residential"
] | order(_createdAt desc){
  ${projectFields}
}
`

export const projectBySlugQuery = groq`
*[
  _type == "property" &&
  slug.current == $slug
][0]{
  ${projectFields}
}
`

export const completedFarmhousesQuery = groq`
*[
  _type == "farmhouse"
] | order(_createdAt desc){
  _id,
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
`

// ===========================================
// DYNAMIC CATEGORIES
// ===========================================

export const categoriesQuery = `
*[_type=="category"] | order(name asc){
    name,
    slug
}
`

export const listingsByCategoryQuery = `
*[
    _type=="listing" &&
    category->slug.current==$slug
]{
    name,
    slug,
    location,
    description,

    coverImage{
        asset->{
            url
        }
    },

    category->{
        name,
        slug
    }
}`

export const listingBySlugQuery = `
*[
    _type=="listing" &&
    slug.current==$slug
][0]{
    name,
    slug,
    location,
    description,
    details,
    locationMap,

    coverImage{
        asset->{url}
    },

    galleryImages[]{
        asset->{url}
    },

    galleryVideos[]{
        asset->{url}
    },

    category->{
        name,
        slug
    }
}
`