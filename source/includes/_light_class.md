<h2 class="wso" id="light">Light</h2>

<div class="blockTitle h2">Example of using light</div>

```javascript

const light = new WHS.SpotLight( {
  light: {
    color: 0xffffff,
    intensity: 0.3,
    distance: 500
  },

  shadowmap: {
    width: 2048,
    height: 2048,
    top: 0,
    fov: 90
  },

  pos: {
    x: 160,
    y: 120,
    z: 160
  },

  target: {
    y: 10
  }
});

light.addTo(world);

```

```coffeescript

light = new (WHS.SpotLight)(
  light:
    color: 0xffffff
    intensity: 0.3
    distance: 500
  shadowmap:
    width: 2048
    height: 2048
    top: 0
    fov: 90
  pos:
    x: 160
    y: 120
    z: 160
  target: y: 10)

light.addTo world

```

<blockquote class="section">
  <header>Methods:</header>
  <table>
    <tr>
      <th>.build(...tags)</th><td>Aplly position and rotation to mesh, returning `Promise` when ready.</td>
    </tr>
    <tr>
      <th>.addTo(root, ...tags)</th><td>Adds WHS.Light object to WHS.World. Returns Promise object.</td>
    </tr>
    <tr>
      <th>.copy(source)</th><td>Copy source object data to this object. Returns new WHS object.</td>
    </tr>
    <tr>
      <th>.clone()</th><td>Clone object and it’s parameters including latest position/rotation. Returns new WHS.Light.</td>
    </tr>
    <tr>
      <th>.remove()</th><td>Remove object from scene. Returns removed WHS object.</td>
    </tr>
    <tr>
      <th>.buildShadow()</th><td>Apply shadowmap parameters to light.</td>
    </tr>
  </table>
</blockquote>

<aside class="notice"> Almost similar to <a href="#whs-shape-class"><code>WHS.Shape</code></a></aside>

WHS.Light class is very similar to WHS.Shape, but it is optimized for lights, because WHS.Shape doesn't support processing properties like `light` or `shadowmap`. It doesn't have `geometry`, `mass`, and `material`.

<div class="params" id="light-params">
  <h5>Light parameters <a href="#light-params" class="anchor"></a></h5>
  <ul>
    <li id="light-params-light">
      <h3><a href="#light-params-light" class="anchor"></a> light
        <span class="type">Object</span>
      </h3>
      <p><a href="#light-light">Light object</a></p>
    </li>
    <li id="light-params-helper">
      <h3><a href="#light-params-helper" class="anchor"></a> helper
        <span class="type">Boolean</span>
        <span class="default">false</span>
      </h3>
      <p>Shape helpers that help in development (TODO: Describe info from three.js)</p>
    </li>
    <li id="light-params-shadowmap">
      <h3><a href="#light-params-shadowmap" class="anchor"></a> shadowmap
        <span class="type">Object</span>
      </h3>
      <p><a href="#light-shadowmap">Shadowmap object</a></p>
    </li>
    <li id="light-params-pos" class="nested">
      <h3><a href="#light-params-pos" class="anchor"></a> pos
        <span class="type">Object</span>
      </h3>
      <p>Object position</p>
      <ul>
        <li>
          <h3>x
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Object position x coordinate</p>
        </li>
        <li>
          <h3>y
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Object position y coordinate</p>
        </li>
        <li>
          <h3>z
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Object position z coordinate</p>
        </li>
      </ul>
    </li>
    <li id="light-params-rot" class="nested">
      <h3><a href="#light-params-rot" class="anchor"></a> rot
        <span class="type">Object</span>
      </h3>
      <p>Object rotation</p>
      <ul>
        <li>
          <h3>x
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Object rotation x coordinate</p>
        </li>
        <li>
          <h3>y
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Object rotation y coordinate</p>
        </li>
        <li>
          <h3>z
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Object rotation z coordinate</p>
        </li>
      </ul>
    </li>
    <li id="light-params-target" class="nested">
      <h3><a href="#light-params-target" class="anchor"></a> target
        <span class="type">Object</span>
      </h3>
      <p>Object target</p>
      <ul>
        <li>
          <h3>x
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Object target x coordinate</p>
        </li>
        <li>
          <h3>y
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Object target y coordinate</p>
        </li>
        <li>
          <h3>z
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Object target z coordinate</p>
        </li>
      </ul>
    </li>
  </ul>
</div>

