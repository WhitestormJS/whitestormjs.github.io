---

title: OrtographicCamera
longtitle: WHS.OrtographicCamera
category: Cameras

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/cameras/ortographic_camera.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/cameras/OrtographicCamera.js

tags:
 - three.js
 - webgl
 - 3d
 - core
 - component
 - CameraComponent
 - ortographic

---

Camera with orthographic projection.

```javascript
const camera = new WHS.OrtographicCamera({
  camera: {
    far: 10000
  },

  position: {
    y: 50
  }
});

world.camera = camera;
```
