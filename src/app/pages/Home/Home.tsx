'use client'
import React from 'react'
import styles from './Home.module.scss'
import Link from 'next/link'


type btn = {
  btnClick : () => void
}

const Home = ({btnClick} : btn) => {
  const txt01 = 'port'
  const txt02 = 'folio'
  return (
    <section className={styles.section01}>
      <div className={styles.section_inner}>
        <div className={styles.home_wrap}>
          <div className={styles.lf_wrap}>
            <p className={styles.name}>HEENA KWON</p>
            <p className={styles.text}>
              <span>
                {txt01.split('').map((txt, idx) => (<i key={idx} style={{animationDelay: `${idx * 0.08}s`}}>{txt}</i>))}
              </span>
              <span>
                {txt02.split('').map((txt, idx) => (<i key={idx} style={{animationDelay: `${idx * 0.12}s`}}>{txt}</i>))}
              </span>
            </p>
          </div>
          <div className={styles.rt_wrap}>
            <div className={styles.top_box}>
              <p className={styles.year}>2026</p>
              <div className={styles.job}>
                <button>Frontend</button>
                <button>Publisher</button>
              </div>
            </div>
            <div className={styles.bt_box}>
              <button className={styles.scroll} onClick={btnClick}>
                <span className={styles.mouse}>
                  <span></span>
                </span>
                <p>Scroll</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home