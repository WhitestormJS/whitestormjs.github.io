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