import PageHero from "../components/PageHero"

export default function CompletedProjects() {
  return (
    <>
      <PageHero eyebrow="Our Portfolio" title="Completed Projects" />
      <section className="bg-white px-6 py-20 md:px-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-sans text-center" style={{ fontSize: "16px", color: "#6B7280" }}>
            Completed projects will be listed here.
          </p>
        </div>
      </section>
    </>
  )
}
