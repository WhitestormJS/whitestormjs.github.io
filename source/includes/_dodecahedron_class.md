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

<div id="dodecahedron_ex" class="example output">
    <div class="splash" onclick="Dodecahedron_example.start()">
        <img src="images/play.png" width="30" height="30">
    </div>
    <div class="actions">
        <i class="fa fa-pause"></i>
        <i class="fa fa-repeat" onclick="reset_mesh(dodecahedron);  dodecahedron._pos.set(0, 100, 0);"></i>
    </div>
</div>

`WHS.Dodecahedron` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

`WHS.Dodecahedron` creates Dodecahedron object by it's `radius` and `detail`.

Parameter         |       Default        | Type      | 
----------------- | -------------------- | --------- | 
**radius**        | 1                    | `Number`  |
**detail**        | 1                    | `Number`  | 

<script src="https://gist.github.com/sasha240100/6c36848a37c9d8833ace.js"></script>