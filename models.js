const TAU = Zdog.TAU;
const white = "#fff";
let isSpinning = true;

let illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  zoom: 2,
  dragRotate: true,
  onDragStart: function() {
    isSpinning = false;
  }
});

let cup = new Zdog.Shape({
  addTo: illo,
  color: "#fff"
});

let body = new Zdog.Cylinder({
  addTo: cup,
  diameter: 100,
  length: 120,
  stroke: false,
  rotate: { x: -TAU / 4 },
  color: "#fff"
});

let topBorder = new Zdog.Ellipse({
  addTo: cup,
  diameter: 80,
  stroke: 20,
  color: "#fff",
  translate: {
    y: -60
  },
  rotate: {
    x: TAU / 4
  }
});

let bottomBorder = new Zdog.Ellipse({
  addTo: cup,
  diameter: 80,
  stroke: 20,
  color: "#fff",
  translate: {
    y: 60
  },
  rotate: {
    x: TAU / 4
  }
});

let handle = new Zdog.Shape({
  addTo: illo,
  closed: false,
  color: "#eee",
  stroke: 18,
  path: [
    { x: 0, y: 0, z: 0 },
    {
      arc: [{ x: 60, y: 20, z: 0 }, { x: 0, y: 60, z: 0 }]
    }
  ],
  translate: {
    x: 40,
    y: -30
  }
});

let coffee = new Zdog.Ellipse({
  addTo: illo,
  diameter: 80,
  length: 120,
  fill: true,
  color: "#2e2a24",
  rotate: {
    x: TAU / 4
  },
  translate: {
    y: -61
  }
});

new Zdog.Ellipse({
  addTo: illo,
  diameter: 50,
  quarters: 1,
  rotate: { x: TAU / 4, y: -TAU },
  translate: {
    y: -60
  },
  color: "#595042",
  stroke: 2
});

new Zdog.Ellipse({
  addTo: illo,
  diameter: 50,
  quarters: 1,
  rotate: { x: TAU / 4, y: TAU },
  translate: {
    y: -60
  },
  color: "#595042",
  stroke: 2
});

new Zdog.Ellipse({
  addTo: illo,
  diameter: 30,
  quarters: 1,
  rotate: { x: TAU / 4, y: -TAU / 2 },
  translate: {
    y: -60
  },
  color: "#595042",
  stroke: 2
});

new Zdog.Ellipse({
  addTo: illo,
  diameter: 30,
  quarters: 1,
  rotate: { x: TAU / 4, y: TAU / 2 },
  translate: {
    y: -60
  },
  color: "#595042",
  stroke: 2
});

function animate() {
  illo.rotate.x = -0.6;
  illo.rotate.y += 0.02;
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}

animate();
