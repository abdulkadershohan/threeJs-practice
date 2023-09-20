import { useGLTF } from "@react-three/drei";
interface Props {
    isMobile: boolean;
}
export default function BikeSuzuki({ isMobile }: Props) {
    const computer = useGLTF("/2020_suzuki_sv650_motorcycle/scene.gltf");
    return (
        <mesh>
            <hemisphereLight intensity={5} groundColor='black' />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={1} />
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.7 : 0.8}
                position={isMobile ? [0, 0, -2.2] : [0, -1.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    )
}
