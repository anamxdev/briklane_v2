import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Awards & Recognition" },
]

function useCountUp(target: number, start: boolean, duration = 1800) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let raf = 0
    let startTime: number | null = null

    const tick = (now: number) => {
      if (startTime === null) startTime = now
      const progress = Math.min((now - startTime) / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, start, duration])

  return value
}

function Stat({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCountUp(value, start)
  return (
    <div className="flex flex-col items-center px-4 text-center">
      <span
        className="font-display font-bold text-gold"
        style={{ fontSize: "clamp(48px, 6vw, 64px)", lineHeight: 1 }}
      >
        {count}
        {suffix}
      </span>
      <span
        className="mt-3 font-sans uppercase text-cream"
        style={{ fontSize: "13px", letterSpacing: "3px", fontWeight: 300, opacity: 0.7 }}
      >
        {label}
      </span>
    </div>
  )
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-navy py-20">
      <div ref={ref} className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-6 lg:grid-cols-4 lg:gap-y-0">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={i > 0 ? "lg:border-l" : ""}
            style={{ borderColor: "rgba(201,163,56,0.3)" }}
          >
            <Stat value={s.value} suffix={s.suffix} label={s.label} start={inView} />
          </div>
        ))}
      </div>
    </section>
  )
}
