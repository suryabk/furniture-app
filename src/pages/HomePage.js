import React from "react";
import Clients from "../parts/Clients";
import Header from "../parts/Header";
import Hero from "../parts/HomePage/Hero";
import BrowseRoom from "../parts/HomePage/BrowseRoom";
import Footer from "../parts/HomePage/Footer";
import JustArrived from "../parts/HomePage/JustArrived";
import Sitemap from "../parts/Sitemap";
import useScrollAnchor from "../helpers/hooks/useScrollAnchor";
import useModalDOM from "../helpers/hooks/useModalDOM";

export default function HomePage() {
  useScrollAnchor();
  useModalDOM();
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
