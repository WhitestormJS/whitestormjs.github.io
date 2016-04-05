<h2 class="ws" id="lathe">Lathe [Class]</h2>

> WHS.Lathe example:

```javascript

var points = [];
for ( var i = 0; i < 10; i ++ ) {
    points.push( 
        new THREE.Vector2( 
            (Math.sin( i * 0.7 ) * 15 + 50)/10, 
            ( i - 5 ) * 0.2 
        ) 
    );

}

var lathe = GAME.Lathe({
    geometry: {
        points: points
    },

    mass: 10,

    material: {
        color: 0xffffff,
        kind: "lambert",
        side: THREE.DoubleSide
    },

    pos: {
        x: 0,
        y: 50,
        z: 10
    }
});

```

<div id="lathe_ex" class="example output">
    <div class="splash" onclick="Lathe_example.start()">
        <img src="images/play.png" width="30" height="30">
    </div>
</div>

`WHS.Lathe` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

`WHS.Lathe` is a class for generating meshes with axial symmetry. Possible uses include donuts, pipes, vases etc. The lathe rotate around the Y axis.

It is similar to `THREE.LatheGeometry`, but it also contain's all properties, applied by `WHS.Shape`, such as material, mass and vectors like position (pos) and rotation (rot).

Parameter      |       Default        | Type               | Description |
-------------- | -------------------- | ------------------ | ----------- |
**points**     | []                   | `Array`            | TODO.
**segments**   | {}                   | `Object`           | TODO.
**phiStart**   | {}                   | `Object`           | TODO.
**phiLength**  | {}                   | `Object`           | TODO.

Then it creates an `Three.js geometry`:

<script src="https://gist.github.com/sasha240100/06c3b07fc14e4d1a828d.js"></script>

Right example will create the following shape: 

<img src="images/shapes/lathe.png">
