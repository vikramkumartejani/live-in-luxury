import Image from "next/image";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import PartnerMarquee from "./components/PartnerMarquee";
import AboutUs from "./components/AboutUs";
import ExploreNow from "./components/ExploreNow";
import DiscoverYourDreamHome from "./components/DiscoverYourDreamHome";
import AboutLiveInLuxury from "./components/AboutLiveInLuxury";
import Testimonials from "./components/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutLiveInLuxury />
      <DiscoverYourDreamHome />
      <ExploreNow />
      <AboutUs />
      <Testimonials />
      <PartnerMarquee />
      <Footer />
    </div>
  );
}
