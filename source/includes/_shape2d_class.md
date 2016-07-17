<h2 class="ws" id="shape2d">Shape2D [2D]</h2>

<div class="blockTitle h3">Basic shape (2d) example | <a target="_blank" href="http://whitestormjs.xyz/playground/?code=const%20world%20=%20new%20WHS.World(%7B%0D%0A%20%20autoresize:%20true,%0D%0A%0D%0A%20%20background:%20%7B%0D%0A%20%20%20%20color:%200x00ffff%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20gravity:%20%7B%20//%20Physic%20gravity.%0D%0A%20%20%20%20x:%200,%0D%0A%20%20%20%20y:%20-2,%0D%0A%20%20%20%20z:%200%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20camera:%20%7B%0D%0A%20%20%20%20x:15,%0D%0A%20%20%20%20y:20,%0D%0A%20%20%20%20z:10%0D%0A%20%20%7D%0D%0A%7D);%0D%0A%0D%0Aconst%20rectWidth%20=%2010,%0D%0A%20%20rectLength%20=%205;%0D%0A%0D%0Aconst%20rectShape%20=%20new%20THREE.Shape();%0D%0ArectShape.moveTo(0,0);%0D%0ArectShape.lineTo(0,%20rectWidth);%0D%0ArectShape.lineTo(rectLength,%20rectWidth);%0D%0ArectShape.lineTo(rectLength,%200);%0D%0ArectShape.lineTo(0,%200);%0D%0A%0D%0Aconst%20plane%20=%20new%20WHS.Plane(%7B%0D%0A%20%20geometry:%20%7B%0D%0A%20%20%20%20shape:%20rectShape%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20mass:%200,%0D%0A%0D%0A%20%20material:%20%7B%0D%0A%20%20%20%20color:%200xff0000,%0D%0A%20%20%20%20kind:%20'basic'%0D%0A%20%20%7D%0D%0A%7D);%0D%0A%0D%0Aplane.addTo(world);%0D%0A%0D%0A//set%20mouse%20controls%20to%20intract%20with%20world%0D%0Aworld.setControls(WHS.orbitControls());%0D%0A%0D%0Aworld.start();%20//%20Start%20animations%20and%20physics%20simulation.">PLAYGROUND</a></div>

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

`WHS.Shape2D` is a simple class, it extends <a href="#shape">`WHS.Shape`</a> and inherits all it's methods.

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
      <p>shapes array or shapes object, a object that contains 2D shapes in it. </p>
    </li>
  </ul>
</div>

<script src="https://gist.github.com/sasha240100/118ced78b8c3a9aeb008.js"></script>
