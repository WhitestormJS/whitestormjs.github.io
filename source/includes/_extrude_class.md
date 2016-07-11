<h2 class="ws" id="extrude">Extrude</h2>

<div class="blockTitle h3">Basic extrude example</div>

```javascript

const shape = new THREE.Shape([
  new THREE.Vector2(-4,-4),
  new THREE.Vector2(-2,0),
  new THREE.Vector2(-4,4),
  new THREE.Vector2(0,2),
  new THREE.Vector2(4,4),
  new THREE.Vector2(2,0),
  new THREE.Vector2(4,-4),
  new THREE.Vector2(0,-2)
]);

const extrude = new WHS.Extrude({
  geometry: {
    shapes: shape,
    options: {
      bevelEnabled: false,
      bevelSize: 0,
      amount: 2
    }
  },

  mass: 10,

  material: {
    kind: 'basic',
    color: 0xffffff
  },

  pos: {
    x: 0,
    y: 100,
    z: 0
  }
});

extrude.addTo(world);

```

```coffeescript

shape = new (THREE.Shape)([
  new (THREE.Vector2)(-4, -4)
  new (THREE.Vector2)(-2, 0)
  new (THREE.Vector2)(-4, 4)
  new (THREE.Vector2)(0, 2)
  new (THREE.Vector2)(4, 4)
  new (THREE.Vector2)(2, 0)
  new (THREE.Vector2)(4, -4)
  new (THREE.Vector2)(0, -2)
])

extrude = new (WHS.Extrude)(
  geometry:
    shapes: shape
    options:
      bevelEnabled: false
      bevelSize: 0
      amount: 2
  mass: 10
  material:
    kind: 'basic'
    color: 0xffffff
  pos:
    x: 0
    y: 100
    z: 0)

extrude.addTo world

```


Extrude geometry means that you can create a 3D mesh from any 2D shape using three.js geometry based on `THREE.Vector2`. Such implementation will help you to make volumed shapes that have their own depth and can be seen from all angels.

You can also find some interesting examples made using three.js which is a core of Whitestorm.js, such as:
 - [Webgl geometry extrude](http://threejs.org/examples/webgl_geometry_extrude_shapes.html)
 - [Extrude shapes from geodata](http://threejs.org/examples/webgl_geometry_extrude_shapes2.html)
 - [Extrude splines](http://threejs.org/examples/webgl_geometry_extrude_splines.html)

Such examples can be easily implemented using whitestorm.js or it's plugins. Use `WHS.Extrude` class with `THREE.Shape` to get extrude effect of shape defined by 2D vectors.

It is similar to `THREE.ExtrudeGeometry`, but it also contain's all properties, applied by `WHS.Shape`, such as material, mass and vectors like position (pos) and rotation (rot).

<div class="params" id="extrude-geometry">
  <h5>Extrude geometry object <a href="#extrude-geometry" class="anchor"></a></h5>
  <ul>
    <li id="extrude-geometry-shapes">
      <h3><a href="#extrude-geometry-shapes" class="anchor"></a> shapes
        <span class="type">Array</span>
        <span class="default">[]</span>
      </h3>
      <p>Extrude shapes</p>
    </li>
    <li id="extrude-geometry-options">
      <h3><a href="#extrude-geometry-options" class="anchor"></a> options
        <span class="type">Object</span>
        <span class="default">{}</span>
      </h3>
      <p><a href="#extrude-options">Extrude options</a></p>
    </li>
  </ul>
</div>

<div class="params" id="extrude-options">
  <h5>Extrude options <a href="#extrude-options" class="anchor"></a></h5>
  <ul>
    <li id="extrude-options-curveSegments">
      <h3><a href="#extrude-options-curveSegments" class="anchor"></a> curveSegments 
        <span class="type">Number</span>
      </h3>
      <p>Number of points on the curves</p>
    </li>
    <li id="extrude-options-steps">
      <h3><a href="#extrude-options-steps" class="anchor"></a> steps
        <span class="type">Number</span>
      </h3>
      <p>Number of points used for subdividing segements of extrude spline</p>
    </li>
    <li id="extrude-options-amount">
      <h3><a href="#extrude-options-amount" class="anchor"></a> amount
        <span class="type">Number</span>
      </h3>
      <p>Depth to extrude the shape</p>
    </li>
    <li id="extrude-options-bevelEnabled">
      <h3><a href="#extrude-options-bevelEnabled" class="anchor"></a> bevelEnabled
        <span class="type">Boolean</span>
      </h3>
      <p>Turn on bevel</p>
    </li>
    <li id="extrude-options-bevelThickness">
      <h3><a href="#extrude-options-bevelThickness" class="anchor"></a> bevelThickness
        <span class="type">Number</span>
      </h3>
      <p>How deep into the original shape bevel goes</p>
    </li>
    <li id="extrude-options-bevelSize">
      <h3><a href="#extrude-options-bevelSize" class="anchor"></a> bevelSize
        <span class="type">Number</span>
      </h3>
      <p>How far from shape outline is bevel</p>
    </li>
    <li id="extrude-options-bevelSegments">
      <h3><a href="#extrude-options-bevelSegments" class="anchor"></a> bevelSegments
        <span class="type">Number</span>
      </h3>
      <p>Number of bevel layers</p>
    </li>
    <li id="extrude-options-extrudePath">
      <h3><a href="#extrude-options-extrudePath" class="anchor"></a> extrudePath
        <span class="type">THREE.CurvePath</span>
      </h3>
      <p>3D spline path to extrude shape along. (creates Frames if (frames aren't defined)</p>
    </li>
    <li id="extrude-options-frames">
      <h3><a href="#extrude-options-frames" class="anchor"></a> frames
        <span class="type">THREE.TubeGeometry</span>
      </h3>
      <p>FrenetFrames. containing arrays of tangents, normals, binormals</p>
    </li>
    <li id="extrude-options-material">
      <h3><a href="#extrude-options-material" class="anchor"></a> material
        <span class="type">Number</span>
      </h3>
      <p>Material index for front and back faces.</p>
    </li>
    <li id="extrude-options-extrudeMaterial">
      <h3><a href="#extrude-options-extrudeMaterial" class="anchor"></a> extrudeMaterial
        <span class="type">Number</span>
      </h3>
      <p>Material index for extrusion and beveled faces</p>
    </li>
    <li id="extrude-options-UVGenerator">
      <h3><a href="#extrude-options-UVGenerator" class="anchor"></a> UVGenerator
        <span class="type">Object</span>
      </h3>
      <p>Object that provides UV generator functions</p>
    </li>
  </ul>
</div>

### Extrude example
<img src="images/shapes/extrude.png" alt="rendered extrude from it's example">
