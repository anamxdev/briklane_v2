import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectsCta from "../components/projects/ProjectsCta";

import { getListingsByCategory } from "../sanity/projectService";

export default function Category() {
  const { category } = useParams();

  const [listings, setListings] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      if (!category) return;

      const data = await getListingsByCategory(category);

      setListings(data);
    }

    load();
  }, [category]);

  return (
    <>
      <ProjectsHero
        eyebrow="CATEGORY"
        title={category?.replace(/-/g, " ") || ""}
      />

      <section className="bg-white px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2">

          {listings.map((listing, index) => (
            <ProjectCard
              key={listing.slug}
              project={listing}
              index={index}
              variant="ongoing"
            />
          ))}

        </div>
      </section>

      <ProjectsCta
        heading="Interested?"
        sub="Contact us today for site visits and pricing information."
      />
    </>
  );
}