KineticJS tips and tools
========================

KineticJS is an HTML5 Canvas JavaScript framework that enables high performance animations, transitions, node nesting, layering, filtering, caching, event handling for desktop and mobile applications, and much more.

So many information you can find on site: [http://kineticjs.com/](http://kineticjs.com/)

# Plugins:

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

# Articles:

# Other:

* [Backbone Plugin](https://github.com/slash-system/backbone.kineticview)
* [Using kineticjs with coffeescript](http://stackoverflow.com/questions/14530450/coffeescript-class/14536430#14536430)
* [Drag&Drop DOM image to canvas](http://stackoverflow.com/questions/16271450/kineticjs-drag-and-drop-image-from-dom-into-canvas/16311898#16311898)



