<h2 class="ws" id="ortographiccamera">OrtographicCamera</h2>

<div class="blockTitle h3">Basic OrtographicCamera example</div>

```javascript

const camera = new WHS.OrtographicCamera({
  camera: {
    far: 10000
  },

  pos: {
    x: 0,
    y: 50,
    z: 0
  }
});

world.setCamera(camera);

```

```coffeescript

camera = new (WHS.OrtographicCamera)(
  camera: far: 10000
  pos:
    x: 0
    y: 50
    z: 0)

world.setCamera camera

```


`WHS.OrtographicCamera` is based on `WHS.Camera` and has all it's functionality.

(TODO)



<div class="params" id="ortographic-camera">
  <h5>Camera parameters <a href="#ortographic-camera" class="anchor"></a></h5>
  <ul>
    <li id="ortographic-camera-near">
      <h3><a href="#ortographic-camera-near" class="anchor"></a> near
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Camera object near</p>
    </li>
    <li id="ortographic-camera-far">
      <h3><a href="#ortographic-camera-far" class="anchor"></a> far
        <span class="type">Number</span>
        <span class="default">1000</span>
      </h3>
      <p>Camera object far</p>
    </li>
    <li id="ortographic-camera-left">
      <h3><a href="#ortographic-camera-left" class="anchor"></a> left
        <span class="type">Number</span>
        <span class="default">window.innerWidth / -2</span>
      </h3>
      <p>Camera object left</p>
    </li>
    <li id="ortographic-camera-right">
      <h3><a href="#ortographic-camera-right" class="anchor"></a> right
        <span class="type">Number</span>
        <span class="default">window.innerWidth / 2</span>
      </h3>
      <p>Camera object right</p>
    </li>
    <li id="ortographic-camera-top">
      <h3><a href="#ortographic-camera-top" class="anchor"></a> top
        <span class="type">Number</span>
        <span class="default">window.innerWidth / 2</span>
      </h3>
      <p>Camera object top</p>
    </li>
    <li id="ortographic-camera-bottom">
      <h3><a href="#ortographic-camera-bottom" class="anchor"></a> bottom
        <span class="type">Number</span>
        <span class="default">window.innerWidth / -2</span>
      </h3>
      <p>Camera object bottom</p>
    </li>
  </ul>
</div>
