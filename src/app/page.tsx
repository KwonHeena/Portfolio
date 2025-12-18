'use client'
import React, { useEffect, useRef, useState } from 'react'
import Home from './pages/Home/Home'
import Intro from './pages/Intro/Intro'

const page = () => {
 const introRef = useRef<HTMLDivElement>(null)

//  HOME -> Intro 스크롤
  const scrollIntro = () => {
    introRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }

 

  return (
    <main>
      <Home btnClick={scrollIntro} />
      <Intro introRef={introRef} />
    </main>
  )
}

export default page