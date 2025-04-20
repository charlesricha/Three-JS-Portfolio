import React from 'react'
import { Canvas } from '@react-three/fiber'
import HackerRoom from '../components/HackerRoom'
import { Suspense } from 'react'
import CanvasLoader from '../components/CanvasLoader'
import { PerspectiveCamera } from '@react-three/drei'

const Hero = () => {
  return (
    <section className='min-h-screen flex flex-col relative'>
      {/*   hero section content */}

        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 sm:px-10 px-5">
            <p className='sm:text-3xl text-2xl font-medium text-center'>Hi, I am Charles <span className='waving-hand'>🖐️</span></p>

            <p className='text-center xl:text-5xl md:text-5xl sm:text-4xl text-3xl font-black !leading-normal text-purple-300'>Turning ideas into interactive experiences.</p>
        </div>

        {/* Hero section 3D model */}

        <div className='w-full h-full absolute inset-0 '>
            <Canvas classname ="w-full h-full">
                <Suspense fallback={<CanvasLoader/>}>

                
                <PerspectiveCamera makeDefault position={[0, 10, 30]} />
                <HackerRoom scale={0.1} position={[0,0,0]} rotation={[0, -Math.PI /1, 0]}/>
                <ambientLight intensity={2} />
                <directionalLight position={[10,10,10]} intensity={0.5}/>

                </Suspense>
            </Canvas>
        </div>



    </section>
  )
}

export default Hero
