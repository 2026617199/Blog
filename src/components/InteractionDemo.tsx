import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'motion/react'
import { ArrowUpRight, CircleHelp, MessageCircle, MousePointer2, Pause, Play, Send, Sparkles, VolumeX } from 'lucide-react'
import { Pet } from './Pet'
import { Reveal } from './Reveal'
import { siteConfig } from '../config/site'
import { cn } from '../lib/utils'

interface Bubble { text: string; expires: number; id: number }

function Meadow() {
  return <svg className="demo-meadow" viewBox="0 0 1200 440" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><defs><linearGradient id="meadow-sky" x2="0" y2="1"><stop stopColor="#edf4ed"/><stop offset="1" stopColor="#f8f7e9"/></linearGradient><linearGradient id="meadow-grass" x2="0" y2="1"><stop stopColor="#d9e5c8"/><stop offset="1" stopColor="#bed4b1"/></linearGradient></defs><path fill="url(#meadow-sky)" d="M0 0H1200V440H0z"/><g fill="#fff" opacity=".6"><path d="M105 107C80 107 81 83 101 80C99 58 135 52 144 75C164 66 184 78 179 93C202 89 211 108 191 111Z"/><path d="M882 92C852 94 850 68 872 66C875 38 915 43 917 65C944 54 961 76 950 87C975 84 982 104 959 105Z"/><path d="M523 62C510 63 508 48 524 46C528 26 555 29 559 46C578 44 587 61 565 65Z"/></g><path d="M0 271Q174 200 317 258Q513 176 702 254Q978 186 1200 268V440H0Z" fill="#e2ead5"/><path d="M0 321Q154 244 337 299Q553 239 764 292Q991 247 1200 308V440H0Z" fill="url(#meadow-grass)"/><ellipse cx="618" cy="375" rx="225" ry="42" fill="#e2e9d0"/><ellipse cx="618" cy="380" rx="188" ry="29" fill="#ecedda"/><g stroke="#a3b68d" strokeLinecap="round"><path d="M134 335V318M134 327L128 322M134 329L141 321M1014 354V337M1014 343L1009 339M1075 315V301M1075 307L1081 302M244 376V362M244 368L238 364" strokeWidth="2"/></g><g fill="#fbf3cd"><circle cx="178" cy="341" r="3"/><circle cx="187" cy="349" r="2"/><circle cx="952" cy="342" r="3"/><circle cx="963" cy="348" r="2"/><circle cx="304" cy="311" r="2.5"/></g><g fill="#baafce"><circle cx="1069" cy="370" r="3"/><circle cx="1076" cy="373" r="2"/><circle cx="224" cy="328" r="3"/></g><g><path d="M90 309V193" stroke="#bcc4a4" strokeWidth="7"/><ellipse cx="83" cy="202" rx="43" ry="58" fill="#c9dab9"/><ellipse cx="108" cy="179" rx="35" ry="49" fill="#d7e2c6"/><path d="M1122 313V213" stroke="#b8c2a0" strokeWidth="6"/><ellipse cx="1122" cy="210" rx="38" ry="55" fill="#ccdbbe"/><ellipse cx="1110" cy="187" rx="28" ry="39" fill="#dae5cb"/></g><g fill="#c2c8af"><ellipse cx="343" cy="398" rx="16" ry="7"/><ellipse cx="873" cy="385" rx="13" ry="6"/><ellipse cx="886" cy="393" rx="9" ry="4"/></g></svg>
}

