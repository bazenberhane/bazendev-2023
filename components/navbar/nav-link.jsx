import dynamic from 'next/dynamic'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const LetterRoll = dynamic(() => import('./letter-wave'), {
  ssr: false,
})

export default function NavLink({
  url,
  a11yText,
  ariaCurrent,
  label,
  className,
  active,
  isNav,
}) {
  const path = usePathname()

  return (
    <Link
      href={url}
      legacyBehavior
    >
      <a
        className={`group flex w-full h-full relative items-center text-lg leading-[1.1] text-current justify-center`}
        aria-label={a11yText}
        aria-current={active}
      >
        {url === path && url !== '/contact' ? (
          <motion.span
            layoutId='underline'
            className='block absolute -bottom-2 h-2 w-2 rounded-full bg-blue mix-blend-multiply'
          />
        ) : null}

        <LetterRoll
          text={label}
          active={active}
        />
      </a>
    </Link>
  )
}

// import dynamic from "next/dynamic";
// import Link from "next/link";
// const LetterRoll = dynamic(() => import("../components/LetterRoll"), {
//   ssr: false,
// });
// export default function NavLink({
//   url,
//   a11yText,
//   ariaCurrent,
//   label,
//   className,
//   active,
//   isNav,
// }) {
//   return (
//     <Link href={url} legacyBehavior>
//       <a
//         className={`group flex items-center text-sm  text-current `}
//         aria-label={a11yText}
//         aria-current={active}
//       >
//         {isNav && (
//           <svg
//             className={`${
//               active ? "bg-current " : "bg-opacity-0"
//             }  mr-1.5 w-[11px] transition-transform duration-300 ease-[cubic-bezier([0.81,0,0.16,1])] group-hover:rotate-90 `}
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 12 12"
//           >
//             <path
//               stroke="currentColor"
//               d="M12 11.5H9M0 11.6h3M0 .5h3M.6 0v4M11.5 0v3M13 .5H9M11.4 12V9M.4 12V8"
//             />
//           </svg>
//         )}

//         <LetterRoll text={label} active={active} />
//       </a>
//     </Link>
//   );
// }

// // import Link from "next/link";

// // export function NavLink({ href, children }) {
// //   return (
// //     <Link
// //       href={href}
// //       className="inline-block rounded-lg px-2 py-1 text-sm text-current"
// //     >
// //       {children}
// //     </Link>
// //   );
// // }
// {
//   /* <span className='block '>
//         <a
//           href='/'
//           target='_blank'
//           rel='noopener noreferrer'
//           className='group relative block cursor-pointer overflow-hidden text-2xl leading-none ring-white ring-offset-4 ring-offset-white focus-visible:outline-none focus-visible:ring-[2px]'
//         >
//           <span className='block cursor-pointer py-1 transition-all duration-500 ease-in-out group-hover:translate-y-full'>
//             {label}
//           </span>
//           <span className='absolute inset-0 block -translate-y-full cursor-pointer py-1 transition-all duration-500 ease-in-out group-hover:translate-y-0'>
//             {label}
//           </span>
//           <span className='absolute bottom-0 left-0 right-0 block h-[3px] w-0 bg-black transition-all delay-150 duration-500 ease-in-out group-hover:w-full'></span>
//         </a>
//       </span> */
// }
