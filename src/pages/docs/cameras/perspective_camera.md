---

title: PerspectiveCamera
longtitle: WHS.PerspectiveCamera
category: Cameras

tags:
 - three.js
 - webgl
 - 3d
 - core
 - component
 - CameraComponent
 - perspective

---

(TODO)

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
