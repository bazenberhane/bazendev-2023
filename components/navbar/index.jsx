'use client'

import { useState } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import Image from 'next/image'

import MainNav from './main-nav'
import MobileNav from './mobile-nav'
import NavLink from './nav-link'

const routes = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/works',
    label: 'Works',
  },
  {
    href: '/design',
    label: 'Design',
  },
]

export default function Navbar() {
  const [shouldTransition, setShouldTransition] = useState(false)

  function handleHover() {
    setShouldTransition(true)
  }

  function handleHoverOut() {
    setShouldTransition(false)
  }
  return (
    <LazyMotion features={domAnimation}>
      <div className='w-full fixed z-[99] border-b hidden lg:block overflow-hidden bg-white'>
        <div className='flex h-16 items-center pl-4'>
          <span className='w-[200px]'>
            <Image
              src='/images/funky-logo.png'
              alt='logo'
              className='object-contain'
              width={100}
              height={100}
            />
          </span>
          <MainNav routes={routes} />

          <div className='ml-auto bg-blue text-white h-full w-[250px] tracking-tight flex items-center justify-center'>
            <NavLink
              active={false}
              url='/contact'
              a11yText='Navigate to the contact page'
              label='Contact'
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverOut}
              className='w-full h-full'
            />
          </div>
        </div>
      </div>
      <MobileNav routes={routes} />
    </LazyMotion>
  )
}
