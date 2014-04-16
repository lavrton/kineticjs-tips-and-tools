KineticJS debug mode plugin
========================

KineticJS don't validate input values because of performance reasons.

But you may have a lot of problems with javascript specific cases. For example:

```javascript
var node = new Kinetic.Rect({
    x : null,       // wrong calculation
    y : undefined,  // for example you are using not existen property of object
    offset : [0, 0] // wrong API usage
});
```

# Usage

```
<script type="text/javascript" src="kinetic.js"></script>
<script type="text/javascript" src="kinetic.debug.js"></script>
```

Remember: using this plugin may drop performance of application.