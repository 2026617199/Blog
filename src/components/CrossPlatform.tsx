import { useId, useState } from 'react'
import { ArrowUpRight, BatteryMedium, CheckCheck, Heart, Leaf, MessageCircle, MoreHorizontal, Signal, Sparkles, Star, Wifi } from 'lucide-react'
import { experienceCopy } from '../config/experience'
import { Pet } from './Pet'
import { Reveal } from './Reveal'
import './experience.css'

const copy = experienceCopy.cross

export function CrossPlatform() {
  const headingId = useId()
  const conversationId = useId()
  const [friendId, setFriendId] = useState<string>(copy.friends[0].id)
  const friend = copy.friends.find(item => item.id === friendId) ?? copy.friends[0]

  return (
    <section id="platforms" className="experience-section cross-section" aria-labelledby={headingId}>
      <div className="section-container experience-container">
        <Reveal className="section-heading experience-heading">
          <p className="section-kicker">{copy.kicker}</p>
          <h2 id={headingId} className="section-title">{copy.title}</h2>
          <p className="section-description">{copy.description}</p>
          <p className="cross-concept"><span aria-hidden="true">✧</span>{copy.concept}</p>
        </Reveal>

        <Reveal className="cross-stage">
          <div className="cross-stage-grain" aria-hidden="true" />
          <div className="cross-computer-column">
            <p className="cross-scene-label"><span>01</span>{copy.desktop.label}</p>
            <div className="cross-computer" role="img" aria-label={`${copy.desktop.window}。${copy.desktop.subtitle} ${friend.name}${copy.desktop.visitor}。`}>
              <div className="experience-window-bar cross-window-bar"><span className="experience-window-dots" aria-hidden="true"><i /><i /><i /></span><span><Leaf size={12} />{copy.desktop.window}</span><MoreHorizontal size={18} aria-hidden="true" /></div>
              <div className="cross-desktop" aria-hidden="true">
                <div className="cross-desktop-hill cross-desktop-hill-back" /><div className="cross-desktop-hill cross-desktop-hill-front" />
                <span className="cross-desktop-sun" />
                <div className="cross-desktop-greeting"><span>{copy.desktop.time}</span><strong>{copy.desktop.greeting}</strong><p>{copy.desktop.subtitle}</p></div>
                <div className="cross-desktop-note"><span><Star size={13} />{copy.desktop.noteTitle}</span><p>{copy.desktop.note}</p><span className="cross-note-rule" /><span className="cross-note-rule" /></div>
                <div className="cross-desktop-pets"><Pet variant="mint" happy className="cross-home-pet" /><Pet variant={friend.variant} className="cross-visitor-pet" /></div>
                <span className="cross-desktop-bubble" key={friend.id}><MessageCircle size={13} />{friend.name} · {friend.shortStatus}</span>
                <div className="cross-desktop-bottom"><span><span className="experience-status-dot" />{copy.desktop.status}</span><div className="cross-dock"><Leaf size={15} /><MessageCircle size={15} /><Heart size={15} /></div></div>
              </div>
            </div>
            <div className="cross-computer-stand" aria-hidden="true"><span /></div>
            <div className="cross-device-caption"><span className="cross-caption-icon"><Leaf size={16} aria-hidden="true" /></span><div><h3>{copy.desktop.footer}</h3><p>{copy.desktop.detail}</p></div></div>
          </div>

          <div className="cross-connection" aria-hidden="true"><span className="cross-connection-line" /><span className="cross-connection-star"><Sparkles size={23} strokeWidth={1.3} /></span><span className="cross-connection-title">{copy.connection}</span><span className="cross-connection-note">{copy.connectionNote}</span></div>

          <div className="cross-phone-column">
            <p className="cross-scene-label"><span>02</span>{copy.phone.label}</p>
            <div className="cross-phone">
              <div className="cross-phone-camera" aria-hidden="true" />
              <div className="cross-phone-status" aria-hidden="true"><span>{copy.phone.time}</span><span><Signal size={12} /><Wifi size={12} /><BatteryMedium size={17} /></span></div>
              <div className="cross-phone-heading"><div><h3>{copy.phone.title}</h3><p>{copy.phone.subtitle}</p></div><span><Leaf size={19} aria-hidden="true" /></span></div>
              <div className="cross-friends" role="group" aria-label={copy.phone.friendsLabel}>
                {copy.friends.map(item => (
                  <button key={item.id} type="button" className={`cross-friend${item.id === friend.id ? ' cross-friend-selected' : ''}`} aria-pressed={item.id === friend.id} aria-controls={conversationId} aria-label={`${item.name}，${item.status}`} onClick={() => setFriendId(item.id)}>
                    <span className={`cross-avatar cross-avatar-${item.variant}`} aria-hidden="true">{item.initial}<i className={item.id === 'mint' ? 'cross-away' : ''} /></span><span>{item.name}</span>
                  </button>
                ))}
              </div>
              <div id={conversationId} className="cross-conversation" role="region" aria-label={`${copy.phone.chatLabel}：${friend.name}`}>
                <div className="cross-friend-detail"><span className="experience-status-dot" /><div><strong>{friend.name}</strong><span>{friend.status}</span></div><MessageCircle size={16} aria-hidden="true" /></div>
                <p className="cross-friend-mood">“{friend.mood}”</p>
                <span className="cross-chat-time">{copy.phone.preview} · {copy.phone.time}</span>
                <div className="cross-chat-bubble cross-chat-bubble-in"><span className="experience-sr-only">{friend.name}：</span>{friend.messages[0]}</div>
                <div className="cross-chat-bubble cross-chat-bubble-out"><span className="experience-sr-only">你：</span>{friend.messages[1]}</div>
                <span className="cross-chat-read" aria-hidden="true"><CheckCheck size={13} /></span>
              </div>
              <p className="experience-sr-only" role="status" aria-live="polite" aria-atomic="true">{friend.name}，{friend.status}。{friend.mood}</p>
              <div className="cross-phone-draft" aria-hidden="true"><span>{copy.phone.draft}</span><span><ArrowUpRight size={13} /></span></div>
              <p className="cross-phone-social"><MessageCircle size={11} aria-hidden="true" />{copy.phone.socialOnly}</p>
              <span className="cross-phone-home" aria-hidden="true" />
            </div>
            <div className="cross-device-caption"><span className="cross-caption-icon cross-caption-icon-purple"><MessageCircle size={16} aria-hidden="true" /></span><div><h3>{copy.phone.footer}</h3><p>{copy.phone.detail}</p></div></div>
          </div>
        </Reveal>
        <Reveal><p className="cross-closing"><span aria-hidden="true">✦</span>{copy.legend}<span aria-hidden="true">✦</span></p></Reveal>
      </div>
    </section>
  )
}
