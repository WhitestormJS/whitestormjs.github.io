---

title: PerspectiveCamera
longtitle: WHS.PerspectiveCamera
category: Cameras
wip: 
 - Add a properties table
 - Rewrite

tags:
 - three.js
 - webgl
 - 3d
 - core
 - component
 - CameraComponent
 - perspective

---

Camera with perspective projection.

```javascript
const camera = new WHS.PerspectiveCamera({
  camera: {
    fov: 75,
    aspect: window.innerWidth / window.innerHeight
  },

  position: {
    x: 0,
    y: 100,
    z: 0
  }
});

world.setCamera(camera);
```
