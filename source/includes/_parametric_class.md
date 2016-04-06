<h2 class="ws" id="parametric">Parametric [Class]</h2>

> WHS.Parametric example: 

```javascript

function createParametric( u, v ) {
    return new THREE.Vector3( u * 30, Math.random() * 5, v * 30);
}

var parametric = GAME.Parametric({
    geometry: {
        func: createParametric
    },

    mass: 10,

    material: {
        color: 0xffffff,
        kind: "lambert",
        side: THREE.DoubleSide
    },

    pos: {
        x: 0,
        y: 100,
        z: -10
    }
});

```

<div id="parametric_ex" class="example output">
    <div class="splash" onclick="Parametric_example.start()">
        <img src="images/play.png" width="30" height="30">
    </div>
    <div class="actions">
        <i class="fa fa-pause"></i>
        <i class="fa fa-repeat" onclick="parametric.mesh.__dirtyPosition = true; parametric._pos.set(0, 100, 0);"></i>
    </div>
</div>

`WHS.Parametric` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

`WHS.Parametric` class is used for creating objects representing a parametric surface.

Parameter      |       Default        | Type      | Description |
-------------- | -------------------- | --------- | ----------- |
**func**       | functon() {}         | `Function`| Function for generating surface.
**slices**     | 10                   | `Number`  | The count of slices.
**stacks**     | 10                   | `Number`  | The count of stacks.

<script src="https://gist.github.com/sasha240100/9d4741da789ecbc02557.js"></script>

Example will create heightfield-like geometry. `u` and `v` are like `x` and `y` in shape, but their values are always from `0` to `1`.
We use them in `THREE.Vector3` like `x` and `z` and `Math.random()` for `y`.

<img src="images/shapes/parametric.png">