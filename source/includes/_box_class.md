# Shapes

<h2 class="ws" id="box">Box</h2>

<div class="blockTitle h3">Basic box example</div>

```javascript

const box = new WHS.Box({
  geometry: {
    width: 2,
    height: 2,
    depth: 2
  },

  mass: 1,

  softbody: false,

  material: {
    kind: 'basic',
    color: 0xffffff
  },

  pos: {
    x: 50,
    y: 70,
    z: 60
  }
});

box.addTo(world);

```

```coffeescript

box = new (WHS.Box)(
  geometry:
    width: 2
    height: 2
    depth: 2
  mass: 1
  material:
    kind: 'basic'
    color: 0xffffff
  pos:
    x: 50
    y: 70
    z: 60)

box.addTo world

```


`WHS.Box` Creates a simple 3D Box. It extends <a href="#shape">`WHS.Shape`</a> and inherits all of its methods.

As told on <a href="#shape">`WHS.Shape`</a> definition, while you can pass any of the inherited params for this shape construction, you will need to
pass specific parameters to build this mesh.

<div class="params" id="box-geometry">
  <h5>Box geometry object <a href="#box-geometry" class="anchor"></a></h5>
  <ul>
    <li id="box-geometry-width">
      <h3><a href="#box-geometry-width" class="anchor"></a> width
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Width of box</p>
    </li>
    <li id="box-geometry-height">
      <h3><a href="#box-geometry-height" class="anchor"></a> height
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Height of box</p>
    </li>
    <li id="box-geometry-depth">
      <h3><a href="#box-geometry-depth" class="anchor"></a> depth
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Depth of box</p>
    </li>
    <li id="box-softbody">
      <h3><a href="#box-softbody" class="anchor"></a> softbody
        <span class="type">Boolean</span>
        <span class="default">false</span>
      </h3>
      <p>When set to true, WhitestormJs will process
      this shape as a soft body mesh.</p>      
    </li>
  </ul>
</div>
