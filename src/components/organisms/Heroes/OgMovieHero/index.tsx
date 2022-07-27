import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { section, img, info, h1, h3, article } from './index.css'
import { withPrefix } from 'gatsby';

export const OgMovieHero = () => {
  return (
    <>
      <section className={section} >
        <div>
          <video style={{ width: '100%'}} className="bg-video-sp" src={"https://kpp10.jp/_nuxt/videos/pc.83daf7b.mp4"} poster="images/movie_top_p.jpg" autoplay="" loop muted playsinline></video>
        </div>
        {/* </video>
        <video className="bg-video-pc" src="../../../../assets/videos/movie.m4v" poster="images/movie_top_p.jpg"></video>
        <video className="bg-video-pc" src="../../../../assets/videos/movie_top.mp4" poster="images/movie_top_p.jpg"></video>
        <source src={withPrefix("../../../../assets/videos/movie.m4v")} type="video/m4v" />
        <source src={withPrefix("../../../../assets/videos/movie_top.mp4")} type="video/mp4" /> */}
        {/* <div className="container">
        <video className="bg-video-pc" src="images/movie_top.mp4" poster="images/movie_top_p.jpg" autoplay="" loop="" muted="" playsinline=""></video>
        <video className="bg-video-sp" src="images/movie_top_sp.mp4" poster="images/movie_top_p.jpg" autoplay="" loop="" muted="" playsinline=""></video>
        <div className="fh5co-intro js-fullheight" style="height: 618px;">
          <div className="fh5co-intro-text">
            <div className="fh5co-left-position">
              <h2 className="animate-box font-top-name fadeInUp animated" style="font-weight: bold">
                <span>WoooW</span>
              </h2>
              <p className="font-top-details" style="color: #ffffff">
                私たちは驚きを創造し、<br>
                当たり前にし続ける企業として、<br>
                まだ世の中にないサービスを<br>生み出し続けます。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fh5co-learn-more animate-box fadeInUp animated" style="margin-left: -31.0104px;">
        <a href="#" className="scroll-btn">
          <span className="text" style="color: #979797">About us</span>
          <span className="arrow"><i className="icon-chevron-down"></i></span>
        </a>
      </div> */}
      </section>
    </>
  );
};