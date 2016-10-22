---

title: HemisphereLight
longtitle: WHS.HemisphereLight
category: Lights

tags:
 - three.js
 - webgl
 - 3d
 - core
 - component
 - LightComponent
 - hemisphere

---

`WHS.HemisphereLight` is a simple class, it extends `WHS.Light` and inherits all it's methods.

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
