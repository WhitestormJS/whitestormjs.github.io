<h2 class="ws" id="plane">Plane</h2>

<div class="blockTitle h3">Basic plane example</div>

```javascript

const plane = new WHS.Plane({
  geometry: {
    width: 20,
    height: 30
  },

  mass: 0,

  material: {
    color: 0xff0000,
    kind: 'basic'
  }
});

plane.addTo(world);

```

```coffeescript

plane = new (WHS.Plane)(
  geometry:
    width: 20
    height: 30
  mass: 0
  material:
    color: 0xff0000
    kind: 'basic')

plane.addTo world

```

`WHS.Plane` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

`WHS.Plane` class is used for creating planes by it's `width` and `height`.

<div class="params" id="plane-geometry">
  <h5>Plane geometry object <a href="#plane-geometry" class="anchor"></a></h5>
  <ul>
    <li id="plane-geometry-width">
      <h3><a href="#plane-geometry-width" class="anchor"></a> width
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Plane width</p>
    </li>
    <li id="plane-geometry-height">
      <h3><a href="#plane-geometry-height" class="anchor"></a> Height
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Plane Height</p>
    </li>
    <li id="plane-geometry-wSegments">
      <h3><a href="#plane-geometry-wSegments" class="anchor"></a> wSegments
        <span class="type">Number</span>
        <span class="default">32</span>
      </h3>
      <p>width Segments in Plane</p>
    </li>
    <li id="plane-geometry-hSegments">
      <h3><a href="#plane-geometry-hSegments" class="anchor"></a> hSegments
        <span class="type">Number</span>
        <span class="default">32</span>
      </h3>
      <p>height Segments in Plane</p>
    </li>
  </ul>
</div>

<script src="https://gist.github.com/sasha240100/aa821a5174b0204259e9.js"></script>
