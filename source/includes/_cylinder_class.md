<h2 class="ws" id="cylinder">Cylinder [Class]</h2>

> WHS.Cylinder example: 

```javascript

var cylinder = GAME.Cylinder({
    geometry: {
        radiusTop: 2,
        radiusBottom: 4,
        height: 5
    },

    mass: 10,

    material: {
        color: 0xffffff,
        kind: "basic"
    },

    pos: {
        x: 0,
        y: 100,
        z: 0
    }
});

```


`WHS.Cylinder` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

A **cylinder** is one of the most basic curvilinear geometric shapes, the surface *formed by the points at a fixed distance from a given straight line, the axis of the cylinder.* The solid enclosed by this surface and by two planes perpendicular to the axis is also called a cylinder. The surface area and the volume of a cylinder have been known since deep antiquity.

<img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Cylinder-with-blender.png" alt="rendered cylinder" width="250">

`WHS.Cylinder` creates Cylinder object by it's `radiusTop`, `radiusBottom` and `height`

<div class="params" id="cylinder-geometry">
  <h5>Cylinder geometry object <a href="#cylinder-geometry" class="anchor"></a></h5>
  <ul>
    <li id="cylinder-geometry-radiusTop">
      <h3><a href="#cylinder-geometry-radiusTop" class="anchor"></a> radiusTop
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Cylinder geometry radiusTop</p>
    </li>
    <li id="cylinder-geometry-radiusBottom">
      <h3><a href="#cylinder-geometry-radiusBottom" class="anchor"></a> radiusBottom
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Cylinder geometry radiusBottom</p>
    </li>
    <li id="cylinder-geometry-height">
      <h3><a href="#cylinder-geometry-height" class="anchor"></a> height
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Cylinder geometry height</p>
    </li>
    <li id="cylinder-geometry-radiusSegments">
      <h3><a href="#cylinder-geometry-radiusSegments" class="anchor"></a> radiusSegments
        <span class="type">Number</span>
        <span class="default">32</span>
      </h3>
      <p>Cylinder geometry radiusSegments</p>
    </li>
  </ul>
</div>

<script src="https://gist.github.com/sasha240100/452b417534e092a75e8f.js"></script>