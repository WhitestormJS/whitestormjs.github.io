<h2 class="ws" id="extrude">Extrude [Class]</h2>

> WHS.Extrude example:

```javascript

var shape = new THREE.Shape([
    new THREE.Vector2( -4,-4 ),
    new THREE.Vector2( -2,0  ),
    new THREE.Vector2( -4,4  ),
    new THREE.Vector2(  0,2  ),
    new THREE.Vector2(  4,4  ),
    new THREE.Vector2(  2,0  ),
    new THREE.Vector2(  4,-4 ),
    new THREE.Vector2(  0,-2 )
]);

var extrude = GAME.Extrude({
    geometry: {
        shapes: shape,
        options: {
            bevelEnabled: false,
            bevelSize: 0,
            amount: 2
        } 
    },

    mass: 10,

    material: {
        color: 0xffffff,
        kind: "basic"
    },

    pos: {
        x: 0,
        y: 100,
        z: 0
    }
});

```

<div id="extrude_ex" class="example output">
    <div class="splash" onclick="Extrude_example.start()">
        <img src="images/play.png" width="30" height="30">
    </div>
</div>

`WHS.Extrude` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

`WHS.Extrude` class creates extruded geometry from a path shape. You need to make a 2D shape based on `THREE.Shape` and `THREE.Vector3` and import it `shapes` parameter. After that it will be turned in 3D shape.

It is similar to `THREE.ExtrudeGeometry`, but it also contain's all properties, applied by `WHS.Shape`, such as material, mass and vectors like position (pos) and rotation (rot).

Parameter      |       Default        | Type               | Description |
-------------- | -------------------- | ------------------ | ----------- |
**shapes**     | []                   | `Array` or `Object`| Array of shapes or a shape.
**options**    | {}                   | `Object`           | Object with parameters.

Then it creates an `Three.js geometry`:

<script src="https://gist.github.com/sasha240100/0d6e84001eb02faa07a3.js"></script>

And a `Physijs mesh`, that is similar to `Three.js mesh`, but it also participates in collision calculations. This mesh is a combination of `Three.js geometry` and `Physijs material` (The same as in three.js, but with friction and restitution).

<img src="images/shapes/extrude.png">


