<h2 class="ws" id="sphere">Sphere [Class]</h2>

> WHS.Sphere that creates object with sphere geometry.

```javascript

var sphere = GAME.Sphere( {

    geometry: {
        radius: 2
    },

    mass: 10,

    material: {
        color: 0xffffff,
        kind: "lambert",
        rest: 0,
        fri: 1
    },

    pos: {
        x: 0,
        y: 100,
        z: 0
    }

} );

```

`WHS.Sphere` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

`WHS.Sphere` class is used to create sphere objects by it's `radius` property and other values that determinates it's detality.

It is similar to `THREE.SphereGeometry`, but it also contain's all properties, applied by `WHS.Shape`, such as material, mass and vectors like position (pos) and rotation (rot).

You need to fill these parameters:

Parameter         |       Default        | Type      | Description |
----------------- | -------------------- | --------- | ----------- |
**radius**        | 1                    | `Number`  | Sphere radius.
**widthSegments** | 8                    | `Number`  | Sphere radius.
**heightSegments**| 6                    | `Number`  | Sphere radius.
**phiStart**      | Math.PI*2            | `Number`  | Sphere radius.
**phiLength**     | 1                    | `Number`  | Sphere radius.
**thetaStart**    | 1                    | `Number`  | Sphere radius.
**thetaLength**   | 1                    | `Number`  | Sphere radius.

Then it creates an `Three.js geometry`:

<script src="https://gist.github.com/sasha240100/df4a83ceb3625ffdb44d.js"></script>

And a `Physijs mesh`, that is similar to `Three.js mesh`, but it also participates in collision calculations. This mesh is a combination of `Three.js geometry` and `Physijs material` (The same as in three.js, but with friction and restitution).

<aside class="warning">Need to be rewritten [TODO]</aside>
