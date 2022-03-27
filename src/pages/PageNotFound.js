import React from "react";
import ErrorPageMassage from "../parts/ErrorPageMassage";
import Header from "../parts/Header";
import Footer from "../parts/HomePage/Footer";
import Sitemap from "../parts/Sitemap";

export default function PageNotFound() {
  return (
    <>
      <Header />
      <ErrorPageMassage />
      <Sitemap />
      <Footer />
    </>
  );
}
