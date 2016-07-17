<h2 class="wso" id="shape">Shape</h2>

<div class="blockTitle h2">Structure. | <a target="_blank" href="http://whitestormjs.xyz/playground/?code=const%20world%20=%20new%20WHS.World(%7B%0D%0A%20%20autoresize:%20true,%0D%0A%20%20%0D%0A%20%20background:%20%7B%0D%0A%20%20%20%20color:%200xffffff%0D%0A%20%20%7D,%0D%0A%0D%0A%20%20camera:%20%7B%0D%0A%20%20%20%20z:%2050%0D%0A%20%20%7D%0D%0A%7D);%0D%0A%0D%0Aconst%20shape%20=%20new%20WHS.Shape(%0D%0A%20%20new%20THREE.Mesh(%20//%20Green%20sphere%20with%20radius%203.%0D%0A%20%20%20%20new%20THREE.SphereGeometry(3,%2032,%2032),%0D%0A%20%20%20%20new%20THREE.MeshBasicMaterial(%7Bcolor:%200x00ff00%7D)%0D%0A%20%20)%0D%0A);%0D%0A%0D%0Ashape.addTo(world);%0D%0A%0D%0Aworld.start();">PLAYGROUND</a> </div>

```javascript

const shape = new WHS.Shape(
  new THREE.Mesh( // Green sphere with radius 3.
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshBasicMaterial({color: 0x00ff00})
  )
);

shape.addTo(world);

```

```coffeescript

shape = new (WHS.Shape)(
  new (THREE.Mesh)(
    new (THREE.SphereGeometry)(3, 32, 32), new (THREE.MeshBasicMaterial)(color: 0x00ff00)
  )
)

shape.addTo world

```

<blockquote class="section">
  <header>Methods:</header>
  <table>
    <tr>
      <th>.build(...tags)</th><td>Aplly position and rotation to mesh, returning `Promise` when ready.</td>
    </tr>
    <tr>
      <th>.addTo(root, ...tags)</th><td>Adds WHS.Shape object to WHS.World. Returns Promise object.</td>
    </tr>
    <tr>
      <th>.copy(source)</th><td>Copy source object data to this object. Returns new WHS object.</td>
    </tr>
    <tr>
      <th>.clone()</th><td>Clone object and it’s parameters including latest position/rotation. Returns new WHS.Shape.</td>
    </tr>
    <tr>
      <th>.remove()</th><td>Remove object from scene. Returns removed WHS object.</td>
    </tr>
    <tr>
      <th>.G_(params)</th><td>Generates new geometry by geometry params object (specific for each shape).</td>
    </tr>
    <tr>
      <th>.M_(params)</th><td>Generates new material by material params object.</td>
    </tr>
    <tr>
      <th>.setAngularVelocity(x, y, z)</th><td>Sets angular(rotation) velocity to physics object.</td>
    </tr>
    <tr>
      <th>.setLinearVelocity(x, y, z)</th><td>Sets linear(position) velocity to physics object.</td>
    </tr>
    <tr>
      <th>.raycast(raycaster, intersects)</th><td>Get intersections between a casted ray and this mesh. Raycaster.intersectObject will call this method.</td>
    </tr>
  </table>
</blockquote>


<blockquote class="section">
  <header>Material types comrehantion:</header>
  <table>
    <tr>
      <th>basic</th><td>THREE.MeshBasicMaterial</td>
    </tr>
    <tr>
      <th>linebasic</th><td>THREE.MeshLineBasicMaterial</td>
    </tr>
    <tr>
      <th>linedashed</th><td>THREE.MeshLineDashedMaterial</td>
    </tr>
    <tr>
      <th>material</th><td>THREE.Material</td>
    </tr>
    <tr>
      <th>depth</th><td>THREE.MeshDepthMaterial</td>
    </tr>
    <tr>
      <th>face</th><td>THREE.MultiMaterial</td>
    </tr>
    <tr>
      <th>lambert</th><td>THREE.MeshLambertMaterial</td>
    </tr>
    <tr>
      <th>normal</th><td>THREE.MeshNormalMaterial</td>
    </tr>
    <tr>
      <th>phong</th><td>THREE.MeshPhongMaterial</td>
    </tr>
    <tr>
      <th>points</th><td>THREE.PointsMaterial</td>
    </tr>
    <tr>
      <th>pointcloud</th><td>THREE.MeshPointsMaterial</td>
    </tr>
    <tr>
      <th>rawshader</th><td>THREE.MeshRawShaderMaterial</td>
    </tr>
    <tr>
      <th>shader</th><td>THREE.MeshShaderMaterial</td>
    </tr>
    <tr>
      <th>standard</th><td>THREE.MeshStandardMaterial</td>
    </tr>
    <tr>
      <th>sprite</th><td>THREE.MeshSpriteMaterial</td>
    </tr>
  </table>
</blockquote>

<blockquote id="softbody-list" class="section">
  <header>List of shapes that support softbody:</header>
  <table>
    <tr>
      <th>Sphere</th><td>Full support</td>
    </tr>
    <tr>
      <th>Box</th><td>Experimental</td>
    </tr>
    <tr>
      <th></th><td><b>Other shapes will be added soon</b></td>
    </tr>
  </table>
</blockquote>

WHS.Shape is the parent class for all objects (except lights and cameras).
This class wraps a Three.js mesh and a Physi.js mesh within the whs parameters.

A Shape usually needs two things to be built:

A **Geometry** which is an object that contains options for generating vertices and faces.

