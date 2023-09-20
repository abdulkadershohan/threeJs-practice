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
                scale={isMobile ? 2.2 : 5}
                position={isMobile ? [0, 0, 1.2] : [0, -1.25, 2]}
                rotation={[-0.01, 350, -0.1]}
            />
        </mesh>
    )
}
