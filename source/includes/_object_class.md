
## Object

<blockquote class="section">
  <header>Methods:</header>
  <table>
    <tr>
      <th>.setParams(params)</th><td>Sets params from scratch. (Compared to defaults)</td>
    </tr>
    <tr>
      <th>.updateParams(params)</th><td>Updates params. (Compared to previous params)</td>
    </tr>
    <tr>
      <th>.getParams()</th><td>Returns existing parameters.</td>
    </tr>
    <tr>
      <th>.add(object)</th><td>Adds objects as it's child.</td>
    </tr>
  </table>
</blockquote>


WHS.Object is a default class for all object's in whitestorm.js. Shape, Light, World... All this is based on `WHS.Object` class and has all it's functionality.

<div class="params" id="shape-params">
  <h5>Object returns <a href="#shape-params" class="anchor"></a></h5>
  <ul>
    <li id="shape-params-__whsobject">
      <h3><a href="#shape-params-__whsobject" class="anchor"></a> __whsobject
        <span class="type">Boolean</span>
      </h3>
      <p>Always <code>true</code></p>
    </li>
    <li id="shape-params-__releaseTime">
      <h3><a href="#shape-params-__releaseTime" class="anchor"></a> __releaseTime
        <span class="type">Number</span>
      </h3>
      <p>Time when this object is created. From 1 January 1970 in <code>ms</code>.</p>
    </li>
    <li id="shape-params-__params">
      <h3><a href="#shape-params-__params" class="anchor"></a> __params
        <span class="type">Object</span>
      </h3>
      <p>Parameters object</p>
    </li>
    <li id="shape-params-__defaults">
      <h3><a href="#shape-params-__defaults" class="anchor"></a> __defaults
        <span class="type">Object</span>
      </h3>
      <p>Default values that are applied to this object.</p>
    </li>
    <li id="shape-params-parent">
      <h3><a href="#shape-params-parent" class="anchor"></a> parent
        <span class="type">Object</span>
        <span class="default">null</span>
      </h3>
      <p>Parent of this object. (Only if object is structurable)</p>
    </li>
    <li id="shape-params-children">
      <h3><a href="#shape-params-children" class="anchor"></a> children
        <span class="type">Object</span>
        <span class="default">[]</span>
      </h3>
      <p>Child nodes of this object. (Only if object is structurable)</p>
    </li>
  </ul>
</div>
