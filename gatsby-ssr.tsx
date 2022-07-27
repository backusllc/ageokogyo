import "normalize.css";

import React from 'react'
import type { GatsbySSR } from 'gatsby'

import { RootPrivider } from "./src/components/provider/RootProvider/index"
import { GatsbyProvider } from "./src/context/context"
import { ShopifyProvider } from "./src/context/shopifyContext"
import { OgMegaHeader } from "./src/components/organisms";

const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
    element,
}) => {
    return (
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
    )
}

export { wrapPageElement }
