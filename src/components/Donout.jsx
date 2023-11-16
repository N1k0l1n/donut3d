import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import gsap from 'gsap';

const Donut = () => {
  const canvasRef = useRef(null);
  let donut = null;
  let sphereShadow = null;
  // ... (rest of your THREE.js code)

  useEffect(() => {
    const canvas = canvasRef.current;

    // Your THREE.js scene setup code here...

    // Load 3D model and handle animations...

    // Animate loop...
    const tick = () => {
      // Your animation logic...

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();

    return () => {
      // Cleanup logic (if necessary)
    };
  }, []);

  return <canvas ref={canvasRef} className="webgl" />;
};

export default Donut;
