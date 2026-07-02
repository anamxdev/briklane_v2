import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import WhatsAppBubble from "./components/WhatsAppBubble"
import ScrollProgressBar from "./components/ScrollProgressBar"
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import OngoingProjects from "./pages/OngoingProjects"
import CompletedProjects from "./pages/CompletedProjects"
import ProjectDetail from "./pages/ProjectDetail"
import FarmhouseDetails from "./pages/FarmhouseDetails"
import Contact from "./pages/Contact"
import NotFound from "./components/NotFound"

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <ScrollProgressBar />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ongoing-projects" element={<OngoingProjects />} />
          <Route path="/completed-projects" element={<CompletedProjects />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="/farmhouse/:slug" element={<FarmhouseDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppBubble />
    </div>
  )
}
