export interface Farmhouse {
  slug: string
  name: string
  location: string
  description: string
  details: string[]
  coverImage: string
  galleryImages: string[]
  galleryVideos: string[]
  locationMap?: string
}

export const farmhouses: Farmhouse[] = [
  {
    slug: "elegance-farmhouse",

    name: "Elegance Farmhouse",

    location: "Hyderabad",

    description:
      "Elegance Farmhouse is thoughtfully designed to offer a peaceful retreat surrounded by nature. Whether for family gatherings, celebrations, or weekend escapes, every corner is crafted to deliver comfort, privacy and timeless elegance.",

    details: [],

    coverImage: "/img/farmhouse/elegance/cover.jpg",

    galleryImages: [
      "/img/farmhouse/elegance/cover.jpg",
    ],

    galleryVideos: [
      "/videos/farmhouse/elegance/1.mp4",
      "/videos/farmhouse/elegance/2.mp4",
      "/videos/farmhouse/elegance/3.mp4",
      "/videos/farmhouse/elegance/4.mp4",
      "/videos/farmhouse/elegance/5.mp4",
      "/videos/farmhouse/elegance/6.mp4",
      "/videos/farmhouse/elegance/7.mp4",
      "/videos/farmhouse/elegance/8.mp4",
      "/videos/farmhouse/elegance/9.mp4",
      "/videos/farmhouse/elegance/10.mp4",
      "/videos/farmhouse/elegance/11.mp4",
    ],
  },
  {
    slug: "madani-farm-house",

    name: "Madani Farm House",

    location: "Manneguda, Vikarabad Road",

    description:
      "A beautifully maintained 20-gunta farmhouse located less than 1 km from the highway. Surrounded by mature fruit plantations, this property features a fully functional borewell, electricity, secure compound wall, an existing farmhouse and a charming outdoor gazebo, making it ideal for weekend retreats or long-term investment.",

    coverImage: "/img/farmhouse/madani/3.jpeg",

    details: [
      "20 Guntas",
      "Less than 1 km from Highway",
      "Borewell with abundant water",
      "Electricity Connection",
      "7 ft Compound Wall with Gate",
      "1 Hall, 1 Bedroom & 2 Bathrooms",
      "Outdoor Gazebo",
      "60 km from Hyderabad",
      "20 Mango Trees",
      "12 Coconut Trees",
      "Chikoo, Guava, Pomegranate, Jamun",
      "Mulberry, Blueberry, Lemon & Curry Leaf Trees"
    ],

    galleryImages: [
      "/img/farmhouse/madani/1.jpeg",
      "/img/farmhouse/madani/2.jpeg",
      "/img/farmhouse/madani/3.jpeg",
      "/img/farmhouse/madani/4.jpeg",
      "/img/farmhouse/madani/5.jpeg",
      "/img/farmhouse/madani/6.jpeg",
      "/img/farmhouse/madani/7.jpeg",
      "/img/farmhouse/madani/8.jpeg",
    ],

    galleryVideos: [
      "/videos/farmhouse/madani/video.mp4",
    ],

    locationMap: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3809.6262644077096!2d77.991783!3d17.285307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDE3JzA3LjEiTiA3N8KwNTknMzAuNCJF!5e0!3m2!1sen!2sin!4v1784057202021!5m2!1sen!2sin",
  },
]