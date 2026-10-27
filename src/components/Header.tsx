import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, Sparkles, X } from 'lucide-react'
import { Brand } from './Brand'
import { siteConfig } from '../config/site'
import { cn } from '../lib/utils'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update()
    window.addEventListener('scroll', update, { passive: true })
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(`#${entry.target.id}`)
    }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 })
    siteConfig.nav.forEach(item => { const element = document.querySelector(item.href); if (element) observer.observe(element) })
    return () => { window.removeEventListener('scroll', update); observer.disconnect() }
  }, [])
  useEffect(() => {
    if (!open) return
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); document.getElementById('menu-toggle')?.focus() } }
    const resize = () => { if (window.innerWidth > 800) setOpen(false) }
    window.addEventListener('keydown', close)
    window.addEventListener('resize', resize)
    return () => { window.removeEventListener('keydown', close); window.removeEventListener('resize', resize) }
  }, [open])
  return <header className={cn('site-header', scrolled && 'is-scrolled', open && 'menu-is-open')}>
    <div className="header-inner section-container">
      <Brand />
      <nav className="desktop-nav" aria-label="主要导航">{siteConfig.nav.map(item => <a key={item.href} href={item.href} className={cn(active === item.href && 'active')} aria-current={active === item.href ? 'location' : undefined}>{item.label}</a>)}</nav>
      <a href="#download" className="nav-cta"><Sparkles size={14}/>立即体验<ArrowUpRight size={15}/></a>
      <button className="mobile-menu-toggle" id="menu-toggle" aria-label={open ? '关闭菜单' : '打开菜单'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div>
    <nav id="mobile-navigation" className="mobile-nav" aria-label="移动端导航" hidden={!open}>{siteConfig.nav.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={active === item.href ? 'location' : undefined}>{item.label}<ArrowUpRight size={16}/></a>)}</nav>
  </header>
}
