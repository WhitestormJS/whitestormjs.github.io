# Shapes

<h2 class="ws" id="box">Box</h2>

<div class="blockTitle h3">Basic box example  | <a target="_blank" href="http://whitestormjs.xyz/playground/?code=const%20world%20=%20new%20WHS.World(%7B%0D%0A%20%20autoresize:%20true,%0D%0A%0D%0A%20%20background:%20%7B%0D%0A%20%20%20%20color:%200x000000%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20gravity:%20%7B%20//%20Physic%20gravity.%0D%0A%20%20%20%20x:%200,%0D%0A%20%20%20%20y:%20-100,%0D%0A%20%20%20%20z:%200%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20camera:%20%7B%0D%0A%20%20%20%20z:%2050%0D%0A%20%20%7D%0D%0A%7D);%0D%0A%0D%0A//create%20box%0D%0Aconst%20box%20=%20new%20WHS.Box(%7B%0D%0A%20%20geometry:%20%7B%0D%0A%20%20%20%20width:%2020,%0D%0A%20%20%20%20height:%2020,%0D%0A%20%20%20%20depth:%2020%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20mass:%201,%0D%0A%0D%0A%20%20softbody:%20false,%0D%0A%0D%0A%20%20material:%20%7B%0D%0A%20%20%20%20kind:%20'basic',%0D%0A%20%20%20%20color:%200xffffff%0D%0A%20%20%7D%0D%0A%7D);%0D%0A%0D%0A//add%20box%20to%20world%0D%0Abox.addTo(world);%0D%0A%0D%0A//set%20mouse%20controls%20to%20intract%20with%20world%0D%0Aworld.setControls(WHS.orbitControls());%0D%0A%0D%0Aworld.start();%20//%20Start%20animations%20and%20physics%20simulation.">PLAYGROUND</a></div>

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
pass specific parameters to build this mesh as a __geometry__ object.

This shape can by set as a <a href="#shape-params-softbody">softbody</a> object.

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
  </ul>
</div>