<div class="params" id="light-light">
  <h5>Light object <a href="#light-light" class="anchor"></a></h5>
  <ul>
    <li id="light-light-color">
      <h3><a href="#light-light-color" class="anchor"></a> color
        <span class="type">HEX</span>
        <span class="default">0xffffff</span>
      </h3>
      <p>Light color</p>
    </li>
    <li id="light-light-skyColor">
      <h3><a href="#light-light-skyColor" class="anchor"></a> skyColor
        <span class="type">HEX</span>
        <span class="default">0xffffff</span>
      </h3>
      <p>Light skyColor</p>
    </li>
    <li id="light-light-groudColor">
      <h3><a href="#light-light-groudColor" class="anchor"></a> groudColor
        <span class="type">HEX</span>
        <span class="default">0xffffff</span>
      </h3>
      <p>Light groudColor</p>
    </li>
    <li id="light-light-intensity">
      <h3><a href="#light-light-intensity" class="anchor"></a> intensity
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Light intensity</p>
    </li>
    <li id="light-light-distance">
      <h3><a href="#light-light-distance" class="anchor"></a> distance
        <span class="type">Number</span>
        <span class="default">100</span>
      </h3>
      <p>Light distance</p>
    </li>
    <li id="light-light-angle">
      <h3><a href="#light-light-angle" class="anchor"></a> angle
        <span class="type">Number</span>
        <span class="default">Math.PI / 3</span>
      </h3>
      <p>Light angle</p>
    </li>
    <li id="light-light-exponent">
      <h3><a href="#light-light-exponent" class="anchor"></a> exponent
        <span class="type">Number</span>
        <span class="default">0</span>
      </h3>
      <p>Light exponent</p>
    </li>
    <li id="light-light-decay">
      <h3><a href="#light-light-decay" class="anchor"></a> decay
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Light decay</p>
    </li>
  </ul>
</div>


<div class="params" id="light-shadowmap">
  <h5>Shadowmap object <a href="#light-shadowmap" class="anchor"></a></h5>
  <ul>
    <li id="light-shadowmap-cast">
      <h3><a href="#light-shadowmap-cast" class="anchor"></a> cast
        <span class="type">Boolean</span>
        <span class="default">true</span>
      </h3>
      <p>Defines if light needs to cast shadow from other objects</p>
    </li>
    <li id="light-shadowmap-bias">
      <h3><a href="#light-shadowmap-bias" class="anchor"></a> bias
        <span class="type">Number</span>
        <span class="default">0</span>
      </h3>
      <p>Shadowmap bias</p>
    </li>
    <li id="light-shadowmap-width">
      <h3><a href="#light-shadowmap-width" class="anchor"></a> width
        <span class="type">Number</span>
        <span class="default">1024</span>
      </h3>
      <p>Shadowmap width</p>
    </li>
    <li id="light-shadowmap-height">
      <h3><a href="#light-shadowmap-height" class="anchor"></a> height
        <span class="type">Number</span>
        <span class="default">1024</span>
      </h3>
      <p>Shadowmap height</p>
    </li>
    <li id="light-shadowmap-near">
      <h3><a href="#light-shadowmap-near" class="anchor"></a> near
        <span class="type">Number</span>
        <span class="default">true</span>
      </h3>
      <p>Shadowmap near</p>
    </li>
    <li id="light-shadowmap-far">
      <h3><a href="#light-shadowmap-far" class="anchor"></a> far
        <span class="type">Number</span>
        <span class="default">400</span>
      </h3>
      <p>Shadowmap far</p>
    </li>
    <li id="light-shadowmap-fov">
      <h3><a href="#light-shadowmap-fov" class="anchor"></a> fov
        <span class="type">Number</span>
        <span class="default">60</span>
      </h3>
      <p>Shadowmap fov</p>
    </li>
    <li id="light-shadowmap-top">
      <h3><a href="#light-shadowmap-top" class="anchor"></a> top
        <span class="type">Number</span>
        <span class="default">200</span>
      </h3>
      <p>Shadowmap top</p>
    </li>
    <li id="light-shadowmap-bottom">
      <h3><a href="#light-shadowmap-bottom" class="anchor"></a> bottom
        <span class="type">Number</span>
        <span class="default">-200</span>
      </h3>
      <p>Shadowmap bottom</p>
    </li>
    <li id="light-shadowmap-left">
      <h3><a href="#light-shadowmap-left" class="anchor"></a> left
        <span class="type">Number</span>
        <span class="default">-200</span>
      </h3>
      <p>Shadowmap left</p>
    </li>
    <li id="light-shadowmap-right">
      <h3><a href="#light-shadowmap-right" class="anchor"></a> right
        <span class="type">Number</span>
        <span class="default">200</span>
      </h3>
      <p>Shadowmap right</p>
    </li>
  </ul>
</div>