<h2 class="wsl" id="normal">NormalLight [Class]</h2>

> WHS.HemisphereLight:

```javascript

var ambient = GAME.NormalLight( {
    light: {
        color: 0xffffff
    }
} );

```

`WHS.NormalLight` is a simple class, it extends `WHS.Light` and inherits all it's methods.

`WHS.NormalLight` is an abstract base class for lights.

It also doesn't need `pos` and `target` properties.

Parameter         |       Default        | Type      | Description |
----------------- | -------------------- | --------- | ----------- |
**color**         | 0xffffff             | `Color`   | Light color.
