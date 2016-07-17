<h2 class="ws" id="sphere">Sphere</h2>

<div class="blockTitle h3">Basic sphere example | <a target="_blank" href="http://whitestormjs.xyz/playground/?code=const%20world%20=%20new%20WHS.World(%7B%0D%0A%20%20autoresize:%20true,%0D%0A%0D%0A%20%20background:%20%7B%0D%0A%20%20%20%20color:%200x000000%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20gravity:%20%7B%20//%20Physic%20gravity.%0D%0A%20%20%20%20x:%200,%0D%0A%20%20%20%20y:%20-100,%0D%0A%20%20%20%20z:%200%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20camera:%20%7B%0D%0A%20%20%20%20x:50,%0D%0A%20%20%20%20y:50,%0D%0A%20%20%20%20z:50%0D%0A%20%20%7D%0D%0A%7D);%0D%0A%0D%0Aconst%20sphere%20=%20new%20WHS.Sphere(%20%7B%0D%0A%20%20geometry:%20%7B%0D%0A%20%20%20%20radius:%2030%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20mass:%201,%0D%0A%0D%0A%20%20material:%20%7B%0D%0A%20%20%20%20color:%200xE91E63,%0D%0A%20%20%20%20kind:%20'basic'%0D%0A%20%20%7D,%0D%0A%20%20%20pos:%20%7B%0D%0A%20%20%20%20x:%2010,%0D%0A%20%20%20%20y:%205,%0D%0A%20%20%20%20z:%2010%0D%0A%20%20%7D%0D%0A%7D);%0D%0A%0D%0Asphere.addTo(world);%0D%0A%0D%0A//set%20mouse%20controls%20to%20intract%20with%20world%0D%0Aworld.setControls(WHS.orbitControls());%0D%0A%0D%0Aworld.start();%20//%20Start%20animations%20and%20physics%20simulation.">PLAYGROUND</a>
</div>

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
    y: 100
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
    y: 100)

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
      <p>radius of Sphere</p>
    </li>
    <li id="sphere-geometry-widthSegments">
      <h3><a href="#sphere-geometry-widthSegments" class="anchor"></a> widthSegments
        <span class="type">Number</span>
        <span class="default">8</span>
      </h3>
      <p>width Segments in Sphere</p>
    </li>
    <li id="sphere-geometry-heightSegments">
      <h3><a href="#sphere-geometry-heightSegments" class="anchor"></a> heightSegments
        <span class="type">Number</span>
        <span class="default">6</span>
      </h3>
      <p>height Segments in Sphere</p>
    </li>
    <li id="sphere-geometry-phiStart">
      <h3><a href="#sphere-geometry-phiStart" class="anchor"></a> phiStart
        <span class="type">Number</span>
        <span class="default">0</span>
      </h3>
      <p>phi Start of sphere</p>
    </li>
    <li id="sphere-geometry-phiLength">
      <h3><a href="#sphere-geometry-phiLength" class="anchor"></a> phiLength
        <span class="type">Number</span>
        <span class="default">Math.PI * 2</span>
      </h3>
      <p>phi Length of sphere</p>
    </li>
    <li id="sphere-geometry-thetaStart">
      <h3><a href="#sphere-geometry-thetaStart" class="anchor"></a> thetaStart
        <span class="type">Number</span>
        <span class="default"></span>
      </h3>
      <p>theta Start  of sphere</p>
    </li>
    <li id="sphere-geometry-thetaLength">
      <h3><a href="#sphere-geometry-thetaLength" class="anchor"></a> thetaLength
        <span class="type">Number</span>
        <span class="default">Math.PI</span>
      </h3>
      <p>theta Length  of sphere</p>
    </li>
  </ul>
</div>

Then it creates an `Three.js geometry`:

<script src="https://gist.github.com/sasha240100/df4a83ceb3625ffdb44d.js"></script>

And a `Physijs mesh`, that is similar to `Three.js mesh`, but it also participates in collision calculations. This mesh is a combination of `Three.js geometry` and `Physijs material` (The same as in three.js, but with friction and restitution).

<aside class="warning">Need to be rewritten [TODO]</aside>
