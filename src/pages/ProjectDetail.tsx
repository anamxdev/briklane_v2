import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Phone, Mail } from "lucide-react"
import { getProjectBySlug } from "../data/projects"
import type { Project } from "../data/projects"

const FALLBACK_IMAGE = "/img/image.png"

type AccordionSection = "features" | "amenities" | "location"

const accordionItems: { key: AccordionSection; label: string; imageKey: keyof Pick<Project, "features" | "amenities" | "locationMap"> }[] = [
  { key: "features", label: "Features", imageKey: "features" },
  { key: "amenities", label: "Amenities", imageKey: "amenities" },
  { key: "location", label: "Location", imageKey: "locationMap" },
]

function StatusBadge({ status }: { status: Project["status"] }) {
  const isOngoing = status === "Ongoing"
  return (
    <span
      className="inline-block font-sans uppercase"
      style={{
        backgroundColor: isOngoing ? "#C9A338" : "#1C2741",
        color: isOngoing ? "#1C2741" : "#C9A338",
        fontSize: "10px",
        fontWeight: 500,
        letterSpacing: "2px",
        padding: "0.25rem 0.75rem",
      }}
    >
      {status}
    </span>
  )
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ borderBottom: "1px solid #F0EBE0", padding: "1rem 0" }}>
      <p
        className="font-sans uppercase"
        style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "2px", color: "#6B7280" }}
      >
        {label}
      </p>
      <p className="mt-1 font-sans" style={{ fontSize: "15px", fontWeight: 500, color: "#1C2741" }}>
        {value}
      </p>
    </div>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  const [openSection, setOpenSection] = useState<AccordionSection | null>(null)

  if (!project) {
    return (
      <section className="flex min-h-[50vh] flex-col items-center justify-center bg-white px-6 py-24">
        <h1 className="font-display font-semibold text-navy" style={{ fontSize: "36px" }}>
          Project not found
        </h1>
        <Link to="/" className="mt-6 font-sans font-semibold text-gold hover:underline" style={{ fontSize: "15px" }}>
          Back to Home
        </Link>
      </section>
    )
  }

  const parentPath = project.status === "Ongoing" ? "/ongoing-projects" : "/completed-projects"
  const parentLabel = project.status === "Ongoing" ? "Ongoing Projects" : "Completed Projects"
  const images = project.images.length > 0 ? project.images : [FALLBACK_IMAGE]

  function goToPrev() {
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  function goToNext() {
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  function toggleSection(section: AccordionSection) {
    setOpenSection((prev) => (prev === section ? null : section))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-white px-6 py-4 md:px-16"
        style={{ fontSize: "13px", fontWeight: 400, color: "#6B7280" }}
      >
        <ol className="flex flex-wrap items-center gap-2 font-sans">
          <li>
            <Link to="/" className="transition-colors hover:text-navy">
              Home
            </Link>
          </li>
          <li className="text-gold" aria-hidden="true">
            &rsaquo;
          </li>
          <li>
            <Link to={parentPath} className="transition-colors hover:text-navy">
              {parentLabel}
            </Link>
          </li>
          <li className="text-gold" aria-hidden="true">
            &rsaquo;
          </li>
          <li className="text-navy">{project.name}</li>
        </ol>
      </nav>

      {/* Project Info */}
      <section className="bg-white px-6 py-16 md:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-[62%_36%]">
          <div>
            <StatusBadge status={project.status} />
            <h1
              className="mt-3 font-display font-bold text-navy text-balance"
              style={{ fontSize: "52px", lineHeight: 1.05 }}
            >
              {project.name}
            </h1>
            <div className="mt-5 h-0.5 bg-gold" style={{ width: "60px" }} />
            <p className="mt-6 font-sans" style={{ fontSize: "17px", lineHeight: 1.9, color: "#4A5568" }}>
              {project.description}
            </p>
            <a
              href={project.brochure}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block font-sans font-bold text-gold transition-all duration-200 hover:underline"
              style={{
                fontSize: "14px",
                letterSpacing: "1px",
                textUnderlineOffset: "4px",
              }}
            >
              DOWNLOAD BROCHURE
            </a>
          </div>

          <div>
            <div className="border border-[#E2D9C8] p-8">
              <h2 className="mb-6 font-display font-semibold text-navy" style={{ fontSize: "20px" }}>
                Project Details
              </h2>
              <DetailRow label="Location" value={project.location} />
              <DetailRow label="Type" value={project.type} />
              <DetailRow label="Status" value={project.status} />
            </div>
            <Link
              to="/contact"
              className="mt-6 block w-full bg-gold text-center font-sans font-semibold uppercase text-navy transition-opacity duration-200 hover:opacity-90"
              style={{ padding: "0.875rem", borderRadius: 0, fontSize: "14px", letterSpacing: "1px" }}
            >
              Enquire About This Project
            </Link>
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section className="bg-cream px-6 py-16 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 font-display font-semibold text-navy" style={{ fontSize: "36px" }}>
            Project Information
          </h2>

          <div>
            {accordionItems.map((item) => {
              const isOpen = openSection === item.key
              return (
                <div key={item.key}>
                  <button
                    type="button"
                    onClick={() => toggleSection(item.key)}
                    className="flex w-full cursor-pointer items-center justify-between py-5 text-left"
                    style={{ borderBottom: "1px solid #E2D9C8" }}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-semibold text-navy" style={{ fontSize: "22px" }}>
                      {item.label}
                    </span>
                    <span className="font-sans text-gold" style={{ fontSize: "24px" }}>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key={item.key}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                      <div className="py-6">
                          {item.key === "location" ? (
                            <div className="overflow-hidden rounded-lg border border-[#E2D9C8]">
                              <iframe
                                src={project.locationMap}
                                width="100%"
                                height="450"
                                className="w-full rounded-lg"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="strict-origin-when-cross-origin"
                                title={`${project.name} Location`}
                              />
                            </div>
                          ) : (
                            <>
                              <div className="grid gap-6 md:grid-cols-2">
                                {project[item.imageKey].map((image, index) => (
                                  <img
                                    key={index}
                                    src={image}
                                    alt={`${project.name} ${item.label} ${index + 1}`}
                                    className="w-full object-cover"
                                    style={{ borderRadius: "8px" }}
                                    onError={(e) => {
                                      e.currentTarget.src = FALLBACK_IMAGE
                                    }}
                                  />
                                ))}
                              </div>

                              <p
                                className="mt-6 font-sans text-center"
                                style={{
                                  fontSize: "16px",
                                  lineHeight: 1.8,
                                  color: "#4A5568",
                                }}
                              >
                                {item.key === "features" && project.featuresText}
                                {item.key === "amenities" && project.amenitiesText}
                              </p>
                            </>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="bg-navy py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
          <h2 className="font-display font-bold text-white text-balance" style={{ fontSize: "44px" }}>
            Interested?
          </h2>
          

          <div className="mt-8 flex flex-wrap justify-center gap-12">
            <p
              className="flex items-center gap-3 font-sans text-cream transition-opacity"
              style={{ fontSize: "16px", fontWeight: 400 }}
            >
              <Phone size={20} className="text-gold" aria-hidden="true" />
              +91 7095 658 707 | +91 9666 880 542
            </p>
            <a
              href="mailto:info@briklane.co.in"
              className="flex items-center gap-3 font-sans text-cream transition-opacity hover:opacity-80"
              style={{ fontSize: "16px", fontWeight: 400 }}
            >
              <Mail size={20} className="text-gold" aria-hidden="true" />
              info@briklane.co.in
            </a>
          </div>

          <Link
            to="/contact"
            className="mt-8 bg-gold font-sans font-semibold uppercase text-navy transition-opacity duration-200 hover:opacity-90"
            style={{
              fontSize: "14px",
              letterSpacing: "1.5px",
              padding: "0.875rem 2.5rem",
              borderRadius: 0,
            }}
          >
            Send Enquiry
          </Link>
        </div>
      </section>
    </motion.div>
  )
}
