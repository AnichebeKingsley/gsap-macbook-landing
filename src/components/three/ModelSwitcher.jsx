import { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { PresentationControls } from '@react-three/drei'
import MacbookModel16 from '../models/Macbook-16.jsx'
import MacbookModel14 from '../models/Macbook-14.jsx'

const ANIMATION_DURATION = 1.2;
const OFFSET_DISTANCE = 3;

const fadeMeshes = (group, opacity, delay = 0) => {
    if(!group) return;

    group.traverse((child) => {
        if(child.isMesh && child.material) {
            // Clone material to avoid shared material issues
            if (!child.material.transparent) {
                child.material = child.material.clone();
                child.material.transparent = true;
            }
            
            gsap.to(child.material, { 
                opacity, 
                duration: ANIMATION_DURATION,
                delay: delay,
                ease: "power2.inOut"
            })
        }
    })
}

const moveGroup = (group, x, delay = 0) => {
    if(!group) return;
    
    gsap.to(group.position, {
        x, 
        duration: ANIMATION_DURATION,
        delay: delay,
        ease: "power2.inOut"
    })
}

const ModelSwitcher = ({scale, isMobile}) => {
  
    const SCALE_LARGE_DESKTOP = 0.08;
    const SCALE_LARGE_MOBILE = 0.05;

    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();

    const showLargeMacbook = scale == 0.08 || scale == 0.05;

    // Set initial state on mount
    useEffect(() => {
        if (smallMacbookRef.current) {
            smallMacbookRef.current.position.x = showLargeMacbook ? -OFFSET_DISTANCE : 0;
            smallMacbookRef.current.traverse((child) => {
                if(child.isMesh && child.material) {
                    child.material = child.material.clone();
                    child.material.transparent = true;
                    child.material.opacity = showLargeMacbook ? 0 : 1;
                    child.material.depthWrite = true;
                }
            })
        }
        
        if (largeMacbookRef.current) {
            largeMacbookRef.current.position.x = showLargeMacbook ? 0 : OFFSET_DISTANCE;
            largeMacbookRef.current.traverse((child) => {
                if(child.isMesh && child.material) {
                    child.material = child.material.clone();
                    child.material.transparent = true;
                    child.material.opacity = showLargeMacbook ? 1 : 0;
                    child.material.depthWrite = true;
                }
            })
        }
    }, [])

    useGSAP(() => {
        if(showLargeMacbook){
            // Fade out small, then fade in large
            fadeMeshes(smallMacbookRef.current, 0, 0);
            moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE, 0);
            
            fadeMeshes(largeMacbookRef.current, 1, 0.2);
            moveGroup(largeMacbookRef.current, 0, 0);
        } else {
            // Fade out large, then fade in small
            fadeMeshes(largeMacbookRef.current, 0, 0);
            moveGroup(largeMacbookRef.current, OFFSET_DISTANCE, 0);
            
            fadeMeshes(smallMacbookRef.current, 1, 0.2);
            moveGroup(smallMacbookRef.current, 0, 0);
        }
    }, [scale])

    const controlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        azimuth: [-Infinity, Infinity],
        config: {mass: 1, tension: 170, friction: 26}
    };
    
    return (
      <PresentationControls {...controlsConfig}>
        {/* 16" Macbook */}
        <group ref={largeMacbookRef}>
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>

        {/* 14" Macbook */}
        <group ref={smallMacbookRef}>
          <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    )
}

export default ModelSwitcher