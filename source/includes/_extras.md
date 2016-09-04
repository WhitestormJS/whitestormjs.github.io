<h1 class="big" id="extras">Extras</h1>



<h2 class="wso" id="skybox">Skybox</h2>

<div class="blockTitle h3">Adding SkyBox</div>

```javascript

new WHS.Skybox({
  path: 'assets/textures/skybox/skymap',
  imgSuffix: '.png',
  skyType: 'sphere',
  radius: world.getCamera().getNative().far,

  rot: {
    y: Math.PI / 180 * -90
  },

  pos: {
    y: -200
  }
}).addTo(world);

```

```coffeescript

new (WHS.Skybox)(
  path: 'assets/textures/skybox/skymap'
  imgSuffix: '.png'
  skyType: 'sphere'
  radius: world.getCamera().getNative().far
  rot: y: Math.PI / 180 * -90
  pos: y: -200).addTo world

```

Skybox is frequently used in 3D games. You can easily create skies around your virtual world by setting `path` to your image in <a href="#extras-skybox">SkyBox options</a> and <a href="#extras-skybox-imgSuffix">extension property</a>.
Skybox can be 2 types:

 - **box** - Skybox is a mesh with THREE.BoxGeometry geometry and requires 6 images to build skybox. They should end with one of 'xpos', 'xneg', 'ypos', 'yneg', 'zpos', 'zneg' and extension name.

Example: **images/myskyboxname-xpos.png**. Where `path` is **images/myskyboxname-**, `imgSuffix` is **.png**.

 - **sphere** - Requires only one image to be.

Example: **images/myskyboxname.png**. Where `path` is **images/myskyboxname**, `imgSuffix` is **.png**.


<div class="params" id="extras-skybox">
  <h5>Skybox options <a href="#extras-skybox" class="anchor"></a></h5>
  <ul>
    <li id="extras-skybox-skytype">
      <h3><a href="#extras-skybox-skytype" class="anchor"></a> skytype
        <span class="type">String</span>
        <span class="default">box</span>
      </h3>
      <p>Type of skybox. Can be <code>box</code> or <code>sphere</code></p>
    </li>
    <li id="extras-skybox-imgSuffix">
      <h3><a href="#extras-skybox-imgSuffix" class="anchor"></a> imgSuffix
        <span class="type">String</span>
        <span class="default">".png"</span>
      </h3>
      <p>Your image file extension. (Starts with dot)</p>
    </li>
    <li id="extras-skybox-radius">
      <h3><a href="#extras-skybox-radius" class="anchor"></a> radius
        <span class="type">Number</span>
        <span class="default">10</span>
      </h3>
      <p>Radius of skybox if <code>sphere</code> or a / 2 of cube if <code>box</code> </p>
    </li>
    <li id="extras-skybox-fog">
      <h3><a href="#extras-skybox-fog" class="anchor"></a> fog
        <span class="type">Boolean</span>
        <span class="default">true</span>
      </h3>
      <p>Skybox support of <a href="#world-fog">fog</a></p>
    </li>
    <li id="extras-skybox-path">
      <h3><a href="#extras-skybox-path" class="anchor"></a> path
        <span class="type">String</span>
        <span class="default">""</span>
      </h3>
      <p>Path is a relative url to skybox image. Should be without file extension because it is defined in <a href="#extras-skybox-imgSuffix">other property</a>.</p>
    </li>
  </ul>
</div>


### Skybox example
<img src="images/skybox.png" alt="Skybox in fps example.">



<h2 class="ws" id="group">Group</h2>

<div class="blockTitle h3">Using group</div>

```javascript

const object1 = new WHS.Box({
  material: {
    kind: 'phong',
    color: 0x00ff00
  }
});

const object2 = new WHS.Box({
  material: {
    kind: 'phong',
    color: 0x0000ff
  }
});

const group = new WHS.Group(object1, object2);

group.addTo(world);

```

```coffeescript

object1 = new (WHS.Box)(material:
  kind: 'phong'
  color: 0x00ff00)

object2 = new (WHS.Box)(material:
  kind: 'phong'
  color: 0x0000ff)

group = new (WHS.Group)(object1, object2)
group.addTo world

```

`WHS.Group` equivalent in three.js is Object3D. It also has position and rotation that will affect it's children object and usually used just for this.

Has been used in [Saturn](http://192.241.128.187/current/examples/design/saturn/) example.

<div class="params" id="extras-group">
  <h5>Group arguments <a href="#extras-group" class="anchor"></a></h5>
  <ul>
    <li id="extras-group-objects">
      <h3><a href="#extras-group-objects" class="anchor"></a> ...objects
        <span class="type">ES6 Rest :: WHS.Object</span>
      </h3>
      <p>Pass objects that extend <code>WHS.Object</code>, <code>WHS.Shape</code> or <code>WHS.Light</code></p>
    </li>
  </ul>
</div>

## Loop

<div class="blockTitle h3">Usage of WHS.Loop</div>

```javascript

const loop = new WHS.Loop((clock) => { // clock is THREE.Clock
  console.log(clock.getElapsedTime()); // Will log time from loop start.
});

world.addLoop(loop); // Assign loop to world.
loop.start(); // Start loop.

```

```coffeescript

loop1 = new (WHS.Loop)((clock) ->
  # clock is THREE.Clock
  console.log clock.getElapsedTime()
  # Will log time from loop start.
  return
)

world.addLoop loop1
# Assign loop handler.
loop1.start()
# Start loop.

```

<blockquote class="section">
  <header>Methods:</header>
  <table>
    <tr>
      <th>.start()</th><td>Start loop animation.</td>
    </tr>
    <tr>
      <th>.stop()</th><td>Stop loop animation.</td>
    </tr>
    <tr>
      <th>.execute()</th><td>Execute handler function.</td>
    </tr>
  </table>
</blockquote>

Loop will be executed each frame we render world. As a loop handler we pass a function that receives a `THREE.Clock` object.
This class can be used in animations and smooth transitions of position for example.

