import React from "react";
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaFacebookSquare,
  FaYoutubeSquare,
  FaSteamSquare,
} from "react-icons/fa";

export default function FooterSocials() {
  return (
    <section className="text-white uppercase text-2xl">
      <header>Find us</header>
      <div className="inline-flex">
        <div>
          <FaTwitterSquare />
        </div>
        <div>
          <FaInstagramSquare />
        </div>
        <div>
          <FaFacebookSquare />
        </div>
        <div>
          <FaYoutubeSquare />
        </div>
        <div>
          <FaSteamSquare />
        </div>
      </div>
    </section>
  );
}
