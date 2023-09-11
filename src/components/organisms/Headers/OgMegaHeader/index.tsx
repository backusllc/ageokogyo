import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { GatsbyContext } from "../../../../context/context";
import { sprinkles } from '../../../../styles/sprinkles.css';
import { AtHumbergerButton } from '../../../atoms';
import { banner, div, nav, overlay, header, divHeader, liMenu, aMenu, svgMenu, navHeader, wrapMegaMenu, ulMegaMenu, liMegaMenu, aMegaMenu, quantityDiv } from './index.css';
import menus from '../../../../constants/shopifyNavlink'
import Cart from '../../../../assets/images/cart.svg'
import { ShopifyContext } from '../../../../context/shopifyContext';
import { useCollectionProductsSettings } from '../../../../hooks/useCollectionProductsSettings';
import { OgNavigation } from '../../../organisms/Navigations/OgNavigation';

const countQuantity = (lineItems: any) => {
    let quantity = 0

    lineItems.forEach(item => {
        quantity = quantity + item.quantity
    });
    return quantity
}

export const OgMegaHeader = () => {
    const collectionDisplayCount = 128;
    const { isSidebarOpen, showSidebar } = useContext(GatsbyContext)
    const { checkout, fetchAllCollections, collections } = useContext(ShopifyContext)
    const [isShowMegaMenu, setIsShowMegaMenu] = useState(false);
    const { loading: collectionProductLoading, data: collectionProductLists } = useCollectionProductsSettings(collectionDisplayCount);

    const [quantity, setQuantity] = useState(countQuantity(checkout ? checkout.lineItems : []))

    useEffect(() => {
        setQuantity(countQuantity(checkout ? checkout.lineItems : []));
        asyncFetchAllCollections();
    }, [checkout]);

    async function asyncFetchAllCollections() {
        try {
            await fetchAllCollections();
        }
        catch (error) {
        }
    };

    const ulHeader = sprinkles({
        display: {
            mobile: 'none',
            tablet: 'none',
            desktop: 'flex',
        }
    })

    if (collectionProductLoading) return <div></div>;

    return <>
        <div className={banner}>現在、オンライン販売は東京・埼玉限定です。※<br />※折畳み自転車・
部品・乗り物等の箱出荷商品は沖縄離島を除く日本国内配送可能
</div>
        <header className={header}>
            <OgNavigation />
            <div className={navHeader}>
                <AtHumbergerButton onClick={showSidebar} />
                <h1 style={{ margin: 0, padding: 0 }}>
                    <Link to="/"><img src="https://cdn.shopify.com/s/files/1/0582/1831/5820/files/logo_256x256.gif?v=1658329876" alt="" /></Link>
                </h1>
                <div className={divHeader}>
                    <ul className={ulHeader}>
                        {menus.length > 0 &&
                            menus.map((menu) => (
                                <li key={menu.id} className={liMenu}
                                    onMouseEnter={() => setIsShowMegaMenu(menu?.megaMenus?.length > 0)}
                                    onMouseLeave={() => setIsShowMegaMenu(false)}
                                    onClick={() => setIsShowMegaMenu(false)}
                                >
                                    <Link to={menu.link} className={aMenu}>{menu.text}</Link>
                                    {menu?.megaMenus?.length > 0 && isShowMegaMenu &&
                                        (
                                            <div className={wrapMegaMenu}>
                                                <ul className={ulMegaMenu}>
                                                    {collectionProductLists.collections.edges.map((item) => (
                                                        item.node.products.edges.length === 0 ? <></> :
                                                            <li className={liMegaMenu} key={item.node.id}>
                                                                <Link to={`/product_category#${item.node.description}`}
                                                                    className={aMegaMenu}
                                                                    onClick={() => setIsShowMegaMenu(false)}>
                                                                    <img src={item.node.image?.transformedSrc} alt={item.node.title} />
                                                                    {item.node.title}
                                                                </Link>
                                                            </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                </li>
                            ))}
                    </ul>
                    <div className={liMenu}>
                        <Link to="/cart">
                            {
                                quantity > 0 ?
                                    <>
                                        <div className={quantityDiv}>{quantity}</div>
                                        <Cart />
                                    </>
                                    :
                                    <Cart />
                            }
                            {/* </Link> */}
                        </Link>
                    </div>
                </div>
            </div>
        </header >
    </>
};
