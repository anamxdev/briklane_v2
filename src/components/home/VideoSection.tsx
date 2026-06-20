import { motion } from "framer-motion"

export default function VideoSection() {
  return (
    <section className="bg-cream px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full overflow-hidden"
          style={{ borderLeft: "4px solid #C9A338", aspectRatio: "16 / 9" }}
        >
        
        <video
  autoPlay
  muted
  loop
  playsInline
  style={{
    width: "100%",
    height: "100%",
    objectFit: "contain",
  }}
>
  <source src="/videos/briklane-video.mp4" type="video/mp4" />
</video>
        </motion.div>
      </div>
    </section>
  )
}
