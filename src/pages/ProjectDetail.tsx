import { useParams } from "react-router-dom"
import PageHero from "../components/PageHero"

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <>
      <PageHero eyebrow="Project Detail" title={slug ?? "Project"} />
      <section className="bg-white px-6 py-20 md:px-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-sans text-center" style={{ fontSize: "16px", color: "#6B7280" }}>
            Project details for <strong>{slug}</strong> will be displayed here.
          </p>
        </div>
      </section>
    </>
  )
}
