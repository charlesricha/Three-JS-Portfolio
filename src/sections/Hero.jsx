import React from 'react'
import { Canvas } from '@react-three/fiber'
import HackerRoom from '../components/HackerRoom'
import { Suspense } from 'react'
import CanvasLoader from '../components/CanvasLoader'
import { PerspectiveCamera } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import {calculateSizes} from "../constants/index"
import Target from '../components/Target'


const Hero = () => {
   
    const isSmall = useMediaQuery({maxWidth: 440})
    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({minWidth:768 , maxWidth: 1024})

    const sizes = calculateSizes(isSmall, isMobile, isTablet)
  return (
    <section className='min-h-screen flex flex-col relative'>
      {/*   hero section content */}

        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 sm:px-10 px-5">
            <p className='sm:text-3xl text-2xl font-medium text-center'>Hi, I am Charles <span className='waving-hand'>🖐️</span></p>

            <p className='text-center xl:text-5xl md:text-5xl sm:text-4xl text-3xl font-black !leading-normal text-purple-300'>Turning ideas into interactive experiences.</p>
        </div>

        {/* Hero section 3D model */}

        <div className='w-full h-full absolute inset-0 '>
                    {/* <Leva/> */}
            <Canvas classname ="w-full h-full">
                <Suspense fallback={<CanvasLoader/>}>

                
                <PerspectiveCamera makeDefault position={[0, 10, 20]} />
                <HackerRoom 

                    // to use leva controls
                /* scale={x.scale} 
                position={[x.positionX,x.positionY,x.positionZ]} 
                rotation={[x.rotationX,x.rotationY,x.rotationZ]}  */

                position={sizes.deskPosition}
               rotation ={[0, -Math.PI, 0]}
                scale={sizes.deskScale}
                />

                <group>
                    <Target position = {sizes.targetPosition}/>
                </group>
                
                <ambientLight intensity={2} />
                <directionalLight position={[10,10,10]} intensity={0.5}/>

                </Suspense>
            </Canvas>
        </div>



    </section>
  )
}

export default Hero
