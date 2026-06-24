export const projects = [
  {
    slug: "asmangarh-new-malakpet",
    name: "Classic One",
    status: "Ongoing",
    type: "Residential",
    location: "Asmangarh",
    area: "",
    description:
      "A premium 4BHK ultra luxury residential development at Asmangarh — natural air-conditioned apartments designed for lifestyle beyond imagination, with quality construction and thoughtful infrastructure.",
    images: ["/img/classic-one.jpg"],

    features: [
      "/img/classic-one-2.png",
      "/img/classic-one-3.png",
    ],

    amenities: [
      "/img/classic-one-4.png",
      "/img/classic-one-5.jpg",
    ],

    featuresText:
      "1 side road facing - 1580 sft • 2 side road facing - 1660 sft",

    amenitiesText:
      "",

    brochure: "/pdf/asmangarh-brochure.pdf",

    locationMap: "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d412.7738014328545!2d78.5119985!3d17.3670392!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDIyJzAxLjYiTiA3OMKwMzAnNDMuNCJF!5e1!3m2!1sen!2sin!4v1782320716864!5m2!1sen!2sin",
    youtubeId: "",
  },
  {
    slug: "new-sayeedabad-colony",
    name: "New Sayeedabad Colony",
    status: "Ongoing",
    type: "Residential",
    location: "New Sayeedabad, Hyderabad",
    area: "",
    description:
      "A thoughtfully developed residential project in the heart of Sayeedabad — a rapidly growing locality with excellent connectivity.",
    images: ["/img/sayeedabad-1.jpg"],

    features: [
      "/img/sayeedabad-2.jpg",
      "/img/sayeedabad-3.jpg",
      "/img/sayeedabad-7.jpg",
      "/img/sayeedabad-6.jpg",
      "/img/sayeedabad-5.jpg",
      "/img/sayeedabad-4.jpg",
    ],

    amenities: [
      "/img/sayeedabad-9.jpg",
      "/img/sayeedabad-10.jpg",
    ],

    featuresText:
      "4 BHK luxury residences with natural ventilation and premium specifications.",

    amenitiesText:
      "",

    locationMap: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1904.019388387571!2d78.51444976847094!3d17.36186701724959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDIxJzQyLjMiTiA3OMKwMzAnNTEuNyJF!5e0!3m2!1sen!2sin!4v1782321241361!5m2!1sen!2sin",
    brochure: "/pdf/sayeedabad-brochure.pdf",

    youtubeId: "",
  },
  {
    slug: "boduppal-medipally",
    name: "Boduppal",
    status: "Completed",
    type: "Residential",
    location: "Medipally, Hyderabad",
    area: "",
    description:
      "A successfully completed residential development at Medipally, Boduppal — delivering quality homes to families in one of Hyderabad's fastest growing neighbourhoods.",
    images: ["/img/boduppal-1.jpg", "/img/boduppal-2.jpg"],
    features: "/img/placeholder-features.jpg",
    amenities: "/img/placeholder-amenities.jpg",
    locationMap: "/img/placeholder-location.jpg",
    youtubeId: "",
  },
  {
    slug: "sri-ram-nagar-kondapur",
    name: "Sri Ram Nagar Colony",
    status: "Completed",
    type: "Residential",
    location: "Kondapur, Hyderabad",
    area: "",
    description:
      "A completed residential colony project at Kondapur — one of Hyderabad's most sought-after localities with excellent infrastructure and connectivity.",
    images: ["/img/sriram-1.jpg", "/img/sriram-2.jpg"],
    features: "/img/placeholder-features.jpg",
    amenities: "/img/placeholder-amenities.jpg",
    locationMap: "/img/placeholder-location.jpg",
    youtubeId: "",
  },
  {
    slug: "prashanth-hills-khajaguda",
    name: "Prashanth Hills",
    status: "Completed",
    type: "Residential",
    location: "Khajaguda, Hyderabad",
    area: "",
    description:
      "An elegant completed development at Khajaguda — a premium address near the financial district with scenic views and superior construction.",
    images: ["/img/prashanth-1.jpg", "/img/prashanth-2.jpg"],
    features: "/img/placeholder-features.jpg",
    amenities: "/img/placeholder-amenities.jpg",
    locationMap: "/img/placeholder-location.jpg",
    youtubeId: "",
  },
  {
    slug: "saleem-nagar-malakpet",
    name: "Saleem Nagar Colony",
    status: "Completed",
    type: "Residential",
    location: "Malakpet, Hyderabad",
    area: "",
    description:
      "A completed residential project in the established locality of Malakpet — quality homes delivered on time with full legal compliance.",
    images: ["/img/saleem-1.jpg", "/img/saleem-2.jpg"],
    features: "/img/placeholder-features.jpg",
    amenities: "/img/placeholder-amenities.jpg",
    locationMap: "/img/placeholder-location.jpg",
    youtubeId: "",
  },
  {
    slug: "azampura",
    name: "Taj Residency",
    status: "Completed",
    type: "Residential",
    location: "Azampura",
    area: "",
    description:
      "Taj Residency at Azampura — a completed residential development thoughtfully designed and delivered with Briklane's signature commitment to quality.",
    images: ["/img/taj-residence-1.jpg"],

    features: [
      "/img/taj-3.jpeg",
    ],

    amenities: [
      "/img/taj-2.jpeg",
    ],

    featuresText:
      "",

    amenitiesText:
      "",

    brochure: "",

    locationMap: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d475.97308687554033!2d78.4889833!3d17.3740903!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb990066279501%3A0x37afa647dd0da059!2sTaj%20Residency!5e0!3m2!1sen!2sin!4v1782321897077!5m2!1sen!2sin",
    youtubeId: "",
  },
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}
