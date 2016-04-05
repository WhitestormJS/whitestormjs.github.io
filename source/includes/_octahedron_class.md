<h2 class="ws" id="octahedron">Octahedron [Class]</h2>

> WHS.Icosahedron example: 

```javascript

var octahedron = GAME.Octahedron({
    geometry: {
        radius: 2,
        detail: 1
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

<div id="octahedron_ex" class="example output">
    <div class="splash" onclick="Octahedron_example.start()">
        <img src="images/play.png" width="30" height="30">
    </div>
</div>

`WHS.Octahedron` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

`WHS.Octahedron` creates Octahedron object by it's `radius` and `detail`.

Parameter         |       Default        | Type      | 
----------------- | -------------------- | --------- | 
**radius**        | 1                    | `Number`  |
**detail**        | 1                    | `Number`  | 

<script src="https://gist.github.com/sasha240100/2e4fd99eed06e9c5bd05.js"></script>