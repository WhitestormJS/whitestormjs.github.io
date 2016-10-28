---

title: AmbientLight
longtitle: WHS.AmbientLight
category: Lights

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/lights/ambient_light.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/lights/AmbientLight.js

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
 - ambient

---

`WHS.AmbientLight` is a simple class, it extends `WHS.Light` and inherits all it's methods.

`WHS.AmbientLight` creates basic light around all scene, so it doesn't need properties like `pos` or `target`.

It supports only `color` parameter, which defines the color of the surrounded light and `intensity` of light.

```javascript
new WHS.AmbientLight( {
  light: {
    color: 0xffffff,
    intensity: 0.2
  }
}).addTo(world);
```
