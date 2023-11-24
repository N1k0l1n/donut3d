import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

export default function Model(props) {
  const { scene } = useGLTF("/Robot.glb");
  return <primitive object={scene} {...props} />
}