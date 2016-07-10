<h2 class="wso" id="curve">Curve</h2>

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
  </table>
</blockquote>

WHS.Curve is similar to WHS.Shape but for curves. It wraps curve and makes a THREE.Line from it.

<div class="params" id="curve-params">
  <h5>Curve parameters <a href="#curve-params" class="anchor"></a></h5>
  <ul>
    <li id="curve-params-curve">
      <h3><a href="#curve-params-curve" class="anchor"></a> curve
        <span class="type">THREE.Curve</span>
        <span class="default">false</span>
      </h3>
      <p>Curve object</p>
    </li>
    <li id="curve-params-points">
      <h3><a href="#curve-params-points" class="anchor"></a> points
        <span class="type">Number</span>
        <span class="default">50</span>
      </h3>
      <p>Number of vertices to draw a path from curve</p>
    </li>
  </ul>
</div>