'use client'
import React from 'react'
import styles from './Intro.module.scss'
import useInterSection from '@/app/hooks/useInterSection'

type Props = {
  introRef: React.RefObject<HTMLDivElement>
}

const Intro = ({introRef} : Props) => {
  const { ref, isOn } = useInterSection<HTMLDivElement>(introRef)
  return (
    <section ref={ref} className={`${styles.section02} ${isOn ? styles.on : ''}`}>인트로</section>
  )
}

export default Intro