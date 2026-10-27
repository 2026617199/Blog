import { ArrowUpRight, Heart } from 'lucide-react'
import { Brand } from './Brand'
import { siteConfig } from '../config/site'

export function Footer() {
  return <footer className="site-footer"><div className="section-container"><div className="footer-main"><div className="footer-brand"><Brand/><p>{siteConfig.tagline}</p></div><nav aria-label="页脚导航">{siteConfig.nav.slice(1).map(item => <a key={item.href} href={item.href}>{item.label}<ArrowUpRight size={12}/></a>)}</nav><div className="footer-development"><span className="status-dot"/>{siteConfig.status}<span>慢慢来，美好值得等待。</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.name} {siteConfig.englishName}. All rights reserved.</span>{siteConfig.icp.label && <a href={siteConfig.icp.url || undefined} target="_blank" rel="noopener noreferrer">{siteConfig.icp.label}</a>}<span className="footer-made">Made with a little <Heart size={11}/> & a lot of care.</span></div></div></footer>
}
