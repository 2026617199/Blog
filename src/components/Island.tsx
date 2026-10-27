import { useId } from 'react'

export function Island({ className = '', compact = false }: { className?: string; compact?: boolean }) {
  const id = useId().replace(/:/g, '')
  return <svg className={className} viewBox="0 0 720 500" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id={`${id}-grass`} x1="360" y1="185" x2="360" y2="367" gradientUnits="userSpaceOnUse"><stop stopColor="#dce7b9"/><stop offset=".55" stopColor="#bdd5a5"/><stop offset="1" stopColor="#9dbc8b"/></linearGradient>
      <linearGradient id={`${id}-rock`} x1="335" y1="305" x2="335" y2="467" gradientUnits="userSpaceOnUse"><stop stopColor="#d4d8be"/><stop offset=".6" stopColor="#c7cdb4"/><stop offset="1" stopColor="#e9e9d8"/></linearGradient>
      <linearGradient id={`${id}-water`} x1="436" y1="280" x2="467" y2="338" gradientUnits="userSpaceOnUse"><stop stopColor="#bfd8d0"/><stop offset="1" stopColor="#e1ede0"/></linearGradient>
      <linearGradient id={`${id}-roof`} x1="453" y1="143" x2="513" y2="219" gradientUnits="userSpaceOnUse"><stop stopColor="#b8b7cf"/><stop offset="1" stopColor="#8e91ad"/></linearGradient>
      <radialGradient id={`${id}-cloud`}><stop stopColor="white" stopOpacity=".95"/><stop offset="1" stopColor="white" stopOpacity="0"/></radialGradient>
      <filter id={`${id}-soft`}><feGaussianBlur stdDeviation="7"/></filter>
      <filter id={`${id}-island-shadow`} x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#647b62" floodOpacity=".13"/></filter>
    </defs>
    <ellipse cx="358" cy="455" rx="215" ry="25" fill="#a5b4b5" opacity=".1" filter={`url(#${id}-soft)`}/>
    <g className="island-cloud-back"><ellipse cx="155" cy="203" rx="135" ry="40" fill={`url(#${id}-cloud)`}/><ellipse cx="578" cy="164" rx="145" ry="43" fill={`url(#${id}-cloud)`}/></g>
    <g filter={`url(#${id}-island-shadow)`}>
      <path d="M83 310L126 365L175 374L204 407L257 418L282 450L324 442L360 468L397 439L452 437L477 405L525 400L555 365L596 353L637 309Z" fill={`url(#${id}-rock)`}/>
      <path d="M126 325L175 374L204 407L200 352M262 354L282 450L302 385M364 365L360 468L397 410M482 346L477 405L508 372M558 332L555 365" stroke="#b6c2a5" strokeWidth="2" opacity=".45"/>
      <path d="M111 329L158 358L154 337M210 355L249 383L242 360M410 357L433 397L451 354M523 341L539 364L558 328" fill="#e8e8d7" opacity=".65"/>
      <path d="M82 291C106 245 160 223 217 216C248 179 308 180 348 207C398 173 451 192 479 221C548 216 593 242 630 282C658 313 625 338 563 348C499 378 445 369 400 375C333 392 282 374 228 369C175 368 108 347 84 323C73 313 73 305 82 291Z" fill={`url(#${id}-grass)`}/>
      <path d="M83 308C153 357 226 349 290 364C372 384 420 356 473 362C534 368 601 341 635 309" stroke="#91b082" strokeWidth="5" strokeLinecap="round" opacity=".55"/>
      <path d="M135 289C196 237 231 267 282 235C312 219 342 217 365 232" stroke="#eef0d5" strokeWidth="17" strokeLinecap="round" opacity=".82"/>
      <path d="M285 240C284 275 328 298 384 309C426 319 440 333 420 363" stroke="#f2f0d9" strokeWidth="23" strokeLinecap="round"/>
      <path d="M432 264C462 250 497 265 517 283C538 305 522 327 485 333C451 338 408 319 414 297C417 284 423 275 432 264Z" fill={`url(#${id}-water)`}/>
      <path d="M439 284C460 275 482 283 490 287M454 305C477 313 501 310 509 303" stroke="#eef5e8" strokeWidth="3" strokeLinecap="round"/>
      <path d="M126 318Q156 306 177 325M198 336Q223 327 241 340M521 326Q547 312 565 322" stroke="#85aa77" strokeWidth="3" strokeLinecap="round"/>
      <g fill="#f9f1cd"><circle cx="165" cy="293" r="3"/><circle cx="171" cy="300" r="2"/><circle cx="225" cy="280" r="3"/><circle cx="392" cy="349" r="3"/><circle cx="543" cy="291" r="3"/><circle cx="550" cy="297" r="2"/><circle cx="290" cy="338" r="2"/><circle cx="312" cy="352" r="3"/></g>
      <g fill="#c3a9be"><circle cx="183" cy="323" r="3"/><circle cx="189" cy="326" r="2.4"/><circle cx="348" cy="261" r="3"/><circle cx="355" cy="265" r="2"/><circle cx="591" cy="299" r="2.5"/></g>
      <g stroke="#8dab79" strokeWidth="1.8" strokeLinecap="round"><path d="M151 282L151 273M151 278L146 275M151 278L155 272M246 316L246 305M246 310L241 308M565 279L565 269M565 274L569 270M329 334L329 325M329 328L324 326"/></g>
      {!compact && <g>
        <path d="M463 237V187L493 162L523 187V237C503 245 484 244 463 237Z" fill="#f5edd9" stroke="#d1cbb5"/>
        <path d="M453 192L493 151L534 193L526 201L493 171L461 201Z" fill={`url(#${id}-roof)`}/>
        <path d="M489 240V219C489 205 505 205 505 219V241" fill="#a6b7a0"/><path d="M472 203H480V215H472Z" fill="#dbd8b6"/><path d="M475 203V215M472 209H480" stroke="#faf7df" strokeWidth="1.5"/>
        <path d="M515 169V145H522V177" fill="#c1bcae"/><path d="M518 132C507 120 529 116 518 105" stroke="white" strokeWidth="7" strokeLinecap="round" opacity=".65"/>
        <path d="M466 240L480 235M517 240L531 234" stroke="#91aa7e" strokeWidth="5" strokeLinecap="round"/>
      </g>}
      <g><path d="M192 255V183" stroke="#a0a184" strokeWidth="7" strokeLinecap="round"/><path d="M192 223L175 209M192 207L206 190" stroke="#a0a184" strokeWidth="4" strokeLinecap="round"/><ellipse cx="176" cy="184" rx="28" ry="29" fill="#b8ceaa"/><ellipse cx="206" cy="175" rx="29" ry="32" fill="#c6d7b6"/><ellipse cx="190" cy="153" rx="29" ry="30" fill="#d4e0c1"/><ellipse cx="169" cy="165" rx="17" ry="22" fill="#cbdcba"/></g>
      <g><path d="M565 261V216" stroke="#a9b08d" strokeWidth="4"/><ellipse cx="565" cy="205" rx="20" ry="29" fill="#b8cbb0"/><ellipse cx="560" cy="193" rx="15" ry="22" fill="#d0ddbf"/></g>
      <g fill="#9bb88b"><path d="M167 351C153 369 174 377 168 391C164 401 177 404 172 418" stroke="#9bb88b" strokeWidth="3"/><ellipse cx="165" cy="367" rx="8" ry="4" transform="rotate(-30 165 367)"/><ellipse cx="175" cy="385" rx="8" ry="4" transform="rotate(-30 175 385)"/><ellipse cx="167" cy="404" rx="6" ry="3" transform="rotate(30 167 404)"/><path d="M541 348C548 365 536 370 541 387" stroke="#9bb88b" strokeWidth="3"/><ellipse cx="546" cy="365" rx="7" ry="4" transform="rotate(-30 546 365)"/><ellipse cx="538" cy="379" rx="6" ry="4" transform="rotate(30 538 379)"/></g>
    </g>
    <g className="island-cloud-front"><ellipse cx="112" cy="366" rx="105" ry="35" fill={`url(#${id}-cloud)`}/><ellipse cx="602" cy="395" rx="114" ry="36" fill={`url(#${id}-cloud)`}/></g>
    <g fill="#c6bd9b"><path d="M118 150L121 160L131 163L121 166L118 177L115 166L105 163L115 160Z"/><path d="M589 111L592 118L599 121L592 123L589 131L587 123L580 121L587 118Z"/><path d="M364 121L366 126L371 128L366 130L364 135L362 130L357 128L362 126Z"/></g>
    <g fill="#adbaab" opacity=".6"><circle cx="260" cy="135" r="2"/><circle cx="618" cy="232" r="2"/><circle cx="80" cy="250" r="2"/><circle cx="414" cy="147" r="2"/><circle cx="290" cy="437" r="2"/></g>
  </svg>
}
