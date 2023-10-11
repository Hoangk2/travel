import React from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './main.module.scss';
import img from '~/Assets/img/NewZealand.jpg';
import Aus from '~/Assets/img/Uc.jpg';
import America from '~/Assets/img/America.jpg';
import China from '~/Assets/img/China.jpg';
import Korea from '~/Assets/img/Korea.jpg';
import Thailan from '~/Assets/img/Thailan.jpg';
import Brazil from '~/Assets/img/Brazil.jpg';
import Japan from '~/Assets/img/Japan.jpg';
import Vietnam from '~/Assets/img/Vietnam.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Sydney',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:
      'The epitome of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities',
  },
  {
    id: 2,
    imgSrc: Aus,
    destTitle: 'Bora Bora',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:
      'The epitome of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities',
  },
  {
    id: America,
    imgSrc: img,
    destTitle: 'Washington DC',
    location: 'America',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:
      'The epitome of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities',
  },
  {
    id: 4,
    imgSrc: China,
    destTitle: 'Thousand miles of success',
    location: 'China',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:
      'The epitome of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities',
  },
  {
    id: 5,
    imgSrc: Korea,
    destTitle: 'Seoul',
    location: 'Korea',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:
      'The epitome of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities',
  },
  {
    id: 6,
    imgSrc: Thailan,
    destTitle: 'Bangkok',
    location: 'Thailand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:
      'The epitome of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities',
  },
  {
    id: 7,
    imgSrc: Brazil,
    destTitle: 'Brasilia',
    location: 'Brazil',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:
      'The epitome of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities',
  },
  {
    id: 8,
    imgSrc: Japan,
    destTitle: 'Tokyo',
    location: 'Japan',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:
      'The epitome of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities',
  },
  {
    id: 9,
    imgSrc: Vietnam,
    destTitle: 'Hạ Long',
    location: 'Vietnam',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:
      'The epitome of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activities',
  },
];

const cx = classNames.bind(styles);

function Main() {
  //Tạo 1 hook để thêm hiệu ứng cuộn chuột
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  return (
    <section className={cx('main', 'container', 'section')}>
      <div className={cx('secTitle')}>
        <h3 data-aos="fade-right" className={cx('title')}>
          Most visited destination
        </h3>
      </div>

      <div className={cx('secContent', 'grid')}>
        {Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
          return (
            <div data-aos="fade-up" key={id} className={cx('singDestination')}>
              <div className={cx('imageDiv')}>
                <img src={imgSrc} alt={destTitle} />
              </div>

              <div className={cx('cardInfo')}>
                <h4 className={cx('destTitle')}>{destTitle}</h4>
                <span className={cx('continent', 'flex')}>
                  <FontAwesomeIcon icon={faLocationDot} className={cx('continent-icon', 'icon')} />
                  <span className={cx('name')}>{location}</span>
                </span>

                <div className={cx('fees', 'flex')}>
                  <div className={cx('grade')}>
                    <span>
                      {grade}
                      <small>+1</small>
                    </span>
                  </div>
                  <div className={cx('price')}>
                    <h5>{fees}</h5>
                  </div>
                </div>

                <div className={cx('desc')}>
                  <p>{description}</p>
                </div>

                <button className={cx('btn', 'cardInfo-btn', 'flex')}>
                  DETAILS <FontAwesomeIcon icon={faClipboardCheck} className={cx('icon', 'btn-icon')} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Main;
