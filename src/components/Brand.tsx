import { cn } from '../lib/utils'
import { siteConfig } from '../config/site'

export function Brand({ light = false }: { light?: boolean }) {
  return <a className={cn('brand', light && 'brand-light')} href="#home" aria-label="星屿 StarIsle 回到首页"><span className="brand-symbol" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none"><path d="M20 3C21 13 26 17 36 19C25 20 21 25 19 36C18 25 14 21 4 20C14 18 18 14 20 3Z" fill="currentColor"/><path d="M32 2L33 7L38 8L33 9L32 14L31 9L26 8L31 7Z" fill="currentColor" opacity=".6"/></svg></span><span className="brand-wordmark">{siteConfig.name}<span>{siteConfig.englishName}</span></span></a>
}
