import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';

const DonutComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let canvas, loadingBarElement, bodyElement, scene, donut, renderer, sphereShadow;

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const init = () => {
      canvas = canvasRef.current;
      loadingBarElement = document.querySelector('.loading-bar');
      bodyElement = document.querySelector('body');

      // Loading Manager
      const loadingManager = new THREE.LoadingManager(
        () => {
          window.setTimeout(() => {
            gsap.to(donutMaterial.uniforms.uAlpha, {
              duration: 3,
              value: 0,
              delay: 1,
            });
            gsap.to(donutMaterial.uniforms.uAlpha, {
              duration: 3,
              value: 0,
              delay: 1,
            });

            loadingBarElement.classList.add('ended');
            bodyElement.classList.add('loaded');
            loadingBarElement.style.transform = '';
          }, 500);
        },
        (itemUrl, itemsLoaded, itemsTotal) => {
          const progressRatio = itemsLoaded / itemsTotal;
          loadingBarElement.style.transform = `scaleX(${progressRatio})`;
        },
        () => {}
      );

      const gltfLoader = new GLTFLoader(loadingManager);

      // Textures
      const textureLoader = new THREE.TextureLoader();
      const alphaShadow = textureLoader.load('/assets/texture/simpleShadow.jpg');

      // Scene
      scene = new THREE.Scene();

      sphereShadow = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 1.5),
        new THREE.MeshBasicMaterial({
          transparent: true,
          color: 0x000000,
          opacity: 0.5,
          alphaMap: alphaShadow,
        })
      );

      sphereShadow.rotation.x = -Math.PI * 0.5;
      sphereShadow.position.y = -1;
      sphereShadow.position.x = 1.5;
      scene.add(sphereShadow);

      // Donut Material (Overlay)
      const donutMaterial = new THREE.ShaderMaterial({
        vertexShader: `
          void main() {
            gl_Position = vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uAlpha;
          void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
          }
        `,
        uniforms: {
          uAlpha: { value: 1.0 },
        },
        transparent: true,
      });

      // GLTF Model
      gltfLoader.load(
        '../../public/YellowDuck1glb.glb', 
        (gltf) => {
            console.log('GLB loaded:', gltf);

          donut = gltf.scene;

          const radius = 8.5;
          donut.position.x = 1.5;
          donut.rotation.x = Math.PI * 0.2;
          donut.rotation.z = Math.PI * 0.15;
          donut.scale.set(radius, radius, radius);
          scene.add(donut);
        },
        (progress) => {
          console.log(progress);
        },
        (error) => {
          console.error(error);
        }
      );

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(1, 2, 0);
      directionalLight.castShadow = true;
      scene.add(directionalLight);

      // Camera
      const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 1000);
      camera.position.z = 5;
      scene.add(camera);

      // Renderer
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Animation Loop
      const clock = new THREE.Clock();
      const animate = () => {
        const elapsedTime = clock.getElapsedTime();

        if (donut) {
          donut.position.y = Math.sin(elapsedTime * 0.5) * 0.1 - 0.1;
          sphereShadow.material.opacity = (1 - Math.abs(donut.position.y)) * 0.3;
        }

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };

      animate();
    };

    init();

    // Clean up Three.js objects or event listeners if needed
    return () => {
      // Clean up Three.js objects or event listeners
      // ...
    };
  }, []);

  return <canvas ref={canvasRef} className="webgl"></canvas>;
};

export default DonutComponent;
