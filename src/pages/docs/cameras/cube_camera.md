---

title: CubeCamera
longtitle: WHS.CubeCamera
category: Cameras

edit: https://github.com/WhitestormJS/whitestormjs.github.io/blob/master/src/pages/docs/cameras/cube_camera.md
source: https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/components/cameras/CubeCamera.js

tags:
 - three.js
 - webgl
 - 3d
 - core
 - component
 - CameraComponent
 - cube

---

Creates 6 cameras that render to a WebGLRenderTargetCube.

```javascript
const camera = new WHS.CubeCamera({
  camera: {
    cubeResolution: 256
  },

  position: {
    x: 0,
    y: 100,
    z: 0
  }
});

world.camera = camera;
```
