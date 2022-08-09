import "normalize.css";

import React from 'react'
import "normalize.css";
import type { GatsbySSR } from 'gatsby'

import { RootPrivider } from "./src/components/provider/RootProvider/index"
import { RecoilRoot } from 'recoil';
import { GatsbyProvider } from "./src/context/context"
import { ShopifyProvider } from "./src/context/shopifyContext"
import { OgMegaHeader } from "./src/components/organisms";
import "fontsource-noto-sans-jp"

const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
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
                    </ShopifyProvider>
                </GatsbyProvider>
            </RootPrivider>
        </RecoilRoot>
    )
}

export { wrapPageElement }
