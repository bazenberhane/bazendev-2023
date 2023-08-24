import { SplitText } from '@cyriacbr/react-split-text'

export default function LetterRoll({ text, active, color }) {
  return (
    <SplitText
      LetterWrapper={({ letterIndex, children }) => (
        <span className='leading-1 relative inline-block overflow-hidden'>
          <span
            className={`transition-translate block translate-y-0 duration-300 ease-in-out ${
              !active
                ? 'md:group-hover:translate-y-[-100%]'
                : 'md:group-hover:translate-y-[-100%]'
            }`}
            style={{ transitionDelay: `${letterIndex * 33}ms` }}
          >
            {children}
          </span>
          <span
            className={`absolute left-0 top-0 hidden w-full translate-y-full transition-all duration-300 ease-in-out md:block md:group-hover:translate-y-0 ${
              color ? 'text-white' : ''
            } `}
            style={{ transitionDelay: `${letterIndex * 33}ms` }}
          >
            {children}
          </span>
        </span>
      )}
    >
      {text}
    </SplitText>
  )
}
