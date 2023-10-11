import React from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faFilter, faListUl, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './home.module.scss';
import video from '~/Assets/video/video.mp4';
import { MdFacebook } from 'react-icons/md';
import { FaTwitter, FaInstagram } from 'react-icons/fa';

import Aos from 'aos';
import 'aos/dist/aos.css';
const cx = classNames.bind(styles);

function Home() {
  //Tạo 1 hook để thêm hiệu ứng cuộn chuột
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className={cx('home')}>
      <div className={cx('overlay')}></div>
      <video className={cx('video')} src={video} muted autoPlay loop type="video/mp4"></video>

      <div className={cx('homeContent', 'container')}>
        <div className={cx('textDiv')}>
          <span data-aos="fade-up" className={cx('smallText')}>
            Our Packages
          </span>
          <h1 data-aos="fade-up" className={cx('homeTitle')}>
            Search your Holiday
          </h1>
        </div>

        <div data-aos="fade-up" className={cx('cardDiv', 'grid')}>
          <div className={cx('destinationInput')}>
            <label htmlFor={cx('city')}>Search your destination:</label>
            <div className={cx('input', 'flex')}>
              <input type="text" placeholder="Enter name here" />
              <FontAwesomeIcon icon={faLocationDot} className={cx('icon', 'input-icon')} />
            </div>
          </div>

          <div className={cx('dateInput')}>
            <label htmlFor={cx('date')}>Search your date:</label>
            <div className={cx('input', 'flex')}>
              <input type="date" placeholder="Enter name here" />
            </div>
          </div>

          <div className={cx('priceInput')}>
            <div className={cx('label-total', 'flex')}>
              <label htmlFor="price">Max price:</label>
              <h3 className={cx('total')}>$5000</h3>
            </div>
            <div className={cx('input', 'flex')}>
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div className={cx('searchOption', 'flex')}>
            <FontAwesomeIcon icon={faFilter} className={cx('icon', 'searchOption-icon')} />
            <span>MORE FILTERS</span>
          </div>
        </div>

        <div data-aos="fade-up" className={cx('homeFooterIcons', 'flex')}>
          <div className={cx('rightIcons')}>
            <MdFacebook className={cx('face-icon')} />
            <FaTwitter className={cx('face-icon')} />
            <FaInstagram className={cx('face-icon')} />
          </div>
          <div className={cx('leftIcons')}>
            <FontAwesomeIcon icon={faListUl} className={cx('face-icon')} />
            <FontAwesomeIcon icon={faLayerGroup} className={cx('face-icon')} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
