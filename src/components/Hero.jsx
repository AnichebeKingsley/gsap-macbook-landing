import { useEffect, useRef } from 'react'
import { title, } from '../assets/images'
import { hero } from '../assets/videos.js'

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2;
        }
    }, []);

  return (
   <section id="hero">
        <h1>MacBook Pro</h1>
         <img src={title} alt="Macbook title"/>

         <video ref={videoRef} src={hero} autoPlay loop muted />

         <button>Buy</button>

         <p>From $1599 or $133/mo for 12 month</p>
   </section>
  )
}

export default Hero
