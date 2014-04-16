// Workaround for vertically squashed images in iOS6 & iOS7
// via https://github.com/ericdrowell/KineticJS/pull/654

// general idea is using canvas element instead of image

// detect scale ratio for image
function detectVerticalSquash(img) {
  var ih = img.height;
  var canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = ih;
  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  var data = ctx.getImageData(0, 0, 1, ih).data;
  // search image edge pixel position in case it is squashed vertically.
  var sy = 0;
  var ey = ih;
  var py = ih;
  while (py > sy) {
      var alpha = data[(py - 1) * 4 + 3];
      if (alpha === 0) {
          ey = py;
      } else {
          sy = py;
      }
      py = (ey + sy) >> 1;
  }
  var ratio = (py / ih);
  return (ratio===0)?1:ratio;
}


// create canvas with correct representation to replace with image
function generateCanvas(image){
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    var vertSquashRatio = detectVerticalSquash(image);
    console.log(image);
    context.drawImage(image, 0, 0, 
                       image.width, image.height / vertSquashRatio);
    return(canvas);
}



var img = new Image();

img.onload = function() {
  var stage = new Kinetic.Stage({
      container: 'con',
      width: 1000,
      height: 1000
  });
  var layer = new Kinetic.Layer();
  stage.add(layer);
  var image = new Kinetic.Image({
    image : generateCanvas(img),
    width : 200,
    height : 200,
    draggable : true
  });
  layer.add(image);
  layer.draw();
};
img.src = 'diana2.jpg';