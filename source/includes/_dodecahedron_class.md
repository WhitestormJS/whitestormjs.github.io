<h2 class="ws" id="dodecahedron">Dodecahedron [Class]</h2>

> WHS.Dodecahedron example: 

```javascript

var dodecahedron = GAME.Dodecahedron({
    geometry: {
        radius: 2
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


`WHS.Dodecahedron` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

In geometry, a **dodecahedron** is any *polyhedron with twelve flat faces*. The most familiar dodecahedron is the regular dodecahedron, which is a Platonic solid. There are also three regular star dodecahedra, which are constructed as stellations of the convex form. All of these have icosahedral symmetry, order 120.

<img src="images/shapes/dodecahedron.gif" alt="rendered dodecahedron">

`WHS.Dodecahedron` creates Dodecahedron object by it's `radius` and `detail`.

Parameter         |       Default        | Type      | 
----------------- | -------------------- | --------- | 
**radius**        | 1                    | `Number`  |
**detail**        | 1                    | `Number`  | 

<script src="https://gist.github.com/sasha240100/6c36848a37c9d8833ace.js"></script>