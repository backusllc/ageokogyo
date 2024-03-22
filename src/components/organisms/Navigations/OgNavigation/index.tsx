import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "gatsby";

import { GatsbyContext } from "../../../../context/context";
import { wrap, container, clink, divMenu, a, sideBarOpen, quantityDiv } from "./index.css";
import menus from "../../../../constants/shopifyNavlink";
import { useCollectionProductsSettings } from "../../../../hooks/useCollectionProductsSettings";
import {
  crossButton,
  crossSpan,
  logoDiv,
  liMenu,
  aMenu,
  wrapMegaMenu,
  liMegaMenu,
  aMegaMenu,
  accordionHeightActive,
  hidden,
} from "./index.css";
import { ShopifyContext } from "../../../../context/shopifyContext";
import Logo from "../../../../assets/images/logo.svg";
import Cart from "../../../../assets/images/cart.svg";
import Down from "../../Shopify/Down";

const countQuantity = (lineItems: any) => {
  let quantity = 0;

  lineItems.forEach((item: any) => {
    quantity = quantity + item.quantity;
  });
  return quantity;
};

export const OgNavigation = () => {
  const collectionDisplayCount = 128;

  const { hideSidebar, isSidebarOpen } = useContext(GatsbyContext);
  const { loading: collectionProductLoading, data: collectionProductLists } =
    useCollectionProductsSettings(collectionDisplayCount);

  const [setActive, setActiveState] = useState(false);
  const { checkout, fetchAllCollections } = useContext(ShopifyContext);
  const [quantity, setQuantity] = useState(countQuantity(checkout ? checkout.lineItems : []));
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

  useEffect(() => {
    setQuantity(countQuantity(checkout ? checkout.lineItems : []));
    asyncFetchAllCollections();
  }, [checkout]);

  async function asyncFetchAllCollections() {
    try {
      await fetchAllCollections();
    } catch (error) {}
  }

  if (collectionProductLoading) return <div></div>;

  const toggleAccordion = () => {
    setActiveState(!setActive);
  };

  return (
    <>
      <div className={`${wrap} ${isSidebarOpen ? sideBarOpen : ""}`}>
        <div className={container} ref={insideRef}>
          <div className={logoDiv}>
            <div className={crossButton} onClick={hideSidebar}>
              <span className={crossSpan}></span>
              <span className={crossSpan}></span>
            </div>
            <Link to="/" onClick={hideSidebar}>
              <Logo />
            </Link>
            <Link to="/cart" className={isSidebarOpen ? "" : hidden} onClick={hideSidebar}>
              {quantity > 0 ? (
                <>
                  <div className={quantityDiv}>{quantity}</div>
                  <Cart />
                </>
              ) : (
                <Cart />
              )}
            </Link>
          </div>
          <ul className={clink}>
            {menus.length > 0 &&
              menus.map(menu => (
                <li key={menu.id} className={liMenu}>
                  {menu?.megaMenus?.length > 0 ? (
                    <div className={divMenu} onClick={toggleAccordion}>
                      <label className={aMenu}>{menu.text}</label>
                      <Down isOpen={setActive} />
                    </div>
                  ) : (
                    <Link to={menu.link} className={aMenu} onClick={hideSidebar}>
                      {menu.text}
                    </Link>
                  )}
                  {menu?.megaMenus?.length > 0 ? (
                    <ul className={`${wrapMegaMenu} ${setActive ? accordionHeightActive : ""}`}>
                      {collectionProductLists.collections.edges.map(item =>
                        item.node.products.edges.length === 0 ? (
                          <></>
                        ) : (
                          <li className={liMegaMenu} key={item.node.id}>
                            <Link to={`/product_category#${item.node.description}`} className={aMegaMenu} onClick={hideSidebar}>
                              {item.node.description}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  ) : null}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};
