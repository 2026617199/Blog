import { useId, useState } from 'react'
import { ArrowUpRight, Check, Heart, Leaf, MessageCircle, MousePointer2, Sparkles, Sun } from 'lucide-react'
import { experienceCopy } from '../config/experience'
import { Pet } from './Pet'
import { Reveal } from './Reveal'
import './experience.css'

const copy = experienceCopy.features

function WindowDots() {
  return <span className="experience-window-dots" aria-hidden="true"><i /><i /><i /></span>
}

export function Features() {
  const headingId = useId()
  const moodId = useId()
  const [moodIndex, setMoodIndex] = useState(0)
  const mood = copy.mood.moods[moodIndex] ?? copy.mood.moods[0]

  return (
    <section id="features" className="experience-section features-section" aria-labelledby={headingId}>
      <div className="section-container experience-container">
        <Reveal className="section-heading experience-heading">
          <p className="section-kicker">{copy.kicker}</p>
          <h2 id={headingId} className="section-title">{copy.title}</h2>
          <p className="section-description">{copy.description}</p>
        </Reveal>

        <div className="features-grid">
          <Reveal className="features-piece features-desktop">
            <article>
              <div className="features-copy">
                <p className="features-eyebrow"><span>{copy.desktop.number}</span>{copy.desktop.tag}</p>
                <h3>{copy.desktop.title}</h3>
                <p>{copy.desktop.description}</p>
              </div>
              <div className="features-desktop-scene" aria-hidden="true">
                <div className="features-mini-window">
                  <div className="experience-window-bar"><WindowDots /><span>{copy.desktop.window}</span><Sun size={13} /></div>
                  <div className="features-mini-workspace">
                    <div className="features-note">
                      <Leaf size={17} strokeWidth={1.4} />
                      <strong>{copy.desktop.noteTitle}</strong>
                      {copy.desktop.note.map((line, index) => <span key={line}><i className={index === 0 ? 'features-note-checked' : ''}>{index === 0 && <Check size={10} />}</i>{line}</span>)}
                    </div>
                    <div className="features-desktop-orbit" />
                    <span className="features-sun"><Sun size={27} strokeWidth={1.2} /></span>
                    <Pet variant="mint" className="features-desk-pet" />
                    <span className="features-desktop-badge"><span className="experience-status-dot" />{copy.desktop.badge}</span>
                    <div className="features-taskbar"><span /><span /><span /><small>{copy.desktop.time}</small></div>
                  </div>
                </div>
                <span className="features-handwritten">{copy.desktop.footnote}<span> ↗</span></span>
              </div>
            </article>
          </Reveal>

          <Reveal className="features-piece features-island" delay={0.08}>
            <article>
              <div className="features-copy">
                <p className="features-eyebrow"><span>{copy.island.number}</span>{copy.island.tag}</p>
                <h3>{copy.island.title}</h3>
                <p>{copy.island.description}</p>
              </div>
              <div className="features-island-scene" aria-hidden="true">
                <span className="features-island-caption"><span className="experience-status-dot" />{copy.island.badge}</span>
                <svg className="features-island-land" viewBox="0 0 460 230" fill="none">
                  <ellipse cx="230" cy="187" rx="167" ry="27" fill="#c6bedb" opacity=".22" />
                  <path d="M55 137C55 87 136 58 233 61C329 57 405 89 405 137L386 167C356 207 117 210 74 170Z" fill="#d2c5e5" stroke="#b7a5cc" />
                  <ellipse cx="230" cy="133" rx="175" ry="67" fill="#f3efe3" stroke="#c4b9cc" />
                  <path d="M78 132C139 169 296 183 380 128" stroke="#e0d6c4" strokeWidth="2" strokeDasharray="4 7" />
                  <path d="M97 127l-5-9m5 9 6-6M346 117l-3-12m3 12 7-6M146 165l-3-9m3 9 6-5" stroke="#9eaf86" strokeWidth="3" strokeLinecap="round" />
                  <path d="m316 150 3-5 3 5-3 5Z" fill="#dbc17d" />
                </svg>
                <Sparkles className="features-island-star" size={24} strokeWidth={1.3} />
                <span className="features-island-trail" />
                <div className="features-island-friend features-island-friend-one"><Pet variant="mint" happy /><span>{copy.island.names[0]}</span></div>
                <div className="features-island-friend features-island-friend-two"><Pet variant="peach" happy /><span>{copy.island.names[1]}</span></div>
                <div className="features-island-friend features-island-friend-three"><Pet variant="lavender" /><span>{copy.island.names[2]}</span></div>
                <span className="features-island-invite">+ {copy.island.invitation}</span>
              </div>
            </article>
          </Reveal>

          <Reveal className="features-piece features-chat">
            <article>
              <div className="features-copy">
                <p className="features-eyebrow"><span>{copy.chat.number}</span>{copy.chat.tag}</p>
                <h3>{copy.chat.title}</h3>
                <p>{copy.chat.description}</p>
              </div>
              <div className="features-chat-scene" aria-hidden="true">
                <span className="features-chat-doodle"><MessageCircle size={40} strokeWidth={0.8} /><Sparkles size={17} /></span>
                <div className="features-chat-row"><Pet variant="peach" className="features-chat-pet" /><div><span className="features-chat-sender">{copy.chat.sender}</span><span className="features-speech features-speech-white">{copy.chat.messages[0]}</span></div></div>
                <div className="features-chat-row features-chat-row-reply"><span className="features-speech features-speech-mint">{copy.chat.messages[1]}</span><Pet variant="mint" happy className="features-chat-pet" /></div>
                <span className="features-chat-receipt"><Heart size={12} />{copy.chat.receipt}</span>
              </div>
            </article>
          </Reveal>

          <Reveal className="features-piece features-mood" delay={0.08}>
            <article>
              <div className="features-copy">
                <p className="features-eyebrow"><span>{copy.mood.number}</span>{copy.mood.tag}</p>
                <h3>{copy.mood.title}</h3>
                <p>{copy.mood.description}</p>
              </div>
              <div className="features-mood-scene">
                <div className="features-mood-orbit" aria-hidden="true" />
                <span className="features-mood-flower" aria-hidden="true">✳</span>
                <span className="features-mood-spark" aria-hidden="true">✧</span>
                <button type="button" className="features-pet-button" onClick={() => setMoodIndex(index => (index + 1) % copy.mood.moods.length)} aria-label={copy.mood.action} aria-describedby={moodId}>
                  <span key={moodIndex} className={`features-pet-action features-pet-action-${mood.action}`}><Pet variant="mint" happy={mood.happy} className="features-mood-pet" /></span>
                  <span className="features-pet-prompt"><MousePointer2 size={14} />{copy.mood.hint}</span>
                </button>
                <div id={moodId} className="features-mood-response" role="status" aria-live="polite" aria-atomic="true">
                  <span><Heart size={12} />{mood.label}</span>
                  <p>{mood.response}</p>
                </div>
              </div>
              <p className="features-keyboard-hint">{copy.mood.keyboardHint}<ArrowUpRight size={12} aria-hidden="true" /></p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
