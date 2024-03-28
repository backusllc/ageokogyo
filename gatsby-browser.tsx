import React from "react";
import "normalize.css";

import type { GatsbyBrowser } from "gatsby";
import { RecoilRoot } from "recoil";
import { RootPrivider } from "./src/components/provider/RootProvider/index";

import { GatsbyProvider } from "./src/context/context";
import { ShopifyProvider } from "./src/context/shopifyContext";
import { OgMegaHeader } from "./src/components/organisms/Headers/OgMegaHeader";
import Footer from "./src/components/organisms/Shopify/Footer";
import { Helmet } from "react-helmet";

import "fontsource-noto-sans-jp";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/zen-kaku-gothic-new/300.css";
import "@fontsource/zen-kaku-gothic-new/400.css";
import "@fontsource/zen-kaku-gothic-new/500.css";
import "@fontsource/zen-kaku-gothic-new/700.css";

const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => {
  return (
    <>
      <Helmet
        meta={[
          {
            name: "google-site-verification",
            content: "pn7zXrifzWh048hSklqhUHr5ujbyVAE49L0S7kgANgs",
          },
          {
            name: 'robots',
            content: 'noindex',
          },
        ]}
      />
      <RecoilRoot>
        <RootPrivider>
          <GatsbyProvider>
            <ShopifyProvider>
              <OgMegaHeader />
              <main>{element}</main>
              <Footer />
            </ShopifyProvider>
          </GatsbyProvider>
        </RootPrivider>
      </RecoilRoot>
    </>
  );
};

export { wrapPageElement };
