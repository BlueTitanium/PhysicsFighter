function start(){
// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint,
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
    hasBounds: true,
    showVelocity: true
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

var ground = Bodies.rectangle(600, 610, 1210, 60, { isStatic: true});


Matter.Events.on(engine, 'beforeTick', function() {
        // center view at player
        Matter.Bounds.shift(render.bounds,
        {
            x: boxA.position.x - window.innerWidth / 2,
            y: boxA.position.y - window.innerHeight / 2
        });
      });

var mouse = Mouse.create(render.canvas);




    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene



World.add(engine.world, [boxA, ground]);
Matter.Body.applyForce(boxA, {x: boxA.position.x, y: boxA.position.y}, {x: 0.05, y: 0});
// run the engine
Engine.run(engine);


    // keep the mouse in sync with rendering

document.addEventListener("keydown",function(e){
  if(e.key == 'a'){

    var letter = Bodies.rectangle(mouse.position.x,mouse.position.y, 80, 80, {
      render: {
           fillStyle: 'transparent',
           strokeStyle: 'black',
           lineWidth: 4
      },
      friction: 0,
      frictionAir: 0,
      isStatic: true
    });
    World.add(engine.world,letter);
  }
});
// run the renderer
Render.run(render);
}
