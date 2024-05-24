import React from "react";
import FooterLang from "./footer/FooterLang";
import FooterAbout from "./footer/FooterAbout";
import FooterQA from "./footer/FooterQA";
import FooterSocials from "./footer/FooterSocials";
import FooterCopyright from "./footer/FooterCopyright";

export default function Footer() {
  return (
    <div className="bg-secondary p-4">
      <div className="w-full h-1 border-t border-main pt-5"></div>
      <div className="container flex justify-between items-center mx-auto">
        <div className="w-full grid grid-cols-5 gap-4 ">
          <div className="">
            <FooterLang />
          </div>
          <div>
            <FooterAbout />
          </div>
          <div>
            <FooterQA />
          </div>
          <div>
            <FooterSocials />
          </div>
          <div>
            <FooterCopyright />
          </div>
        </div>
      </div>
    </div>
  );
}
