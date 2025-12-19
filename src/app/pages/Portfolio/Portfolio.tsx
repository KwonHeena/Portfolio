'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import styles from './Portfolio.module.scss'

const Portfolio = () => {
  return (
    <section className={styles.section03}>
      <div className={styles.section_inner}>
        <div className={styles.slide_wrap}>
          <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <img src="/images/port01.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/port02.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/port03.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/port04.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/port05.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/port06.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Portfolio