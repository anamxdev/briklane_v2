import { Link, useParams } from "react-router-dom"
import { farmhouses } from "../data/farmhouses"
import { Phone, Mail } from "lucide-react"

export default function FarmhouseDetails() {
  const { slug } = useParams()

  const farmhouse = farmhouses.find((f) => f.slug === slug)

  if (!farmhouse) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Farmhouse not found.
      </div>
    )
  }

  return (
    <>
      {/* Intro */}

      <section className="bg-cream px-6 py-20 md:px-16">
        <div className="mx-auto max-w-5xl text-center">

          <p className="font-sans uppercase tracking-[4px] text-gold">
            Farmhouse
          </p>

          <h1 className="mt-3 font-display text-5xl font-bold text-navy">
            {farmhouse.name}
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            {farmhouse.location}
          </p>

          <p className="mx-auto mt-8 max-w-3xl leading-8 text-gray-700">
            {farmhouse.description}
          </p>

        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-16 text-center">
            <p className="font-sans uppercase tracking-[4px] text-gold">
              Gallery
            </p>

            <h2 className="mt-3 font-display text-4xl font-bold text-navy">
              Explore Elegance Farmhouse
            </h2>
          </div>

          {/* Featured Image */}

          <div className="mb-12 overflow-hidden">
            <img
              src={farmhouse.galleryImages[0]}
              alt={farmhouse.name}
              className="w-full rounded-xl object-cover"
            />
          </div>

          {/* Videos */}

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

            {farmhouse.galleryVideos.map((video, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl bg-black shadow-lg"
              >
                <video
                  controls
                  preload="metadata"
                  playsInline
                  className="block w-full h-auto"
                >
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="bg-navy py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">

          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: "44px" }}
          >
            Interested?
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-12">

            <p className="flex items-center gap-3 text-cream">

              <Phone size={20} className="text-gold" />

              +91 7095 658 707 | +91 9666 880 542

            </p>

            <a
              href="mailto:info@briklane.co.in"
              className="flex items-center gap-3 text-cream"
            >
              <Mail size={20} className="text-gold" />

              info@briklane.co.in

            </a>

          </div>

          <Link
            to="/contact"
            className="mt-8 bg-gold px-10 py-4 font-semibold uppercase text-navy"
          >
            Send Enquiry
          </Link>

        </div>
      </section>
    </>
  )
}