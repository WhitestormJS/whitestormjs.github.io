---

title: .texture()
longtitle: WHS.texture()
category: Utils
 
tags:
 - utils
 - texture

---

## `texture(url, options)`

`WHS.texture()` wraps whs texture object to Three.js texture.
It is useful in MeshComponents when you need to apply texture as simple as you can.

```javascript
const cube = WHS.Box({
  geometry: {
    width: 2,
    height: 2,
    depth: 2
  },

  mass: 1,

  material: {
    kind: 'lambert',
    map: WHS.texture('assets/textures/box.jpg')
  },

  position: [50, 70, 60]
);
```

You can also use it with applying offset or repeat:

```javascript
WHS.texture('assets/textures/box.jpg', {
  offset: {
    x: 0,
    y: 0
  },
  repeat: {
    x: 1,
    y: 1
  }
});
```