export function InteractionDemo() {
  const config = siteConfig.demo
  const container = useRef<HTMLDivElement>(null)
  const visible = useInView(container, { amount: 0.25 })
  const [pageVisible, setPageVisible] = useState(true)
  const reduced = useReducedMotion()
  const [paused, setPaused] = useState(false)
  const [selected, setSelected] = useState(0)
  const [message, setMessage] = useState('')
  const [bubbles, setBubbles] = useState<Record<number, Bubble>>({})
  const [hops, setHops] = useState([0, 0, 0])
  const [announcement, setAnnouncement] = useState('')
  const input = useRef<HTMLInputElement>(null)
  const sequence = useRef(0)
  const bubbleId = useRef(0)

  function showBubble(pet: number, text: string) {
    const id = ++bubbleId.current
    setBubbles(previous => ({ ...previous, [pet]: { text, expires: Date.now() + 5500, id } }))
  }
  useEffect(() => {
    const update = () => setPageVisible(!document.hidden)
    document.addEventListener('visibilitychange', update)
    return () => document.removeEventListener('visibilitychange', update)
  }, [])
  useEffect(() => {
    if (!visible || paused || !pageVisible || reduced) return
    const next = () => {
      const item = config.messages[sequence.current % config.messages.length]
      sequence.current += 1
      const id = ++bubbleId.current
      setBubbles(previous => ({ ...previous, [item.pet]: { text: item.text, expires: Date.now() + 5500, id } }))
    }
    const first = window.setTimeout(next, 700)
    const interval = window.setInterval(next, 4500)
    return () => { window.clearTimeout(first); window.clearInterval(interval) }
  }, [visible, paused, pageVisible, reduced, config.messages])
  useEffect(() => {
    const pending = Object.values(bubbles)
    if (!pending.length) return
    const timeout = window.setTimeout(() => {
      setBubbles(previous => Object.fromEntries(Object.entries(previous).filter(([, value]) => value.expires > Date.now())))
    }, Math.max(0, Math.min(...pending.map(value => value.expires)) - Date.now()) + 20)
    return () => window.clearTimeout(timeout)
  }, [bubbles])

  function send(text = message) {
    const clean = text.trim().slice(0, 80)
    if (!clean) { input.current?.focus(); return }
    setPaused(true)
    showBubble(selected, clean)
    setMessage('')
    setAnnouncement(`${config.characters[selected].name}说：${clean}`)
    input.current?.focus()
  }
  function greet(index: number) {
    setSelected(index)
    setPaused(true)
    setHops(previous => previous.map((value, i) => i === index ? value + 1 : value))
    showBubble(index, config.greetings[index])
    setAnnouncement(`已选择${config.characters[index].name}，${config.greetings[index]}`)
  }

  return <section className="together-section section-container" id="together">
    <Reveal className="section-heading"><span className="section-kicker"><span/> BETTER, TOGETHER</span><h2 className="section-title">{config.title}<br/>{config.titleSecond}</h2><p className="section-description">{config.description}</p></Reveal>
    <Reveal><div className="demo-window" ref={container}>
      <div className="demo-toolbar"><div className="demo-room-name"><span className="room-icon"><Sparkles size={17}/></span><div>{config.room}<span>SUNNY LITTLE ROOM</span></div><span className="demo-concept-badge">互动概念演示</span></div><div className="demo-toolbar-actions"><span className="demo-presence"><span className="status-dot"/>3 位示意伙伴</span><button className="icon-button" onClick={() => setPaused(!paused)} aria-label={paused ? '播放自动聊天演示' : '暂停自动聊天演示'} aria-pressed={paused}>{paused ? <Play size={15}/> : <Pause size={15}/>}</button><VolumeX className="demo-mute" size={15} aria-label="无音频场景"/></div></div>
      <div className="demo-stage">
        <Meadow/>
        <div className="room-welcome">这一刻，刚刚好。<span>TAKE A LITTLE BREAK, WITH ME.</span></div>
        <span className="demo-twinkle twinkle-one">✧</span><span className="demo-twinkle twinkle-two">✦</span>
        {config.characters.map((pet, i) => <div className={cn('demo-character', `demo-character-${i}`, selected === i && 'is-selected')} key={pet.name}>
          <AnimatePresence mode="wait">{bubbles[i] && <motion.div key={bubbles[i].id} className="demo-chat-bubble" initial={{ opacity: 0, y: reduced ? 0 : 8, scale: reduced ? 1 : 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: reduced ? 0 : -8 }} transition={{ duration: reduced ? 0 : 0.3 }}>{bubbles[i].text}</motion.div>}</AnimatePresence>
          <button className="pet-button" aria-label={`选择${pet.name}并打招呼`} aria-pressed={selected === i} onClick={() => greet(i)}><motion.div key={hops[i]} initial={false} animate={hops[i] > 0 && !reduced ? { y: [0, -22, 0], rotate: [0, -5, 5, 0] } : { y: 0 }} transition={{ duration: 0.6 }}><Pet variant={pet.variant} happy={selected === i}/></motion.div></button>
          <span className="demo-pet-name"><i/>{pet.name}{selected === i && <em>你</em>}</span>
        </div>)}
        <div className="demo-stage-caption"><MousePointer2 size={12}/>点点小伙伴，和 TA 打个招呼</div>
      </div>
      <div className="demo-composer"><form onSubmit={event => { event.preventDefault(); send() }} className="chat-form"><span className="composer-avatar"><Pet variant={config.characters[selected].variant}/></span><label className="sr-only" htmlFor="demo-message">以{config.characters[selected].name}的身份发消息（最多80字）</label><input ref={input} id="demo-message" type="text" maxLength={80} value={message} autoComplete="off" onChange={event => setMessage(event.target.value)} placeholder={`以${config.characters[selected].name}的身份，说点温暖的话吧…`} aria-describedby="demo-local-notice"/><span className="character-count" aria-hidden="true">{message.length}/80</span><button className="chat-send" type="submit" aria-label="发送" disabled={!message.trim()}><span>发送</span><Send size={15}/></button></form><div className="chat-suggestions"><span>试着说：</span>{config.suggestions.map(text => <button key={text} onClick={() => send(text)}>{text}</button>)}</div></div>
    </div><div className="demo-footnote"><p id="demo-local-notice"><CircleHelp size={13}/>纯前端概念演示，消息仅在当前页面展示，不会发送或保存。</p><span><MessageCircle size={13}/>{paused ? '自动演示已暂停 · 可点击播放恢复' : reduced ? '已尊重系统减少动画设置' : '一起待着，就很好'}</span></div><div className="sr-only" role="status" aria-live="polite">{announcement}</div></Reveal>
    <div className="together-bottom-note">小小的桌面，装得下大大的想念。<a href="#platforms">让陪伴再近一点<ArrowUpRight size={14}/></a></div>
  </section>
}
