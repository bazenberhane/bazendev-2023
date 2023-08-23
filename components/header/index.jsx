import Link from 'next/link'

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

export default function Header() {
  return (
    <nav>
      <ul className='flex'>
        {routes.map((route, i) => (
          <li
            key={i}
            className='ml-10'
          >
            <Link href={route.href}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
