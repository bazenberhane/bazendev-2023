'use client'

import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import s from './hero.module.css'

export default function index() {
  const firstText = useRef(null)
  const secondText = useRef(null)
  const slider = useRef(null)
  let xPercent = 0
  let direction = -1

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.35,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: '-500px',
    })
    requestAnimationFrame(animate)
  }, [])

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0
    } else if (xPercent > 0) {
      xPercent = -100
    }
    gsap.set(firstText.current, { xPercent: xPercent })
    gsap.set(secondText.current, { xPercent: xPercent })
    requestAnimationFrame(animate)
    xPercent += 0.05 * direction
  }

  return (
    <main className={s.hero}>
      <div className={s.marqueeContainer}>
        <div
          ref={slider}
          className={s.marquee}
        >
          <p
            className={s.marqueeText}
            ref={firstText}
          >
            Freelance Developer -
          </p>
          <p
            className={s.marqueeTextTwo}
            ref={secondText}
          >
            Freelance Developer -
          </p>
        </div>
      </div>
      <div
        data-scroll
        data-scroll-speed={0.1}
        className={s.desc}
      >
        <p>Freelance</p>
        <p>Designer & Developer</p>
      </div>
    </main>
  )
}
