import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { GatsbyContext } from '../../../../context/context'
import { wrap, container, clink, a } from './index.css'
import { AtCloseButton } from '../../../atoms'
import menus from '../../../../constants/shopifyNavlink'
import { useCollectionProductsSettings } from '../../../../hooks/useCollectionProductsSettings'
import { img, logoDiv, liMenu, aMenu, wrapMegaMenu, liMegaMenu, aMegaMenu } from './index.css'

export const OgNavigation = () => {
    const collectionDisplayCount = 128;
    const { hideSidebar, isSidebarOpen, links } = useContext(GatsbyContext)
    const { loading: collectionProductLoading, data: collectionProductLists } = useCollectionProductsSettings(collectionDisplayCount);

    if (collectionProductLoading) return <div></div>

    return (
        <>
            {isSidebarOpen &&
                <div className={wrap}>
                    <div className={container}>
                        <div className={logoDiv} >
                            <AtCloseButton onClick={hideSidebar} />
                            <a href="/"><img className={img} src="https://cdn.shopify.com/s/files/1/0582/1831/5820/files/logo_256x256.gif?v=1658329876" alt="" /></a>
                        </div>
                        <ul className={clink}>
                            {menus.length > 0 &&
                                menus.map((menu) => (
                                    <li key={menu.id} className={liMenu}>
                                        <a href={menu.link} className={aMenu}>{menu.text}</a>
                                        {menu?.megaMenus?.length > 0 &&
                                            (
                                                <ul className={wrapMegaMenu}>
                                                    <ul className="ulMegaMenu">
                                                        {collectionProductLists.collections.edges.map((item) => (
                                                            <li className={liMegaMenu} key={item.node.id}>
                                                                <a href={`/product_category/#${item.node.description}`}
                                                                    className={aMegaMenu}
                                                                >
                                                                    {/* <img src={item.node.image?.transformedSrc} alt={item.node.title} /> */}
                                                                    {item.node.title}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </ul>
                                            )}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}
