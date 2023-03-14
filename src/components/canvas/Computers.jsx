import {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor='white' />
      <spotLight 
        position={[10,10,10]}
        angle={1}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
      object={computer.scene}
      scale={isMobile ? 0.2 : 0.25}
      position={[0, -3, 0]}
      rotation={[-0.01, 1, 0]}
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
      camera={{position: [20,3,5], fov:25}}
      gl={{preserveDrawingBuffer:true}}
    > 
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          enableZoom={false}
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