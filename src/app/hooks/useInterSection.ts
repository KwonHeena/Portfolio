'use client'
import React, { useEffect, useState, useRef } from 'react'

const useInterSection = <T extends HTMLElement>(
  externalRef?: React.RefObject<T | null>
) => {
  const innerRef = useRef<T | null>(null)
  const ref = externalRef ?? innerRef
  const [isOn, setIsOn] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsOn(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])

  return { ref, isOn }
}

export default useInterSection