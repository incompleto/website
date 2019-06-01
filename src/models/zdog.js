// zdog.js

const TAU = Zdog.TAU;
const gold = "#EA0";
const orange = "#E62";
const garnet = "#C25";
const eggplant = "#636";

let illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  zoom: 4
});

let circle = new Zdog.Ellipse({
  addTo: illo,
  diameter: 70,
  translate: { x: -50 },
  stroke: 20,
  color: eggplant
});

let triangle = new Zdog.Shape({
  addTo: illo,
  path: [{ x: 0, y: -32 }, { x: 32, y: 32 }, { x: -32, y: 32 }],
  translate: { x: 50 },
  color: orange,
  stroke: 12,
  fill: true
});

let viewRotation = new Zdog.Vector();
let dragStartRX, dragStartRY;

new Zdog.Dragger({
  startElement: ".zdog-canvas",
  onDragStart: function() {
    circle.color = garnet;
    triangle.color = gold;
    dragStartRX = viewRotation.x;
    dragStartRY = viewRotation.y;
    isAnimating = true;
    animate();
  },
  onDragMove: function(pointer, moveX, moveY) {
    let moveRX = (moveY / illo.width) * TAU;
    let moveRY = (moveX / illo.width) * TAU;
    viewRotation.x = dragStartRX - moveRX;
    viewRotation.y = dragStartRY - moveRY;
  },
  onDragEnd: function() {
    circle.color = eggplant;
    triangle.color = orange;
    isAnimating = false;
  }
});

function animate() {
  circle.rotate.set(viewRotation);
  triangle.rotate.set(viewRotation);
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}

animate();
