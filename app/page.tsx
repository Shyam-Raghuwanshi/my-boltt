import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar"
import Pages from "@/components/pages";
import Pricing from "@/components/pricing";
import Questions from "@/components/questions";
import Second from "@/components/second";
import Section from "@/components/sections";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Second />
      <Section />
      <Pages />
      <Testimonials />
      <Pricing />
      <Features />
      <Questions/>
      <Footer />
    </>
  );
}
