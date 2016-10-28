---

title: PointLight
longtitle: WHS.PointLight
category: Lights

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/lights/point_light.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/lights/PointLight.js

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
 - point

---

`WHS.PointLight` is a simple class, it extends `WHS.Light` and inherits all it's methods.

`WHS.PointLight` creates a light at a specific position in the scene. The light shines in all directions (roughly similar to a light bulb.)

It has the same options as `WHS.AmbientLight` in `light` paramater, but it also supports `position` and `target` paramaters.

```javascript
new WHS.PointLight( {
  light: {
    color: 0xff0000,
    intensity: 3,
    distance: 1000
  },

  position: {
    x: 10,
    y: 20,
    z: 10
  },

  target {
    x: 5
  }
}).addTo(world);
```

> This light will fall down from vec3(10, 20, 10) to vec3(5, 0, 0)
