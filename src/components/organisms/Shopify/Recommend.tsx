import React from "react";

import { useProductRecommendationSettings } from "../../../hooks/useProductRecommendationSettings";
import { recommendPcoducts, recommendPcoduct, recommendContainer, recommendInner } from "./Recommend.css";
import { SubTitle } from "../../../components/molecules/SubTitle";
import ProductCard from "./ProductCard";
import Slider from "react-slick";

interface Props {
  productId: string;
}

const Recommend = ({ productId }: Props) => {
  const { loading: productRecommendationLoading, data: productRecommendationLists } = useProductRecommendationSettings(productId);

  if (productRecommendationLoading) return <></>;
  if (productRecommendationLists.productRecommendations.length === 0) return <></>;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: true,
          centerPadding: "15%",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "15%",
        },
      },
    ],
  };

  return (
    <div className={`${recommendContainer} recommend`}>
      <div className={recommendInner}>
        <SubTitle titleEn={"RECOMMENDATION"} titleJa={"おすすめ商品"} />
        <Slider {...settings} className={`${recommendPcoducts} recommend`}>
          {productRecommendationLists.productRecommendations?.map((recommendationProduct: any, index: number) =>
            index < 10 ? (
              <div key={index} className={recommendPcoduct}>
                <ProductCard
                  productId={recommendationProduct.id}
                  source={recommendationProduct.images.edges[0]?.node.transformedSrc}
                  titleText={recommendationProduct.title}
                  priceText={recommendationProduct.priceRange.minVariantPrice.amount}
                />
              </div>
            ) : null
          )}
        </Slider>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Recommend;
