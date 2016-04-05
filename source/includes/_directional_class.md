<h2 class="wsl" id="directional">DirectinalLight [Class]</h2>

> WHS.DirectinalLight:

```javascript

var directionallight = GAME.DirectinalLight( {
    light: {
        color: 0xffffff,
        intensity: 0.2
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


`WHS.DirectinalLight` is a simple class, it extends `WHS.Light` and inherits all it's methods.

`WHS.DirectinalLight` creates a light that shines from a specific direction not from a specific position. 

This light will behave as though it is infinitely far away and the rays produced from it are all parallel. 

The best analogy would be a light source that acts like the sun: the sun is so far away that all sunlight hitting objects comes from the same angle.

It has the same options as `WHS.AmbientLight` in `light` paramater, but it also supports `pos` and `target` paramaters.

Parameter      |       Default        | Type      | Description |
-------------- | -------------------- | --------- | ----------- |
**color**      | 0xffffff             | `Color`   | Light color.
**intensity**  | 1                    | `Number`  | Light intensity.

<aside class="notice"><code>DirectinalLight</code> affects only meshes with <code>lambert</code> and <code>phong</code> material.</aside>