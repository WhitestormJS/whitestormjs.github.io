<h2 class="wsl" id="hemisphere">HemisphereLight [Class]</h2>

> WHS.HemisphereLight:

```javascript

var ambient = GAME.HemisphereLight( {
    light: {
        skyColor: 0xffffff,
        groundColor: 0xffffff,
        intensity: 0.2
    }
} );

```

> This light will fall down from vec3(10, 20, 10) to vec3(0, 0, 0)


`WHS.HemisphereLight` is a simple class, it extends `WHS.Light` and inherits all it's methods.

`WHS.HemisphereLight` is a light source positioned directly above the scene. 

It also doesn't need `pos` and `target` properties.

Parameter         |       Default        | Type      | Description |
----------------- | -------------------- | --------- | ----------- |
**skyColorHex**   | 0xffffff             | `Color`   | TODO
**groundColorHex**| 0xffffff             | `Color`   | TODO
**intensity**     | 1                    | `Number`  | Light intensity.
