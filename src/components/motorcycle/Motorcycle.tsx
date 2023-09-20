import { useGLTF } from "@react-three/drei";
interface Props {
    isMobile: boolean;
}
export default function Motorcycle({ isMobile }: Props) {
    const motorcycle = useGLTF("/motorcycle/scene.gltf");
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
                object={motorcycle.scene}
                scale={isMobile ? 2.2 : 4}
                position={isMobile ? [0, 0, 0.5] : [0, -1.25, 0]}
                rotation={[-0.01, 600, 0]}
            />
        </mesh>
    )
}
