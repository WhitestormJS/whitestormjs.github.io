<h2 class="wso" id="world">World</h2>

<div class="blockTitle h3">Defaults for <code>WHS.World</code> Class:</div>

```json
{
   "stats": false,
   "autoresize": false,
   "softbody": false,

   "shadowmap": {
      "enabled": true,
      "type": THREE.PCFSoftShadowMap
   },

   "helpers": {
      "grid": false,
      "axis": false
   },

   "gravity": {
      "x": 0,
      "y": 0,
      "z": 0
   },

   "camera": {
      "aspect": 75,
      "near": 1,
      "far": 1000,
      "x": 0,
      "y": 0,
      "z": 0
   },

   "rWidth": 1,
   "rHeight": 1,

   "width": 1280,
   "height": 294,

   "physics": {
      "fixedTimeStep":  1 / 60
   },

   "fog": {
      "type": false,
      "density": 0.00025,
      "hex": 0,
      "near": 1,
      "far": 1000
   },

   "background": {
      "color": 0,
      "opacity": 1
   },

   "renderer": {},
   "container": document.body
}

```

World is an object that contains all other objects. (TODO)

<div class="params" id="world-properties">
  <h5>Properties <a href="#world-properties" class="anchor"></a></h5>
  <ul>
    <li id="world-properties-stats">
      <h3><a href="#world-properties-stats" class="anchor"></a> stats
        <span class="type">Boolean</span>
        <span class="default">false</span>
      </h3>
      <p>Stats.js extension for three.js and physi.js frame rate/miliseconds or megabytes calculation.</p>
    </li>
    <li id="world-properties-autoresize">
      <h3><a href="#world-properties-autoresize" class="anchor"></a> autoresize
        <span class="type">Boolean</span>
        <span class="default">false</span>
      </h3>
      <p>Turn on if you want to have your app resized with window or it's container width and height properties.</p>
    </li>
    <li id="world-properties-softbody">
      <h3><a href="#world-properties-softbody" class="anchor"></a> softbody
        <span class="type">Boolean</span>
        <span class="default">false</span>
      </h3>
      <p>Should be turned on if you are going to use softbodies in your world. That will force physi.js to use <code>btSoftRigidDynamicsWorld</code></p>
    </li>
    <li id="world-properties-shadowmap" class="nested">
      <h3><a href="#world-properties-shadowmap" class="anchor"></a> shadowmap
        <span class="type">Object</span>
      </h3>
      <p>Shadowmap propertis for Three.js scene</p>
      <ul>
        <li>
          <h3>enabled
            <span class="type">Boolean</span>
            <span class="default">true</span>
          </h3>
          <p>Shadowmap enabled state. If <code>false</code> - scene will receive no shadow</p>
        </li>
        <li>
          <h3>type
            <span class="type">Number</span>
            <span class="default">THREE.PCFSoftShadowMap</span>
          </h3>
          <p>Shadowmap type number</p>
        </li>
      </ul>
    </li>
    <li id="world-properties-helpers" class="nested">
      <h3><a href="#world-properties-helpers" class="anchor"></a> helpers
        <span class="type">Object</span>
      </h3>
      <p>World helpers (TODO)</p>
      <ul>
        <li>
          <h3>grid
            <span class="type">Boolean</span>
            <span class="default">false</span>
          </h3>
          <p>Grid helper for world</p>
        </li>
        <li>
          <h3>axis
            <span class="type">Boolean</span>
            <span class="default">false</span>
          </h3>
          <p>Axis helper for world</p>
        </li>
      </ul>
    </li>
    <li id="world-properties-gravity" class="nested">
      <h3><a href="#world-properties-gravity" class="anchor"></a> gravity
        <span class="type">Object</span>
      </h3>
      <p>Gravity direction</p>
      <ul>
        <li>
          <h3>x
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Gravity direction x coordinate</p>
        </li>
        <li>
          <h3>y
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Gravity direction y coordinate</p>
        </li>
        <li>
          <h3>z
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Gravity direction z coordinate</p>
        </li>
      </ul>
    </li>
    <li id="world-properties-camera">
      <h3><a href="#world-properties-camera" class="anchor"></a> camera
        <span class="type">Object</span>
      </h3>
      <p><a href="#world-camera">Camera object</a></p>
    </li>
    <li id="world-properties-rWidth">
      <h3><a href="#world-properties-rWidth" class="anchor"></a> rWidth
        <span class="type">Number (0 - 1)</span>
        <span class="default">1</span>
      </h3>
      <p>Width resolution ratio</p>
    </li>
    <li id="world-properties-rHeight">
      <h3><a href="#world-properties-rHeight" class="anchor"></a> rHeight
        <span class="type">Number (0 - 1)</span>
        <span class="default">1</span>
      </h3>
      <p>Height resolution ratio</p>
    </li>
    <li id="world-properties-width">
      <h3><a href="#world-properties-width" class="anchor"></a> width
        <span class="type">Number</span>
        <span class="default">window.innerWidth</span>
      </h3>
      <p>Width of canvas for the world</p>
    </li>
    <li id="world-properties-height">
      <h3><a href="#world-properties-height" class="anchor"></a> height
        <span class="type">Number</span>
        <span class="default">window.innerHeight</span>
      </h3>
      <p>Height of canvas for the world</p>
    </li>
    <li id="world-properties-physics">
      <h3><a href="#world-properties-physics" class="anchor"></a> physics
        <span class="type">Object</span>
      </h3>
      <p><a href="#world-physics">Physics object</a></p>
    </li>
    <li id="world-properties-fog">
      <h3><a href="#world-properties-fog" class="anchor"></a> fog
        <span class="type">Object</span>
      </h3>
      <p><a href="#world-fog">Fog object</a></p>
    </li>
    <li id="world-properties-background" class="nested">
      <h3><a href="#world-properties-background" class="anchor"></a> background
        <span class="type">Object</span>
      </h3>
      <p>Canvas/world background color and opacity</p>
      <ul>
        <li>
          <h3>color
            <span class="type">HEX</span>
            <span class="default">0x000000</span>
          </h3>
          <p>World background color</p>
        </li>
        <li>
          <h3>opacity
            <span class="type">Number (0 - 1)</span>
            <span class="default">1</span>
          </h3>
          <p>World background opacity</p>
        </li>
      </ul>
    </li>
    <li id="world-properties-container">
      <h3><a href="#world-properties-container" class="anchor"></a> container
        <span class="type">DOM Object</span>
        <span class="default">document.body</span>
      </h3>
      <p>DOM Object that world canvas will be appended to</p>
    </li>
  </ul>
