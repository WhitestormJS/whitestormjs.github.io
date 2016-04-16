# Components

## Fog [Class]

> Example of using fog:

```javascript

var fog = GAME.Fog({
	hex: 0x000000,
    near: 1,
    far: 1000
});

```

`WHS.Fog` is a component for defining linear fog, i.e., that grows linearly denser with the distance.

Parameter      |       Default        | Type      | Description |
-------------- | -------------------- | --------- | ----------- |
**hex**        | 0x000000             | `Color`   | Fog color.
**near**       | 1                    | `Number`  | The minimum distance to start fog.
**far**        | 1000                 | `Number`  | The maximum distance to start fog.


## FogExp2 [Class]

> Example of using fogexp2:

```javascript

var fog = GAME.FogExp2({
	hex: 0x000000,
    density: 0.00025
});

```

`WHS.FogExp2` is like a `WHS.Fog` class, but that define exponential fog, i.e., that grows exponentially denser with the distance.

Parameter      |       Default        | Type      | Description |
-------------- | -------------------- | --------- | ----------- |
**hex**        | 0x000000             | `Color`   | Fog color.
**density**    | 0.00025              | `Number`  | Defines how fast the fog will grow dense.


<h2 class="ws" id="skybox">Skybox [Class]</h2>

> Example of using skybox:

```javascript

var fog = GAME.Skybox({
    path: "assets/textures/skybox/skymap",
    imgSuffix: ".png",
    skyType: "sphere",
    radius: GAME._camera.far,

    rot: { y: Math.PI / 180 * - 90 },
    pos: { y: - 200 }
});

```

`WHS.Skybox` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

Parameter      |       Default        | Type      | Description |
-------------- | -------------------- | --------- | ----------- |
**todo**       | 0x000000             | `Color`   | TODO

<img src="images/skybox.png" alt="Skybox in fps example.">