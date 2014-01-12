KineticJS tips and tools
========================

KineticJS is an HTML5 Canvas JavaScript framework that enables high performance animations, transitions, node nesting, layering, filtering, caching, event handling for desktop and mobile applications, and much more.

This is collection of any usefull KineticJS stuff.
Please fork and make pull request or create issue if you have something interesting!

Let's go!

So many information you can find on site: [http://kineticjs.com/](http://kineticjs.com/)

# Plugins:

* [Crosshair Shape](https://github.com/binoculars/KineticJS-plugins/tree/master/src/shapes) (https://github.com/ericdrowell/KineticJS/pull/723)
* [Html to image converting](https://github.com/slash-system/KineticJS.HTML) (alpha)
* [KineticJS.PinchLayer](https://github.com/eduplus/pinchlayer) (outdated)


### for work with other libs and frameworks:

* [KineticJS plugin for KnockoutJS](https://github.com/christophercurrie/knockout-kinetic)
* [BackboneJS Plugin](https://github.com/slash-system/backbone.kineticview)


# Performance:

First, look at tutorial section on site:
* [Layers](http://www.html5canvastutorials.com/kineticjs/html5-canvas-layer-management-with-kineticjs/)
* [BatchDraw](http://www.html5canvastutorials.com/kineticjs/html5-canvas-kineticjs-batch-draw/)
* [Caching](http://www.html5canvastutorials.com/kineticjs/html5-canvas-shape-caching-with-kineticjs/)


Also this stackoverflow posts can be usefull:

* http://stackoverflow.com/questions/16191324/performance-problems-with-html5-canvas-in-some-mobile-browsers
* http://stackoverflow.com/questions/18786085/kineticjs-moving-4000-tiles-with-stage-draggable?lq=1
* http://stackoverflow.com/questions/17973947/how-to-cache-a-whole-layer-right-before-dragstart-and-revert-it-back-on-dragend/17997291#comment26545467_17997291

// TODO : rewrite tips from answers to this file

### Mobile tips:

Tr to set set viewport:
```
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
```

If you have bad perfomance on retina display you can try change pixelRation:
```
Kinetic.pixelRatio = 1
``` 


# IDE tools:

# Examples with sources:

// TODO test them...
* https://github.com/mindmup/mapjs
* https://github.com/thehung111/node-discussion-board
* http://codefedonarts.com/2013/02/13/interactive-pie-chart-with-kineticjs-tutorial/
* https://github.com/thehung111/simple-mobile-mockup

# Articles:

// TODO: check is it usefull and talking about current version
* http://www.creativebloq.com/create-game-kineticjs-9134437
* http://www.gamingthinktank.com/2013/06/03/tutorial-part-2-snake-game-using-html5-canvas-and-kineticjs/
* http://www.creativebloq.com/create-game-kineticjs-9134437
* http://www.script-tutorials.com/snake-game-using-html5-canvas-and-kineticjs/

# Other:

* [TypeScript Definition](https://github.com/lavrton/kineticjs-tips-and-tools/blob/master/typescript/kinetic.d.ts)
* [Using kineticjs with coffeescript](http://stackoverflow.com/questions/14530450/coffeescript-class/14536430#14536430)
* [Drag&Drop DOM image to canvas](http://stackoverflow.com/questions/16271450/kineticjs-drag-and-drop-image-from-dom-into-canvas/16311898#16311898)



