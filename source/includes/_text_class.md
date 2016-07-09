<h2 class="ws" id="text">Text [Class]</h2>

<div class="blockTitle h3">Basic text example</div>

```javascript

const text = new WHS.Text({
  geometry: {
    text: 'hello world',
    parameters: {
      font: 'assets/fonts/gentilis_bold.typeface.js',
      size: 20,
      height: 5,
      curveSegments: 6
    }
  },

  mass: 10,

  material: {
    color: 0x00ff00,
    kind: "lambert"
  },

  pos: {
    x: -40,
    y: 20,
    z: 0
  }
});

text.addTo(world);

```

```coffeescript

text = new (WHS.Text)(
  geometry:
    text: 'hello world'
    parameters:
      font: 'assets/fonts/gentilis_bold.typeface.js'
      size: 20
      height: 5
      curveSegments: 6
  mass: 10
  material:
    color: 0x00ff00
    kind: 'lambert'
  pos:
    x: -40
    y: 20
    z: 0)

text.addTo world

```


`WHS.Text` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

`WHS.Text` class is made for creating 3D text objects.

<div class="params" id="text-geometry">
  <h5>Text geometry object <a href="#text-geometry" class="anchor"></a></h5>
  <ul>
    <li id="text-geometry-text">
      <h3><a href="#text-geometry-text" class="anchor"></a> text
        <span class="type">String</span>
        <span class="default">"Hello World!"</span>
      </h3>
      <p>Text geometry text</p>
    </li>
    <li id="text-geometry-parameters">
      <h3><a href="#text-geometry-parameters" class="anchor"></a> parameters
        <span class="type">Object</span>
      </h3>
      <p><a href="#text-parameters">Parameters object</a></p>
    </li>
  </ul>
</div>

<div class="params" id="text-parameters">
  <h5>Parameters object <a href="#text-parameters" class="anchor"></a></h5>
  <ul>
    <li id="text-parameters-size">
      <h3><a href="#text-parameters-size" class="anchor"></a> size
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Text parameters size</p>
    </li>
    <li id="text-parameters-height">
      <h3><a href="#text-parameters-height" class="anchor"></a> height
        <span class="type">Number</span>
        <span class="default">50</span>
      </h3>
      <p>Text parameters height</p>
    </li>
    <li id="text-parameters-curveSegments">
      <h3><a href="#text-parameters-curveSegments" class="anchor"></a> curveSegments
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Text parameters curveSegments</p>
    </li>
    <li id="text-parameters-font">
      <h3><a href="#text-parameters-font" class="anchor"></a> font
        <span class="type">String</span>
        <span class="default">"Adelle"</span>
      </h3>
      <p>Text parameters font</p>
    </li>
    <li id="text-parameters-weight">
      <h3><a href="#text-parameters-weight" class="anchor"></a> weight
        <span class="type">String</span>
        <span class="default">"normal"</span>
      </h3>
      <p>Text parameters weight</p>
    </li>
    <li id="text-parameters-style">
      <h3><a href="#text-parameters-style" class="anchor"></a> style
        <span class="type">String</span>
        <span class="default">"normal"</span>
      </h3>
      <p>Text parameters style</p>
    </li>
    <li id="text-parameters-bevelEnabled">
      <h3><a href="#text-parameters-bevelEnabled" class="anchor"></a> bevelEnabled
        <span class="type">Boolean</span>
        <span class="default">false</span>
      </h3>
      <p>Text parameters bevelEnabled</p>
    </li>
    <li id="text-parameters-bevelThickness">
      <h3><a href="#text-parameters-bevelThickness" class="anchor"></a> bevelThickness
        <span class="type">Number</span>
        <span class="default">10</span>
      </h3>
      <p>Text parameters bevelThickness</p>
    </li>
    <li id="text-parameters-bevelSize">
      <h3><a href="#text-parameters-bevelSize" class="anchor"></a> bevelSize
        <span class="type">Number</span>
        <span class="default">8</span>
      </h3>
      <p>Text parameters bevelSize</p>
    </li>
  </ul>
</div>

<script src="https://gist.github.com/sasha240100/158b43f76862cf606c06.js"></script>

<img src="images/shapes/text.png" alt="rendered text on it's example">