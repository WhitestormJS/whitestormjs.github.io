<h2 class="ws" id="torus">Torus [Class]</h2>

> WHS.Torus example:

```javascript

var torus = GAME.Torus({

    geometry: {
        radius: 5,
        tube: 2
    },

    mass: 10,

    material: {
        color: 0xffffff,
        kind: "lambert",
        side: THREE.DoubleSide
    },

    pos: {
        x: 0,
        y: 35,
        z: 0
    }

```

<div id="torus_ex" class="example output">
    <div class="splash" onclick="Torus_example.start()">
        <img src="images/play.png" width="30" height="30">
    </div>
    <div class="actions">
        <i class="fa fa-pause"></i>
        <i class="fa fa-repeat" onclick="reset_mesh(torus);  torus.position.set(0, 100, 0);"></i>
    </div>
</div>

`WHS.Torus` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

`WHS.Torus` class makes a torus figure. Torus is a donut. Donut is a torus.

Parameter          |       Default        | Type      | Description |
------------------ | -------------------- | --------- | ----------- |
**radius**         | 100                  | `Number`  | Torus radius.
**tube**           | 40                   | `Number`  | Torus tube radius.
**radialSegments** | 8                    | `Number`  | Radial segments.
**tubularSegments**| 6                    | `Number`  | Tubular segments.
**arc**            | 2                    | `Number`  | TODO

<script src="https://gist.github.com/sasha240100/c320e12f7e594c48fb8e.js"></script>

<img src="images/shapes/torus.png">