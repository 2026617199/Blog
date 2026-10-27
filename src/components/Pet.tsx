import { useId } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { cn } from '../lib/utils'

export type PetVariant = 'mint' | 'peach' | 'lavender'

export function Pet({ variant = 'mint', className, happy = false }: { variant?: PetVariant; className?: string; happy?: boolean }) {
  const id = useId().replace(/:/g, '')
  const reduced = useReducedMotion()
  const palettes = {
    mint: ['#f8ffef', '#cce9c4', '#98c49b', '#9ac998'],
    peach: ['#fff9ed', '#f6ddbc', '#d9b58e', '#f6b6ac'],
    lavender: ['#faf7ff', '#ddd1f1', '#b6a0cd', '#d3b0dc'],
  }
  const [top, bottom, edge, blush] = palettes[variant]
  return (
    <motion.svg className={cn('pet-illustration', className)} viewBox="0 0 220 240" fill="none" aria-hidden="true" animate={reduced ? {} : { y: [0, -6, 0], rotate: [0, 1.2, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: variant === 'peach' ? 0.9 : 0 }}>
      <defs>
        <linearGradient id={`${id}-body`} x1="110" y1="47" x2="110" y2="221" gradientUnits="userSpaceOnUse"><stop stopColor={top}/><stop offset="1" stopColor={bottom}/></linearGradient>
        <radialGradient id={`${id}-light`}><stop stopColor="white" stopOpacity=".9"/><stop offset="1" stopColor="white" stopOpacity="0"/></radialGradient>
        <filter id={`${id}-shadow`} x="-40%" y="-30%" width="180%" height="180%"><feDropShadow dx="0" dy="7" stdDeviation="5" floodColor={edge} floodOpacity=".25"/></filter>
      </defs>
      <ellipse cx="111" cy="223" rx="61" ry="9" fill={edge} opacity=".15"/>
      <g filter={`url(#${id}-shadow)`}>
        {variant === 'mint' ? <><path d="M92 72C64 40 72 4 87 15C104 27 108 53 106 72" fill={bottom} stroke={edge} strokeWidth="1.1"/><path d="M112 70C109 42 133 16 142 28C152 43 132 63 126 77" fill={bottom} stroke={edge} strokeWidth="1.1"/><path d="M89 60C81 43 80 28 86 28" stroke="#e2eed9" strokeWidth="8" strokeLinecap="round"/></> : variant === 'peach' ? <><path d="M61 97C48 80 45 53 57 56L86 78" fill={bottom} stroke={edge}/><path d="M139 78L162 57C175 47 178 85 163 103" fill={bottom} stroke={edge}/></> : <><path d="M67 99C30 64 35 37 51 49C68 62 77 78 83 91" fill={bottom} stroke={edge}/><path d="M135 88C147 62 171 43 177 57C185 77 162 94 155 106" fill={bottom} stroke={edge}/></>}
        <path d="M50 147C43 163 32 167 31 156C29 144 39 129 51 125" fill={bottom} stroke={edge}/>
        <path d="M165 128C183 131 192 147 187 155C183 163 170 151 164 145" fill={bottom} stroke={edge}/>
        <path d="M77 195C66 207 70 220 86 220C97 220 102 213 105 203M119 204C123 218 135 223 146 215C154 208 144 198 139 195" fill={bottom} stroke={edge}/>
        <path d="M44 136C43 95 69 68 107 68C151 68 174 100 174 142C174 187 156 207 111 209C66 210 42 191 44 136Z" fill={`url(#${id}-body)`} stroke={edge} strokeWidth="1.25"/>
        <ellipse cx="91" cy="105" rx="38" ry="27" fill={`url(#${id}-light)`} opacity=".6"/>
        <ellipse cx="76" cy="145" rx="14" ry="8" fill={blush} opacity=".48"/><ellipse cx="145" cy="145" rx="14" ry="8" fill={blush} opacity=".48"/>
        {happy ? <><path d="M82 133Q89 122 96 133M125 133Q132 122 139 133" stroke="#4c5b4e" strokeWidth="3.5" strokeLinecap="round"/></> : <><ellipse cx="88" cy="130" rx="4.2" ry="6" fill="#43564a"/><ellipse cx="132" cy="130" rx="4.2" ry="6" fill="#43564a"/><circle cx="89" cy="128" r="1.25" fill="white"/><circle cx="133" cy="128" r="1.25" fill="white"/></>}
        <path d="M105 143Q110 149 115 143" stroke="#65735e" strokeWidth="2.5" strokeLinecap="round"/>
        <ellipse cx="109" cy="177" rx="28" ry="21" fill="#fffef4" opacity=".45"/>
        {variant === 'mint' && <><path d="M105 72C100 55 109 43 118 51C122 57 115 68 105 72Z" fill="#86af70"/><path d="M110 69C119 54 133 58 130 66C126 73 118 73 110 69Z" fill="#a1c78b"/></>}
        {variant === 'peach' && <><path d="M93 77C87 66 95 64 100 69L107 77" fill="#f0b4a5"/><path d="M107 77C109 65 120 64 120 71L114 80" fill="#f0b4a5"/><circle cx="107" cy="77" r="5" fill="#d9a594"/></>}
        {variant === 'lavender' && <><path d="M110 75L114 63L120 73L133 74L123 82L126 94L114 87L103 91L106 80L98 72Z" fill="#f7dea0" stroke="#e4c782"/><path d="M71 175Q109 192 149 173" stroke="#b29ac9" strokeWidth="10" strokeLinecap="round" opacity=".6"/></>}
      </g>
    </motion.svg>
  )
}
