import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal, Float, OrbitControls, Preload, useTexture, GradientTexture
} from '@react-three/drei'
import CanvasLoader from "../Loader";

const Ball = (props) => {
  
  const [decal] = useTexture([props.imgUrl])

  return (
    <Float speed={2.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,1,0]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <sphereGeometry args={[1,32,16]}/>
        <meshStandardMaterial
          color='#915eff'
          polygonOffset
          polygonOffsetFactor={-5}	
        />
        <Decal
          position={[0,0,1]}
          rotation={[2*Math.PI,0,6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  )
}
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='always'
      dpr={[1,2]}
      gl={{preserveDrawingBuffer:true}}
      className='mt-10'
    > 
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false}/>
        <Ball imgUrl={icon}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas