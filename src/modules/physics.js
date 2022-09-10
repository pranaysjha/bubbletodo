import Matter from "matter-js";

const MIN_SIZE = 25;
const MAX_SIZE = 100;
const HRS_PER_WK = 168;

// module aliases
const Engine = Matter.Engine,
    MouseConstraint = Matter.MouseConstraint,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;


export const initArena = () => {
  Matter.use(
    'matter-attractors'
  );

  const engine = Engine.create();
  const mouseConstraint = MouseConstraint.create(
    engine, {element: document.body}
  );

  const gravitySource = Bodies.circle(
      document.getElementById('bubbleArena').clientWidth/2, 
      document.getElementById('bubbleArena').clientHeight/2, 
      1,  //tiny radius
      {
      isStatic: true,
      plugin: {
        attractors: [
          function(bodyA, bodyB) {
            return {
              x: (bodyA.position.x - bodyB.position.x) * 1e-5,
              y: (bodyA.position.y - bodyB.position.y) * 1e-5,
            };
          }
        ]
      },
        collisionFilter: {
          group: -1
        }
  });

  Composite.add(engine.world, [mouseConstraint, gravitySource]);
  console.log('inited Bubble Arena');
  return engine;
}

export const updateEngine = (engine) => {
  Engine.update(engine)
}

export const initBubble = (id, due) => {
  const initDiam = getScaledDiam(due);
  const bubble = {
    elem: document.getElementById("bubble" + id),
    body: Bodies.circle(500, 500, initDiam / 2),
    render() {
      const {x, y} = this.body.position;
      const currentDiam = getScaledDiam(due);
      this.elem.style.top = `${y - currentDiam / 2}px`;
      this.elem.style.left = `${x - currentDiam / 2}px`;
      this.elem.style.width = `${currentDiam}px`;
      this.elem.style.height = `${currentDiam}px`;
      this.body.area(Math.PI * (currentDiam / 2)**2); // area of circle pi * r^2
    }
  };
  console.log(bubble.body);
  Composite.add(bubble.body);
  console.log('bubble ' + id + ' inited');
  return bubble;
}

const getScaledDiam = (due) => {
  const YMD = due.split("T")[0].split("-");
  const dueDate = new Date(YMD[0], YMD[1], YMD[2]);
  const now = new Date();
  const deltaTime = (dueDate - now) / 3600000; // ms to hrs
  const c = -1 * (MAX_SIZE - MIN_SIZE) / HRS_PER_WK; // scale constant
  return Math.max(Math.min(MAX_SIZE, c * deltaTime + MAX_SIZE), MIN_SIZE)
}