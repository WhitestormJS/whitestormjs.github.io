<h2 class="ws" id="shape2d">Shape2D</h2>

<div class="blockTitle h3">Basic shape (2d) example</div>

```javascript

const rectWidth = 10,
  rectLength = 5;

const rectShape = new THREE.Shape();
rectShape.moveTo(0,0);
rectShape.lineTo(0, rectWidth);
rectShape.lineTo(rectLength, rectWidth);
rectShape.lineTo(rectLength, 0);
rectShape.lineTo(0, 0);

const plane = new WHS.Plane({
  geometry: {
    shape: rectShape
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

rectWidth = 10
rectLength = 5

rectShape = new (THREE.Shape)
rectShape.moveTo 0, 0
rectShape.lineTo 0, rectWidth
rectShape.lineTo rectLength, rectWidth
rectShape.lineTo rectLength, 0
rectShape.lineTo 0, 0

plane = new (WHS.Plane)(
  geometry: shape: rectShape
  mass: 0
  material:
    color: 0xff0000
    kind: 'basic')

plane.addTo world

```

`WHS.Shape2D` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

`WHS.Shape2D` is an universal class, that allows you create different 2D shapes in 3D scene. Unfortunately, all of them don't support physics, so you can make a similar 3D obect and scale it width to be near zero.

`WHS.Shape2D` consist of shapes that are in `shapes` parameter.

<div class="params" id="shape2d-geometry">
  <h5>Shape2D geometry object <a href="#shape2d-geometry" class="anchor"></a></h5>
  <ul>
    <li id="shape2d-geometry-shapes">
      <h3><a href="#shape2d-geometry-shapes" class="anchor"></a> shapes
        <span class="type">Array or Single object</span>
        <span class="default">[]</span>
      </h3>
      <p>Shape2D geometry shapes</p>
    </li>
  </ul>
</div>

<script src="https://gist.github.com/sasha240100/118ced78b8c3a9aeb008.js"></script>