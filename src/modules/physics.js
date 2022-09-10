import Matter from "matter-js";
import MatterAttractors from "matter-attractors";

const MIN_SIZE = 25;
const MAX_SIZE = 150;
const HRS_PER_WK = 168;

const gravitysrcCategory = 0x0001;
const bubbleCategory = 0x0002;

// module aliases
const Engine = Matter.Engine,
    World = Matter.World,
    MouseConstraint = Matter.MouseConstraint,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Plugin = Matter.Plugin;

Matter.use(MatterAttractors);
Plugin.resolve('matter-attractors');

export const initArena = () => {

  const engine = Engine.create();
  const mouseConstraint = MouseConstraint.create(
    engine, {element: document.body}
  );

  engine.gravity.scale = 0;

  const gravitySource = Bodies.circle(
    window.innerWidth / 2,
    window.innerHeight / 2,
    1,  //tiny radius
    {
      isStatic: true,
      plugin: {
        attractors: [
          function (bodyA, bodyB) {
            return {
              x: (bodyA.position.x - bodyB.position.x) * 1e-5,
              y: (bodyA.position.y - bodyB.position.y) * 1e-5,
            };
          }
        ]
      },
      collisionFilter: {
        group: 0,
        category: gravitysrcCategory,
        mask: gravitysrcCategory
      }
    });

  Composite.add(engine.world, [mouseConstraint, gravitySource]);
  console.log('inited Bubble Arena');
  console.log(gravitySource);
  return engine;
}

export const updateEngine = (engine) => {
  Engine.update(engine)
}

export const initBubble = (id, due, world) => {
  const initDiam = getScaledDiam(due);
  const bubble = {
    elem: document.getElementById(id),
    body: Bodies.circle(
      500, 
      500, 
      initDiam / 2,
      {
        collisionFilter: {
          group: 1,
          category: bubbleCategory
        }
      }
      ),
    render() {
      const {x, y} = this.body.position;
      const currentDiam = getScaledDiam(due);
      this.elem.style.top = `${y - currentDiam / 2}px`;
      this.elem.style.left = `${x - currentDiam / 2}px`;
      this.elem.style.width = `${currentDiam}px`;
      this.elem.style.height = `${currentDiam}px`;
      this.body.area = Math.PI * (currentDiam / 2)**2; // area of circle pi * r^2
    }
  };
  console.log(bubble.body);
  Composite.add(world, bubble.body);
  console.log('bubble ' + id + ' inited');
  return bubble;
}

const getScaledDiam = (due) => {
  const YMD = due.split("T")[0].split("-");
  //subtract 1 from month to ensure it fits 0-11 format
  const dueDate = new Date(YMD[0], YMD[1]-1, YMD[2]);
  const now = new Date();
  const deltaTime = (dueDate - now) / 3600000; // ms to hrs
  const c = -1 * (MAX_SIZE - MIN_SIZE) / HRS_PER_WK; // scale constant
  return Math.max(Math.min(MAX_SIZE, c * deltaTime + MAX_SIZE), MIN_SIZE)
}

export const popBubble = (bubble, world) => {
  bubble.elem.style.visibility = 'hidden';
  World.remove(world, bubble.body);
}