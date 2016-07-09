<h2 class="ws" id="icosahedron">Icosahedron [Class]</h2>

> WHS.Icosahedron example: 

```javascript

var icosahedron = GAME.Icosahedron({
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


`WHS.Icosahedron` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

In geometry, an **icosahedron** is a polyhedron with 20 faces.
There are many kinds of icosahedra, with some being more symmetrical than others. The most well known is the Platonic, convex regular icosahedron. 

<img src="images/shapes/icosahedron.gif" alt="rendered icosahedron">


`WHS.Icosahedron` creates Icosahedron object by it's `radius` and `detail`.

Parameter         |       Default        | Type      | 
----------------- | -------------------- | --------- | 
**radius**        | 1                    | `Number`  |
**detail**        | 1                    | `Number`  | 

<script src="https://gist.github.com/sasha240100/9411184563af222a098b.js"></script>