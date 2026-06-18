import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

const slides = [
  {
    eyebrow: "ONGOING PROJECT — NEW MALAKPET",
    heading: "Building Landmarks,\nEnriching Lives.",
    subheading:
      "A premium residential development in the well-connected locality of New Malakpet, Hyderabad.",
    projectName: "Asmangarh",
    location: "New Malakpet, Hyderabad",
    image: "/img/asmangarh-1.jpg",
    link: "/project/asmangarh-new-malakpet",
  },
  {
    eyebrow: "ONGOING PROJECT — NEW SAYEEDABAD",
    heading: "Building Landmarks,\nEnriching Lives.",
    subheading:
      "A thoughtfully developed residential project in the heart of Sayeedabad, Hyderabad.",
    projectName: "New Sayeedabad Colony",
    location: "New Sayeedabad, Hyderabad",
    image: "/img/sayeedabad-1.jpg",
    link: "/project/new-sayeedabad-colony",
  },
]

const childVariants = {
  enter: { x: 60, opacity: 0 },
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    x: -60,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const containerVariants = {
  enter: {},
  center: { transition: { staggerChildren: 0.12 } },
  exit: {},
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [intervalKey, setIntervalKey] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [intervalKey])

  function goToSlide(index: number) {
    setActiveIndex(index)
    setIntervalKey((k) => k + 1)
  }

  const slide = slides[activeIndex]

  return (
    <section className="relative w-full overflow-hidden md:h-screen">
      <style>{`
        @keyframes slowPan {
          0%   { transform: scale(1.08) translateY(-4%); }
          100% { transform: scale(1.08) translateY(4%); }
        }
      `}</style>

      {/* Flex container — column on mobile, row on desktop */}
      <div className="flex h-full flex-col md:flex-row">

        {/* ── LEFT PANEL — white, 45% on desktop ── */}
        <div
          className="relative flex items-center bg-white py-16 md:w-[45%] md:py-0"
        >
          <div className="w-full" style={{ padding: "0 8% 0 10%" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={containerVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {/* Gold rule */}
                <motion.div
                  variants={childVariants}
                  style={{ width: "50px", height: "1px", backgroundColor: "#C9A338" }}
                />

                {/* Eyebrow */}
                <motion.p
                  variants={childVariants}
                  className="mt-3 font-sans uppercase"
                  style={{ color: "#C9A338", fontSize: "11px", letterSpacing: "4px", fontWeight: 400 }}
                >
                  {slide.eyebrow}
                </motion.p>

                {/* Heading */}
                <motion.h1
                  variants={childVariants}
                  className="mt-5 font-display font-bold"
                  style={{
                    color: "#1C2741",
                    fontSize: "clamp(36px, 4.5vw, 58px)",
                    lineHeight: 1.05,
                    whiteSpace: "pre-line",
                  }}
                >
                  {slide.heading}
                </motion.h1>

                {/* Subheading */}
                <motion.p
                  variants={childVariants}
                  className="mt-5 font-sans"
                  style={{
                    color: "#4A5568",
                    fontSize: "16px",
                    fontWeight: 300,
                    lineHeight: 1.85,
                    maxWidth: "380px",
                  }}
                >
                  {slide.subheading}
                </motion.p>

                {/* Buttons */}
                <motion.div
                  variants={childVariants}
                  className="mt-8 flex flex-wrap"
                  style={{ gap: "12px" }}
                >
                  <Link
                    to={slide.link}
                    className="font-sans font-semibold uppercase"
                    style={{
                      backgroundColor: "#C9A338",
                      color: "#1C2741",
                      fontSize: "12px",
                      letterSpacing: "1.5px",
                      padding: "12px 28px",
                      borderRadius: 0,
                      display: "inline-block",
                    }}
                  >
                    View Project
                  </Link>
                  <Link
                    to="/contact"
                    className="font-sans font-semibold uppercase"
                    style={{
                      border: "1px solid #1C2741",
                      color: "#1C2741",
                      backgroundColor: "transparent",
                      fontSize: "12px",
                      letterSpacing: "1.5px",
                      padding: "12px 28px",
                      borderRadius: 0,
                      display: "inline-block",
                      transition: "background-color 0.2s ease, color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#1C2741"
                      e.currentTarget.style.color = "white"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent"
                      e.currentTarget.style.color = "#1C2741"
                    }}
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Scroll chevron — desktop only */}
          <motion.div
            className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ChevronDown size={26} style={{ color: "#C9A338" }} />
          </motion.div>
        </div>

        {/* ── RIGHT PANEL — image, 55% on desktop, 50vh on mobile ── */}
        <div className="relative h-[50vh] overflow-hidden md:h-auto md:flex-1">

          {/* Fading image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Separate key so React remounts the img, restarting the CSS animation */}
              <img
                key={`img-${activeIndex}`}
                src={slide.image}
                alt={slide.projectName}
                className="absolute inset-0 h-full w-full object-cover"
                style={{ animation: "slowPan 8s ease-in-out infinite alternate" }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Bottom gradient + project label */}
          <div
            className="absolute bottom-0 left-0 right-0 z-10 flex flex-col justify-end"
            style={{
              height: "140px",
              background: "linear-gradient(to top, rgba(28,39,65,0.88) 0%, transparent 100%)",
            }}
          >
            <div style={{ paddingBottom: "24px", paddingLeft: "32px" }}>
              <p className="font-display font-semibold text-white" style={{ fontSize: "26px" }}>
                {slide.projectName}
              </p>
              <p
                className="mt-1 font-sans"
                style={{ color: "#C9A338", fontSize: "13px", letterSpacing: "1px", fontWeight: 300 }}
              >
                {slide.location}
              </p>
            </div>
          </div>

          {/* Dot indicators */}
          <div
            className="absolute z-20 flex items-center"
            style={{ bottom: "24px", right: "32px", gap: "8px" }}
          >
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goToSlide(i)}
                style={{
                  width: i === activeIndex ? "24px" : "8px",
                  height: "8px",
                  backgroundColor: i === activeIndex ? "#C9A338" : "transparent",
                  border: i === activeIndex ? "none" : "1.5px solid white",
                  borderRadius: i === activeIndex ? "4px" : "50%",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
