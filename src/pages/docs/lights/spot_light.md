---

title: SpotLight
longtitle: WHS.SpotLight
category: Lights

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/lights/spot_light.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/lights/SpotLight.js

wip: 
 - Add a properties table
 - Rewrite

tags:
 - three.js
 - webgl
 - 3d
 - core
 - component
 - LightComponent
 - spot

---

`WHS.SpotLight` is a simple class, it extends `WHS.Light` and inherits all it's methods.

`WHS.SpotLight` creates spot light that can cast shadow in one direction.

It has the same options as `WHS.AmbientLight` in `light` paramater, but it also supports `pos` and `target` paramaters.

> `WHS.SpotLight` affects meshes with `lambert` and `phong` material.

```javascript
new WHS.SpotLight( {
  light: {
    color: 0x00ff00,
    intensity: 3,
    distance: 1000
  },

  position: {
    x: 10,
    y: 20,
    z: 10
  }
}).addTo(world);
```

> This light will fall down from vec3(10, 20, 10) to vec3(0, 0, 0)
