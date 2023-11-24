import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

export default function Model(props) {
  const { scene } = useGLTF("/doughnut2.glb");
  return <primitive object={scene} {...props} />
}