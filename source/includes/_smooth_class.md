<h2 class="ws" id="smooth">Smooth [Class]</h2>

> WHS.Smooth example:

```javascript

GAME.ground = GAME.Smooth({
        
    geometry: {
        width: 250,
        height: 250
    },

    material: {
        color: 0xff0000,
        kind: "phong"
    },

    pos: {
        x: 0,
        y: 0,
        z: 0
    }
});

```

`WHS.Smooth` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

`WHS.Smooth` is like a `WHS.Plane`, but it creates infinite plane (in physics). That's why we call it "Smooth plane".

Parameter      |       Default        | Type      | Description |
-------------- | -------------------- | --------- | ----------- |
**width**      | 10                   | `Number`  | Width of visible plane.
**width**      | 10                   | `Number`  | Height of visible plane.

<script src="https://gist.github.com/sasha240100/c7579930352c9943a11f.js"></script>