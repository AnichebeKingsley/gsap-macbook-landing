import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Productviewer from './components/three/Productviewer.jsx'
import gsap from 'gsap'
import Showcase from './components/Showcase.jsx'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger,);


const App = () => {
  return (
   <main>
     <Navbar />
     <Hero />
     <Productviewer />
     <Showcase />
   </main>
  )
}

export default App
