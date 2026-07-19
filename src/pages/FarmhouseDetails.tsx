import { Link, useParams } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getFarmhouseBySlug } from "../sanity/projectService";

export default function FarmhouseDetails() {
  const { slug } = useParams();

  const [farmhouse, setFarmhouse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFarmhouse() {
      if (!slug) {
        setLoading(false);
        return;
      }

      try {
        const data = await getFarmhouseBySlug(slug);

        if (data) {
          setFarmhouse(data);
        }
      } catch (err) {
        console.error(err);
      }

      setLoading(false);
    }

    loadFarmhouse();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!farmhouse) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Farmhouse not found.
      </div>
    );
  }

  return (
    <>
      <section className="bg-cream px-6 py-20 md:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-sans text-3xl uppercase tracking-[4px] text-gold">
            Farmhouse
          </p>

          <h1 className="mt-3 font-display text-7xl font-bold text-navy">
            {farmhouse.name}
          </h1>

          <p className="mt-3 text-2xl text-gray-600">
            {farmhouse.location}
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-xl font-bold leading-8 text-gray-700">
            {farmhouse.description}
          </p>
        </div>
      </section>

      {farmhouse.details.length > 0 && (
        <section className="bg-cream px-6 pb-20 md:px-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-4xl font-bold text-navy">
              Property Details
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {farmhouse.details.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-3"
                >
                  <span className="mt-1 text-gold">•</span>

                  <p className="leading-8 text-navy">{d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="font-sans uppercase tracking-[4px] text-gold">
              Gallery
            </p>

            <h2 className="mt-3 font-display text-4xl font-bold text-navy">
              Explore {farmhouse.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {farmhouse.galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={img}
                  alt=""
                  className="h-auto w-full"
                />
              </motion.div>
            ))}
          </div>

          {farmhouse.galleryVideos.length > 0 && (
            <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
              {farmhouse.galleryVideos.map((video, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-xl bg-black shadow-lg"
                >
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="block h-auto w-full"
                  >
                    <source src={video} type="video/mp4" />
                  </video>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {farmhouse.locationMap && (
          <section className="mt-6 bg-cream px-6 py-20 md:px-16">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 text-center">
                <p className="font-sans uppercase tracking-[4px] text-gold">
                  Location
                </p>

                <h2 className="mt-3 font-display text-4xl font-bold text-navy">
                  Find Us
                </h2>
              </div>

              <div className="overflow-hidden rounded-xl shadow-xl">
                <iframe
                  src={farmhouse.locationMap}
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </section>
        )}
      </section>

      <section className="bg-navy py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
          <h2 className="font-display text-4xl font-bold text-white">
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
  );
}