import Hero from "../components/home/Hero"
import IntroStrip from "../components/home/IntroStrip"
import ServicesSnapshot from "../components/home/ServicesSnapshot"
import FeaturedProjects from "../components/home/FeaturedProjects"
import StatsBar from "../components/home/StatsBar"
import Testimonials from "../components/home/Testimonials"
import CtaBanner from "../components/home/CtaBanner"

export default function Home() {
  return (
    <>
      <Hero />
      <IntroStrip />
      <ServicesSnapshot />
      <FeaturedProjects />
      <StatsBar />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
