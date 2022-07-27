import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { MoveImageSectionProps } from 'types/ContentSettings/MoveImageSectionSettings';
import { AtHeading } from '../../../atoms';

import { img } from './index.css';

export const OgMoveImageSection = (props: MoveImageSectionProps) => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplaySpeed: 2000,
    // arrow: true,
    cssEase: 'linear',
  };

  const items = [
    {title: "name1", img: 'https://magic-pod.com/acms-media/001/202105/725180_715264.png'},
    {title: "name2", img: 'https://magic-pod.com/acms-media/001/202107/yappli.png'},
    {title: "name3", img: 'https://magic-pod.com/acms-media/001/202201/ShowcaseGig_.png'},
    {title: "name4", img: 'https://magic-pod.com/acms-media/001/202202/424491_330007.jpg'},
    {title: "name5", img: 'https://magic-pod.com/acms-media/001/202202/名称未設定のデザイン.png'},
    {title: "name6", img: 'https://magic-pod.com/acms-media/001/202107/biz.png'},
    {title: "name7", img: 'https://magic-pod.com/acms-media/001/202105/ga_technologies.png'},
    {title: "name8", img: 'https://magic-pod.com/acms-media/001/202105/414936_172172.png'},
    {title: "name9", img: 'https://magic-pod.com/acms-media/001/202107/hey.png'},
    {title: "name10", img: 'https://magic-pod.com/acms-media/001/202201/LINE.png'},
    {title: "name11", img: 'https://magic-pod.com/acms-media/001/202107/medley.png'},
    {title: "name12", img: 'https://magic-pod.com/acms-media/001/202107/mf.png'},
  ]

  return (
    <>
      <section>
        <div className="inner">
          <AtHeading Tag="h2">500社以上の企業様にご利用いただいています</AtHeading>
          <article>
            <Slider {...settings}>
            {items && items.map(item => {
            return (
              <div>
                <img src={item.img} />
              </div>
            )
          })}
            </Slider>
          </article>
        </div>
      </section>
    </>
  );
};
