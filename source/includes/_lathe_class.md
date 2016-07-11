<h2 class="ws" id="lathe">Lathe</h2>

<div class="blockTitle h3">Basic lathe example</div>

```javascript

const points = [];

for (let i = 0; i < 10; i++) {
  points.push(
    new THREE.Vector2(
      (Math.sin(i * 0.7) * 15 + 50) / 10,
      (i - 5) * 0.2
    )
  );
}

const lathe = new WHS.Lathe({
  geometry: {
    points: points
  },

  mass: 10,

  material: {
    kind: 'lambert',
    color: 0xffffff,
    side: THREE.DoubleSide
  },

  pos: {
    x: 0,
    y: 50,
    z: 10
  }
});

lathe.addTo(world);

```

```coffeescript

points = []

i = 0
while i < 10
  points.push new (THREE.Vector2)((Math.sin(i * 0.7) * 15 + 50) / 10, (i - 5) * 0.2)
  i++

lathe = new (WHS.Lathe)(
  geometry: points: points
  mass: 10
  material:
    kind: 'lambert'
    color: 0xffffff
    side: THREE.DoubleSide
  pos:
    x: 0
    y: 50
    z: 10)

lathe.addTo world

```

A LatheGeometry allows you to create shapes from a smooth curve. This curve is defined by a number of points (also called knots) and is most often called a spline. This spline is rotated around a fixed point and results in vase- and bell-like shapes. 

In 3D computer graphics, a lathed object is a 3D model whose vertex geometry is produced by rotating the points of a spline or other point set around a fixed axis. The lathing may be partial; the amount of rotation is not necessarily a full 360 degrees. The point set providing the initial source data can be thought of as a cross section through the object along a plane containing its axis of radial symmetry.

The [following example](http://threejs.org/docs/scenes/geometry-browser.html#LatheGeometry) shows a geometry which can be generated using `WHS.Lathe` class.

<aside class="notice">This class inherits <a href="#shape">`WHS.Shape`</a> prototype.</aside>

<div class="params" id="lathe-geometry">
  <h5>Lathe geometry object <a href="#lathe-geometry" class="anchor"></a></h5>
  <ul>
    <li id="lathe-geometry-points">
      <h3><a href="#lathe-geometry-points" class="anchor"></a> points
        <span class="type">Array</span>
        <span class="default">[]</span>
      </h3>
      <p>Array that contain `THREE.Vector2`. The x-coordinate of each point must be greater than zero.</p>
    </li>
    <li id="lathe-geometry-segments">
      <h3><a href="#lathe-geometry-segments" class="anchor"></a> segments
        <span class="type">Number</span>
        <span class="default">12</span>
      </h3>
      <p>The number of circumference segments to generate</p>
    </li>
    <li id="lathe-geometry-phiStart">
      <h3><a href="#lathe-geometry-phiStart" class="anchor"></a> phiStart
        <span class="type">Number</span>
        <span class="default">0</span>
      </h3>
      <p>The starting angle in radians</p>
    </li>
    <li id="lathe-geometry-phiLength">
      <h3><a href="#lathe-geometry-phiLength" class="anchor"></a> phiLength
        <span class="type">Number (0 - 2 * Math.PI)</span>
        <span class="default">2 * Math.PI</span>
      </h3>
      <p>The radian (0 to `2PI`) range of the lathed section `2PI` is a closed lathe, less than `2PI` is a portion</p>
    </li>
  </ul>
</div>

#### Example on the right side will create the following object:

<img src="images/shapes/lathe.png" alt="rendered lathe on it's example">
