KineticJS tips and tools
========================

KineticJS is not maineined any more, see [https://github.com/ericdrowell/KineticJS](https://github.com/ericdrowell/KineticJS). But I maintain it's fork [Konva](http://konvajs.github.io/). You can submit any interesting stuff here [https://github.com/konvajs/konva/issues](https://github.com/konvajs/konva/issues)

KineticJS is an HTML5 Canvas JavaScript framework that enables high performance animations, transitions, node nesting, layering, filtering, caching, event handling for desktop and mobile applications, and much more.

This is collection of any usefull KineticJS stuff.
Please fork and make pull request or create issue if you have something interesting!

Let's go!

# Content:

* [Applications](#applications)
* [Plugins](#plugins)
* [Performance](#performance)
* [Possible problems](#possibleproblems)
* [Articles](#articles)
* [Other](#other)

So many information you can find on site: [http://kineticjs.com/](http://kineticjs.com/)

# Applications:

* https://github.com/thehung111/node-discussion-board
* https://github.com/mihhail-lapushkin/Ancient-Riddle
* https://github.com/thehung111/simple-mobile-mockup

# Plugins:

* [Debug mode](https://github.com/lavrton/kineticjs-tips-and-tools/tree/master/debug)
* [Crosshair Shape](https://github.com/binoculars/KineticJS-plugins/tree/master/src/shapes)
* [Multi touch support](https://github.com/atomictag/Kinetic.MultiTouch) - allow you to drag multiple nodes at same time
* [Greensock plugin for Kinetic](http://api.greensock.com/js/com/greensock/plugins/KineticPlugin.html)


### for work with other libs and frameworks:

* [Knockout plugin](https://github.com/fizmo/knockout-kinetic)
* [Backbone plugin](https://github.com/slash-system/backbone.kineticview)
* [React plugin](https://github.com/freiksenet/react-kinetic)

# Performance:

First, look at tutorial section on site:

* [Layers](http://www.html5canvastutorials.com/kineticjs/html5-canvas-layer-management-with-kineticjs/)
* [BatchDraw](http://www.html5canvastutorials.com/kineticjs/html5-canvas-kineticjs-batch-draw/)
* [Caching](http://www.html5canvastutorials.com/kineticjs/html5-canvas-shape-caching-with-kineticjs/)
* Setting `transformsEnabled = 'position'` on shape
* Setting `hitGraphEnabled = false` on layer (if you don't need pointer events)
* Avoid to use shadows and strokes


Also this stackoverflow posts can be useful:

// TODO : rewrite tips from answers to this file

* [http://stackoverflow.com/questions/16191324/performance-problems-with-html5-canvas-in-some-mobile-browsers](#http://stackoverflow.com/questions/16191324/performance-problems-with-html5-canvas-in-some-mobile-browsers)
* [http://stackoverflow.com/questions/18786085/kineticjs-moving-4000-tiles-with-stage-draggable?lq=1](#http://stackoverflow.com/questions/18786085/kineticjs-moving-4000-tiles-with-stage-draggable?lq=1)
* [http://stackoverflow.com/questions/17973947/how-to-cache-a-whole-layer-right-before-dragstart-and-revert-it-back-on-dragend/17997291#comment26545467_17997291](http://stackoverflow.com/questions/17973947/how-to-cache-a-whole-layer-right-before-dragstart-and-revert-it-back-on-dragend/17997291#comment26545467_17997291)


### Mobile tips:

* Try to set viewport:
```
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
```

* If you have bad performance on retina display you can try to change pixelRation:
```
Kinetic.pixelRatio = 1
``` 


# Possible problems:

## Ghost shapes

Sometimes android device may have ghost shape on canvas. This is android bug. You can fix it by drawing layer with small (50ms) timeout. See for details: https://github.com/ericdrowell/KineticJS/issues/481#issuecomment-36096773

Please follow [this article](slash-system.com/en/how-to-fix-android-html5-canvas-issues/).


```javascript
var stage = new Kinetic.Stage(conf);
var layer = new Kinetic.Layer();

stage.add(layer);

setTimeout(function(){
    // add shapes to the layer and then do layer.draw()
}, 50);
```

Some android devices have problems if parents of canvas have `overflow:hidden`. This snippet may be helpful:
```javascript
if (navigator.userAgent.match(/Android/i)) {
    $("canvas").parents("*").css("overflow", "visible");
}
```
You can find more related information here:
https://code.google.com/p/android/issues/detail?id=35474

## Caching

Currently (v5.1.0) KineticJS has problems with cache if node has some transformation (rotate, scale, offset), so if you have any problems with caching try:
 
 1. Reset transform
 2. Cache node
 3. Apply transform again

# Articles:

// TODO: check is it useful and talking about current version
// TODO: add descriptions

* http://www.techrecite.com/html5-canvas-disc-rotation-animation-using-kineticjs/
* http://jasonds.co.uk/Blog/analog-clock-kinetic
* http://www.creativebloq.com/create-game-kineticjs-9134437
* http://www.gamingthinktank.com/2013/06/03/tutorial-part-2-snake-game-using-html5-canvas-and-kineticjs/
* http://www.creativebloq.com/create-game-kineticjs-9134437
* http://www.script-tutorials.com/snake-game-using-html5-canvas-and-kineticjs/
* http://cases.azoft.com/how-to-create-html5-canvas-animated-transitions-with-kineticjs/
* http://codefedonarts.com/2013/02/13/interactive-pie-chart-with-kineticjs-tutorial/
* http://mihhaillapushkin.wordpress.com/2013/03/11/the-makings-of-a-mobile-canvas-game/
* http://codeslashslashcomment.com/2012/12/12/dynamic-image-distortion-html5-canvas/#more-179

# Other:

* [TypeScript Definition](https://github.com/lavrton/kineticjs-tips-and-tools/blob/master/typescript/kinetic.d.ts)
* [Using kineticjs with coffeescript](http://stackoverflow.com/questions/14530450/coffeescript-class/14536430#14536430)
* [Drag&Drop DOM image to canvas](http://stackoverflow.com/questions/16271450/kineticjs-drag-and-drop-image-from-dom-into-canvas/16311898#16311898)
* [Tween fillGradientColorStops Example](http://jsfiddle.net/ZH2AS/)



