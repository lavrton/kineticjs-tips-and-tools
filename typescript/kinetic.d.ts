declare module Kinetic {

    var pixelRatio : number;
    var dragDistance: number;
    var isDragging : () => boolean;
    var isDragReady : () => boolean;

    export class Util {
        static getRandomColor() : string;
        static getRGB(color: string) : string;
    }

    export class Easings {
        static BackEaseIn() : any;
        static BackEaseInOut() : any;
        static BackEaseOut() : any;
        static BounceEaseIn() : any;
        static BounceEaseInOut() : any;
        static BounceEaseOut() : any;
        static EaseIn() : any;
        static EaseInOut() : any;
        static EaseOut() : any;
        static ElasticEaseIn() : any;
        static ElasticEaseInOut() : any;
        static ElasticEaseOut() : any;
        static Linear() : any;
        static StrongEaseIn() : any;
        static StrongEaseInOut() : any;
        static StrongEaseOut() : any;
    }

    class Filter {
    }

    export class Filters {
        static Blur(imageData : any): Filter;
        static Brighten(imageData : any): Filter;
        static Emboss(imageData : any): Filter;
        static Enhance(imageData : any): Filter;
        static Grayscale(imageData : any): Filter;
        static HSV(imageData : any): Filter;
        static Invert(imageData : any): Filter;
        static Mask(imageData : any): Filter;
        static Noise(imageData : any): Filter;
        static Pixelate(imageData : any): Filter;
        static Posterize(imageData : any): Filter;
        static RGB(imageData : any): Filter;
        static Sepia(imageData : any): Filter;
        static Solarize(imageData : any): Filter;
        static Threshold(imageData : any): Filter;
    }

    export class Animation {
        constructor(func: Function, layers?: Kinetic.Layer[]);
        constructor(func: Function, layer?: Kinetic.Layer);

        addLayer(layer: Kinetic.Layer) : boolean;
        getLayers() : Kinetic.Layer[];
        isRunning() : boolean;
        setLayers(layers : Kinetic.Layer[]) : Animation;
        setLayers(layer : Kinetic.Layer) : Animation;
        start() : Animation;
        stop() : Animation;
    }

    interface NodeConfig {
        x?: number;
        y?: number;
        width? : number;
        height? : number;
        visible?: boolean;
        listening?: boolean;
        id?: string;
        name?: string;
        opacity?: Number;
        scale?: Vector2d;
        scaleX? : number;
        scaleY? : number;
        rotationDeg?: number;
        offset?: Vector2d;
        offsetX? : number;
        offsetY? : number;
        draggable?: boolean;
        dragBoundFunc?: Function;
    }

    interface SizeConfig {
        x? : number;
        y? : number;
        width? : number;
        height? : number;
    }

    interface ToDataURLConfig extends SizeConfig {
        callback : Function;
        mimeType? : string;
        quality? : number;
    }

    interface CacheConfig extends SizeConfig{
        showBorder? : boolean;
    }

    interface ClearConfig extends SizeConfig{
    }

    class Node<This> {
        constructor (config: NodeConfig);
        static create<T>(JSON: any, container?: HTMLElement) : T;

        blue() : number;
        blue(blue: number) : This;
        blurRadius() : number;
        blurRadius(radius: number) : This;
        cache(config?: CacheConfig) : This;
        clearCache() : This;
        clear(bounds?: ClearConfig) : This;
        clone(attrs? : NodeConfig): This;
        destroy() : void;

        dragBoundFunc() : Function;
        dragBoundFunc(dragBoundFunc: Function) : This;
        draggable() : boolean;
        draggable(draggable: boolean) : This;
        draw() : This;
        embossBlend() : boolean;
        embossBlend(embossBlend: boolean) : This;
        embossDirection() : string;
        embossDirection(embossDirection: string) : This;
        embossStrength() : number;
        embossStrength(level: number) : This;
        embossWhiteLevel() : number;
        embossWhiteLevel(embossWhiteLevel: number) : This;
        enhance() : number;
        enhance(enhance: number) : This;
        filters() : Filter[];
        filters(filters : Filter) : This;
        fire(eventType: string, evt?: any, bubble?: boolean) : This;
        getAbsoluteOpacity(): number;
        getAbsolutePosition(): Vector2d;
        getAbsoluteTransform(): Transform;
        getAbsoluteZIndex(): number;
        getAncestors() : Collection;
        getAttr(attr: string): any;
        getAttrs(): NodeConfig;
        // CHECK
        getCanvas() : Canvas;
        getClassName() : string;
        getContext() : Context;
        getDepth() : number;
        getHeight() : number;
        getHitCanvas() : Canvas;
        getLayer() : Layer;
        getParent() : Node<Node<any>>;
        // CHECK
        getSize() : {
            width : number;
            height : number;
        };
        getStage() : Stage;
        getTransform() : Transform;
        getType() : String;
        getWidth() : number;
        getZIndex(): number;
        green() : number;
        green(green: number) : This;
        height() : number;
        height(height: number) : This;
        hide(): void;
        hue() : number;
        hue(hue: number) : This;
        id() : number;
        id(id: number) : This;
        isDragging(): boolean;
        isListening(): boolean;
        isVisible(): boolean;
        kaleidoscopeAngle() : number;
        kaleidoscopeAngle(kaleidoscopeAngle: number) : This;
        kaleidoscopePower() : number;
        kaleidoscopePower(kaleidoscopePower: number) : This;
        levels() : number;
        levels(levels: number) : This;
        listening() : any;
        listening(listening: boolean) : This;
        listening(listening : string) : This;
        move(move : Vector2d) : This;
        moveDown() : boolean;
        moveTo(newContainer: Container<Container<any>>): This;
        moveToBottom(): boolean;
        moveToTop(): boolean;
        moveUp(): boolean;
        name() : string;
        name(name: string) : This;
        noise() : number;
        noise(noise: number) : This;
        off(evtStr : string) : This;
        offset() : Vector2d;
        offset(offset: Vector2d) : This;
        offsetX() : number;
        offsetX(offsetX: number) : This;
        offsetY() : number;
        offsetY(offsetY: number) : This;
        on(evtStr : string, handler: Function) : This;
        opacity() : number;
        opacity(opacity: number) : This;
        pixelSize() : number;
        pixelSize(pixelSize: number) : This;
        position() : Vector2d;
        position(position: Vector2d) : This;
        red() : number;
        red(red: number) : This;
        remove() : This;
        rotate(theta : number) : This;
        rotation() : number;
        rotation(rotation: number) : This;
        saturation() : number;
        saturation(saturation: number) : This;
        scale() : Vector2d;
        scale(scale: Vector2d) : This;
        scaleX() : number;
        scaleX(scaleX: number) : This;
        scaleY() : number;
        scaleY(scaleY: number) : This;
        setAbsolutePosition(pos : Vector2d) : This;
        setAttr(attr: string, val : any): This;
        setAttrs(attrs: NodeConfig) : void;
        setId(id: string) : This;
        setSize(size: any, width: number, height: number) : This;
        setZIndex(zIndex: number): void;
        shouldDrawHit() : boolean;
        show() : This;
        skew() : Vector2d;
        skew(skew: Vector2d) : This;
        skewX() : number;
        skewX(skewX: number) : This;
        skewY() : number;
        skewY(skewY: number) : This;
        startDrag() : void;
        stopDrag() : void;
        threshold() : number;
        threshold(threshold: number) : This;
        toDataURL(config: ToDataURLConfig) : string;
        toImage(config: ToDataURLConfig) : HTMLImageElement;
        toJSON() : string;
        toObject() : any;
        transformsEnabled() : string;
        transformsEnabled(transformsEnabled: string) : This;
        value() : number;
        value(value: number) : This;
        visible() : any;
        visible(visible: boolean) : This;
        visible(visible: string) : This;
        width() : number;
        width(width: number) : This;
        x() : number;
        x(x: number) : This;
        y() : number;
        y(y: number) : This;
    }

    interface ContainerConfig extends NodeConfig {
        clearBeforeDraw?: boolean;
        clipFunc?: Function;
    }

    class Container<This> extends Node <This> {
        constructor(params?: ContainerConfig);
        add(child : Node<Node<any>>): This;
        getChildren() : Collection;
        clip(): SizeConfig;
        clip(clip: SizeConfig) : This;
        clipHeight(): number;
        clipHeight(clipHeight: number) : This;
        clipWidth(): number;
        clipWidth(clipWidth: number) : This;
        clipX(): number;
        clipX(clipX: number) : This;
        clipY(): number;
        clipY(clipY: number) : This;
        destroyChildren() : void;
        find(selector? : string): Collection;
        getAllIntersections(pos: Vector2d): Node<Node<any>>[];
        hasChildren() : boolean;
        removeChildren() : void;
    }

    interface ShapeConfig extends NodeConfig {
        fill?: string;
        fillRed?: number;
        fillGreen?: number;
        fillBlue?: number;
        fillPatternImage?: HTMLImageElement;
        fillPatternX?: number;
        fillPatternY?: number;
        fillPatternOffset?: Vector2d;
        fillPatternOffsetX?: number;
        fillPatternOffsetY?: number;
        fillPatternScale?: Vector2d;
        fillPatternScaleX?: number;
        fillPatternScaleY?: number;
        fillPatternRotation?: number;
        fillPatternRepeat?: string;
        fillLinearGradientStartPoint?: Vector2d;
        fillLinearGradientStartPointX?: number;
        fillLinearGradientStartPointY?: number;
        fillLinearGradientEndPoint? : Vector2d;
        fillLinearGradientEndPointX?: number;
        fillLinearGradientEndPointY?: number;
        fillLinearGradientColorStops?: string[];
        fillLinearRadialStartPoint?: Vector2d;
        fillLinearRadialStartPointX?: number;
        fillLinearRadialStartPointY?: number;
        fillLinearRadialEndPoint? : Vector2d;
        fillLinearRadialEndPointX?: number;
        fillLinearRadialEndPointY?: number;
        fillRadialGradientStartRadius?: number;
        fillRadialGradientEndRadius?: number;
        fillRadialGradientColorStops?: string[];
        fillEnabled?: boolean;
        fillPriority?: string;
        stroke?: string;
        strokeRed?: number;
        strokeGreen?: number;
        strokeBlue?: number;
        strokeWidth?: number;
        strokeScaleEnabled?: boolean;
        strokeEnabled?: boolean;
        lineJoin?: string;
        lineCap?: string;
        shadowColor?: string;
        shadowColorRed?: number;
        shadowColorGreen?: number;
        shadowColorBlue?: number;
        shadowBlur?: number;
        shadowOffset? : Vector2d;
        shadowOffsetX? : number;
        shadowOffsetY? : number;
        shadowOpacity?: number;
        shadowEnabled?: boolean;
        dash?: number[];
        dashEnabled?: boolean;
    }

    class Shape<This> extends Node <This> {
        constructor(ShapeConfig : ShapeConfig);
        dash() : number[];
        dash(dash: number[]): This;
        dashEnabled() : boolean;
        dashEnabled(dashEnabled: boolean): This;
        drawHitFromCache(alphaThreshold: number): This;
        fill() : string;
        fill(fill: string): This;
        fillBlue() : number;
        fillBlue(fillBlue: number): This;
        fillEnabled() : boolean;
        fillEnabled(fillEnabled: boolean): This;
        fillGreen() : number;
        fillGreen(fillGreen: number): This;
        fillLinearGradientColorStops() : string[];
        fillLinearGradientColorStops(colors: string[]): This;
        fillLinearGradientStartPoint(): Vector2d;
        fillLinearGradientStartPoint(point: Vector2d): Vector2d;
        fillLinearGradientStartPointX(): number;
        fillLinearGradientStartPointX(x: number): This;
        fillLinearGradientStartPointY(): number;
        fillLinearGradientStartPointY(y: number): This;
        fillLinearGradientEndPoint() : Vector2d;
        fillLinearGradientEndPoint(point: Vector2d) : This;
        fillLinearGradientEndPointX(): number;
        fillLinearGradientEndPointX(x: number): This;
        fillLinearGradientEndPointY(): number;
        fillLinearGradientEndPointY(y: number): This;
        fillLinearRadialStartPoint(): Vector2d;
        fillLinearRadialStartPoint(point: Vector2d): This;
        fillLinearRadialStartPointX(): number;
        fillLinearRadialStartPointX(x: number): This;
        fillLinearRadialStartPointY(): number;
        fillLinearRadialStartPointY(y: number): This;
        fillLinearRadialEndPoint() : Vector2d;
        fillLinearRadialEndPoint(point: Vector2d) : Vector2d;
        fillLinearRadialEndPointX(): number;
        fillLinearRadialEndPointX(x: number): This;
        fillLinearRadialEndPointY(): number;
        fillLinearRadialEndPointY(y: number): This;
        fillPatternImage(): HTMLImageElement;
        fillPatternImage(image: HTMLImageElement): This;
        fillRadialGradientStartRadius(): number;
        fillRadialGradientStartRadius(radius: number): This;
        fillRadialGradientEndRadius(): number;
        fillRadialGradientEndRadius(radius: number): This;
        fillRadialGradientColorStops(): string[];
        fillRadialGradientColorStops(color: string[]): This;
        fillPatternOffset(): Vector2d;
        fillPatternOffset(offset: Vector2d) : This;
        fillPatternOffsetX(): number;
        fillPatternOffsetX(x: number): This;
        fillPatternOffsetY(): number;
        fillPatternOffsetY(y: number): This;
        fillPatternRepeat() : string;
        fillPatternRepeat(repeat: string): This;
        fillPatternRotation(): number;
        fillPatternRotation(rotation: number): This;
        fillPatternScale(): Vector2d;
        fillPatternScale(scale: Vector2d) : This;
        fillPatternScaleX(): number;
        fillPatternScaleX(x: number): This;
        fillPatternScaleY(): number;
        fillPatternScaleY(y: number): This;
        fillPatternX(): number;
        fillPatternX(x: number): number;
        fillPatternY(): number;        
        fillPatternY(y: number): This;
        fillPriority(): string;
        fillPriority(priority: string): This;
        fillRed() : number;
        fillRed(fillRed: number): This;
        hasFill(): boolean;
        hasShadow(): boolean;
        hasStroke(): boolean;
        hitFunc(): Function;
        hitFunc(func: Function): This;
        intersects(point: Vector2d): boolean;
        lineCap() : string;
        lineCap(lineCap: string): This;
        lineJoin() : string;
        lineJoin(lineJoin: string): This;
        sceneFunc(): Function;
        sceneFunc(func: Function): This;
        shadowBlue() : number;
        shadowBlue(shadowBlue: number): This;
        shadowColor() : string;
        shadowColor(shadowColor: string): This;
        shadowEnabled() : boolean;
        shadowEnabled(shadowEnabled: boolean): This;
        shadowGreen() : number;
        shadowGreen(shadowGreen: number): This;
        shadowOffset() : Vector2d;
        shadowOffset(shadowOffset: Vector2d): This;
        shadowOffsetX() : number;
        shadowOffsetX(shadowOffsetX: number): This;
        shadowOffsetY() : number;
        shadowOffsetY(shadowOffsetY: number): This;
        shadowOpacity() : number;
        shadowOpacity(shadowOpacity: number): This;
        shadowRed() : number;
        shadowRed(shadowRed: number): This;
        stroke() : string;
        stroke(stroke: string): This;
        strokeBlue() : number;
        strokeBlue(strokeBlue: number): This;
        strokeRed() : number;
        strokeRed(strokeRed: number): This;
        strokeGreen() : number;
        strokeGreen(strokeGreen: number): This;
        strokeEnabled() : boolean;
        strokeEnabled(strokeEnabled: boolean): This;
        strokeScaleEnabled() : boolean;
        strokeScaleEnabled(strokeScaleEnabled: boolean): This;
        strokeWidth() : number;
        strokeWidth(strokeWidth: number): This;
    }

    interface StageConfig extends ContainerConfig {
        container: any;
    }

    class Stage extends Container<Stage> {
        constructor(StageConfig : StageConfig);
        add(layer: Layer): Stage;
        batchDraw(): void;
        container(): HTMLElement;
        destroy() : void;
        drawHit(): void;
        getIntersection(pos: Vector2d) : Shape<Shape<any>>;
        getLayers(): Layer[];
        getPointerPosition(): Vector2d;
        setContainer(con: HTMLElement): void;
        setHeight(height: number) : void;
        setWidth(width: number) : void;
    }

    interface LayerConfig extends ContainerConfig {
        clearBeforeDraw?: boolean;
    }

    class Layer extends Container<Layer> {
        constructor (config?: LayerConfig);
        getIntersection(pos: Vector2d): Shape<Shape<any>>;
        enableHitGraph(): Layer;
        disableHitGraph(): Layer;
        clearBeforeDraw() : boolean;
        clearBeforeDraw(val: boolean): Layer;
        hitGraphEnabled(): boolean;
        hitGraphEnabled(val: boolean): Layer;
        batchDraw(): void;
        drawScene() : void;
    }

    class Group extends Container<Group> {

    }

    interface CanvasConfig {
        width: number;
        height: number;
        pixelRatio: number;
    }

    class Canvas {
        constructor(CanvasConfig : CanvasConfig);
        getContext(): CanvasRenderingContext2D;
        getHeight(): number;
        getWidth(): number;
        getPixelRation(): number;
        setHeight(val: number) : void;
        setWidth(val: number) : void ;
        setPixelRation(val: number) : void;
        setSize(size: {width:number; height: number}) : void;
        toDataURL(mimeType: string, quality: number) : string;
        public _canvas : HTMLElement;
    }

    class Context {
        clear(bounds?: ClearConfig) : Context;
        clearTrace(): void;
        fillShape(shape: Shape<any>): void;
        fillStrokeShape(shape: Shape<any>): void;
        getCanvas() : Kinetic.Canvas;
        getTrace(relaxed: boolean): string;
        reset(): void;
        moveTo(x : number, y : number) : void;
        lineTo(x : number, y : number) : void;
        beginPath() : void;
        setAttr(attr : string, value : any) : void;
        closePath() : void;
        strokeShape(shape: Shape<any>): void;
    }

    class Tween {
        constructor(params: any);
        destroy(): void;
        finish(): Tween;
        pause(): Tween;
        play(): Tween;
        reset(): Tween;
        reverse(): Tween;
        seek(t: number): Tween;
    }

    // Shapes

    interface RingConfig extends ShapeConfig {
        innerRadius: number;
        outerRadius: number;
        clockwise?: boolean;
    }

    class Ring extends Shape<Ring> {
        constructor(RingConfig : RingConfig);
        angle(): number;
        angle(angle: number): Ring;
        innerRadius(): number;
        innerRadius(innerRadius: number): Ring;
        outerRadius(): number;
        outerRadius(outerRadius: number): Ring;
    }

    interface ArcConfig extends RingConfig {
        angle: number;
    }

    class Arc extends Shape<Ring> {
        constructor(ArcConfig : ArcConfig);
        clockwise(): boolean;
        clockwise(clockwise: boolean): Ring;
    }

    interface CircleConfig extends ShapeConfig {
        radius: number;
    }

    class Circle extends Shape<Circle> {
        constructor(CircleConfig : CircleConfig);
        radius(): number;
        radius(radius: number): Circle;
    }

    interface EllipseConfig extends ShapeConfig {
        radius: any;
    }

    class Ellipse extends Shape<Ellipse> {
        constructor(EllipseConfig : EllipseConfig);
        radius(): any;
        radius(radius: any): Ellipse;
        radiusX(): number;
        radiusX(radiusX: number): Ellipse;
        radiusY(): number;
        radiusY(radiusY: number): Ellipse;
    }

    interface ImageConfig extends ShapeConfig {
        image: HTMLImageElement;
        crop?: SizeConfig;
    }

    class Image extends Shape<Image> {
        constructor(ImageConfig : ImageConfig);
        image(): HTMLImageElement;
        image(image: HTMLImageElement): Image;
        crop(): SizeConfig;
        crop(crop: SizeConfig): Image;
        cropX(): number;
        cropX(cropX: number): Image;
        cropY(): number;
        cropY(cropY: number): Image;
        cropWidth(): number;
        cropWidth(cropWidth: number): Image;
        cropHeight(): number;
        cropHeight(cropHeight: number): Image;
    }

    interface LineConfig extends ShapeConfig {
        points: number[];
        tension?: number;
        closed?: boolean;
    }

    class Line extends Shape<Line> {
        constructor(LineConfig : LineConfig);
        closed(): boolean;
        closed(closed: boolean): Line;
        tension(): number;
        tension(tension: number): Line;
        points(): number[];
        points(points: number[]): Line;
    }

    interface RectConfig extends ShapeConfig {
        cornerRadius?: number;
    }

    class Rect extends Shape<Rect> {
        constructor(RectConfig : RectConfig);
        cornerRadius(): number;
        cornerRadius(cornerRadius: number): Rect;
    }

    interface SpriteConfig extends ShapeConfig {
        animation: string;
        animations: any;
        frameIndex?: number;
        image: HTMLImageElement;
    }

    class Sprite extends Shape<Sprite> {
        constructor(SpriteConfig : SpriteConfig);
        start(): void;
        stop(): void;
        animation(): string;
        animation(val: string): Sprite;
        animations(): any;
        animations(val: any): Sprite;
        frameIndex(): number;
        frameIndex(val: number): Sprite;
        image(): HTMLImageElement;
        image(image: HTMLImageElement): Sprite;
        frameRate(): number;
        frameRate(frameRate: number): Sprite;
    }

    interface TextConfig extends ShapeConfig {
        text: string;
        fontFamily?: string;
        fontSize?: number;
        fontStyle?: string;
        align?: string;
        padding?: number;
        lineHeight?: number;
        wrap?: string;
    }

    class Text extends Shape<Text> {
        constructor(TextConfig : TextConfig);
        getTextWidth(): number;
        getTextHeight(): number;
        text(): string;
        text(text: string): Text;
        fontFamily(): string;
        fontFamily(fontFamily: string): Text;
        fontSize(): number;
        fontSize(fontSize: number): Text;
        fontStyle(): string;
        fontStyle(fontStyle: string): Text;
        align(): string;
        align(align: string): Text;
        padding(): number;
        padding(padding: number): Text;
        lineHeight(): number;
        lineHeight(lineHeight: number): Text;
        wrap(): string;
        wrap(wrap: string): Text;
    }

    interface WedgeConfig extends ShapeConfig {
        angle: number;
        radius: number;
        clockwise?: boolean;
    }

    class Wedge extends Shape<Wedge> {
        constructor(WedgeConfig : WedgeConfig);
        angle(): number;
        angle(angle: number): Wedge;
        radius(): number;
        radius(radius: number): Wedge;
        clockwise(): boolean;
        clockwise(clockwise: boolean): Wedge;
    }

    // Plugins
    interface TagConfig extends ShapeConfig {
        pointerDirection?: string;
        pointerWidth?: number;
        pointerHeight?: number;
        cornerRadius?:number;
    }

    class Tag extends Shape<Tag> {
        constructor(config : TagConfig);
        pointerDirection(): string;
        pointerDirection(pointerDirection: string): Tag;
        pointerWidth(): number;
        pointerWidth(pointerWidth: number): Tag;
        pointerHeight(): number;
        pointerHeight(pointerHeight: number): Tag;
        cornerRadius(): number;
        cornerRadius(cornerRadius: number): Tag;
    }


    interface LabelInterface extends ContainerConfig {
    }

    class Label extends Group {
        constructor(LabelInterface : LabelInterface);
        getText(): Text;
        getTag(): Rect;
    }

    interface PathConfig extends ShapeConfig {
        data: string;
    }

    class Path extends Shape<Path> {
        constructor(PathConfig : PathConfig);
        data(): string;
        data(data: string): Path;
    }

    interface RegularPolygonConfig extends ShapeConfig {
        sides: number;
        radius: number;
    }

    class RegularPolygon extends Shape<RegularPolygon> {
        constructor(RegularPolygonConfig : RegularPolygonConfig);
        sides(): number;
        sides(sides: number): RegularPolygon;
        radius(): number;
        radius(radius: number): RegularPolygon;
    }

    interface StarConfig extends ShapeConfig {
        numPoints: number;
        innerRadius: number;
        outerRadius: number;
    }

    class Star extends Shape<Star> {
        constructor(StarConfig : StarConfig);
        numPoints(): number;
        numPoints(numPoints: number): Star;
        innerRadius(): number;
        innerRadius(innerRadius: number): Star;
        outerRadius(): number;
        outerRadius(outerRadius: number): Star;
    }

    interface TextPathConfig extends ShapeConfig {
        text: string;
        data: string;
        fontFamily?: string;
        fontSize?: number;
        fontStyle?: string;
    }

    class TextPath extends Shape<TextPath> {
        constructor(TextPathConfig : TextPathConfig);
        getTextWidth(): number;
        getTextHeight(): number;
        setText(text: string): void;
        text(): string;
        text(text: string): Path;
        fontFamily(): string;
        fontFamily(fontFamily: string): Path;
        fontSize(): number;
        fontSize(fontSize: number): Path;
        fontStyle(): string;
        fontStyle(fontStyle: string): Path;
    }


    class Collection {
        [i : number] : any;
        static toCollection(arr: any[]): Collection;
        each(f: Function): void;
        toArray() : any[];
        length: number;
    }

    class Transform {
        getMatrix(): any[];
        getTranslation() : Vector2d;
        invert() : void;
        multiply(matrix: any[]) : void;
        rotate(deg: number) : void;
        scale(x: number, y: Number) : void;
        setAbsolutePosition() : void;
        skew(x: number, y: Number) : void;
        translate(x: number, y: Number) : void;
    }


    interface Vector2d {
        x: number;
        y: number;
    }
    
}

declare module "kinetic" {
    export = Kinetic;
}
