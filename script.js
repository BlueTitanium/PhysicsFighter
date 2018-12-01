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
var player = Bodies.circle(400, 200, 40, {
    render: {
         fillStyle: 'transparent',
         strokeStyle: 'black',
         lineWidth: 3,

    },


});
player.friction = 0;
player.frictionAir = 0;

var ground = Bodies.rectangle(600, 610, 1210, 60, { isStatic: true});


Matter.Events.on(engine, 'beforeTick', function() {
        // center view at player
        Matter.Bounds.shift(render.bounds,
        {
            x: player.position.x - window.innerWidth / 2,
            y: player.position.y - window.innerHeight / 2
        });
      });

var mouse = Mouse.create(render.canvas);




    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene



World.add(engine.world, [player, ground]);
Matter.Body.applyForce(player, {x: player.position.x, y: player.position.y}, {x: 0.05, y: 0});
// run the engine
Engine.run(engine);


    // keep the mouse in sync with rendering

document.addEventListener("keydown",function(e){
  if(e.key == 'a'){

    var letter = Bodies.circle(mouse.position.x,mouse.position.y, 40, {
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
