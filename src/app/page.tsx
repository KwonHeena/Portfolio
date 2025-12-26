'use client'
import React, { useEffect, useRef, useState } from 'react'
import Home from './pages/Home/Home'
import Intro from './pages/Intro/Intro'
import Portfolio from './pages/Portfolio/Portfolio'
import Footer from "./components/Footer";

const page = () => {
 const introRef = useRef<HTMLDivElement>(null)
 const portRef = useRef<HTMLDivElement>(null)

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
      <Portfolio portRef={portRef} />
      <Footer /> 
    </main>
  )
}

export default page