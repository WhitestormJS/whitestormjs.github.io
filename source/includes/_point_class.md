<h2 class="wsl" id="point">PointLight [Class]</h2>

> red WHS.PointLight:

```javascript

var pointlight = GAME.PointLight( {
    light: {
        color: 0xff0000, // Red.
        intensity: 3,
        distance: 1000
    },

    pos: {
    	x: 10,
    	y: 20,
    	z: 10
    },

    target: {
    	x: 0,
    	y: 0,
    	z: 0
    }
} );

```

> This light will fall down from vec3(10, 20, 10) to vec3(0, 0, 0)


`WHS.PointLight` is a simple class, it extends `WHS.Light` and inherits all it's methods.

`WHS.PointLight` creates a light at a specific position in the scene. The light shines in all directions (roughly similar to a light bulb.)

It has the same options as `WHS.AmbientLight` in `light` paramater, but it also supports `pos` and `target` paramaters.

Parameter      |       Default        | Type      | Description |
-------------- | -------------------- | --------- | ----------- |
**color**      | 0xffffff             | `Color`   | Light color.
**intensity**  | 1                    | `Number`  | Light intensity.
**distance**   | 100                  | `Number`  | Light distance.
**angle**      | Math.PI/3            | `Number`  | Angle.

<aside class="notice"><code>WHS.PointLight</code> affects meshes with <code>lambert</code> and <code>phong</code> material.</aside>