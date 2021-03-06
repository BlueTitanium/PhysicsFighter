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
var player = Bodies.circle(200, 300, 40, {
    render: {
         fillStyle: 'transparent',
         strokeStyle: 'black',
         lineWidth: 3,

    },


});
var player2 = Bodies.circle(1000, 300, 40, {
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
var ground2 = Bodies.rectangle(600, 0, 1210, 60, { isStatic: true});
var line = Bodies.fromVertices(200,200,vertexarray)
player1count = 0
player2count = 0
Matter.Events.on(engine, 'beforeTick', function() {
        // center view at player
        player1x = player.velocity.x
        player1y = player.velocity.y
        player2x = player2.velocity.x
        player2y = player2.velocity.y
        var collision = Matter.SAT.collides(player, player2);

        if (collision.collided) {

            if (Math.sqrt((player1x*player1x)+(player2y*player2y)) >= Math.sqrt((player2x*player2x)+(player2y*player2y))){
              World.add(engine.world, Bodies.rectangle(200 + player1count * 100, 180, 50, 50, { isStatic: true, fillStyle: 'green'}))
              Matter.Body.setPosition(player,{x:200,y:300});
              Matter.Body.setPosition(player2,{x:1000,y:300});
              Matter.Body.setVelocity(player,{x:0,y:0})
              Matter.Body.setVelocity(player2,{x:0,y:0})
              player1count++;
            }
            else{
              World.add(engine.world, Bodies.rectangle(800 + player2count * 100, 180, 50, 50, { isStatic: true, fillStyle: 'green'}))
              Matter.Body.setPosition(player,{x:200,y:300});
              Matter.Body.setPosition(player2,{x:1000,y:300});
              Matter.Body.setVelocity(player,{x:0,y:0})
              Matter.Body.setVelocity(player2,{x:0,y:0})
              player2count++;
            }
        }
        if (player1count === 3){
          document.write("Player 1 Wins!");
        }
        if (player2count === 3){
          document.write("Player 2 Wins!");
        }
      });

var mouse = Mouse.create(render.canvas);
    // keep the mouse in sync with rendering
    render.mouse = mouse;
    // fit the render viewport to the scene
World.add(engine.world, [player,player2, ground, wall, wall2, ground2]);
// Matter.Body.applyForce(player, {x: player.position.x, y: player.position.y}, {x: 0.2, y: 0});
// run the engine
Engine.run(engine);
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var vertexSets = []
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

  // add all of the bodies to the world


var text = `a
ability
able
about
above
accept
according
account
across
act
action
activity
actually
add
address
administration
admit
adult
affect
after
again
against
age
agency
agent
ago
agree
agreement
ahead
air
all
allow
almost
alone
along
already
also
although
always
American
among
amount
analysis
and
animal
another
answer
any
anyone
anything
appear
apply
approach
area
argue
arm
around
arrive
art
article
artist
as
ask
assume
at
attack
attention
attorney
audience
author
authority
available
avoid
away
baby
back
bad
bag
ball
bank
bar
base
be
beat
beautiful
because
become
bed
before
begin
behavior
behind
believe
benefit
best
better
between
beyond
big
bill
billion
bit
black
blood
blue
board
body
book
born
both
box
boy
break
bring
brother
budget
build
building
business
but
buy
by
call
camera
campaign
can
cancer
candidate
capital
car
card
care
career
carry
case
catch
cause
cell
center
central
century
certain
certainly
chair
challenge
chance
change
character
charge
check
child
choice
choose
church
citizen
city
civil
claim
class
clear
clearly
close
coach
cold
collection
college
color
come
commercial
common
community
company
compare
computer
concern
condition
conference
Congress
consider
consumer
contain
continue
control
cost
could
country
couple
course
court
cover
create
crime
cultural
culture
cup
current
customer
cut
dark
data
daughter
day
dead
deal
death
debate
decade
decide
decision
deep
defense
degree
Democrat
democratic
describe
design
despite
detail
determine
develop
development
die
difference
different
difficult
dinner
direction
director
discover
discuss
discussion
disease
do
doctor
dog
door
down
draw
dream
drive
drop
drug
during
each
early
east
easy
eat
economic
economy
edge
education
effect
effort
eight
either
election
else
employee
end
energy
enjoy
enough
enter
entire
environment
environmental
especially
establish
even
evening
event
ever
every
everybody
everyone
everything
evidence
exactly
example
executive
exist
expect
experience
expert
explain
eye
face
fact
factor
fail
fall
family
far
fast
father
fear
federal
feel
feeling
few
field
fight
figure
fill
film
final
finally
financial
find
fine
finger
finish
fire
firm
first
fish
five
floor
fly
focus
follow
food
foot
for
force
foreign
forget
form
former
forward
four
free
friend
from
front
full
fund
future
game
garden
gas
general
generation
get
girl
give
glass
go
goal
good
government
great
green
ground
group
grow
growth
guess
gun
guy
hair
half
hand
hang
happen
happy
hard
have
he
head
health
hear
heart
heat
heavy
help
her
here
herself
high
him
himself
his
history
hit
hold
home
hope
hospital
hot
hotel
hour
house
how
however
huge
human
hundred
husband
I
idea
identify
if
image
imagine
impact
important
improve
in
include
including
increase
indeed
indicate
individual
industry
information
inside
instead
institution
interest
interesting
international
interview
into
investment
involve
issue
it
item
its
itself
job
join
just
keep
key
kid
kill
kind
kitchen
know
knowledge
land
language
large
last
late
later
laugh
law
lawyer
lay
lead
leader
learn
least
leave
left
leg
legal
less
let
letter
level
lie
life
light
like
likely
line
list
listen
little
live
local
long
look
lose
loss
lot
love
low
machine
magazine
main
maintain
major
majority
make
man
manage
management
manager
many
market
marriage
material
matter
may
maybe
me
mean
measure
media
medical
meet
meeting
member
memory
mention
message
method
middle
might
military
million
mind
minute
miss
mission
model
modern
moment
money
month
more
morning
most
mother
mouth
move
movement
movie
Mr
Mrs
much
music
must
my
myself
name
nation
national
natural
nature
near
nearly
necessary
need
network
never
new
news
newspaper
next
nice
night
no
none
nor
north
not
note
nothing
notice
now
n't
number
occur
of
off
offer
office
officer
official
often
oh
oil
ok
old
on
once
one
only
onto
open
operation
opportunity
option
or
order
organization
other
others
our
out
outside
over
own
owner
page
pain
painting
paper
parent
part
participant
particular
particularly
partner
party
pass
past
patient
pattern
pay
peace
people
per
perform
performance
perhaps
period
person
personal
phone
physical
pick
picture
piece
place
plan
plant
play
player
PM
point
police
policy
political
politics
poor
popular
population
position
positive
possible
power
practice
prepare
present
president
pressure
pretty
prevent
price
private
probably
problem
process
produce
product
production
professional
professor
program
project
property
protect
prove
provide
public
pull
purpose
push
put
quality
question
quickly
quite
race
radio
raise
range
rate
rather
reach
read
ready
real
reality
realize
really
reason
receive
recent
recently
recognize
record
red
reduce
reflect
region
relate
relationship
religious
remain
remember
remove
report
represent
Republican
require
research
resource
respond
response
responsibility
rest
result
return
reveal
rich
right
rise
risk
road
rock
role
room
rule
run
safe
same
save
say
scene
school
science
scientist
score
sea
season
seat
second
section
security
see
seek
seem
sell
send
senior
sense
series
serious
serve
service
set
seven
several
sex
sexual
shake
share
she
shoot
short
shot
should
shoulder
show
side
sign
significant
similar
simple
simply
since
sing
single
sister
sit
site
situation
six
size
skill
skin
small
smile
so
social
society
soldier
some
somebody
someone
something
sometimes
son
song
soon
sort
sound
source
south
southern
space
speak
special
specific
speech
spend
sport
spring
staff
stage
stand
standard
star
start
state
statement
station
stay
step
still
stock
stop
store
story
strategy
street
strong
structure
student
study
stuff
style
subject
success
successful
such
suddenly
suffer
suggest
summer
support
sure
surface
system
table
take
talk
task
tax
teach
teacher
team
technology
television
tell
ten
tend
term
test
than
thank
that
the
their
them
themselves
then
theory
there
these
they
thing
think
third
this
those
though
thought
thousand
threat
three
through
throughout
throw
thus
time
to
today
together
tonight
too
top
total
tough
toward
town
trade
traditional
training
travel
treat
treatment
tree
trial
trip
trouble
true
truth
try
turn
TV
two
type
under
understand
unit
until
up
upon
us
use
usually
value
various
very
victim
view
violence
visit
voice
vote
wait
walk
wall
want
war
watch
water
way
we
weapon
wear
week
weight
well
west
western
what
whatever
when
where
whether
which
while
white
who
whole
whom
whose
why
wide
wife
will
win
wind
window
wish
with
within
without
woman
wonder
word
work
worker
world
worry
would
write
writer
wrong
yard
yeah
year
yes
yeet
you
young
your
yourself`;
var dictionary = text.split("\n");
console.log(dictionary[Math.floor((Math.random() * dictionary.length) + 1)]);


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
