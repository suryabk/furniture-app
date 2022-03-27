import React from "react";
import Clients from "../parts/Clients";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import BrowseRoom from "../parts/HomePage/BrowseRoom";
import Footer from "../parts/HomePage/Footer";
import JustArrived from "../parts/HomePage/JustArrived";
import Sitemap from "../parts/Sitemap";

export default function HomePage() {
  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
