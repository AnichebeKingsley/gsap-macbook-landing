import { game } from '../assets/videos.js'
import { maskIcon } from '../assets/images.js'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Showcase = () => {
    const isTablet = useMediaQuery({query: '(max-width: 1024px)'});

    useGSAP(() => {
      if(!isTablet) {
          // Set initial state for content
          gsap.set('.content', { opacity: 0, y: 50 });
          
          const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#showcase',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                pin: true
            }
          }) 
          timeline
            .to('.mask img', {
              scale: 1.1,
              duration: 1
            })
            .to('.content', { 
              opacity: 1, 
              y: 0, 
              ease: 'power1.in',
              duration: 1
            });
      } else {
          // Ensure content is visible on tablets/mobile
          gsap.set('.content', { opacity: 1, y: 0 });
      }
    }, [isTablet])

  return (
    <section id="showcase">
     <div className="media">
         <video src={game} loop muted autoPlay playsInline/>
         <div className="mask">
              <img src={maskIcon} alt="Mask logo"/>
         </div>
     </div>
     <div className="content">
        <div className="wrapper">
            <div className="lg-max-w-md">
                <h2>Rocket Chip</h2>

                <div className="space-y-5 mt-7 pe-10">
                 <p>
                    Introducing{" "}
                    <span className="text-white">
                        M4 the next generation of Apple silicon
                    </span>
                    . M4 powers
                 </p>
                 <p>
                     It drives Apple Intelligence on iPad Pro, so you can write, create, and accomplish more with ease. All in a design that's unbelievably thin, light, and powerful.
                 </p>
                 <p>
                     A brand-new display engine delivers breathtaking precision, color accuracy, and brightness. And a next-gen GPU with hardware-accelerated ray tracing brings console-level graphics to your fingertips.
                 </p>
                 <p className="text-primary">Learn More About Apple Intelligence</p>
                </div>
            </div>
            <div className="max-w-3xs space-y-14">
               <div className="space-y-2">
                <p>Up to</p>
                <h3>4x faster</h3>
                <p>Pro rendering performance than M2</p>
               </div>
                 <div className="space-y-2">
                <p>Up to</p>
                <h3>1.5x faster</h3>
                <p>CPU performance than M2</p>
               </div>
            </div>
        </div>
     </div>
     </section>
  )
}

export default Showcase