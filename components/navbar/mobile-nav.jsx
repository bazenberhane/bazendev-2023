import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, m } from 'framer-motion'
import Image from 'next/image'
export default function MobileNav({ routes }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuToggle = () => {
    if (menuOpen) {
      setMenuOpen(false)
    } else {
      setMenuOpen(true)
    }
  }
  return (
    <>
      <div className='flex justify-between items-center p-4 lg:hidden z-[99]'>
        <div className='mr-auto w-[25%] max-w-[90px] 2xl:max-w-[200px] block'>
          <Link
            scroll={false}
            href='/'
            className='origin-center block'
          >
            <span
              className={`w-full transition-all ease-[cubic-bezier(0.71,0,0.17,1)] duration-[700ms]`}
            >
              <Image
                src='/images/funky-logo.png'
                alt='logo'
                width={100}
                height={100}
              />
            </span>
          </Link>
        </div>
        <div className='flex space-x-6'>
          <button
            aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
            onClick={menuToggle}
            className={`a11y-focus rounded-full w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] 2xl:w-[68px] 2xl:h-[68px] flex items-center justify-center border group relative overflow-hidden`}
          >
            <div className='w-full p-2 lg:p-3'>
              <div className='relative  w-full'>
                <span
                  className={`transition-all ease-[cubic-bezier(0.83,0,0.17,1)] duration-[300ms] block w-full h-[1px] bg-black ${
                    menuOpen ? 'rotate-45' : 'mb-1 lg:mb-3'
                  }`}
                ></span>
                <span
                  className={`transition-all ease-[cubic-bezier(0.83,0,0.17,1)] duration-[300ms] block w-full h-[1px] bg-black ${
                    menuOpen ? '-rotate-45' : ''
                  }`}
                ></span>
              </div>
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <m.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.55, ease: [0.85, 0, 0.15, 1] },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.55, ease: [0.85, 0, 0.15, 1] },
              }}
              className='z-[999] fixed inset-0 flex flex-col lg:hidden'
            >
              <m.div
                initial={{ scale: 1 }}
                animate={{
                  scale: 100,
                  transition: { duration: 0.75, ease: [0.71, 0, 0.17, 1] },
                }}
                exit={{
                  scale: 1,
                  transition: {
                    duration: 0.75,
                    delay: 0.05,
                    ease: [0.71, 0, 0.17, 1],
                  },
                }}
                className='w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] 2xl:w-[68px] 2xl:h-[68px] rounded-full bg-white mx-5 lg:mx-8 m-5 lg:m-6 2xl:m-8 2xl:mx-10 absolute top-0 left-0 z-[10]'
              ></m.div>
              <div className='p-4 border-b border-black w-full z-[999] transition-colors ease-custom duration-[300ms] mb-auto'>
                <div className='flex flex-wrap items-center'>
                  <div className='mr-auto w-[25%] max-w-[90px] 2xl:max-w-[200px] block lg:hidden'>
                    <Link
                      scroll={false}
                      href='/'
                      className='origin-center block'
                    >
                      <span
                        className={`w-full transition-all ease-[cubic-bezier(0.71,0,0.17,1)] duration-[700ms]`}
                      >
                        <Image
                          src='/images/funky-logo.png'
                          alt='logo'
                          width={100}
                          height={100}
                        />
                      </span>
                    </Link>
                  </div>
                  <button
                    aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
                    onClick={menuToggle}
                    className={`a11y-focus rounded-full w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] 2xl:w-[68px] 2xl:h-[68px] flex items-center justify-center border group relative overflow-hidden`}
                  >
                    <div className='w-full p-2 lg:p-3'>
                      <div className='relative  w-full'>
                        <span
                          className={`transition-all ease-[cubic-bezier(0.83,0,0.17,1)] duration-[300ms] block w-full h-[1px] bg-black ${
                            menuOpen ? 'rotate-45' : 'mb-1 lg:mb-3'
                          }`}
                        ></span>
                        <span
                          className={`transition-all ease-[cubic-bezier(0.83,0,0.17,1)] duration-[300ms] block w-full h-[1px] bg-black ${
                            menuOpen ? '-rotate-45' : ''
                          }`}
                        ></span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <div className='w-full border-black p-4 mb-auto z-[999]'>
                <nav className='mb-8'>
                  {routes.map((route) => (
                    <div
                      key={route.href}
                      className='overflow-hidden relative border-b border-black'
                    >
                      <m.div
                        initial={{ y: '100%' }}
                        animate={{
                          y: 0,
                          transition: {
                            duration: 0.55,
                            delay: 0.1,
                            ease: [0.85, 0, 0.15, 1],
                          },
                        }}
                        exit={{
                          y: 0,
                          transition: {
                            duration: 0.55,
                            ease: [0.85, 0, 0.15, 1],
                          },
                        }}
                      >
                        <span className='block absolute top-[50%] right-3 w-3 h-3 rounded-full bg-blue'></span>

                        <Link
                          href={route.href}
                          className='text-[15vw]'
                          onClick={menuToggle}
                        >
                          {route.label}
                        </Link>
                      </m.div>
                    </div>
                  ))}
                  <div className='overflow-hidden relative border-b border-black'>
                    <m.div
                      initial={{ y: '100%' }}
                      animate={{
                        y: 0,
                        transition: {
                          duration: 0.55,
                          delay: 0.1,
                          ease: [0.85, 0, 0.15, 1],
                        },
                      }}
                      exit={{
                        y: 0,
                        transition: {
                          duration: 0.55,
                          ease: [0.85, 0, 0.15, 1],
                        },
                      }}
                    >
                      <span className='block absolute top-[50%] right-3 w-3 h-3 rounded-full bg-blue'></span>

                      <Link
                        href='/contact'
                        className='text-[15vw]'
                        onClick={menuToggle}
                      >
                        Contact
                      </Link>
                    </m.div>
                  </div>
                </nav>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
