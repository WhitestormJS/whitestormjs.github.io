<h2 class="ws" id="sphere">Sphere [Class]</h2>

<div class="blockTitle h3">Basic sphere example</div>

```javascript

const sphere = new WHS.Sphere( {
  geometry: {
    radius: 2
  },

  mass: 10,

  material: {
    color: 0xffffff,
    kind: 'lambert'
  },

  pos: {
    x: 0,
    y: 100,
    z: 0
  }
});

sphere.addTo(world);

```

```coffeescript

sphere = new (WHS.Sphere)(
  geometry: radius: 2
  mass: 10
  material:
    color: 0xffffff
    kind: 'lambert'
  pos:
    x: 0
    y: 100
    z: 0)

sphere.addTo world

```


`WHS.Sphere` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

`WHS.Sphere` class is used to create sphere objects by it's `radius` property and other values that determinates it's detality.

It is similar to `THREE.SphereGeometry`, but it also contain's all properties, applied by `WHS.Shape`, such as material, mass and vectors like position (pos) and rotation (rot).

You need to fill these parameters:

<div class="params" id="sphere-geometry">
  <h5>Sphere geometry object <a href="#sphere-geometry" class="anchor"></a></h5>
  <ul>
    <li id="sphere-geometry-radius">
      <h3><a href="#sphere-geometry-radius" class="anchor"></a> radius
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Sphere geometry radius</p>
    </li>
    <li id="sphere-geometry-widthSegments">
      <h3><a href="#sphere-geometry-widthSegments" class="anchor"></a> widthSegments
        <span class="type">Number</span>
        <span class="default">8</span>
      </h3>
      <p>Sphere geometry widthSegments</p>
    </li>
    <li id="sphere-geometry-heightSegments">
      <h3><a href="#sphere-geometry-heightSegments" class="anchor"></a> heightSegments
        <span class="type">Number</span>
        <span class="default">6</span>
      </h3>
      <p>Sphere geometry heightSegments</p>
    </li>
    <li id="sphere-geometry-phiStart">
      <h3><a href="#sphere-geometry-phiStart" class="anchor"></a> phiStart
        <span class="type">Number</span>
        <span class="default">0</span>
      </h3>
      <p>Sphere geometry phiStart</p>
    </li>
    <li id="sphere-geometry-phiLength">
      <h3><a href="#sphere-geometry-phiLength" class="anchor"></a> phiLength
        <span class="type">Number</span>
        <span class="default">Math.PI * 2</span>
      </h3>
      <p>Sphere geometry phiLength</p>
    </li>
    <li id="sphere-geometry-thetaStart">
      <h3><a href="#sphere-geometry-thetaStart" class="anchor"></a> thetaStart
        <span class="type">Number</span>
        <span class="default"></span>
      </h3>
      <p>Sphere geometry thetaStart</p>
    </li>
    <li id="sphere-geometry-thetaLength">
      <h3><a href="#sphere-geometry-thetaLength" class="anchor"></a> thetaLength
        <span class="type">Number</span>
        <span class="default">Math.PI</span>
      </h3>
      <p>Sphere geometry thetaLength</p>
    </li>
  </ul>
</div>

Then it creates an `Three.js geometry`:

<script src="https://gist.github.com/sasha240100/df4a83ceb3625ffdb44d.js"></script>

And a `Physijs mesh`, that is similar to `Three.js mesh`, but it also participates in collision calculations. This mesh is a combination of `Three.js geometry` and `Physijs material` (The same as in three.js, but with friction and restitution).

<aside class="warning">Need to be rewritten [TODO]</aside>
