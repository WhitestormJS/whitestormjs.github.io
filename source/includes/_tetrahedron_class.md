<h2 class="ws" id="tetrahedron">Tetrahedron [Class]</h2>

> WHS.Tetrahedron example: 

```javascript

var tetrahedron = GAME.Tetrahedron({
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

<div id="tetrahedron_ex" class="example output">
    <div class="splash" onclick="Tetrahedron_example.start()">
        <img src="images/play.png" width="30" height="30">
    </div>
    <div class="actions">
        <i class="fa fa-pause"></i>
        <i class="fa fa-repeat" onclick="reset_mesh(tetrahedron);  tetrahedron.position.set(0, 100, 0);"></i>
    </div>
</div>

`WHS.Tetrahedron` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

In geometry, a **tetrahedron** is *a polyhedron composed of four triangular faces, six straight edges, and four vertex corners*. The tetrahedron is the simplest of all the ordinary convex polyhedra and the only one that has fewer than 5 faces.

<img src="images/shapes/tetrahedron.gif">

`WHS.Tetrahedron` creates Tetrahedron object by it's `radius` and `detail`.

Parameter         |       Default        | Type      | 
----------------- | -------------------- | --------- | 
**radius**        | 1                    | `Number`  |
**detail**        | 1                    | `Number`  | 

<script src="https://gist.github.com/sasha240100/769a64629d8180f38a17.js"></script>