</div>

<div class="params" id="world-camera">
  <h5>Camera object <a href="#world-camera" class="anchor"></a></h5>
  <ul>
    <li id="world-camera-xyz">
      <h3><a href="#world-camera-xyz" class="anchor"></a> x, y, z
        <span class="type">Numbers</span>
        <span class="default">0, 0, 0</span>
      </h3>
      <p>Camera position x, y, z properties</p>
    </li>
    <li id="world-camera-aspect">
      <h3><a href="#world-camera-aspect" class="anchor"></a> aspect
        <span class="type">Number</span>
        <span class="default">75</span>
      </h3>
      <p>Camera aspect</p>
    </li>
    <li id="world-camera-near">
      <h3><a href="#world-camera-near" class="anchor"></a> near
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Camera near</p>
    </li>
    <li id="world-camera-far">
      <h3><a href="#world-camera-far" class="anchor"></a> far
        <span class="type">Number</span>
        <span class="default">1000</span>
      </h3>
      <p>Camera far</p>
    </li>
  </ul>
</div>

<div class="params" id="world-physics">
  <h5>Physics object <a href="#world-physics" class="anchor"></a></h5>
  <ul>
    <li id="world-camera-fixedTimeStep">
      <h3><a href="#world-physics-fixedTimeStep" class="anchor"></a> fixedTimeStep
        <span class="type">Numbers</span>
        <span class="default">1 / 60</span>
      </h3>
      <p>Fixed time step for physics simulation</p>
    </li>
  </ul>
</div>

<div class="params" id="world-fog">
  <h5>Fog object <a href="#world-fog" class="anchor"></a></h5>
  <ul>
    <li id="world-fog-enabled">
      <h3><a href="#world-fog-enabled" class="anchor"></a> enabled
        <span class="type">Boolean</span>
        <span class="default">false</span>
      </h3>
      <p>Fog enabled state</p>
    </li>
    <li id="world-fog-type">
      <h3><a href="#world-fog-type" class="anchor"></a> type
        <span class="type">String</span>
        <span class="default">regular</span>
      </h3>
      <p>Fog type. Can be <code>regular</code> or <code>expodential</code></p>
    </li>
    <li id="world-fog-hex">
      <h3><a href="#world-fog-hex" class="anchor"></a> hex
        <span class="type">HEX</span>
        <span class="default">0x000000</span>
      </h3>
      <p>Fog color</p>
    </li>
    <li id="world-fog-density">
      <h3><a href="#world-fog-density" class="anchor"></a> density
        <span class="type">Number</span>
        <span class="default">0.00025</span>
      </h3>
      <p>Fog density. Will be applied if fog type is <code>expodential</code></p>
    </li>
    <li id="world-fog-near">
      <h3><a href="#world-fog-near" class="anchor"></a> near
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Fog near. Will be applied if fog type is <code>regular</code></p>
    </li>
    <li id="world-fog-far">
      <h3><a href="#world-fog-far" class="anchor"></a> far
        <span class="type">Number</span>
        <span class="default">1000</span>
      </h3>
      <p>Fog far. Will be applied if fog type is <code>regular</code></p>
    </li>
  </ul>
</div>