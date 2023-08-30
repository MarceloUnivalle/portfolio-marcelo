import { OrbitControls } from "@react-three/drei";
import { MeshBasicMaterial } from "three";
import { MeshStandardMaterial } from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";


const Experience = () => {
    const boxRef = useRef();
    console.log(boxRef.current);
    useFrame((state, delta) => {
        boxRef.current.rotation.x += 1 * delta;
        boxRef.current.rotation.y += 1 * delta;
    })
    return (
        <>
            <OrbitControls makeDefault/>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 10, 5]} intensity={1} />
            <mesh ref={boxRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#FF77FF"/>
            </mesh>
        </>
    )
}

export default Experience;