import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Productviewer from './components/three/Productviewer.jsx'
import Showcase from './components/Showcase.jsx'
import Performance from './components/Performance.jsx'
import Features from './components/Features.jsx'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger,);


const App = () => {
  return (
   <main>
     <Navbar />
     <Hero />
     <Productviewer />
     <Showcase />
     <Performance />
     <Features />
   </main>
  )
}

export default App
