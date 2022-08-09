import React from 'react'
import "normalize.css";

import type { GatsbyBrowser } from 'gatsby'
import { RecoilRoot } from 'recoil';
import { RootPrivider } from "./src/components/provider/RootProvider/index"

import { GatsbyProvider } from "./src/context/context"
import { ShopifyProvider } from "./src/context/shopifyContext"
import { OgMegaHeader } from "./src/components/organisms";
import Footer from './src/components/organisms/Shopify/Footer';
import "fontsource-noto-sans-jp"

const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
    element,
}) => {
    return (
        <RecoilRoot>
            <RootPrivider>
                <GatsbyProvider>
                    <ShopifyProvider>
                        <OgMegaHeader />
                        <main>
                            {element}
                        </main>
                        <Footer />
                    </ShopifyProvider>
                </GatsbyProvider>
            </RootPrivider>
        </RecoilRoot>

    )
}

export { wrapPageElement }
