
Matter.use(
    'matter-attractors' // PLUGIN_NAME
  );

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Common = Matter.Common;

// create an engine
var engine = Engine.create();
engine.gravity.scale = 0;

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: Math.min(document.documentElement.clientWidth, 1024),
        height: Math.min(document.documentElement.clientHeight, 1024),
        wireframes: false
    }
});

//your mom
var attractorbody = Matter.Bodies.circle(
    400, 
    450, 
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

var firstbody = Bodies.circle(
    430,
    450,
    50,
    {
      collisionFilter: {
        group: -1
      }
    }
)

Composite.add(engine.world, [attractorbody, firstbody]);

//adding a bunch of dummy bubbles
// for (var i = 0; i < 5; i += 1) {
//     var body = Bodies.circle(
//         Common.random(0,render.options.height),
//         Common.random(0, render.options.width),
//         Common.random(20,80),
//         {
//           collisionFilter: {
//             group: 1
//           }
//         }
//     );
//     Composite.add(engine.world, body);
// }


var mouse = Matter.Mouse.create(render.canvas);

Matter.Events.on(engine, 'afterUpdate', function() {
    if (!mouse.position.x) {
      return;
    }

    // console.log("x: " + mouse.position.x)
    // console.log("y: " + mouse.position.y)

    // smoothly move the attractor attractorbody towards the mouse
    // Matter.Body.translate(attractorbody, {
    //     x: (mouse.position.x - attractorbody.position.x) * 0.25,
    //     y: (mouse.position.y - attractorbody.position.y) * 0.25
    // });
});

let futureDate = new Date(2022, 7, 16, 16, 30, 00);
let now = new Date();

//convert from milliseconds to hours to make it more understandable
var timediff = (futureDate-now) / 3600000;

const getSize = (hours) => {
  const bubbleMAXSIZE = 100;
  const bubbleMINSIZE = 25;
  const TTDFSB_HRS = 168;
  const m = -1 * (bubbleMAXSIZE-bubbleMINSIZE) / TTDFSB_HRS; //calculate slope 
  //ensure bubble does not exceed maxsize or minsize
  var calculatedSize = Math.max(Math.min(bubbleMAXSIZE,m*hours + bubbleMAXSIZE), bubbleMINSIZE);
  return calculatedSize;
};

console.log(getSize(timediff));

//make a test body that demonstrate deadline scaling
var size_test_body = Bodies.circle(
  Common.random(0,render.options.height),
  Common.random(0, render.options.width),
  getSize(timediff),
  {
    collisionFilter: {
      group: 1
    }
  }
)

Composite.add(engine.world, size_test_body);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