A **Material**  which is an object that contains material properties of Three.js and friction and restitution options for physics calculation in Physi.js.

<div class="params" id="shape-params">
  <h5>Shape parameters <a href="#shape-params" class="anchor"></a></h5>
  <ul>
    <li id="shape-params-mass">
      <h3><a href="#shape-params-mass" class="anchor"></a> mass
        <span class="type">Number</span>
        <span class="default">10</span>
        <span class="only blue physics">PHYSICS ONLY</span>
      </h3>
      <p>Physics object mass. Should be applied only to objects with <a href="#shape-params-physics">physics parameter</a> turned on.</p>
    </li>
    <li id="shape-params-build">
      <h3><a href="#shape-params-build" class="anchor"></a> build
        <span class="type">Boolean</span>
        <span class="default">true</span>
      </h3>
      <p>Parameter which defines whether to build shape (generate geometry, material and set native[TODO: describe native])</p>
    </li>
    <li id="shape-params-softbody">
      <h3><a href="#shape-params-softbody" class="anchor"></a> softbody
        <span class="type">Boolean</span>
        <span class="default">false</span>
        <span class="only blue physics">PHYSICS ONLY</span>
      </h3>
      <p>Defines object's physics state. Default state is RigidBody which means that object is not solid. Can be also SoftBody if turned on. See <a href="#softbody-list">shapes that support softbody</a></p>
    </li>
    <li id="shape-params-geometry">
      <h3><a href="#shape-params-geometry" class="anchor"></a> geometry
        <span class="type">Object</span>
      </h3>
      <p>Geometry object is specific for each shape type. For example <code>WHS.Sphere</code> will have it's own object that contains only <code>radius</code> property.</p>
    </li>
    <li id="shape-params-material" class="nested">
      <h3><a href="#shape-params-material" class="anchor"></a> material
        <span class="type">Object</span>
      </h3>
      <p>Fog type. Can be <code>regular</code> or <code>expodential</code></p>
      <ul>
        <li>
          <h3>kind
            <span class="type">String</span>
            <span class="default">"basic"</span>
          </h3>
          <p>This property defines material type.</p>
        </li>
        <li>
          <h3>...
            <span class="only blue">THREE.Material properties</span>
          </h3>
          <p>Depends on material kind. <a href="http://threejs.org/docs/index.html?q=mater#Reference/Materials/Material">More about THREE.Material properties</a></p>
        </li>
      </ul>
    </li>
    <li id="shape-params-helpers" class="nested">
      <h3><a href="#shape-params-helpers" class="anchor"></a> helpers
        <span class="type">Object</span>
      </h3>
      <p>Shape helpers that help in development (TODO: Describe info from three.js)</p>
      <ul>
        <li>
          <h3>box
            <span class="type">Boolean</span>
            <span class="default">false</span>
          </h3>
          <p>Box helper</p>
        </li>
        <li>
          <h3>boundingBox
            <span class="type">Boolean</span>
            <span class="default">false</span>
          </h3>
          <p>BoundingBox helper</p>
        </li>
        <li>
          <h3>edges
            <span class="type">Boolean</span>
            <span class="default">false</span>
          </h3>
          <p>Edges helper</p>
        </li>
        <li>
          <h3>faceNormals
            <span class="type">Boolean</span>
            <span class="default">false</span>
          </h3>
          <p>FaceNormals helper</p>
        </li>
      </ul>
    </li>
    <li id="shape-params-pos" class="nested">
      <h3><a href="#shape-params-pos" class="anchor"></a> pos
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
    <li id="shape-params-rot" class="nested">
      <h3><a href="#shape-params-rot" class="anchor"></a> rot
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
    <li id="shape-params-scale" class="nested">
      <h3><a href="#shape-params-scale" class="anchor"></a> scale
        <span class="type">Object</span>
      </h3>
      <p>Object scale</p>
      <ul>
        <li>
          <h3>x
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Object scale x coordinate</p>
        </li>
        <li>
          <h3>y
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Object scale y coordinate</p>
        </li>
        <li>
          <h3>z
            <span class="type">Number</span>
            <span class="default">0</span>
          </h3>
          <p>Object scale z coordinate</p>
        </li>
      </ul>
    </li>
    <li id="shape-params-target" class="nested">
      <h3><a href="#shape-params-target" class="anchor"></a> target
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
    <li id="shape-params-morph" class="nested">
      <h3><a href="#shape-params-morph" class="anchor"></a> morph
        <span class="type">Object</span>
      </h3>
      <p>Only for <code>WHS.Morph</code> object</p>
      <ul>
        <li>
          <h3>speed
            <span class="type">Number</span>
            <span class="default">1</span>
          </h3>
          <p>Object animation speed</p>
        </li>
        <li>
          <h3>duration
            <span class="type">Number</span>
            <span class="default">1</span>
          </h3>
          <p>Object animation duration</p>
        </li>
      </ul>
    </li>
    <li id="shape-params-physics">
      <h3><a href="#shape-params-physics" class="anchor"></a> physics
        <span class="type">Boolean</span>
        <span class="default">true</span>
        <span class="only blue physics">PHYSICS ONLY</span>
      </h3>
      <p>Defines if object is a physics object</p>
    </li>
  </ul>
</div>

To choose material setup `kind` property with name of Three.js material type. For example *THREE.MeshLambertMaterial*
 will be "lambert".
<script src="https://gist.github.com/sasha240100/51180537efcdacb005a3.js"></script>

<aside class="success">
<b>WhitestormJS material support this types</b>:
</aside>
