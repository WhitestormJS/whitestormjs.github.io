---
layout: docs
title:  "Adding a skybox"
module: "Skybox"
permalink: addSkybox
---

To add a skybox to your game, call `GAME.addSkybox` (`GAME` is an instance of `WHS.init`):

```javascript
GAME.skybox = GAME.addSkybox({
  src: "assets/textures/skybox/DarkSea-",
  imgSuffix: ".jpg"
});
```

`addSkybox` takes a single parameter, an object of options. `src` is the skybox image source, while `imgSuffix` is the skybox image's suffix (JPEG, PNG, etc.). If `imgSuffix` second parameter is not provided, the PNG suffix (`.png`) is assumed.

`addSkybox` takes a series of images, using one for each axis. Note the skybox images for [our skybox example](https://github.com/WhitestormJS/whitestorm.js/tree/master/examples/assets/textures/skybox).

The name of each image should be composed in the following way:

`name-axis.suffix`

The required axes are:

* `yneg`
* `ypos`
* `xneg`
* `xpos`
* `zneg`
* `zpos`
