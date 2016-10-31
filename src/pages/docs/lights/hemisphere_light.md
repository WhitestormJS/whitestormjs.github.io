---

title: HemisphereLight
longtitle: WHS.HemisphereLight
category: Lights

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/lights/hemisphere_light.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/lights/HemisphereLight.js

tags:
 - three.js
 - webgl
 - 3d
 - core
 - component
 - LightComponent
 - hemisphere

---

`WHS.HemisphereLight` is a light source positioned directly above the scene. 

It also doesn't need `position` and `target` properties.

```javascript
new WHS.HemisphereLight({
  light: {
    skyColor: 0xff0000,
    groundColor: 0x0000ff,
    intensity: 0.2
  }
}).addTo(world);
```
