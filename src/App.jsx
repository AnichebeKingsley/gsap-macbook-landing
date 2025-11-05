import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Productviewer from './components/Productviewer.jsx'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger,);


const App = () => {
  return (
   <main>
     <Navbar />
     <Hero />
     <Productviewer />
   </main>
  )
}

export default App
