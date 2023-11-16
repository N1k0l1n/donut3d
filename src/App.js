import React from 'react';
import './App.css';
import DonutComponent from './components/Donout';

const App = () => {
  return (
    <div>
      <canvas className="webgl">
      <DonutComponent />
      </canvas>
      <div className="loading-bar"></div>

      <section className="one">
        <div className="container">
          <div className="hero">
            <h2>Abs are Cool.</h2>
            <h3>But have you ever tried donuts?</h3>
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
            <h3>Experiment width tasty <br />donuts recipe everytime</h3>
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

      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.146.0/three.min.js"></script>
      <script src="https://unpkg.com/three@0.146.0/examples/js/loaders/GLTFLoader.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"></script>
      <script src="./js/script.js"></script>
    </div>
  );
};

export default App;
