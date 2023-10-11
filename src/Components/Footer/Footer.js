import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './footer.module.scss';
import video from '~/Assets/video/ocean.mp4';
import { MessageIcon } from '~/Components/Icon';
import { MdFacebook } from 'react-icons/md';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';

import Aos from 'aos';
import 'aos/dist/aos.css';
const cx = classNames.bind(styles);

function Footer() {
  //Tạo 1 hook để thêm hiệu ứng cuộn chuột
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  return (
    <section className={cx('footer')}>
      <div className={cx('videoDiv')}>
        <video src={video} loop autoPlay muted type="video/mp4" />
      </div>

      <div className={cx('secContent', 'container')}>
        <div className={cx('contactDiv', 'flex')}>
          <div data-aos="fade-up" className={cx('text')}>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className={cx('inputDiv', 'flex')}>
            <input data-aos="fade-up" type="text" placeholder="Enter email address" />
            <button data-aos="fade-up" className={cx('inputDiv-btn', 'flex', 'btn')} type="submit">
              SEND
              <MessageIcon className={cx('btn-icon', 'icon')} />
            </button>
          </div>
        </div>

        <div className={cx('footerCard', 'flex')}>
          <div className={cx('footerIntro', 'flex')}>
            <div className={cx('logoDiv')}>
              <a href="#" className={cx('logo', 'flex')}>
                <FontAwesomeIcon icon={faEarthAsia} className={cx('logo-icon', 'icon')} />
                Travel.
              </a>
            </div>

            <div data-aos="fade-up" className={cx('footerParagraph')}>
              'The epitome of romance, Bora Bora is one of the best travel destination in the World. This place is known
              for its luxurious stays and adventurous activities'
            </div>

            <div data-aos="fade-up" className={cx('footerSocials', 'flex')}>
              <MdFacebook className={cx('icon', 'footerSocials-icon')} />
              <FaTwitter className={cx('icon', 'footerSocials-icon')} />
              <FaInstagram className={cx('icon', 'footerSocials-icon')} />
            </div>
          </div>

          <div className={cx('footerLinks', 'grid')}>
            <div data-aos="fade-up" className={cx('linkGroup')}>
              <span className={cx('groupTitle')}>OUR AGENCY</span>

              <li className={cx('footerList', 'flex')}>
                <FiChevronRight className={cx('icon', 'footerList-icon')} />
                Services
              </li>

              <li className={cx('footerList', 'flex')}>
                <FiChevronRight className={cx('icon', 'footerList-icon')} />
                Insurance
              </li>

              <li className={cx('footerList', 'flex')}>
                <FiChevronRight className={cx('icon', 'footerList-icon')} />
                Agency
              </li>

              <li className={cx('footerList', 'flex')}>
                <FiChevronRight className={cx('icon', 'footerList-icon')} />
                Tourism
              </li>

              <li className={cx('footerList', 'flex')}>
                <FiChevronRight className={cx('icon', 'footerList-icon')} />
                Payment
              </li>
            </div>

            <div data-aos="fade-up" data-aos-duration="1400" className={cx('linkGroup')}>
              <span className={cx('groupTitle')}>PARTNERS</span>

              <li className={cx('footerList', 'flex')}>
                <FiChevronRight className={cx('icon', 'footerList-icon')} />
                Booking
              </li>

              <li className={cx('footerList', 'flex')}>
                <FiChevronRight className={cx('icon', 'footerList-icon')} />
                Rentcars
              </li>

              <li className={cx('footerList', 'flex')}>
                <FiChevronRight className={cx('icon', 'footerList-icon')} />
                HostelWorld
              </li>

              <li className={cx('footerList', 'flex')}>
                <FiChevronRight className={cx('icon', 'footerList-icon')} />
                Trivago
              </li>

              <li className={cx('footerList', 'flex')}>
                <FiChevronRight className={cx('icon', 'footerList-icon')} />
                TripAdvisor
              </li>
            </div>

            <div data-aos="fade-up" data-aos-duration="2600" className={cx('linkGroup')}>
              <span className={cx('groupTitle')}>LAST MINUTE</span>

              <li className={cx('footerList', 'flex')}>
                <FiChevronRight className={cx('icon', 'footerList-icon')} />
                London
              </li>

              <li className={cx('footerList', 'flex')}>
                <FiChevronRight className={cx('icon', 'footerList-icon')} />
                California
              </li>

              <li className={cx('footerList', 'flex')}>
                <FiChevronRight className={cx('icon', 'footerList-icon')} />
                Indonesia
              </li>

              <li className={cx('footerList', 'flex')}>
                <FiChevronRight className={cx('icon', 'footerList-icon')} />
                Europe
              </li>

              <li className={cx('footerList', 'flex')}>
                <FiChevronRight className={cx('icon', 'footerList-icon')} />
                Oceania
              </li>
            </div>
          </div>

          <div className={cx('footerDiv', 'flex')}>
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - ISRATECH 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
