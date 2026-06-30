import { motion, useScroll } from "framer-motion"

export default function ScrollProgressBar() {
  // Tracks overall page scroll progress (0 → 1)
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "left",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        backgroundColor: "#B48845",
        zIndex: 9999,
      }}
    />
  )
}
