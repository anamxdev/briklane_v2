export interface Farmhouse {
  slug: string
  name: string
  location: string
  description: string
  coverImage: string
  galleryImages: string[]
  galleryVideos: string[]
}

export const farmhouses: Farmhouse[] = [
  {
    slug: "elegance-farmhouse",

    name: "Elegance Farmhouse",

    location: "Hyderabad",

    description:
      "Elegance Farmhouse is thoughtfully designed to offer a peaceful retreat surrounded by nature. Whether for family gatherings, celebrations, or weekend escapes, every corner is crafted to deliver comfort, privacy and timeless elegance.",

    coverImage: "/img/farmhouse/cover.jpg",

    galleryImages: [
      "/img/farmhouse/cover.jpg",
    ],

    galleryVideos: [
      "/videos/farmhouse/1.mp4",
      "/videos/farmhouse/2.mp4",
      "/videos/farmhouse/3.mp4",
      "/videos/farmhouse/4.mp4",
      "/videos/farmhouse/5.mp4",
      "/videos/farmhouse/6.mp4",
      "/videos/farmhouse/7.mp4",
      "/videos/farmhouse/8.mp4",
      "/videos/farmhouse/9.mp4",
      "/videos/farmhouse/10.mp4",
      "/videos/farmhouse/11.mp4",
    ],
  },
]