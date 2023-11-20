import React, { useRef, useLayoutEffect,useEffect  } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { scroller } from 'react-scroll';

const DonutComponent = () => {
  const { nodes } = useGLTF('/Robot.glb');

  const donut = useRef();
  const tl = useRef();

  useEffect(() => {
    scroller.scrollTo('scroll-to-element', {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  }, []);


  useFrame((state, delta) => {
    console.log('render' ,state)
    const scrollPosition = window.scrollY; // Access scroll position here
    tl.current.seek(scrollPosition * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: 'power1.inOut' },
    });

    tl.current
      .to(donut.current.rotation, { y: -1 }, 2)
      .to(donut.current.position, { x: 1 }, 2)

      .to(nodes.Location_robot.rotation, { y: 1 }, 6)
      .to(nodes.Location_robot.position, { x: -1 }, 6)

      .to(donut.current.rotation, { y: 0 }, 11)
      .to(donut.current.rotation, { x: 1 }, 11)
      .to(donut.current.position, { x: 0 }, 11)

      .to(donut.current.rotation, { y: 0 }, 13)
      .to(donut.current.rotation, { x: -1 }, 13)
      .to(donut.current.position, { x: 0 }, 13)

      .to(donut.current.rotation, { y: 0 }, 16)
      .to(donut.current.rotation, { x: 0 }, 16)
      .to(donut.current.position, { x: 0 }, 16)

      .to(donut.current.rotation, { y: 0 }, 20)
      .to(donut.current.rotation, { x: 0 }, 20)
      .to(donut.current.position, { x: 0 }, 20);
  }, [nodes]);

  return (
    <group dispose={null} ref={donut} scale={[2, 2, 2]}>
    <group position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.15}>
      <mesh geometry={nodes.mesh_robot_1.geometry} material={nodes.mesh_robot_1.material} castShadow />
      <mesh geometry={nodes.mesh_robot_3.geometry} material={nodes.mesh_robot_3.material} castShadow />
    </group>
  </group>
  );
};

export default DonutComponent;
