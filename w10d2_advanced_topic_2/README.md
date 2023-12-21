# The Javascript Event Loop as a tool for Creating Simulations
## Physics, Computers and Math (Oh My!)

Today, I'm here to deliver a pitch, an ask, a request, a hope, ... that as you continue your journey into 
computing, that you'll keep an open mind, a sharp eye out, for all of the consequences of the power that 
these tools give you.

As a student of physics and of history, I learned at a young age that 'high tech' tools and inventions can 
be used for both good and evil, and that sometimes your first inclination for the use of a tool or 
invention has unexpected consequences. A knife can be used to lovingly cook meals, or they can be used by 
psychopaths to kill innocent people.

In the 1940's, it was discovered that you could create a runaway chain reaction of nuclear fission, leading 
at first to the nuclear reactor, and then to the 'atom bomb'. The promise of widespread use of nuclear 
power, along with reasonable disposal of the waste, would have prevented the climate crisis. On the other 
hand, the threat of nuclear war, or even the threat of a repeat of nuclear battles has unlocked a pandora's 
box the likes of which humanity may never recover from.

But there are less dramatic examples of the dual nature of new technologies.

In early 2004, Facebook was launched which ultimately displaced television as the thing that sucked up vast 
amounts of human 'down time' through psychological UX tricks of addictive, instantaneous, dopamine 
delivering minimalist social interactions and continuous calls to action. Facebook, the corporation, now 
literally (in the original sense of that word) owns a significant fraction of all of public discourse. That 
invention, and the side-effects of who had access to the data it generated, may even have changed the 
outcome of the 2016 election for President of the United States.

Today, humans are on the threshold of high impact from several new transformative technologies, including 
cryptocurrencies, quantum computing and machine learning. These things have their powerful upsides, but 
also hold the potential to do a lot of harm, to human well-being as well as to the environment that 
sustains all of ecology.

The things you have learned in this bootcamp are, without exaggeration, gateways into all of these 
technologies.

# Leveraging computers to do what they're good at

Computers are good at a few things:

1. repetitive tasks
1. storing and retrieving data
1. performing calculations quickly
1. creating digital graphical displays that represent data

Note that all of these points are important for web development, but they're ALSO important for making 
simulations ('computational models') of physical reality.

# Computers can be a 'time machine' of sorts

time machine; a machine capable of transporting a person backward or forward in time.

Javascript has a built-in feature that can be used to help with tracking and reacting to events at certain 
times: The Event Loop, used in asynchronous code.

# So... let us embark on the creation of a web app that can simulate a toy 'solar system'

We can leverage that Event Loop to simplify keeping track of when updates to our simulated system should 
occur.

# Using the tools at hand

1. HTML
1. CSS
1. Front-end Javascript, including jQuery

# Code Review

- [ ] some fixed constants
- [ ] A javascript Class for 'Planets'
- [ ] jquery for DOM manipulation

## Our equations
1. F = M * A (Newton's Law)
1. F = G * Msun * Mplanet / R^2
1. (where R is the distance from the Sun to the Planet, in pixels ;-) )
1. DeltaV = A * DeltaT
1. DeltaX = V * DeltaT

# [demo]

This demo code is included in YOUR cohort's repository of my instructor's code, under the new 'Modeling' subdirectory. If you would like to run the code on your system, you may have success by just doing 'git pull' in your clone of that repository, cd into the Modeling directory and run the following:

1. npm install
1. node index.js
1. http://localhost:3000

# Q: How much does a cow weigh? A: Start with a Spherical Cow.

If a cow is all water, and is the same volume as a sphere of 1 meter diameter, then a cow would weigh 
approximately 4/3*PI*R^3 = 0.52 cubic meters of water equivalent weight. i.e. 520 kg. (actual answer = 600 
to 750 kg, which is 'close enough to learn something').

It's in the spirit of that kind of guessing and estimating that you can start out with toy systems that get 
you started on more complex things.

# Curiosity and Leisurely Play Precede Innovation

While our system is just a 'toy' (because the units of speed and gravity are chosen for convenience only), 
nevertheless, some interesting emergent behaviours that are also present in the real physical system.

1. orbits are elliptical
1. the speed of a planet relative to the 'Sun' is fastest when it's nearest to the Sun and slowest when it's farthest away.

But we can tell that our system isn't perfect because it exhibits effects that are not seen in real life. 
For our simple system, an object in a closed orbit should return to precisely the same location that it 
starts from, as each orbit completes. In our system, there are imperfections that build up over time, 
sometimes quite rapidly!

# TODO

# REFERENCES

Rocket Science, Computers, Simulations, The Lunar Landing:
https://www.youtube.com/watch?v=B1J2RMorJXM

The github repository that contains the Lunar Landing Program:
https://github.com/chrislgarry/Apollo-11

Margaret Hamilton:
https://www.smithsonianmag.com/smithsonian-institution/margaret-hamilton-led-nasa-software-team-landed-astronauts-moon-180971575/

# Citizen Science Projects to Join

From the Gov't of Canada, a whole index:
https://www.ic.gc.ca/eic/site/063.nsf/eng/h_97169.html

US Government:
https://www.citizenscience.gov/#

Other:
https://www.citizencyberlab.org/projects/

A guide on open data:
https://citizens-guide-open-data.github.io/guide/6-citizen-science

Tons of astronomy ones at the top of this list because, you know, alphabetical order:
https://en.wikipedia.org/wiki/List_of_citizen_science_projects
