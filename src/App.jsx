import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"

const App = () => {
    return (
        <>
            <Canvas
                camera={{ position: [4, 3, 5] }}
            >
                <Experience />
            </Canvas>
        </>
    )
}

export default App;