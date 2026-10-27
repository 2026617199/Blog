import { useRef, useState } from 'react'
import { ArrowDownToLine, ArrowUpRight, Check, Clock3, Monitor, Smartphone, Sparkles } from 'lucide-react'
import { downloadConfig, getDownloadUrl, type DownloadEntry, type Platform } from '../config/downloads'
import { siteConfig } from '../config/site'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog'
import { Button } from './ui/button'
import { Pet } from './Pet'
import { Reveal } from './Reveal'

function PlatformIcon({ platform }: { platform: Platform }) {
  if (platform === 'windows') return <svg viewBox="0 0 28 28" fill="currentColor" aria-hidden="true"><path d="M2 5L12 3.6V13H2V5ZM14 3.4L26 1.8V13H14V3.4ZM2 15H12V24.4L2 23V15ZM14 15H26V26.2L14 24.6V15Z"/></svg>
  if (platform === 'macos' || platform === 'ios') return <svg viewBox="0 0 28 28" fill="currentColor" aria-hidden="true"><path d="M18.7 6.1C19.8 4.8 20.3 3.3 20.1 1.7C18.6 1.8 16.9 2.7 15.9 3.9C15 5 14.4 6.5 14.6 8C16.3 8.1 17.7 7.3 18.7 6.1ZM22.2 15.1C22.2 11.8 24.8 10.2 25 10.1C23.5 7.8 21.2 7.5 20.3 7.5C18.3 7.3 16.3 8.7 15.3 8.7C14.3 8.7 12.7 7.5 11 7.5C8.8 7.6 6.8 8.8 5.7 10.7C3.4 14.7 5.1 20.5 7.3 23.7C8.4 25.2 9.5 26.8 11.2 26.7C12.8 26.6 13.4 25.7 15.4 25.7C17.3 25.7 17.9 26.7 19.6 26.6C21.4 26.6 22.4 25.1 23.4 23.6C24.6 21.9 25.1 20.3 25.2 20.2C25.1 20.1 22.2 19.1 22.2 15.1Z"/></svg>
  return <svg viewBox="0 0 28 28" fill="currentColor" aria-hidden="true"><path d="M7.1 8.3L4.8 4.4L6 3.7L8.4 7.7C10.1 6.8 12 6.4 14 6.4C16 6.4 17.9 6.8 19.6 7.7L22 3.7L23.2 4.4L20.9 8.3C24.5 10.5 27 14.2 27.3 18.5H.7C1 14.2 3.5 10.5 7.1 8.3ZM8 12C7.2 12 6.5 12.7 6.5 13.5C6.5 14.3 7.2 15 8 15C8.8 15 9.5 14.3 9.5 13.5C9.5 12.7 8.8 12 8 12ZM20 12C19.2 12 18.5 12.7 18.5 13.5C18.5 14.3 19.2 15 20 15C20.8 15 21.5 14.3 21.5 13.5C21.5 12.7 20.8 12 20 12Z"/></svg>
}

export function Downloads() {
  const [selected, setSelected] = useState<DownloadEntry | null>(null)
  const lastTrigger = useRef<HTMLButtonElement | null>(null)
  function download(entry: DownloadEntry, trigger: HTMLButtonElement) {
    const url = getDownloadUrl(entry)
    if (url) { window.location.assign(url); return }
    lastTrigger.current = trigger
    setSelected(entry)
  }
  return <section id="download" className="download-section">
    <div className="section-container">
      <Reveal className="download-heading"><div className="download-sprout"><Sparkles size={23}/></div><span className="section-kicker">A LITTLE FRIEND, COMING SOON</span><h2 className="section-title">{siteConfig.download.title}<br/>{siteConfig.download.titleSecond}<span className="download-heading-star">✧</span></h2><p className="section-description">{siteConfig.download.description}</p></Reveal>
      <Reveal className="download-platforms">{downloadConfig.map(entry => <article className={`platform-card platform-${entry.platform}`} key={entry.platform}><span className="platform-icon"><PlatformIcon platform={entry.platform}/></span><span className="platform-type">{entry.platform === 'windows' || entry.platform === 'macos' ? <><Monitor size={11}/> DESKTOP COMPANION</> : <><Smartphone size={11}/> POCKET CONNECTION</>}</span><h3>{entry.label}</h3><p>{entry.subtitle}</p><Button className="platform-download-button" variant="outline" onClick={event => download(entry, event.currentTarget)} aria-label={`${entry.label}，${getDownloadUrl(entry) ? '立即下载' : '敬请期待'}`}>{getDownloadUrl(entry) ? <><ArrowDownToLine size={14}/>立即下载</> : <><Clock3 size={14}/>敬请期待</>}<ArrowUpRight size={14}/></Button></article>)}</Reveal>
      <Reveal className="download-status"><span className="status-dot"/><span>我们正在认真搭建这个小世界</span><span className="download-status-divider"/><span>四个平台，温柔奔赴</span><Check size={13}/></Reveal>
      <p className="download-scope-note">桌面端承载桌宠互动，手机端专注聊天与好友消息。所有平台均在开发中，暂无可用安装程序。</p>
    </div>
    <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null) }}><DialogContent className="download-dialog" onCloseAutoFocus={event => { event.preventDefault(); lastTrigger.current?.focus() }}><div className="dialog-illustration"><span className="dialog-star-one">✧</span><Pet variant="mint" happy/><span className="dialog-star-two">✦</span><div className="dialog-mini-bubble">正在努力长大中…</div></div><DialogHeader><span className="dialog-platform-tag"><span className="status-dot"/>{selected?.label} · 开发中</span><DialogTitle>{siteConfig.download.dialogTitle}</DialogTitle><DialogDescription>{siteConfig.download.dialogDescription}</DialogDescription></DialogHeader><DialogClose asChild><Button className="dialog-confirm">好的，我再等等<HeartIcon/></Button></DialogClose><span className="dialog-note">每一份期待，都是我们前进的星光。</span></DialogContent></Dialog>
  </section>
}

function HeartIcon() { return <svg viewBox="0 0 20 20" width="15" height="15" fill="none" aria-hidden="true"><path d="M10 16S3 12 3 7.5C3 3.6 8 2.8 10 6C12 2.8 17 3.6 17 7.5C17 12 10 16 10 16Z" stroke="currentColor" strokeWidth="1.5"/></svg> }
