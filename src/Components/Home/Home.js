import React from 'react';
import classNames from 'classnames/bind';
import styles from './home.module.scss';

const cx = classNames.bind(styles);

function Home() {
  return (
    <section className={cx('home')}>
      <div className={cx('overlay')}></div>
      <video src=""></video>
    </section>
  );
}

export default Home;
