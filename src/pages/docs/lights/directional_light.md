---

title: DirectionalLight
longtitle: WHS.DirectionalLight
category: Lights

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/lights/directional_light.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/lights/DirectionalLight.js

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
 - directional

---

`WHS.DirectinalLight` is a simple class, it extends `WHS.Light` and inherits all it's methods.

`WHS.DirectinalLight` creates a light that shines from a specific direction not from a specific position. 

This light will behave as though it is infinitely far away and the rays produced from it are all parallel. 

The best analogy would be a light source that acts like the sun: the sun is so far away that all sunlight hitting objects comes from the same angle.

It has the same options as `WHS.AmbientLight` in `light` paramater, but it also supports `pos` and `target` paramaters.

```javascript
new WHS.DirectinalLight( {
    light: {
        color: 0xffffff,
        intensity: 0.2
    },

    positions: {
      x: 10,
      y: 20,
      z: 10
    }
}).addTo(world);
```

> This light will fall down from vec3(10, 20, 10) to vec3(0, 0, 0)
