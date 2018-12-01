function start(){
// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
var canvas = document.createElement('canvas'),
    context = canvas.getContext('2d');

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
    width: window.innerWidth-20,
    height: window.innerHeight-20,
  }
});

render.options.background = 'transparent';
render.options.wireframeBackground = 'transparent';
render.options.wireframes = false;
// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80, {
  render: {
         fillStyle: 'red',
         strokeStyle: 'blue',
         lineWidth: 3
    }
});
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, ground]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
}
