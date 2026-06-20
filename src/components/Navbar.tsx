import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import logo from "../assets/logo.png"

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Ongoing Projects", to: "/ongoing-projects" },
  { label: "Completed Projects", to: "/completed-projects" },
  { label: "Contact", to: "/contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className="sticky top-0 z-50 bg-white transition-shadow duration-300"
      style={{
        borderBottom: "1px solid rgba(201, 163, 56, 0.35)",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.25)" : "none",
      }}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-2 md:px-8 md:py-3">
        <Link to="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Briklane Infra Private Limited"
            className="w-auto object-contain"
            style={{ height: "clamp(48px, 6vw, 76px)", maxWidth: "min(420px, 58vw)" }}
          />
        </Link>

        <div className="hidden items-center lg:flex" style={{ gap: "28px" }}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="group relative font-sans text-navy/90 transition-colors hover:text-navy"
              style={{ fontSize: "15px", letterSpacing: "0.4px" }}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className="absolute -bottom-1.5 left-0 h-0.5 bg-gold transition-all duration-300 ease-out group-hover:w-full"
                    style={{ width: isActive ? "100%" : "0%" }}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="bg-gold font-sans font-semibold uppercase text-navy transition-colors duration-200 hover:bg-[#B8930A]"
            style={{
              display: "inline-block",
              fontSize: "13px",
              letterSpacing: "1.5px",
              padding: "0.625rem 1.5rem",
              borderRadius: 0,
            }}
          >
            Contact Us
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-navy lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden bg-white lg:hidden"
            style={{ borderTop: "1px solid rgba(201, 163, 56, 0.35)" }}
          >
            <div className="flex flex-col px-6 py-4">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `py-3 font-sans text-navy/90 ${isActive ? "text-gold" : ""}`
                  }
                  style={{ fontSize: "15px", letterSpacing: "0.6px" }}
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 bg-gold text-center font-sans font-semibold uppercase text-navy transition-colors duration-200 hover:bg-[#B8930A]"
                style={{
                  fontSize: "13px",
                  letterSpacing: "1.5px",
                  padding: "0.75rem 1.5rem",
                  borderRadius: 0,
                }}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
