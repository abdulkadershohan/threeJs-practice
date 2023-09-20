import { useGLTF } from "@react-three/drei";
interface Props {
    isMobile: boolean;
}
export default function Computers({ isMobile }: Props) {
    const computer = useGLTF("../../../public/desktop_pc/scene.gltf");
    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor='black' />
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
                scale={isMobile ? 0.7 : 0.75}
                position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    )
}
