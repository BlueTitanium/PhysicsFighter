function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}
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
var player2 = Bodies.circle(800, 200, 40, {
    render: {
         fillStyle: 'transparent',
         strokeStyle: 'black',
         lineWidth: 3,

    },


});
vertexarray = [{x:100,y:100},{x:200,y:200}]
var ground = Bodies.rectangle(600, 610, 1210, 60, { isStatic: true});
var wall = Bodies.rectangle(0, 35, 60, 1210, { isStatic: true});
var wall2 = Bodies.rectangle(1210, 35, 60, 1210, { isStatic: true});
var ground2 = Bodies.rectangle(600, -300, 1210, 60, { isStatic: true});
var line = Bodies.fromVertices(200,200,vertexarray)

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
World.add(engine.world, [player,player2, ground, wall, wall2, ground2]);
// Matter.Body.applyForce(player, {x: player.position.x, y: player.position.y}, {x: 0.2, y: 0});
// run the engine
Engine.run(engine);
// var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// var vertexSets = []
// $('#svg').find('path').each(function(i, path){
//       // vertexSets.push(Svg.pathToVertices(path, 100));
//       var v = Matter.Bodies.fromVertices(mouse.position.x,mouse.position.y, Matter.Svg.pathToVertices(path, 20), {
//         render: {
//           fillStyle: 'black',
//           strokeStyle: 'black'
//         }
//       }, true);
//     console.log(v)
//     vertexSets.push(v);
//     World.add(engine.world, v);
//   });
//   vertexSets.push(ground)
document.addEventListener("keydown",function(e){
  if(e.key == 'a'){
    Matter.Body.applyForce(player, {x: player.position.x, y: player.position.y}, {x: -.1, y: 0});
  }
  if(e.key == 'd'){
    Matter.Body.applyForce(player, {x: player.position.x, y: player.position.y}, {x: 0.1, y: 0});
  }
  if(e.key == 's'){
    Matter.Body.applyForce(player, {x: player.position.x, y: player.position.y}, {x: 0, y: 0.1});
  }
  if(e.key == 'w'){
    Matter.Body.applyForce(player, {x: player.position.x, y: player.position.y}, {x: 0, y: -0.15});
  }
  if(e.key == 'j'){
    Matter.Body.applyForce(player2, {x: player2.position.x, y: player2.position.y}, {x: -.1, y: 0});
  }
  if(e.key == 'l'){
    Matter.Body.applyForce(player2, {x: player2.position.x, y: player2.position.y}, {x: 0.1, y: 0});
  }

  if(e.key == 'k'){
    Matter.Body.applyForce(player2, {x: player2.position.x, y: player2.position.y}, {x: 0, y: 0.1});
  }
  if(e.key == 'i'){
    Matter.Body.applyForce(player2, {x: player2.position.x, y: player2.position.y}, {x: 0, y: -0.15});
  }
});
// run the renderer
Render.run(render);
}
