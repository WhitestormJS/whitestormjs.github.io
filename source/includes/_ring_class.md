<h2 class="ws" id="ring">Ring [2D]</h2>

<div class="blockTitle h3">Basic ring example | <a target="_blank" href="http://whitestormjs.xyz/playground/?code=const%20world%20=%20new%20WHS.World(%7B%0D%0A%20%20autoresize:%20true,%0D%0A%0D%0A%20%20background:%20%7B%0D%0A%20%20%20%20color:%200x00ffff%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20gravity:%20%7B%20//%20Physic%20gravity.%0D%0A%20%20%20%20x:%200,%0D%0A%20%20%20%20y:%20-2,%0D%0A%20%20%20%20z:%200%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20camera:%20%7B%0D%0A%20%20%20%20x:15,%0D%0A%20%20%20%20y:20,%0D%0A%20%20%20%20z:5%0D%0A%20%20%7D%0D%0A%7D);%0D%0A%0D%0Aconst%20ring%20=%20new%20WHS.Ring(%7B%0D%0A%20%20geometry:%20%7B%0D%0A%20%20%20%20innerRadius:%205,%0D%0A%20%20%20%20outerRadius:%202%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20mass:%200,%0D%0A%0D%0A%20%20material:%20%7B%0D%0A%20%20%20%20kind:%20'basic',%0D%0A%20%20%20%20color:%200xff00ff,%0D%0A%20%20%20%20side:%20THREE.DoubleSide%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20pos:%20%7B%0D%0A%20%20%20%20x:%200,%0D%0A%20%20%20%20y:%200,%0D%0A%20%20%20%20z:%200%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20rot:%20%7B%0D%0A%20%20%20%20x:%20Math.PI/4%0D%0A%20%20%7D%0D%0A%7D);%0D%0A%0D%0Aring.addTo(world);%0D%0A%0D%0A//set%20mouse%20controls%20to%20intract%20with%20world%0D%0Aworld.setControls(WHS.orbitControls());%0D%0A%0D%0Aworld.start();%20//%20Start%20animations%20and%20physics%20simulation.">PLAYGROUND</a></div>

```javascript

const ring = new WHS.Ring({
  geometry: {
    innerRadius: 5,
    outerRadius: 2
  },

  mass: 0,

  material: {
    kind: 'basic',
    color: 0xffffff,
    side: THREE.DoubleSide
  },

  pos: {
    x: 0,
    y: 8,
    z: 0
  },

  rot: {
    x: Math.PI/4
  }
});

ring.addTo(world);

```

```coffeescript

ring = new (WHS.Ring)(
  geometry:
    innerRadius: 5
    outerRadius: 2
  mass: 0
  material:
    kind: 'basic'
    color: 0xffffff
    side: THREE.DoubleSide
  pos:
    x: 0
    y: 8
    z: 0
  rot: x: Math.PI / 4)

ring.addTo world

```

`WHS.Ring` is a simple class, it extends <a href="#shape">`WHS.Shape`</a> and inherits all it's methods.

`WHS.Ring` class makes a circle or just 2D <a href="#torus">`WHS.Torus`</a> that doesn't support physics.

<div class="params" id="ring-geometry">
  <h5>Ring geometry object <a href="#ring-geometry" class="anchor"></a></h5>
  <ul>
    <li id="ring-geometry-innerRadius">
      <h3><a href="#ring-geometry-innerRadius" class="anchor"></a> innerRadius
        <span class="type">Number</span>
        <span class="default">0</span>
      </h3>
      <p>Inner radius of ring, default is <code>0</code> make sure to set it none zero to make your object look like a ring </p>
    </li>
    <li id="ring-geometry-outerRadius">
      <h3><a href="#ring-geometry-outerRadius" class="anchor"></a> outerRadius
        <span class="type">Number</span>
        <span class="default">50</span>
      </h3>
      <p>Outer radius of ring</p>
    </li>
    <li id="ring-geometry-thetaSegments">
      <h3><a href="#ring-geometry-thetaSegments" class="anchor"></a> thetaSegments
        <span class="type">Number</span>
        <span class="default">8</span>
      </h3>
      <p>theta segments of ring, a higher number means the ring will be more round.</p>
    </li>
    <li id="ring-geometry-phiSegments">
      <h3><a href="#ring-geometry-phiSegments" class="anchor"></a> phiSegments
        <span class="type">Number</span>
        <span class="default">8</span>
      </h3>
      <p>phi segments of ring</p>
    </li>
    <li id="ring-geometry-thetaStart">
      <h3><a href="#ring-geometry-thetaStart" class="anchor"></a> thetaStart
        <span class="type">Number</span>
        <span class="default">0</span>
      </h3>
      <p>theta start, starting angle of ring</p>
    </li>
    <li id="ring-geometry-thetaLength">
      <h3><a href="#ring-geometry-thetaLength" class="anchor"></a> thetaLength
        <span class="type">Number</span>
        <span class="default">Math.PI * 2</span>
      </h3>
      <p>theta length, central angle of ring</p>
    </li>
  </ul>
</div>

<script src="https://gist.github.com/sasha240100/9d4741da789ecbc02557.js"></script>

<aside class="notice">
<code>WHS.Ring</code> doesn't support physics, so if you want to make it with physics - you can use <code>WHS.Torus</code> and scale it <code>x</code> 1/(your torus outerRadius - innerRadius), so it's width will be 1 and then multiply by value near 0 to make it very thin.
</aside>

<img src="images/shapes/ring.png" alt="ring shape">

<aside class="warning">Need to be fixed. In progress.</aside>
