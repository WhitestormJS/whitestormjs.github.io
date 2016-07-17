<h2 class="ws" id="model">Model</h2>

<div class="blockTitle h3">Basic model example</div>

```javascript

const teapot = new WHS.Model({
  geometry: {
    path: "assets/models/utah-teapot-large.json",
    physics: "assets/models/utah-teapot-light.json"
  },

  mass: 10,

  material: {
    vertexColors: THREE.VertexColors,
    shading: THREE.SmoothShading,
    map: WHS.texture('assets/textures/teapot.jpg', {repeat:{x: 2, y:2}}),
    kind: 'phong',
    side: THREE.DoubleSide,
    useCustomMaterial: true,
    rest: 0,
    fri: 1
  },

  pos: {
    x: 0,
    y: 100,
    z: 0
  },

  scale: {
    x: 4,
    y: 4,
    z: 4
  }
});

teapot.addTo(world);

```

```coffeescript

teapot = new (WHS.Model)(
  geometry:
    path: 'assets/models/utah-teapot-large.json'
    physics: 'assets/models/utah-teapot-light.json'
  mass: 10
  material:
    vertexColors: THREE.VertexColors
    shading: THREE.SmoothShading
    map: WHS.texture('assets/textures/teapot.jpg', repeat:
      x: 2
      y: 2)
    kind: 'phong'
    side: THREE.DoubleSide
    useCustomMaterial: true
    rest: 0
    fri: 1
  pos:
    x: 0
    y: 100
    z: 0
  scale:
    x: 4
    y: 4
    z: 4)

teapot.addTo world

```

Model class loads geometry from `JSON` file by url as it's material, but material you can replace with your own. Just add `useCustomMaterial` property with `true` value in `material` parameter object. This class should be used if none of other simple classes can generate such geometry or you basically need to load your custom geometry, that can be for example car or teapot model. 

- [Basic Model example](http://192.241.128.187/current/examples/basic/model/)
- [Example with several models of different types](http://192.241.128.187/current/examples/design/easter/)

<aside class="notice">This class inherits <a href="#shape">`WHS.Shape`</a> prototype.</aside>

<div class="params" id="model-geometry">
  <h5>Model geometry object <a href="#model-geometry" class="anchor"></a></h5>
  <ul>
    <li id="model-geometry-path">
      <h3><a href="#model-geometry-path" class="anchor"></a> path
        <span class="type">String</span>
        <span class="default">""</span>
      </h3>
      <p>Path to file that is a model which will be conerted to <code>geometry</code> and/or <code>material</code></p>
    </li>
    <li id="model-geometry-physics">
      <h3><a href="#model-geometry-physics" class="anchor"></a> physics
        <span class="type">String</span>
        <span class="only blue physics">PHYSICS ONLY</span>
      </h3>
      <p>Additional path to gile with geometry that will be used only by physics part</p>
    </li>
  </ul>
</div>

It is aviced to use 2 models if you need to create a high-polygonal shape for rendering. So you also need to set `physics` parameter in geometry with path to low-polygonal variation of model that you are going to use to achieve better physics performance.

<img src="images/shapes/forrendering.png" width="49%" alt="For rendering">
<img src="images/shapes/forphysics.png" width="50%" alt="For physics">


By default model class uses material loaded with model file (if such exists). To turn that ability off you may be interested in following additional properties to `material` parameter:

<div class="params" id="model-material">
  <h5>Custom material properties for model <a href="#model-material" class="anchor"></a></h5>
  <ul>
    <li id="model-material-useVertexColors">
      <h3><a href="#model-material-useVertexColors" class="anchor"></a> useVertexColors
        <span class="type">Boolean</span>
        <span class="default">false</span>
      </h3>
      <p>If <code>true</code> - will set <code>morphTargets</code> and <code>vertexColors</code> properties automatically to material that you define. Works similarly to <a href="#model-material-useCustomMaterial"><code>useCustomMaterial</code></a></p>
    </li>
    <li id="model-material-useCustomMaterial">
      <h3><a href="#model-material-useCustomMaterial" class="anchor"></a> useCustomMaterial
        <span class="type">Boolean</span>
        <span class="default">false</span>
      </h3>
      <p>Forces model class to use material provided by <code>material</code> property of <a href="#shape">WHS.Shape</a></p>
    </li>
  </ul>
</div>

Physics model object can be convex or concave. By default it's `convex` but you can also switch to concave:

<div class="params" id="model-physics">
  <h5>Physics parameters for model <a href="#model-physics" class="anchor"></a></h5>
  <ul>
    <li id="model-physics-type">
      <h3><a href="#model-physics-type" class="anchor"></a> type
        <span class="type">String</span>
        <span class="default">"convex"</span>
        <span class="only blue physics">PHYSICS ONLY</span>
      </h3>
      <p>Can be two types, <code>"convex"</code> or <code>"concave"</code>. Last once more affects performance of physics simulation proccess.</p>
    </li>
  </ul>
</div>

<aside class="notice">If you want to use animated model - you may be interested in similar class called <a href="#morph"><code>WHS.Morph</code></a></aside>

#### Simple teapot model added by WHS.Model class
<img src="images/shapes/model.png" alt="model created with whitestorm.js">
