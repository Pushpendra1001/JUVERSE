import { Network, Monitor, Users, Trophy } from 'lucide-react';
import React from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { PerspectiveCamera, PositionalAudio, CameraControls, OrbitControls, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { Bloom, DepthOfField, EffectComposer, Glitch, Noise, Vignette } from '@react-three/postprocessing'
import { BlurPass,BlendFunction,GlitchMode, Resizer, KernelSize, Resolution } from 'postprocessing'
import Cyl from './Cyl'

export default function CylinderInteraction() {
  return (
    <>
    <div className='w-full h-[70vh] mt-12'>
    <Canvas flat camera={{ position: [0, -2, 13] ,fov:65 }}>
    <OrbitControls dampingFactor={.01} enableZoom={false}/>
    <ambientLight intensity={1.9}/>
    <directionalLight position={[1, 10, 10]} intensity={0.5}/>
    <pointLight position={[5, -20, 5]} intensity={ 2 }/>
    {/* <CameraControls/> */}
    <Cyl/>
    <EffectComposer>
    <Bloom
    mipmapBlur
    intensity={3.0} 
    luminanceThreshold={0.3} 
    luminanceSmoothing={0.1} 
  />
    <Vignette
    darkness={0.8} 
    blur={.5} 
    />
    <Noise 
      premultiply={true} 
      blendFunction={BlendFunction.ADD} 
    />
    <Glitch
    delay={[1.4, 4]} 
    duration={[0.6, 1.0]} 
    strength={[0.3, 1.0]} 
    mode={GlitchMode.SPORADIC} 
    active 
    ratio={.9} 
  />
    </EffectComposer>
    </Canvas>
 
    </div>
    </>
  );
}

