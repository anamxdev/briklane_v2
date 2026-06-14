import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import logo from "../assets/logo.png"

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
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
        borderBottom: "1px solid rgba(201, 163, 56, 0.25)",
        boxShadow: scrolled ? "0 2px 20px rgba(28,39,65,0.08)" : "none",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src={logo || "/placeholder.svg"}
            alt="Briklane Infra Private Limited"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center lg:flex" style={{ gap: "36px" }}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="group relative font-sans text-navy"
              style={{ fontSize: "14px", letterSpacing: "0.6px" }}
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

        {/* Desktop CTA */}
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
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
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

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden bg-white lg:hidden"
            style={{ borderTop: "1px solid rgba(201, 163, 56, 0.25)" }}
          >
            <div className="flex flex-col px-6 py-4">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `py-3 font-sans text-navy ${isActive ? "text-gold" : ""}`
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
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
