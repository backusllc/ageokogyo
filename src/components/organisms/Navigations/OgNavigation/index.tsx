import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'

import { GatsbyContext } from '../../../../context/context'
import { wrap, container, clink, divMenu, a } from './index.css'
import { AtCloseButton } from '../../../atoms'
import menus from '../../../../constants/shopifyNavlink'
import { useCollectionProductsSettings } from '../../../../hooks/useCollectionProductsSettings'
import { img, logoDiv, logoA, liMenu, aMenu, wrapMegaMenu, liMegaMenu, aMegaMenu, accordionHeightActive, accordionHeightNotActive } from './index.css'
import Down from '../../Shopify/Down';

export const OgNavigation = () => {
    const collectionDisplayCount = 128;
    const { hideSidebar, isSidebarOpen, links } = useContext(GatsbyContext)
    const { loading: collectionProductLoading, data: collectionProductLists } = useCollectionProductsSettings(collectionDisplayCount);

    const [setActive, setActiveState] = useState(false);
    const insideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = insideRef.current;

        const hundleClickOutside = (e: MouseEvent) => {

            if (!el?.contains(e.target as Node) && isSidebarOpen) {
                hideSidebar();
            }
        };

        document.addEventListener("click", hundleClickOutside);

        return () => {
            document.removeEventListener("click", hundleClickOutside);
        };
    });

    if (collectionProductLoading) return <div></div>


    const toggleAccordion = () => {
        setActiveState(!setActive);
    };

    const accordionHeight = setActive ? accordionHeightActive : accordionHeightNotActive;

    return (
        <>
            {isSidebarOpen &&
                <div className={wrap}>
                    <div className={container} ref={insideRef}>
                        <div className={logoDiv} >
                            <AtCloseButton onClick={hideSidebar} />
                            <a href="/" className={logoA}><img className={img} src="https://cdn.shopify.com/s/files/1/0582/1831/5820/files/logo_256x256.gif?v=1658329876" alt="" /></a>
                        </div>

                        <ul className={clink}>
                            {menus.length > 0 &&
                                menus.map((menu) => (
                                    <li key={menu.id} className={liMenu}>
                                        {menu?.megaMenus?.length > 0 ?
                                            <div className={divMenu} onClick={toggleAccordion}>
                                                <label className={aMenu}>{menu.text}</label>
                                                <Down isOpen={setActive} />
                                            </div>
                                            :
                                            <Link to={menu.link} className={aMenu} onClick={hideSidebar}>{menu.text}</Link>
                                        }
                                        {menu?.megaMenus?.length > 0 && setActive ?
                                            <ul className={`${wrapMegaMenu} ${accordionHeight}`}>
                                                {collectionProductLists.collections.edges.map((item) => (
                                                    item.node.products.edges.length === 0 ? <></> :
                                                        <li className={liMegaMenu} key={item.node.id}>
                                                            <Link to={`/product_category#${item.node.description}`}
                                                                className={aMegaMenu}
                                                                onClick={hideSidebar}>
                                                                {item.node.title}
                                                            </Link>
                                                        </li>
                                                ))}
                                            </ul> : null
                                        }
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}
