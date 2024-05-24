import React from "react";
import Nav from "./layout/Nav";
import ImageSlider from "./layout/ImageSlider";
import PromoItemsGrid from "./layout/PromoItemsGrid";
import Footer from "./layout/Footer";

export default function AplicationContent() {
  return (
    <div>
      <Nav />
      <ImageSlider />
      <PromoItemsGrid />
      <PromoItemsGrid />
      <Footer />
    </div>
  );
}
