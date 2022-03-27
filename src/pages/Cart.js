import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ShippingDetails from "../parts/Cart/ShippingDetails";
import ShoppingCart from "../parts/Cart/ShoppingCart";
import Header from "../parts/Header";
import Footer from "../parts/HomePage/Footer";
import Sitemap from "../parts/Sitemap";

export default function Cart() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />
      <section class="md:py-16">
        <div class="container mx-auto px-4">
          <div class="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>
      <Sitemap />
      <Footer />
    </>
  );
}
