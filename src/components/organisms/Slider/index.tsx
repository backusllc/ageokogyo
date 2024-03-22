import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Slider from "react-slick";
import { AtImage } from "../../../components/atoms";
import { sliderWrap, sliders, pc, sp } from "./index.css";

const HeroSlider = () => {
  const data = useStaticQuery(query);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={sliderWrap}>
      <Slider {...settings} className={`${sliders} ${pc} hero`}>
        <AtImage image={data.slider_01.edges[0].node.childrenImageSharp[0]} alt={data.slider_01.edges[0].node.name} />
        <AtImage image={data.slider_02.edges[0].node.childrenImageSharp[0]} alt={data.slider_02.edges[0].node.name} />
        <AtImage image={data.slider_03.edges[0].node.childrenImageSharp[0]} alt={data.slider_03.edges[0].node.name} />
      </Slider>
      <Slider {...settings} className={`${sliders} ${sp} hero`}>
        <AtImage image={data.slider_03.edges[0].node.childrenImageSharp[0]} alt={data.slider_03.edges[0].node.name} />
        <AtImage image={data.slider_02.edges[0].node.childrenImageSharp[0]} alt={data.slider_02.edges[0].node.name} />
        <AtImage image={data.slider_01.edges[0].node.childrenImageSharp[0]} alt={data.slider_01.edges[0].node.name} />
      </Slider>
    </div>
  );
};

export default HeroSlider;

const query = graphql`
  query {
    slider_01: allFile(filter: { name: { eq: "slider_01" } }) {
      edges {
        node {
          name
          childrenImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR)
          }
        }
      }
    }

    slider_02: allFile(filter: { name: { eq: "slider_02" } }) {
      edges {
        node {
          name
          childrenImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR)
          }
        }
      }
    }

    slider_03: allFile(filter: { name: { eq: "slider_03" } }) {
      edges {
        node {
          name
          childrenImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR)
          }
        }
      }
    }
  }
`;
