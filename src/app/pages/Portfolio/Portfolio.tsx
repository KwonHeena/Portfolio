'use client'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination'
import styles from './Portfolio.module.scss'
import useInterSection from '@/app/hooks/useInterSection';

type Props = {
  portRef : React.RefObject<HTMLDivElement | null>
}

const Portfolio = ({portRef} : Props) => {
  const { ref, isOn } = useInterSection<HTMLDivElement>(portRef)
  const paginationRef = useRef<HTMLDivElement | null>(null)
  return (
    <section className={styles.section03}>
      <div className={styles.section_inner}>
        <p className={styles.title} style={{fontSize: 45, lineHeight: 1}}>Publishing</p>
        <div className={styles.slide_wrap}>
          <Swiper
            modules={[Pagination]}
            pagination={{
              el : paginationRef.current,
              clickable : true
            }}

            slidesPerView={2.5}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            loop
        >
          <SwiperSlide>
            <a href='https://www.fiti.re.kr/web/main/index.do' target='_blank' className={styles.inner}>
              <div className={styles.img}>
                <img src="/images/port01.jpg" alt="" />
                <div className={styles.mark}>
                  <img src="/images/ico_mark.png" alt="웹접근성 마크" />
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.site_name}>
                  <p className={styles.t}>FITI 시험연구원</p>
                </div>
                <div className={styles.site_list}>
                  <p className={styles.tit}>프로젝트명 : </p>
                  <p className={styles.name}>FITI시험연구원 대표 홈페이지 재구축 용역</p>
                </div>
                <div className={styles.site_list}>
                  <p className={styles.tit}>수행기간 : </p>
                  <p className={styles.name}>2024.07 ~ 2025.01</p>
                </div>
                <div className={styles.site_list}>
                  <p className={styles.tit}>기여도 : </p>
                  <p className={styles.name}>퍼블리싱 100%</p>
                </div>
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href='https://www.gsp.or.kr/' target='_blank' className={styles.inner}>
              <div className={styles.img}>
                <img src="/images/port02.jpg" alt="" />
                <div className={styles.mark}>
                  <img src="/images/ico_mark.png" alt="웹접근성 마크" />
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.site_name}>
                  <p className={styles.t}>경기스타트업플랫폼</p>
                </div>
                <div className={styles.site_list}>
                  <p className={styles.tit}>프로젝트명 : </p>
                  <p className={styles.name}>경기스타트업플랫폼 유지관리 및 메인 리뉴얼</p>
                </div>
                <div className={styles.site_list}>
                  <p className={styles.tit}>수행기간 : </p>
                  <p className={styles.name}>2024.03 ~ 2025.02</p>
                </div>
                <div className={styles.site_list}>
                  <p className={styles.tit}>기여도 : </p>
                  <p className={styles.name}>퍼블리싱 100%</p>
                </div>
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href='https://www.kist.re.kr/ko/index.do#none' target='_blank' className={styles.inner}>
              <div className={styles.img}>
                <img src="/images/port03.jpg" alt="" />
                <div className={styles.mark}>
                  <img src="/images/ico_mark.png" alt="웹접근성 마크" />
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.site_name}>
                  <p className={styles.t}>한국과학기술연구원</p>
                </div>
                <div className={styles.site_list}>
                  <p className={styles.tit}>프로젝트명 : </p>
                  <p className={styles.name}>한국과학기술연구원 유지관리 및 메인 리뉴얼</p>
                </div>
                <div className={styles.site_list}>
                  <p className={styles.tit}>수행기간 : </p>
                  <p className={styles.name}>2025.01 ~ 2026.02</p>
                </div>
                <div className={styles.site_list}>
                  <p className={styles.tit}>기여도 : </p>
                  <p className={styles.name}>퍼블리싱 100%</p>
                </div>
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href='https://www.krri.re.kr/web/main/index.do' target="_blank" className={styles.inner}>
              <div className={styles.img}>
                <img src="/images/port04.jpg" alt="" />
                <div className={styles.mark}>
                  <img src="/images/ico_mark.png" alt="웹접근성 마크" />
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.site_name}>
                  <p className={styles.t}>철도기술연구원</p>
                </div>
                <div className={styles.site_list}>
                  <p className={styles.tit}>프로젝트명 : </p>
                  <p className={styles.name}>한국철도기술연구원 철도형식승인 홈페이지 개선 사업</p>
                </div>
                <div className={styles.site_list}>
                  <p className={styles.tit}>수행기간 : </p>
                  <p className={styles.name}>2023.11 ~ 2023.12</p>
                </div>
                <div className={styles.site_list}>
                  <p className={styles.tit}>기여도 : </p>
                  <p className={styles.name}>퍼블리싱 100%</p>
                </div>
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href='https://www.bizbc.or.kr/kor/main/index.do' target='_blank' className={styles.inner}>
              <div className={styles.img}>
                <img src="/images/port05.jpg" alt="" />
                <div className={styles.mark}>
                  <img src="/images/ico_mark.png" alt="웹접근성 마크" />
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.site_name}>
                  <p className={styles.t}>부천산업진흥원</p>
                </div>
                <div className={styles.site_list}>
                  <p className={styles.tit}>프로젝트명 : </p>
                  <p className={styles.name}>부천산업진흥원 온라인 사업관리시스템 구축 용역</p>
                </div>
                <div className={styles.site_list}>
                  <p className={styles.tit}>수행기간 : </p>
                  <p className={styles.name}>2023.07 ~ 2023.12</p>
                </div>
                <div className={styles.site_list}>
                  <p className={styles.tit}>기여도 : </p>
                  <p className={styles.name}>퍼블리싱 100%</p>
                </div>
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href='https://www.gri.re.kr/web/main/index.do' target='_blank' className={styles.inner}>
              <div className={styles.img}>
                <img src="/images/port06.jpg" alt="" />
                <div className={styles.mark}>
                  <img src="/images/ico_mark.png" alt="웹접근성 마크" />
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.site_name}>
                  <p className={styles.t}>경기연구원</p>
                </div>
                <div className={styles.site_list}>
                  <p className={styles.tit}>프로젝트명 : </p>
                  <p className={styles.name}>경기연구원 홈페이지 재구축 및 유지관리</p>
                </div>
                <div className={styles.site_list}>
                  <p className={styles.tit}>작업기간 : </p>
                  <p className={styles.name}>2023.01 ~ 2023.03</p>
                </div>
                <div className={styles.site_list}>
                  <p className={styles.tit}>기여도 : </p>
                  <p className={styles.name}>퍼블리싱 100%</p>
                </div>
              </div>
            </a>
          </SwiperSlide>

        </Swiper>
        <div ref={paginationRef} className={styles.custom_dots}> </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio