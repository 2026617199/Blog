import { MotionConfig } from 'motion/react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { InteractionDemo } from './components/InteractionDemo'
import { CrossPlatform } from './components/CrossPlatform'
import { Downloads } from './components/Downloads'
import { Footer } from './components/Footer'

export default function App() {
  return <MotionConfig reducedMotion="user"><a className="skip-link" href="#main">跳到主要内容</a><Header/><main id="main"><Hero/><Features/><InteractionDemo/><CrossPlatform/><Downloads/></main><Footer/></MotionConfig>
}
