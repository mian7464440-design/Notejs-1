import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Divider from "@/components/Divider";
import Timeline from "@/components/Timeline";
import People from "@/components/People";
import Gallery from "@/components/Gallery";
import Books from "@/components/Books";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
// Aap ke kehne par jo naye sections add hue (screenshot 2 + تقاریب):
import YearBanner from "@/components/YearBanner";
import Thoughts from "@/components/Thoughts";
import Quotes from "@/components/Quotes";
import Articles from "@/components/Articles";
import Events from "@/components/Events";

export default function Home() {
  return (
    <>
      <Navbar />
      <Reveal />
      <main>
        {/* ---- Figma page, same order ---- */}
        <Hero />
        <Intro />
        <Divider />
        <Timeline />
        <Divider />
        <People />
        <Gallery />
        <Books />

        {/* ---- Add kiye gaye sections ---- */}
        <YearBanner />
        <Thoughts />
        <Quotes />
        <Articles />
        <Events />

        {/* ---- Figma: form aur footer ---- */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
