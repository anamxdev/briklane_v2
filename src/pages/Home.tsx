import Hero from "../components/home/Hero"
import IntroStrip from "../components/home/IntroStrip"
import VideoSection from "../components/home/VideoSection"
import WhyChooseUs from "../components/home/WhyChooseUs"
import ServicesSnapshot from "../components/home/ServicesSnapshot"
import FeaturedProjects from "../components/home/FeaturedProjects"
import StatsBar from "../components/home/StatsBar"
import Testimonials from "../components/home/Testimonials"
import CtaBanner from "../components/home/CtaBanner"
import PopUp from "../components/home/PopUp"

export default function Home() {
  return (
    <>
      <Hero />
      <PopUp />
      <IntroStrip />
      <VideoSection />
      <WhyChooseUs />
      <ServicesSnapshot />
      <FeaturedProjects />
      <StatsBar />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
