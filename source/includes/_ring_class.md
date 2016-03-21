<h2 class="ws" id="ring">Ring [Class]</h2>

> WHS.Ring example:

```javascript


var ring = GAME.Ring({

    geometry: {
        innerRadius: 5,
        outerRadius: 2
    },

    mass: 0,

    material: {
        color: 0xffffff,
        kind: "basic",
        side: THREE.DoubleSide
    },

    pos: {
        x: 0,
        y: 8,
        z: 0
    },

    rot: {
        x: Math.PI/4
    }

});

```

`WHS.Ring` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

`WHS.Ring` class makes a circle or just 2D `WHS.Torus` that doesn't support physics.

Parameter      |       Default        | Type      | Description |
-------------- | -------------------- | --------- | ----------- |
**func**       | functon() {}         | `Function`| Function for generating surface.
**slices**     | 10                   | `Number`  | The count of slices.
**stacks**     | 10                   | `Number`  | The count of stacks.

<script src="https://gist.github.com/sasha240100/9d4741da789ecbc02557.js"></script>

<aside class="notice">
<code>WHS.Ring</code> doesn't support physics, so if you want to make it with physics - you can use <code>WHS.Torus</code> and scale it <code>x</code> 1/(your torus outerRadius - innerRadius), so it's width will be 1 and then multiply by value near 0 to make it very thin.
</aside>

<img src="images/shapes/ring.png">

<aside class="warning">Need to be fixed. In progress.</aside>