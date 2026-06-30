import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

const slides = [
  {
    headingLight: "The Art of",
    headingBold: "Luxurious Living",
    subheading:
      "Elegant residences created for those who appreciate the finer things in life.",
    projectName: "Taj Residency",
    location: "Azampura, Hyderabad",
    image: "/img/taj-residence-1.jpg",
    link: "/project/azampura",
  },
  {
    headingLight: "Inspiring you to",
    headingBold: "rise high",
    subheading:
      "Maphar Decent Tower, the property stands tall at Mehdipatnam spanning to a rise of 8 floors.",
    projectName: "Classic One",
    location: "Asmangarh",
    image: "/img/classic-one.jpg",
    link: "/project/asmangarh-new-malakpet",
  },
  {
    headingLight: "Elevate Every",
    headingBold: "Moment.",
    subheading:
      "Thoughtfully designed homes that blend luxury, comfort, and sophistication.",
    projectName: "New Sayeedabad Colony",
    location: "Sayeedabad, Hyderabad",
    image: "/img/sayeedabad-4.jpg",
    link: "/project/new-sayeedabad-colony",
  },
]

// Left text: slide in from right, exit to left
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

// Right image: slide in from bottom, exit to top — no fade
const imageVariants = {
  enter: { y: "100%", opacity: 1 },
  center: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    y: "-100%",
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

// Decorative circle-ring SVG — matches the subtle arc pattern visible in the screenshot
function DecorativeRings() {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: "absolute",
        right: "0px",
        top: "45%",
        transform: "translateY(-50%)",
        width: "520px",
        height: "520px",
        opacity: 0.08,
        pointerEvents: "none",
      }}
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[60, 110, 160, 200].map((r) => (
        <circle key={r} cx="210" cy="210" r={r} stroke="#B48845" strokeWidth="1" />
      ))}
    </svg>
  )
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

  function goPrev() {
    goToSlide((activeIndex - 1 + slides.length) % slides.length)
  }

  function goNext() {
    goToSlide((activeIndex + 1) % slides.length)
  }

  const slide = slides[activeIndex]

  return (
    <section className="relative w-full overflow-hidden md:h-screen">
      <div className="flex h-full flex-col md:flex-row">

        {/* ── LEFT PANEL: Text ── */}
        <div
          className="relative flex flex-col justify-center overflow-hidden bg-navy md:w-[45%]"
          style={{ minHeight: "60vh" }}
        >
          <DecorativeRings />

          {/* Main text content */}
          <div style={{ padding: "0 8% 80px 10%" }}>
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
                  style={{ width: "44px", height: "1px", backgroundColor: "#B48845" }}
                />

                {/* Eyebrow — building name */}
                <motion.p
                  variants={childVariants}
                  className="font-sans uppercase"
                  style={{
                    color: "#B48845",
                    fontSize: "14px",
                    letterSpacing: "4px",
                    fontWeight: 600,
                    marginTop: "12px",
                  }}
                >
                  {slide.projectName} · {slide.location}
                </motion.p>

                {/* Mixed-weight heading */}
                <motion.h1
                  variants={childVariants}
                  className="font-display text-white"
                  style={{
                    fontSize: "clamp(38px, 4.8vw, 62px)",
                    lineHeight: 1.08,
                    fontWeight: 400,
                    whiteSpace: "pre-line",
                  }}
                >
                  <span style={{ fontWeight: 300 }}>{slide.headingLight} </span>
                  <br />
                  <span style={{ fontWeight: 700 }}>{slide.headingBold}</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                  variants={childVariants}
                  className="font-sans text-white/70"
                  style={{
                    fontSize: "18px",
                    fontWeight: 300,
                    lineHeight: 1.9,
                    maxWidth: "390px",
                    marginTop: "20px",
                  }}
                >
                  {slide.subheading}
                </motion.p>

                {/* Single CTA */}
                <motion.div variants={childVariants} style={{ marginTop: "36px" }}>
                  <Link
                    to={slide.link}
                    className="font-sans font-semibold uppercase inline-flex items-center gap-3"
                    style={{
                      backgroundColor: "#B48845",
                      color: "#1C2741",
                      fontSize: "12px",
                      letterSpacing: "2px",
                      padding: "14px 32px",
                      borderRadius: 0,
                    }}
                  >
                    Explore More
                    <span style={{ fontSize: "16px", lineHeight: 1 }}>→</span>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Bottom strip: slide counter + arrows ── */}
          <div
            className="absolute bottom-0 left-0 right-0 flex items-center justify-between"
            style={{
              backgroundColor: "#FAF7F0",
              padding: "16px 10% 16px 10%",
              height: "64px",
            }}
          >
            {/* Slide counter */}
            <div className="flex items-baseline gap-1 font-sans" style={{ color: "#1C2741" }}>
              <span style={{ fontSize: "22px", fontWeight: 600 }}>
                {activeIndex + 1}
              </span>
              <span style={{ fontSize: "15px", color: "#999", fontWeight: 300 }}>
                / {slides.length}
              </span>
            </div>

            {/* Prev / Next arrows */}
            <div className="flex items-center" style={{ gap: "10px" }}>
              <button
                type="button"
                aria-label="Previous slide"
                onClick={goPrev}
                className="flex items-center justify-center"
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid #ccc",
                  borderRadius: "50%",
                  background: "transparent",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#B48845"
                  e.currentTarget.style.borderColor = "#B48845"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                  e.currentTarget.style.borderColor = "#ccc"
                }}
              >
                <ArrowLeft size={16} color="#1C2741" />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={goNext}
                className="flex items-center justify-center"
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid #ccc",
                  borderRadius: "50%",
                  background: "transparent",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#B48845"
                  e.currentTarget.style.borderColor = "#B48845"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                  e.currentTarget.style.borderColor = "#ccc"
                }}
              >
                <ArrowRight size={16} color="#1C2741" />
              </button>
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL: Image ── */}
        {/* bg-navy shows at top; image occupies the bottom 78% */}
        <div className="relative h-[50vh] overflow-hidden bg-navy md:h-auto md:flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="absolute left-0 right-0 bottom-0 overflow-hidden"
              style={{ height: "78%" }}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
            <img
              src={slide.image}
              alt={slide.projectName}
              className="h-full w-auto mx-auto object-contain"
            />
            </motion.div>
          </AnimatePresence>

          {/* "15 Years of Experience" badge — pinned to bottom of image */}
          <div
            className="absolute z-10 flex flex-col justify-end"
            style={{
              bottom: "0",
              left: "32px",
              backgroundColor: "#B48845",
              padding: "20px 24px",
              minWidth: "148px",
            }}
          >
            <span
              className="font-display font-bold"
              style={{ fontSize: "64px", lineHeight: 1, color: "#1C2741" }}
            >
              15
            </span>
            <span
              className="font-sans font-semibold uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "2px",
                color: "#1C2741",
                marginTop: "6px",
              }}
            >
              Years of
              <br />
              Experience
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}