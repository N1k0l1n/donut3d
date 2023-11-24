import { Canvas } from "@react-three/fiber";
import Model from "./components/Model";
import { Stage, PresentationControls } from "@react-three/drei";
import './App.css';

function App() {
  return (
    <div>
      <div className="loading-bar"></div>

      <section className="one">
        <div className="container">
          <div className="hero">
            <h2>Abs are Cool.</h2>
            <h3>But have you ever tried donuts?</h3>
            <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: "absolute" }}>
            <ambientLight intensity={0.5} /> 
            <directionalLight position={[5, 5, 5]} intensity={1} />
              <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
                  <Model scale={0.8} position={[0, -6, 5]}/>
              </PresentationControls>
            </Canvas>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquid culpa, <br />
              providentvoluptatem excepturi id in quasi ea hic voluptate dicta amet explicabo <br />
              expedita ratione velit modi. Nisiquaerat illum amet quisquam iusto perferendis <br />
              ducimus aspernatur quia, repellendus beatae fugiat!
            </p>
          </div>
        </div>
      </section>

      <section className="two">
        <div className="container">
          <div className="hero">
            <h2>How we do</h2>
            <h3>Experiment with tasty <br />donuts recipe everytime</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquid culpa, <br />
              providentvoluptatem excepturi id in quasi ea hic voluptate dicta amet explicabo <br />
              expedita ratione velit modi. Nisiquaerat illum amet quisquam iusto perferendis <br />
              ducimus aspernatur quia, repellendus beatae fugiat!
            </p>
          </div>
        </div>
      </section>

      <section className="three">
        <h1>HAPPY DONUT.</h1>
      </section>

      {/* External scripts */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.146.0/three.min.js"></script>
      <script src="https://unpkg.com/three@0.146.0/examples/js/loaders/GLTFLoader.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"></script>
      <script src="./js/script.js"></script>
    </div>
  );
}

export default App;
