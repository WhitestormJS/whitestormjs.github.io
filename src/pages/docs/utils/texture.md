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

  position: {
    x: 50,
    y: 70,
    z: 60
  }
);

```
