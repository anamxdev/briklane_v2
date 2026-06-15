import { Link } from "react-router-dom"

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/services" },
  { label: "Our Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
]

type IconProps = { size?: number }

function FacebookIcon({ size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon({ size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon({ size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const socials = [
  { label: "Facebook", Icon: FacebookIcon, href: "#" },
  { label: "Instagram", Icon: InstagramIcon, href: "#" },
  { label: "LinkedIn", Icon: LinkedinIcon, href: "#" },
]

function HeadingRule() {
  return <div className="mb-6 mt-2 h-px w-9 bg-gold" />
}

export default function Footer() {
  return (
    <footer className="bg-navy">
      {/* Top gold line */}
      <div className="h-px w-full" style={{ backgroundColor: "rgba(201, 163, 56, 0.5)" }} />

      {/* Main body */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-8 py-20 md:grid-cols-3 md:gap-16">
        {/* Column 1 — Brand */}
        <div>
          <div className="font-display font-bold" style={{ fontSize: "28px", letterSpacing: "3px" }}>
            <span className="text-cream">BRIK</span>
            <span className="text-gold">LANE</span>
          </div>
          <p
            className="mt-1 font-sans font-light uppercase text-gold"
            style={{ fontSize: "11px", letterSpacing: "3px" }}
          >
            Infra Private Limited
          </p>
          <p className="mt-4 font-sans font-light italic text-cream/75" style={{ fontSize: "14px" }}>
            Building Trust | Creating Futures
          </p>
          <div className="mt-6 flex" style={{ gap: "1rem" }}>
            {socials.map(({ label, Icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-cream transition-colors duration-200 hover:text-gold"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h3 className="font-display font-semibold text-gold" style={{ fontSize: "20px" }}>
            Quick Links
          </h3>
          <HeadingRule />
          <ul>
            {quickLinks.map((link) => (
              <li key={link.to} className="mt-3 first:mt-0">
                <Link
                  to={link.to}
                  className="group inline-flex items-center font-sans font-light text-cream/80 transition-colors duration-200 hover:text-gold"
                  style={{ fontSize: "14px" }}
                >
                  <span className="mr-0 w-0 overflow-hidden opacity-0 transition-all duration-200 group-hover:mr-1 group-hover:w-3 group-hover:opacity-100">
                    ›
                  </span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Contact */}
        <div>
          <h3 className="font-display font-semibold text-gold" style={{ fontSize: "20px" }}>
            Get In Touch
          </h3>
          <HeadingRule />
          <address
            className="font-sans font-light not-italic text-cream/80"
            style={{ fontSize: "14px", lineHeight: 1.9 }}
          >
            #16-1-30/1/25/1,
            <br />
            Near Lokayuktha Colony Park,
            <br />
            Sayeedabad, Hyderabad, TG - 500 059
          </address>
          <p className="mt-4 font-sans font-light text-cream/80" style={{ fontSize: "14px" }}>
            +91 96668 80542
          </p>
          <p className="mt-2 font-sans font-light text-cream/80" style={{ fontSize: "14px" }}>
            info@briklane.co.in
          </p>
          <p className="mt-2 font-sans font-light text-cream/80" style={{ fontSize: "14px" }}>
            Mon–Sat, 9AM–6PM
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <p
          className="px-8 py-5 text-center font-sans font-light text-cream/50"
          style={{ fontSize: "12px" }}
        >
          © 2025 Briklane Infra Private Limited. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
