import React from 'react'
import { Canvas } from '@react-three/fiber'
import HackerRoom from '../components/HackerRoom'
import { Suspense } from 'react'
import CanvasLoader from '../components/CanvasLoader'
import { PerspectiveCamera } from '@react-three/drei'
import { Leva, useControls } from 'leva'

const Hero = () => {
    const x = useControls('HackerRoom', {
        positionX: {
            value: 0,
            min: -10,
            max: 10,
           
        },
        positionY: {
            value: 0,
            min: -10,
            max: 10,
           
        },
        positionZ: {
            value: 0,
            min: -10,
            max: 10,
           
        },
        rotationX: {
            value: 0,
            min: -10,
            max: 10,
           
        },
        rotationY: {
            value: 0,
            min: -10,
            max: 10,
           
        },
        rotationZ: {
            value: 0,
            min: -10,
            max: 10,
           
        },
        scale: {
            value: 1,
            min: 0.1,
            max: 10,
        }
    })
  return (
    <section className='min-h-screen flex flex-col relative'>
      {/*   hero section content */}

        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 sm:px-10 px-5">
            <p className='sm:text-3xl text-2xl font-medium text-center'>Hi, I am Charles <span className='waving-hand'>🖐️</span></p>

            <p className='text-center xl:text-5xl md:text-5xl sm:text-4xl text-3xl font-black !leading-normal text-purple-300'>Turning ideas into interactive experiences.</p>
        </div>

        {/* Hero section 3D model */}

        <div className='w-full h-full absolute inset-0 '>
        <Leva/>
            <Canvas classname ="w-full h-full">
                <Suspense fallback={<CanvasLoader/>}>

                
                <PerspectiveCamera makeDefault position={[0, 10, 30]} />
                <HackerRoom 

                // scale={0.1} 

                //position={[0,0,0]} 
                //rotation={[0, -Math.PI /1, 0]} 

                position={[0.2, 0.4, 2.4]}
                rotation ={[0.4, 3, 0]}
                scale={[0.1, 0.1, 0.1]}
                />
                
                <ambientLight intensity={2} />
                <directionalLight position={[10,10,10]} intensity={0.5}/>

                </Suspense>
            </Canvas>
        </div>



    </section>
  )
}

export default Hero
