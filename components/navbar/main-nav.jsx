import { useState } from 'react'
import { usePathname } from 'next/navigation'
import NavLink from './nav-link'

export default function MainNav({ routes }) {
  const path = usePathname()
  const [shouldTransition, setShouldTransition] = useState(false)

  function handleHover() {
    setShouldTransition(true)
  }

  function handleHoverOut() {
    setShouldTransition(false)
  }
  return (
    <nav>
      <ul className='flex [&_li]:ml-10 lg:ml-12'>
        {routes.map((route) => (
          <li key={route.href}>
            <NavLink
              active={route.href === path ? true : false}
              url={route.href}
              a11yText='Navigate to the home page'
              label={route.label}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverOut}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}
