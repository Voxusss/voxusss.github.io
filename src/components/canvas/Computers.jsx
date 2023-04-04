import {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./fireredroom/scene.gltf')
  return (
    <mesh>
      <primitive 
      object={computer.scene}
      scale={isMobile ? 0.7 : 2.2}
      position={[0, -3.5, 0]}
      rotation={[0.2, 0, 0]}
      />
    </mesh>
  )
}
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);
  }, []);
  
  return(
    <Canvas
      frameloop='demand'
      shadows
      camera={{position: [20,20,20], fov:50}}
      gl={{preserveDrawingBuffer:true}}

    > 
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          enableZoom={false}
          minAzimuthAngle={-Math.PI/9}
          maxAzimuthAngle={Math.PI/2.5}
          minPolarAngle={Math.PI/2}
          maxPolarAngle={Math.PI/2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas