# Shapes

<h2 class="ws" id="cube">Cube [Class]</h2>

> Basic cube, created with WHS.Cube property.

```javascript

var cube = GAME.Cube({

    geometry: { // Fill cube geometry here.
        width: 2,
        height: 2,
        depth: 2
    },

    mass: 1,

    material: {
        kind: "basic",
        color: 0xffffff
    },

    pos: {
        x: 50,
        y: 70,
        z: 60
    }

);

```


<div id="cube_ex" class="example output">
    <div class="splash" onclick="Cube_example.start()">
        <img src="images/play.png" width="30" height="30">
    </div>
    <div class="actions">
        <i class="fa fa-pause"></i>
        <i class="fa fa-repeat" onclick="cube.mesh.__dirtyPosition = true; cube._pos.set(0, 100, 0);"></i>
    </div>
</div>

`WHS.Cube` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

`WHS.Cube` class is used to create box objects of different size.

It is similar to `THREE.BoxGeometry`, but it also contain's all properties, applied by `WHS.Shape`, such as material, mass and vectors like position (pos) and rotation (rot).

Here are parameters of geometry object, that you need to fill:

Parameter      |       Default        | Type      | Description |
-------------- | -------------------- | --------- | ----------- |
**width**      | 1                    | `Number`  | Geometry width.
**height**     | 1                    | `Number`  | Geometry height.
**depth**      | 1                    | `Number`  | Geometry depth.

Then it creates an `Three.js geometry`:

<script src="https://gist.github.com/sasha240100/7084bd4d0a271be6adfe.js"></script>

And a `Physijs mesh`, that is similar to `Three.js mesh`, but it also participates in collision calculations. This mesh is a combination of `Three.js geometry` and `Physijs material` (The same as in three.js, but with friction and restitution).


