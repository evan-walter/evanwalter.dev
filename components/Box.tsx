import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export default function Test() {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate />
      <ambientLight intensity={1} />
      <directionalLight position={[1, 2, 3]} />
      <mesh>
        <icosahedronGeometry args={[3, 0]} />
        <meshStandardMaterial color={'#C04212'} />
      </mesh>
    </Canvas>
  )
}
