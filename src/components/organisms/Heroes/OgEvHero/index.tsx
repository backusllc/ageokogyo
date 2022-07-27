import React from 'react';
import './index.css'

export const OgEvHero = () => {
  return (
    <section className="section_mainvisual" id="page_mainvisual">
      <div className="slide">
        <ul className="slick-initialized slick-slider slick-dotted">
          <div className="slick-list draggable">
            <div
              className="slick-track"
              style={{ opacity: 1, width: '2613px' }}
            >
              <li
                className="slick-slide slide-animation slick-current slick-active"
                tabIndex={0}
                role="tabpanel"
                id="slick-slide00"
                aria-describedby="slick-slide-control00"
                style={{
                  width: '871px',
                  position: 'relative',
                  left: '0px',
                  top: '0px',
                  zIndex: 999,
                  opacity: 1,
                }}
                data-slick-index="0"
                aria-hidden="false"
              >
                <span>
                  <img
                    src="https://evolstorm.com/wp-content/uploads/2021/10/pic_main-pc-01.png"
                    alt=""
                  />
                </span>
              </li>
              <li
                className="slick-slide"
                tabIndex={-1}
                role="tabpanel"
                id="slick-slide01"
                aria-describedby="slick-slide-control01"
                style={{ width: "871px", position: "relative", left: "-871px", top: "0px", zIndex: 998, opacity: 0, transition: "opacity 500ms ease 0s"}}
                data-slick-index="1"
                aria-hidden="true"
              >
                <span>
                  <img
                    src="https://evolstorm.com/wp-content/uploads/2021/10/pic_main-pc-02.png"
                    alt=""
                  />
                </span>
              </li>
            </div>
          </div>
          <ul className="slick-dots" role="tablist">
            <li className="slick-active" role="presentation">
              <button
                type="button"
                role="tab"
                id="slick-slide-control00"
                aria-controls="slick-slide00"
                aria-label="1 of 3"
                tabIndex={0}
                aria-selected="true"
              >
                1
              </button>
            </li>
            <li role="presentation">
              <button
                type="button"
                role="tab"
                id="slick-slide-control01"
                aria-controls="slick-slide01"
                aria-label="2 of 3"
                tabIndex={-1}
              >
                2
              </button>
            </li>
            <li role="presentation">
              <button
                type="button"
                role="tab"
                id="slick-slide-control02"
                aria-controls="slick-slide02"
                aria-label="3 of 3"
                tabIndex={-1}
              >
                3
              </button>
            </li>
          </ul>
        </ul>
      </div>
    </section>
  );
};
