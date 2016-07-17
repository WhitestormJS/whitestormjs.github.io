<h2 class="ws" id="plane">Plane</h2>

<div class="blockTitle h3">Basic plane example | <a target="_blank" href="http://whitestormjs.xyz/playground/?code=WHS.debug%20=%20true;%0D%0A%0D%0Aconst%20world%20=%20new%20WHS.World(%7B%0D%0A%20%20autoresize:%20true,%0D%0A%0D%0A%20%20background:%20%7B%0D%0A%20%20%20%20color:%200x000000%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20gravity:%20%7B%20//%20Physic%20gravity.%0D%0A%20%20%20%20x:%200,%0D%0A%20%20%20%20y:%200,%0D%0A%20%20%20%20z:%200%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20camera:%20%7B%0D%0A%20%20%20%20x:50,%0D%0A%20%20%20%20y:50,%0D%0A%20%20%20%20z:%2050%0D%0A%20%20%7D%0D%0A%7D);%0D%0A%0D%0Aconst%20plane%20=%20new%20WHS.Plane(%7B%0D%0A%20%20geometry:%20%7B%0D%0A%20%20%20%20width:%2020,%0D%0A%20%20%20%20height:%2030%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20mass:%200,%0D%0A%0D%0A%20%20material:%20%7B%0D%0A%20%20%20%20color:%200xff0000,%0D%0A%20%20%20%20kind:%20'basic'%0D%0A%20%20%7D%0D%0A%7D);%0D%0A%0D%0Aplane.addTo(world);%0D%0A%0D%0A//set%20mouse%20controls%20to%20intract%20with%20world%0D%0Aworld.setControls(WHS.orbitControls());%0D%0A%0D%0Aworld.start();%20//%20Start%20animations%20and%20physics%20simulation.
">PLAYGROUND</a>
</div>

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
