'use client'
import React from 'react'
import styles from './Intro.module.scss'
import useInterSection from '@/app/hooks/useInterSection'
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import { GoLinkExternal } from "react-icons/go";

type Props = {
  introRef: React.RefObject<HTMLDivElement | null>
}

const Intro = ({introRef} : Props) => {
  const { ref, isOn } = useInterSection<HTMLDivElement>(introRef)
  const title = '프론트엔드 개발자'

  // 스킬 리스트 로고 :: 이미지명이랑 동일하게 넣으면 자동으로 등록됨
  const icons = ['html', 'css', 'javaScript', 'Sass', 'Tailwind', 'React', 'Vite', 'Next', 'TypeScript', 'GCP', 'netlify', 'Vercel', 'GitHub', 'Notion', 'Photoshop', 'Figma']

  return (
    <section ref={ref} className={`${styles.section02} ${isOn ? styles.on : ''}`}>
      <div className={styles.section_inner}>
        <div className={styles.inner}>
          <div className={styles.top_box}>
            <div className={styles.name_wrap}>
              <strong>Kwon Heena</strong>
              <p className={styles.birth}>94.01.24</p>
            </div>
            <div className={styles.intro_box}>
              <p className={styles.intro_tit}>디자인과 기능 사이를 잇는, <FaQuoteLeft className={styles.icon} /> {title.split('').map((t, idx) => (<span style={{animationDelay: `${idx * 0.04}s`}} className={styles.slice_text}>{t}</span>))} <FaQuoteRight className={styles.icon} /> 입니다.</p>
              <p className={styles.intro_sub}>4년간 퍼블리싱으로 디자인을 구현해 왔고, 현재는 그 경험을 바탕으로 기능과 사용자 경험을 연결하는 프론트엔드 개발자로 도전하고 있습니다.<br />
                디자인과 기능 사이를 부지런히 오가는 <strong>꿀벌 같은 개발자</strong>가 되고자 합니다.</p>
            </div>
          </div>
          <div className={styles.md_box}>
            <div className={styles.img_wrap}>
              <img src="/images/photo.png" alt="" />
            </div>
            <div className={styles.info_wrap}>
              <div className={styles.fl}>
                <div>
                  <div className={styles.cont}>
                    <p className={styles.t}>소개</p>
                    <ul className={styles.pro_txt}>
                      <li>
                        <span>이름 : </span>
                        권희나
                      </li>
                      <li>
                        <span>생년월일 : </span>
                        1994.01.24
                      </li>
                      <li>
                        <span>전화번호 : </span>
                        010-7754-9424
                      </li>
                    </ul>
                  </div>
                  <div className={styles.cont}>
                    <p className={styles.t}>경력</p>
                    <ul className={styles.career}>
                      <li><span className={styles.text}>아이티굿</span>웹사이트 퍼블리싱<span className={styles.period}>2021.04 ~ 2025.06</span></li>
                    </ul>
                  </div>
                  <div className={styles.cont}>
                    <p className={styles.t}>교육</p>
                    <ul className={styles.career}>
                      <li>(K-DIGITAL)기업요구 생성형 AI를 활용한 개발자 양성 과정<span className={styles.period}><span className={styles.text}>라인컴퓨터아트학원</span> 2025.07 ~ 2026.01</span></li>
                    </ul>
                  </div>
                  
                </div>
                <div>
                  <div className={styles.cont}>
                    <p className={styles.t}>스킬</p>
                    <ul className={styles.skill_list}>
                      {
                        icons.map((skill, idx) => (
                          <li key={idx}>
                            <div className={styles.skill_ico}>
                              <img src={`/images/ico_${skill}.svg`} alt={skill} />
                            </div>
                            <p>{skill}</p>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  <div className={styles.cont}>
                      <p className={styles.t}>아카이브</p>
                      <ul className={styles.link}>
                        <li>
                          <a href="https://github.com/KwonHeena/" target='_blank'><img src="/images/ico_GitHub.svg" alt="" /> 깃허브</a>
                        </li>
                        <li>
                          <a href="https://www.notion.so/484282107cb7402e94568553af954023" target='_blank'><img src="/images/ico_Notion.svg" alt="" /> 노션</a>
                        </li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro