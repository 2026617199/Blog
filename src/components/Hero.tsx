import { ArrowDown, ArrowDownToLine, ArrowUpRight, Check, Heart, Monitor, MousePointer2, Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { Pet } from './Pet'
import { Island } from './Island'
import { siteConfig } from '../config/site'
import starTrail from '../assets/star-trail.svg'

export function Hero() {
  const reduced = useReducedMotion()
  return <section id="home" className="hero">
    <div className="hero-orb hero-orb-one"/><div className="hero-orb hero-orb-two"/>
    <div className="hero-main section-container">
      <div className="hero-copy">
        <motion.div className="hero-eyebrow" initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}><span className="status-dot"/>{siteConfig.hero.eyebrow}<span className="eyebrow-sparkle">✧</span></motion.div>
        <h1>{siteConfig.hero.title.map((line, i) => <motion.span key={line} initial={reduced ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}>{i === 2 ? <><span className="title-highlight">{line}<svg viewBox="0 0 160 17" aria-hidden="true"><path d="M4 12C43 2 101 1 155 7M15 16C59 8 101 6 141 10"/></svg></span><span className="title-star">✧</span></> : line}</motion.span>)}</h1>
        <motion.div initial={reduced ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}>
          <p className="hero-description">{siteConfig.hero.description}</p>
          <div className="hero-actions"><a href="#download" className="primary-button"><ArrowDownToLine size={17}/>下载桌面版<ArrowUpRight size={17}/></a><a href="#together" className="text-button">探索星屿世界<span className="circle-arrow"><ArrowUpRight size={16}/></span></a></div>
          <div className="hero-tags">{siteConfig.hero.tags.map(tag => <span key={tag}><Check size={12}/>{tag}</span>)}</div>
        </motion.div>
      </div>
      <motion.div className="hero-art" initial={reduced ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.15 }} role="img" aria-label="原创概念插画：小芽、桃桃和星眠在云间浮空小岛上相遇，角色头顶浮着温柔的聊天气泡">
        <div className="scene-orbit orbit-one"/><div className="scene-orbit orbit-two"/>
        <img className="hero-star-trail" src={starTrail} width="260" height="110" alt=""/>
        <div className="hero-scene-window"><div className="window-dots"><i/><i/><i/></div><span><span className="status-dot"/>我的桌面 · 小小的世界</span><Monitor size={12}/></div>
        <div className="hero-scene-heading">somewhere, together.<span>在这里，遇见一点点美好</span></div>
        <Island className="hero-island"/>
        <div className="hero-character hero-character-mint"><div className="art-bubble mint-bubble">今天也要开心呀 <span>☀</span></div><Pet variant="mint"/><span className="character-label"><i/>小芽</span></div>
        <div className="hero-character hero-character-peach"><div className="art-bubble peach-bubble">你来啦，一起发呆吧～<Heart size={11}/></div><Pet variant="peach"/><span className="character-label"><i/>桃桃</span></div>
        <div className="hero-character hero-character-lavender"><div className="tiny-heart">♡</div><Pet variant="lavender"/><span className="character-label"><i/>星眠</span></div>
        <div className="floating-note note-together"><span className="note-icon"><Heart size={16}/></span><div>不必独自发呆<span>有你在，就是好天气。</span></div><Sparkles size={13}/></div>
        <div className="scene-pointer"><MousePointer2 size={19} fill="currentColor"/><span>你的下一位小伙伴</span></div>
        <span className="art-star art-star-one">✦</span><span className="art-star art-star-two">✧</span><span className="art-dot art-dot-one"/><span className="art-dot art-dot-two"/>
        <div className="concept-label"><span className="status-dot"/>原创概念场景 · 产品开发中</div>
      </motion.div>
    </div>
    <div className="hero-bottom section-container"><div className="hero-bottom-note"><span className="mini-pets"><Pet variant="mint"/><Pet variant="peach"/><Pet variant="lavender"/></span><p>一个人也很好，<strong>在一起更温暖。</strong></p></div><a className="scroll-hint" href="#features">往下看看，小世界很大<ArrowDown size={14}/></a><span className="hero-bottom-en">MADE FOR LITTLE MOMENTS</span></div>
  </section>
}
