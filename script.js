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
    hasBounds: true

  }
});

render.options.background = 'transparent';

render.options.wireframes = false;
// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80, {
  render: {
         fillStyle: 'transparent',
         strokeStyle: 'black',
         lineWidth: 3,

    },


});
boxA.friction = 0;
boxA.frictionAir = 0;

var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true});

Matter.Body.applyForce(boxA, {x: boxA.position.x, y: boxA.position.y}, {x: 0.1, y: 0});
Matter.Events.on(engine, 'beforeTick', function() {
        // center view at player
        Matter.Bounds.shift(render.bounds,
        {
            x: boxA.position.x - window.innerWidth / 2,
            y: boxA.position.y - window.innerHeight / 2
        });
      });
// add all of the bodies to the world
World.add(engine.world, [boxA, ground]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
}
