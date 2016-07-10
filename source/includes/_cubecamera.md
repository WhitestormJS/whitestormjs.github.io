<h2 class="ws" id="cubecamera">CubeCamera</h2>

<div class="blockTitle h3">Basic CubeCamera example</div>

```javascript

const camera = new WHS.CubeCamera({
  camera: {
    cubeResolution: 256
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

camera = new (WHS.CubeCamera)(
  camera: cubeResolution: 256
  pos:
    x: 0
    y: 100
    z: 0)

world.setCamera camera

```


`WHS.CubeCamera` is based on `WHS.Camera` and has all it's functionality.

(TODO)

<div class="params" id="cubecamera-camera">
  <h5>Camera parameters <a href="#cubecamera-camera" class="anchor"></a></h5>
  <ul>
    <li id="cubecamera-camera-near">
      <h3><a href="#cubecamera-camera-near" class="anchor"></a> near
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Camera object near</p>
    </li>
    <li id="cubecamera-camera-far">
      <h3><a href="#cubecamera-camera-far" class="anchor"></a> far
        <span class="type">Number</span>
        <span class="default">1000</span>
      </h3>
      <p>Camera object far</p>
    </li>
    <li id="cubecamera-camera-cubeResolution">
      <h3><a href="#cubecamera-camera-cubeResolution" class="anchor"></a> cubeResolution
        <span class="type">Number</span>
        <span class="default">128</span>
      </h3>
      <p>Camera object cubeResolution</p>
    </li>
  </ul>
</div>