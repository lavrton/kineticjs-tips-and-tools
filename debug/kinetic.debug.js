(function(){
    function checkNumber(key, value) {
        if (!Kinetic.Util._isNumber(value)) {
            throw 'KineticJS validation error: "' + key + '" must be a number. Got ' + typeof value + ' instead!';
        }
        if (isNaN(value)) {
            throw 'KineticJS validation error: "' + key + '" must be a number. Got NaN instead! Are you sure?!';
        }
        if (!isFinite(value)) {
            throw 'KineticJS validation error: "' + key + '" must be a number. Got Infinite instead! Are you sure?!';
        }
    }

    function checkNumberArray(key, array) {
        if (!Kinetic.Util._isArray(array)) {
            throw 'KineticJS validation error: "' + key + '" must be a Array. Got ' + typeof array + ' instead!';
        }
        for (var i in array) {
            var item = array[i];
            if (!Kinetic.Util._isNumber(item)) {
                throw 'KineticJS validation error: "' + key + '" must be a array of numbers. Got ' + typeof array[i] + ' inside of array!';
            }
            if (isNaN(item)) {
                throw 'KineticJS validation error: "' + key + '" must be a number. Got NaN inside of array! Are you sure?!';
            }
            if (!isFinite(item)) {
                throw 'KineticJS validation error: "' + key + '" must be a number. Got Infinite inside of array! Are you sure?!';
            }
        }
        
    }

    function checkBoolean(key, value) {
        if (!(value === true || value === false)) {
            throw 'KineticJS validation error: "' + key + '" must be a Boolean. Got ' + typeof value + ' instead!';
        }
    }

    function checkString(key, value) {
        if (!Kinetic.Util._isString(value)) {
            throw 'KineticJS validation error: "' + key + '" must be a String. Got ' + typeof value + ' instead!';
        }
    }

    function checkStringOrNumber(key, value) {
        if (!(Kinetic.Util._isString(value) || Kinetic.Util._isNumber(value))) {
            throw 'KineticJS validation error: "' + key + '" must be a String or a Number. Got ' + typeof value + ' instead!';
        }
    }

    function setupValidator(constructor, attr, validator) {
        var method = 'set' + Kinetic.Util._capitalize(attr);
            var originMethod = constructor.prototype[method];
            // if (!originMethod) {
            //     throw 'Method ' + method + ' not found.';
            // }
            constructor.prototype['_origin' + method] = originMethod;
            constructor.prototype[method] = function(value) {
                validator(attr, value);
                originMethod.apply(this, arguments);
            };
    }

    Kinetic.debugModeOn = function(){
        var i, attr, j, node;


        // CHECK NODES
        var nodeNumberAttrs = ['x', 'y', 'width', 'height', 'opacity', 'scaleX', 'scaleY', 'rotation', 'offsetX', 'offsetY'];
        var nodeBooleanAttrs = ['draggable'];
        var nodeStringAttrs = ['id', 'name'];

        var nodes = [Kinetic.Stage, Kinetic.Layer, Kinetic.Rect, Kinetic.Circle, Kinetic.Line, Kinetic.Arc, Kinetic.Ellipse, Kinetic.Image, Kinetic.Ring, Kinetic.Sprite, Kinetic.Wedge];
    
        for (j in nodes) {
            node = nodes[j];
            for (i in nodeNumberAttrs) {
                attr = nodeNumberAttrs[i];
                setupValidator(node, attr, checkNumber);
            }
            for (i in nodeBooleanAttrs) {
                attr = nodeBooleanAttrs[i];
                setupValidator(node, attr, checkBoolean);
            }
            for (i in nodeStringAttrs) {
                attr = nodeStringAttrs[i];
                setupValidator(node, attr, checkString);
            }
        }


        // CHECK SHAPES
        var shapeNumberAttrs = ['fillRed', 'fillGreen', 'fillBlue', 'fillAlpha',
            'fillPatternX', 'fillPatternY', 'fillPatternOffsetX', 'fillPatternOffsetY',
            'fillPatternScaleX', 'fillPatternScaleY', 'fillPatternRotation', 'fillLinearGradientStartPointX',
            'fillLinearGradientStartPointY', 'fillLinearGradientEndPointX', 'fillLinearGradientEndPointY',
            'fillRadialGradientStartPointX', 'fillRadialGradientStartPointY', 'fillRadialGradientEndPointX',
            'fillRadialGradientEndPointY', 'fillRadialGradientStartRadius',
            'fillRadialGradientEndRadius', 'strokeRed', 'strokeGreen', 'strokeBlue', 'strokeAlpha',
            'strokeWidth', 'shadowRed', 'shadowGreen', 'shadowBlue', 'shadowAlpha', 'shadowBlur', 'shadowOffsetX',
            'shadowOffsetY', 'shadowOpacity'];

        var shapeStringAttrs = ['fillPatternRepeat', 'fillPriority', 'stroke', 'lineJoin', 'lineCap', 'shadowColor'];
        var shapeBooleanAttrs = ['fillEnabled', 'strokeScaleEnabled', 'strokeEnabled', 'shadowEnabled', 'dashEnabled'];

        var shapeNumberArrayAttrs = ['dash'];

        var shapes = [Kinetic.Rect, Kinetic.Circle, Kinetic.Line, Kinetic.Arc, Kinetic.Ellipse, Kinetic.Image, Kinetic.Ring, Kinetic.Sprite, Kinetic.Wedge];

        for (j in shapes) {
            var shape = shapes[j];

            for (i in shapeNumberAttrs) {
                attr = shapeNumberAttrs[i];
                setupValidator(shape, attr, checkNumber);
            }
            for (i in shapeStringAttrs) {
                attr = shapeStringAttrs[i];
                setupValidator(shape, attr, checkString);
            }
            for (i in shapeBooleanAttrs) {
                attr = shapeBooleanAttrs[i];
                setupValidator(shape, attr, checkBoolean);
            }
            for (i in shapeNumberArrayAttrs) {
                attr = shapeNumberArrayAttrs[i];
                setupValidator(shape, attr, checkNumberArray);
            }
        }


        // Layer
        var layerBooleanAttrs = ['clearBeforeDraw', 'hitGraphEnabled'];
        for (i in layerBooleanAttrs) {
            attr = layerBooleanAttrs[i];
            setupValidator(Kinetic.Layer, attr, checkBoolean);
        }

        // Arc
        var arcNumberAttrs = ['outerRadius', 'innerRadius', 'angle'];
        for (i in arcNumberAttrs) {
            attr = arcNumberAttrs[i];
            setupValidator(Kinetic.Arc, attr, checkNumber);
        }
        var arcBooleanAttrs = ['clockwise'];
        for (i in arcBooleanAttrs) {
            attr = arcBooleanAttrs[i];
            setupValidator(Kinetic.Arc, attr, checkBoolean);
        }

        // Circle
        var circleNumberAttrs = ['radius'];
        for (i in circleNumberAttrs) {
            attr = circleNumberAttrs[i];
            setupValidator(Kinetic.Circle, attr, checkNumber);
        }

        // Ellipese
        var ellipseNumberAttrs = ['radiusX', 'radiusY'];
        for (i in ellipseNumberAttrs) {
            attr = ellipseNumberAttrs[i];
            setupValidator(Kinetic.Ellipse, attr, checkNumber);
        }

        // Containers
        var clipNumberAttrs = ['clipX', 'clipY', 'clipWidth', 'clipHeight'];
        var withCrops = [Kinetic.Layer, Kinetic.Group, Kinetic.Stage];

        for (j in withCrops) {
            var cont = withCrops[j];

            for (i in clipNumberAttrs) {
                attr = clipNumberAttrs[i];
                setupValidator(cont, attr, checkNumber);
            }
        }

        // Image
        var cropNumberAttrs = ['cropX', 'cropY', 'cropWidth', 'cropHeight'];

        for (i in cropNumberAttrs) {
            attr = cropNumberAttrs[i];
            setupValidator(Kinetic.Image, attr, checkNumber);
        }


        // Line
        var lineNumberAttrs = ['tension'];
        for (i in lineNumberAttrs) {
            attr = lineNumberAttrs[i];
            setupValidator(Kinetic.Line, attr, checkNumber);
        }

        var lineBooleanAttrs = ['closed'];
        for (i in lineBooleanAttrs) {
            attr = lineBooleanAttrs[i];
            setupValidator(Kinetic.Line, attr, checkBoolean);
        }

        var lineNumberArrayAttrs = ['points'];
        for (i in lineNumberArrayAttrs) {
            attr = lineNumberArrayAttrs[i];
            setupValidator(Kinetic.Line, attr, checkNumberArray);
        }

        // Circle
        var rectNumberAttrs = ['cornerRadius'];
        for (i in rectNumberAttrs) {
            attr = rectNumberAttrs[i];
            setupValidator(Kinetic.Rect, attr, checkNumber);
        }

        // Ring
        var ringNumberAttrs = ['outerRadius', 'innerRadius'];
        for (i in ringNumberAttrs) {
            attr = ringNumberAttrs[i];
            setupValidator(Kinetic.Ring, attr, checkNumber);
        }

        // Sprite
        var spriteNumberAttrs = ['frameIndex', 'frameRate'];
        for (i in spriteNumberAttrs) {
            attr = spriteNumberAttrs[i];
            setupValidator(Kinetic.Sprite, attr, checkNumber);
        }

        // Text
        var textNumberAttrs = ['padding', 'lineHeight'];
        for (i in textNumberAttrs) {
            attr = textNumberAttrs[i];
            setupValidator(Kinetic.Text, attr, checkNumber);
        }

        setupValidator(Kinetic.Text, 'fontSize', checkStringOrNumber);


        var textStringAttrs = ['fontFamily', 'fontStyle', 'fontVariant', 'align', 'wrap'];
        for (i in textStringAttrs) {
            attr = textStringAttrs[i];
            setupValidator(Kinetic.Text, attr, checkString);
        }

        setupValidator(Kinetic.Text, 'text', checkStringOrNumber);


        // Wedge
        var wedgeNumberAttrs = ['radius', 'angle'];
        for (i in wedgeNumberAttrs) {
            attr = wedgeNumberAttrs[i];
            setupValidator(Kinetic.Wedge, attr, checkNumber);
        }
        var wedgeBooleanAttrs = ['clockwise'];
        for (i in wedgeBooleanAttrs) {
            attr = wedgeBooleanAttrs[i];
            setupValidator(Kinetic.Wedge, attr, checkBoolean);
        }

        // Label
        var tagNumberAttrs = ['pointerWidth', 'pointerHeight', 'cornerRadius'];
        for (i in tagNumberAttrs) {
            attr = tagNumberAttrs[i];
            setupValidator(Kinetic.Tag, attr, checkNumber);
        }
        var tagStringAttrs = ['pointerDirection'];
        for (i in tagStringAttrs) {
            attr = tagStringAttrs[i];
            setupValidator(Kinetic.Tag, attr, checkString);
        }

        // RegularPolygon
        var polyNumberAttrs = ['radius', 'sides'];
        for (i in polyNumberAttrs) {
            attr = polyNumberAttrs[i];
            setupValidator(Kinetic.RegularPolygon, attr, checkNumber);
        }

        // Star
        var startNumberAttrs = ['outerRadius', 'innerRadius', 'numPoints'];
        for (i in startNumberAttrs) {
            attr = startNumberAttrs[i];
            setupValidator(Kinetic.Star, attr, checkNumber);
        }


        // TextPath
        var textPathStringAttrs = ['fontFamily', 'fontStyle', 'fontVariant'];
        for (i in textPathStringAttrs) {
            attr = textPathStringAttrs[i];
            setupValidator(Kinetic.TextPath, attr, checkString);
        }

        setupValidator(Kinetic.TextPath, 'fontSize', checkStringOrNumber);


        setupValidator(Kinetic.TextPath, 'text', checkStringOrNumber);


        // Filters
        var nodeFilterNumberAttrs = ['blurRadius', 'brightness', 'embossStrength', 'embossWhiteLevel',
                 'enhance', 'hue', 'saturation', 'luminance', 'value', 'kaleidoscopePower', 'kaleidoscopeAngle',
                'threshold', 'noise', 'pixelSize', 'levels', 'red', 'green', 'blue'];
        for (j in nodes) {
            node = nodes[j];
            for (i in nodeFilterNumberAttrs) {
                attr = nodeFilterNumberAttrs[i];
                setupValidator(node, attr, checkNumber);
            }
        }

        var nodeFilterStringAttrs = ['embossDirection'];
        for (j in nodes) {
            node = nodes[j];
            for (i in nodeFilterStringAttrs) {
                attr = nodeFilterStringAttrs[i];
                setupValidator(node, attr, checkString);
            }
        }

        var nodeFilterBooleanAttrs = ['embossBlend'];
        for (j in nodes) {
            node = nodes[j];
            for (i in nodeFilterBooleanAttrs) {
                attr = nodeFilterBooleanAttrs[i];
                setupValidator(node, attr, checkBoolean);
            }
        }

    };
    Kinetic.debugModeOn();
})();