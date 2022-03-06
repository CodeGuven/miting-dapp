import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import RoadMap from "../components/RoadMap";
import RoadMapdevam from "../components/RoadMapdevam";
import Team from "../components/Team";
import Teamdevam from "../components/Teamdevam";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black">
      <Header />
      <Hero />
      <About />
      <RoadMap />
      <RoadMapdevam />
      <Team />
      <Teamdevam />
      <Gallery />
      <FAQ />
    </div>
  );
}
