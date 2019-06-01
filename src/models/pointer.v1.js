// pointer.js

const TAU = Zdog.TAU;
const white = "#FFF";
const black = "#111";

let illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  dragRotate: true,
  zoom: 3
});

let pointerGroup = new Zdog.Group({
  addTo: illo,
  translate: {
    x: -20,
    y: 10,
    z: 20
  },
  rotate: {
    x: 0,
    y: 0,
    z: 0
  }
});

let pointer = new Zdog.Group({
  addTo: pointerGroup
});

let wave = new Zdog.Shape({
  addTo: pointer,
  path: [
    { x: 0, y: 0 }, // start
    {
      bezier: [
        { x: 50, y: -40, z: 0 },
        { x: 50, y: 40, z: 0 },
        { x: 100, y: 0, z: 0 }
      ]
    },
    { line: [{ x: 100, z: -40 }] },
    {
      bezier: [
        { x: 50, y: 40, z: -40 },
        { x: 50, y: -40, z: -40 },
        { x: 0, y: 0, z: -40 }
      ]
    },
    { line: [{ x: 0, z: 0 }] }
  ],
  closed: true,
  fill: true,
  stroke: 2,
  color: black
});

let triangle = new Zdog.Shape({
  addTo: pointer,
  path: [
    { x: 0, y: 0, z: 20 },
    { x: 0, y: 0, z: -60 },
    { x: -40, y: 30, z: -20 }
  ],
  stroke: 2,
  fill: true,
  color: black
});

let shadow = pointer.copyGraph({
  translate: { y: -40, x: -10 }
});

shadow.children.forEach(function(c) {
  c.color = white;
});

function animate() {
  illo.rotate.y += 0.05;
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}

animate();
