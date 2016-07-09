<h2 class="ws" id="ring">Ring [Class] [2D]</h2>

> WHS.Ring example:

```javascript


var ring = GAME.Ring({

    geometry: {
        innerRadius: 5,
        outerRadius: 2
    },

    mass: 0,

    material: {
        color: 0xffffff,
        kind: "basic",
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

```

`WHS.Ring` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

`WHS.Ring` class makes a circle or just 2D `WHS.Torus` that doesn't support physics.

<div class="params" id="ring-geometry">
  <h5>Ring geometry object <a href="#ring-geometry" class="anchor"></a></h5>
  <ul>
    <li id="ring-geometry-innerRadius">
      <h3><a href="#ring-geometry-innerRadius" class="anchor"></a> innerRadius
        <span class="type">Number</span>
        <span class="default">0</span>
      </h3>
      <p>Ring geometry innerRadius</p>
    </li>
    <li id="ring-geometry-outerRadius">
      <h3><a href="#ring-geometry-outerRadius" class="anchor"></a> outerRadius
        <span class="type">Number</span>
        <span class="default">50</span>
      </h3>
      <p>Ring geometry outerRadius</p>
    </li>
    <li id="ring-geometry-thetaSegments">
      <h3><a href="#ring-geometry-thetaSegments" class="anchor"></a> thetaSegments
        <span class="type">Number</span>
        <span class="default">8</span>
      </h3>
      <p>Ring geometry thetaSegments</p>
    </li>
    <li id="ring-geometry-phiSegments">
      <h3><a href="#ring-geometry-phiSegments" class="anchor"></a> phiSegments
        <span class="type">Number</span>
        <span class="default">8</span>
      </h3>
      <p>Ring geometry phiSegments</p>
    </li>
    <li id="ring-geometry-thetaStart">
      <h3><a href="#ring-geometry-thetaStart" class="anchor"></a> thetaStart
        <span class="type">Number</span>
        <span class="default">0</span>
      </h3>
      <p>Ring geometry thetaStart</p>
    </li>
    <li id="ring-geometry-thetaLength">
      <h3><a href="#ring-geometry-thetaLength" class="anchor"></a> thetaLength
        <span class="type">Number</span>
        <span class="default">Math.PI * 2</span>
      </h3>
      <p>Ring geometry thetaLength</p>
    </li>
  </ul>
</div>

<script src="https://gist.github.com/sasha240100/9d4741da789ecbc02557.js"></script>

<aside class="notice">
<code>WHS.Ring</code> doesn't support physics, so if you want to make it with physics - you can use <code>WHS.Torus</code> and scale it <code>x</code> 1/(your torus outerRadius - innerRadius), so it's width will be 1 and then multiply by value near 0 to make it very thin.
</aside>

<img src="images/shapes/ring.png" alt="ring shape">

<aside class="warning">Need to be fixed. In progress.</aside>