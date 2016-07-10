# Cameras

<h2 class="ws" id="perspectivecamera">PerspectiveCamera</h2>

<div class="blockTitle h3">Basic PerspectiveCamera example</div>

```javascript

const camera = new WHS.PerspectiveCamera({
  camera: {
    fov: 75,
    aspect: window.innerWidth / window.innerHeight
  },

  pos: {
    x: 0,
    y: 100,
    z: 0
  }
});

world.setCamera(camera);

```

```coffeescript

camera = new (WHS.PerspectiveCamera)(
  camera:
    fov: 75
    aspect: window.innerWidth / window.innerHeight
  pos:
    x: 0
    y: 100
    z: 0)

world.setCamera camera

```


`WHS.PerspectiveCamera` is based on `WHS.Camera` and has all it's functionality.

(TODO)


<div class="params" id="perspectivecamera-camera">
  <h5>Camera parameters <a href="#perspectivecamera-camera" class="anchor"></a></h5>
  <ul>
    <li id="perspectivecamera-camera-fov">
      <h3><a href="#perspectivecamera-camera-fov" class="anchor"></a> fov
        <span class="type">Number</span>
        <span class="default">45</span>
      </h3>
      <p>Camera object fov</p>
    </li>
    <li id="perspectivecamera-camera-aspect">
      <h3><a href="#perspectivecamera-camera-aspect" class="anchor"></a> aspect
        <span class="type">Number</span>
        <span class="default">window.innerWidth / window.innerHeight</span>
      </h3>
      <p>Camera object aspect</p>
    </li>
    <li id="perspectivecamera-camera-near">
      <h3><a href="#perspectivecamera-camera-near" class="anchor"></a> near
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Camera object near</p>
    </li>
    <li id="perspectivecamera-camera-far">
      <h3><a href="#perspectivecamera-camera-far" class="anchor"></a> far
        <span class="type">Number</span>
        <span class="default">1000</span>
      </h3>
      <p>Camera object far</p>
    </li>
  </ul>
</div>