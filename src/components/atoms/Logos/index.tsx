import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { img } from './index.css';
// import logo from '../../../assets/images/logo.png'


import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useMenuQuery } from '../../../hooks/useMenuQuery';

export const AtLogo = () => {
  // const { allContentfulHeaderDesign: { edges: projects } } = useStaticQuery(query)
  // const { firebaseHeaderSetting: { localImage }, } = useMenuQuery()

  return (

    <h1 className={img}>
      {/* <Link to="/">
        <GatsbyImage
          image={getImage(localImage)}
          alt="{props.name}"
        // className={props.className}
        ></GatsbyImage> */}
        {/* <img src={imageURL} alt="design"></img> */}
      {/* </Link> */}
    </h1>
  )
};

