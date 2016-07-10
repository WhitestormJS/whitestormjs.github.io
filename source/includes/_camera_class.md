<h2 class="wso" id="camera">Camera</h2>

<blockquote class="section">
  <header>Methods:</header>
  <table>
    <tr>
      <th>.addTo(root, ...tags)</th><td>Adds WHS.Shape object to WHS.World. Returns Promise object.</td>
    </tr>
    <tr>
      <th>.copy(source)</th><td>Copy source object data to this object. Returns new WHS object.</td>
    </tr>
    <tr>
      <th>.clone()</th><td>Clone object and it’s parameters including latest position/rotation. Returns new WHS.Camera.</td>
    </tr>
    <tr>
      <th>.lookAt()</th><td>Rotates camera to look at object.</td>
    </tr>
    <tr>
      <th>.follow(curve, time, loop, lookAt)</th><td>Animates camera to go through curve.</td>
    </tr>
    <tr>
      <th>.getWorldDirection()</th><td>TODO.</td>
    </tr>
  </table>
</blockquote>

WHS.Camera is a default class for camera objects. It it used in WHS.PerspectiveCamera and WHS.OrtographicCamera

<div class="params" id="camera-params">
  <h5>Camera parameters <a href="#camera-params" class="anchor"></a></h5>
  <ul>
    <li id="camera-params-camera">
      <h3><a href="#camera-params-camera" class="anchor"></a> camera
        <span class="type">Object</span>
      </h3>
      <p><a href="#camera-object">Camera object</a></p>
    </li>
    <li id="camera-params-pos" class="nested">
      <h3><a href="#camera-params-pos" class="anchor"></a> pos
        <span class="type">Object</span>
      </h3>
      <p>Camera position</p>
      <ul>
        <li>
          <h3>x
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Camera position x coordinate</p>
        </li>
        <li>
          <h3>y
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Camera position y coordinate</p>
        </li>
        <li>
          <h3>z
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Camera position z coordinate</p>
        </li>
      </ul>
    </li>
    <li id="camera-params-rot" class="nested">
      <h3><a href="#camera-params-rot" class="anchor"></a> rot
        <span class="type">Object</span>
      </h3>
      <p>Camera rotation</p>
      <ul>
        <li>
          <h3>x
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Camera rotation x coordinate</p>
        </li>
        <li>
          <h3>y
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Camera rotation y coordinate</p>
        </li>
        <li>
          <h3>z
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Camera rotation z coordinate</p>
        </li>
      </ul>
    </li>
    <li id="camera-params-target" class="nested">
      <h3><a href="#camera-params-target" class="anchor"></a> target
        <span class="type">Object</span>
      </h3>
      <p>Camera target</p>
      <ul>
        <li>
          <h3>x
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Camera target x coordinate</p>
        </li>
        <li>
          <h3>y
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Camera target y coordinate</p>
        </li>
        <li>
          <h3>z
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Camera target z coordinate</p>
        </li>
      </ul>
    </li>
  </ul>
</div>

<div class="params" id="camera-object">
  <h5>Camera parameters <a href="#camera-object" class="anchor"></a></h5>
  <ul>
    <li id="camera-object-fov">
      <h3><a href="#camera-object-fov" class="anchor"></a> fov
        <span class="type">Number</span>
        <span class="default">45</span>
      </h3>
      <p>Camera object fov</p>
    </li>
    <li id="camera-object-aspect">
      <h3><a href="#camera-object-aspect" class="anchor"></a> aspect
        <span class="type">Number</span>
        <span class="default">window.innerWidth / window.innerHeight</span>
      </h3>
      <p>Camera object aspect</p>
    </li>
    <li id="camera-object-near">
      <h3><a href="#camera-object-near" class="anchor"></a> near
        <span class="type">Number</span>
        <span class="default">1</span>
      </h3>
      <p>Camera object near</p>
    </li>
    <li id="camera-object-far">
      <h3><a href="#camera-object-far" class="anchor"></a> far
        <span class="type">Number</span>
        <span class="default">1000</span>
      </h3>
      <p>Camera object far</p>
    </li>
    <li id="camera-object-left">
      <h3><a href="#camera-object-left" class="anchor"></a> left
        <span class="type">Number</span>
        <span class="default">window.innerWidth / -2</span>
      </h3>
      <p>Camera object left</p>
    </li>
    <li id="camera-object-right">
      <h3><a href="#camera-object-right" class="anchor"></a> right
        <span class="type">Number</span>
        <span class="default">window.innerWidth / 2</span>
      </h3>
      <p>Camera object right</p>
    </li>
    <li id="camera-object-top">
      <h3><a href="#camera-object-top" class="anchor"></a> top
        <span class="type">Number</span>
        <span class="default">window.innerWidth / 2</span>
      </h3>
      <p>Camera object top</p>
    </li>
    <li id="camera-object-bottom">
      <h3><a href="#camera-object-bottom" class="anchor"></a> bottom
        <span class="type">Number</span>
        <span class="default">window.innerWidth / -2</span>
      </h3>
      <p>Camera object bottom</p>
    </li>
    <li id="camera-object-cubeResolution">
      <h3><a href="#camera-object-cubeResolution" class="anchor"></a> cubeResolution
        <span class="type">Number</span>
        <span class="default">128</span>
      </h3>
      <p>Camera object cubeResolution</p>
    </li>
  </ul>
</div>