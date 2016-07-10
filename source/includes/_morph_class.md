<h2 class="ws" id="morph">Morph</h2>

<div class="blockTitle h3">Basic morph example</div>

```javascript

const morph = GAME.Morph( {
  geometry: {
    path: "assets/models/morph/parrot.js"
  },

  material: {
    kind: 'basic',
    useVertexColors: true
  },

  scale: {
    x: 0.1,
    y: 0.1,
    z: 0.1
  },

  morph: {
    duration: 0.5,
    speed: 250
  }
});

morph.addTo(world);

```

```coffeescript

morph = GAME.Morph(
  geometry: path: 'assets/models/morph/parrot.js'
  material:
    kind: 'basic'
    useVertexColors: true
  scale:
    x: 0.1
    y: 0.1
    z: 0.1
  morph:
    duration: 0.5
    speed: 250)

morph.addTo world

```


`WHS.Model` is a class for loading animated models or meshes.

`WHS.Morph` is used for creating animated object's that doesn't support physics. Off course you can make your own class, based on `WHS.Shape` that will run animation and support physics. But you will need to update your geometry in Physi.js each time you update anmation. Physi.js currently provides physic only for static geometries. 

<div class="params" id="morph-geometry">
  <h5>Model geometry object <a href="#morph-geometry" class="anchor"></a></h5>
  <ul>
    <li id="morph-geometry-path">
      <h3><a href="#morph-geometry-path" class="anchor"></a> path
        <span class="type">String</span>
        <span class="default">""</span>
      </h3>
      <p>Morph geometry path</p>
    </li>
  </ul>
</div>

The same as in `WHS.Model` you can use `useVertexColors` and `useCustomMaterial` properties.

Right example will create the following:

<img src="images/shapes/morph.png" alt="first morph keyframe">

And each frame it will change:

<img src="images/shapes/morph2.png" alt="another morph keyframe">

<aside class="notice">
	This class use <code>morph</code> property in <code>WHS.Shape</code>. You need to specify <code>duration</code> and <code>speed</code> settings.
</aside>