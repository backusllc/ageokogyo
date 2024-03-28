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
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={sliderWrap}>
      <Slider {...settings} className={`${sliders} ${pc} hero`}>
        <AtImage image={data.slider_01_pc.edges[0].node.childrenImageSharp[0]} alt={data.slider_01_pc.edges[0].node.name} />
        <AtImage image={data.slider_02_pc.edges[0].node.childrenImageSharp[0]} alt={data.slider_02_pc.edges[0].node.name} />
        <AtImage image={data.slider_03_pc.edges[0].node.childrenImageSharp[0]} alt={data.slider_03_pc.edges[0].node.name} />
        <AtImage image={data.slider_04_pc.edges[0].node.childrenImageSharp[0]} alt={data.slider_04_pc.edges[0].node.name} />
      </Slider>
      <Slider {...settings} className={`${sliders} ${sp} hero`}>
        <AtImage image={data.slider_01_sp.edges[0].node.childrenImageSharp[0]} alt={data.slider_01_sp.edges[0].node.name} />
        <AtImage image={data.slider_02_sp.edges[0].node.childrenImageSharp[0]} alt={data.slider_02_sp.edges[0].node.name} />
        <AtImage image={data.slider_03_sp.edges[0].node.childrenImageSharp[0]} alt={data.slider_03_sp.edges[0].node.name} />
        <AtImage image={data.slider_04_sp.edges[0].node.childrenImageSharp[0]} alt={data.slider_04_sp.edges[0].node.name} />
      </Slider>
    </div>
  );
};

export default HeroSlider;

const query = graphql`
  query {
    slider_01_pc: allFile(filter: { name: { eq: "slider_01_pc" } }) {
      edges {
        node {
          name
          childrenImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR)
          }
        }
      }
    }

    slider_02_pc: allFile(filter: { name: { eq: "slider_02_pc" } }) {
      edges {
        node {
          name
          childrenImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR)
          }
        }
      }
    }

    slider_03_pc: allFile(filter: { name: { eq: "slider_03_pc" } }) {
      edges {
        node {
          name
          childrenImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR)
          }
        }
      }
    }

    slider_04_pc: allFile(filter: { name: { eq: "slider_04_pc" } }) {
      edges {
        node {
          name
          childrenImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR)
          }
        }
      }
    }

    slider_01_sp: allFile(filter: { name: { eq: "slider_01_sp" } }) {
      edges {
        node {
          name
          childrenImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR)
          }
        }
      }
    }

    slider_02_sp: allFile(filter: { name: { eq: "slider_02_sp" } }) {
      edges {
        node {
          name
          childrenImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR)
          }
        }
      }
    }

    slider_03_sp: allFile(filter: { name: { eq: "slider_03_sp" } }) {
      edges {
        node {
          name
          childrenImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR)
          }
        }
      }
    }

    slider_04_sp: allFile(filter: { name: { eq: "slider_04_sp" } }) {
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
