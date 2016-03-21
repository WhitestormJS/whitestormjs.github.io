# Lights

<h2 class="wsl" id="ambient">AmbientLight [Class]</h2>

> WHS.AmbientLight example:

```javascript

var ambient = GAME.AmbientLight( {
    light: {
        color: 0xffffff,
        intensity: 0.2
    }
} );

```

`WHS.AmbientLight` is a simple class, it extends `WHS.Light` and inherits all it's methods.

`WHS.AmbientLight` creates basic light around all scene, so it doesn't need properties like `pos` or `target`.

It supports only `color` parameter, which defines the color of the surrounded light and `intensity` of light.

Parameter      |       Default        | Type      | Description |
-------------- | -------------------- | --------- | ----------- |
**color**      | 0xffffff             | `Color`   | Light color.
**intensity**  | 1                    | `Number`  | Light intensity.


