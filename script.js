function start(){
// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Mouse = Matter.Mouse,
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

render.options.wireframes = false;
// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80, {
    render: {
         fillStyle: 'transparent',
         strokeStyle: 'black',
         lineWidth: 4
    },
    friction: 0,
    frictionAir: 0
});
var ground = Bodies.rectangle(400, 610, 810, 60, {
  isStatic: true,
  render:{
    fillStyle: 'black',
    strokeStyle: 'black',
    lineWidth: 4
  }
});
/*
a	65
b	66
c	67
d	68
e	69
f	70
g	71
h	72
i	73
j	74
k	75
l	76
m	77
n	78
o	79
p	80
q	81
r	82
s	83
t	84
u	85
v	86
w	87
x	88
y	89
z	90
*/

// add all of the bodies to the world
World.add(engine.world, [boxA, ground]);
Matter.Body.applyForce(boxA, {x: boxA.position.x, y: boxA.position.y}, {x: 0.05, y: 0});
// run the engine
Engine.run(engine);
document.window.keydown(function(e){
  switch (e) {
    case 65:
      var letterA = Bodies.rectangle(Matter.Mouse.position.x, Matter.Mouse.position.y, 80, 80, {
        render: {
             fillStyle: 'transparent',
             strokeStyle: 'black',
             lineWidth: 4
        },
        friction: 0,
        frictionAir: 0,
        isStatic: true
      });
      World.add(letterA);
      break;
    default:

  }
});
// run the renderer
Render.run(render);
}
