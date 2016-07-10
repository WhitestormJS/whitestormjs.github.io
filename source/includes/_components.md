# Scenes

<h2 class="wso" id="skybox">Skybox</h2>

<div class="blockTitle h3">Adding SkyBox</div>

```javascript

new WHS.Skybox({
  path: '{{ assets }}/textures/skybox/skymap',
  imgSuffix: '.png',
  skyType: 'sphere',
  radius: world.getCamera().__params.camera.far,

  rot: {
  	y: Math.PI / 180 * -90
  },

  pos: {
  	y: -200
  }
}).addTo(world);

```

Skybox is frequently used in 3D games. You can easily create skies around your virtual world by setting `path` to your image in <a href="#scenes-skybox">SkyBox options</a> and <a href="#scenes-skybox-imgSuffix">extension property</a>.
Skybox can be 2 types:

 - **box** - Skybox is a mesh with THREE.BoxGeometry geometry and requires 6 images to build skybox. They should end with one of 'xpos', 'xneg', 'ypos', 'yneg', 'zpos', 'zneg' and extension name. 

 Example: **images/myskyboxname_xpos.png**. Where `path` is **images/myskyboxname_**, `imgSuffix` is **.png**.

 - **sphere** - Requires only one image to be. 

 Example: **images/myskyboxname.png**. Where `path` is **images/myskyboxname**, `imgSuffix` is **.png**.


<div class="params" id="scenes-skybox">
  <h5>Skybox options <a href="#scenes-skybox" class="anchor"></a></h5>
  <ul>
    <li id="scenes-skybox-skytype">
      <h3><a href="#scenes-skybox-skytype" class="anchor"></a> skytype
        <span class="type">String</span>
        <span class="default">box</span>
      </h3>
      <p>Type of skybox. Can be <code>box</code> or <code>sphere</code></p>
    </li>
    <li id="scenes-skybox-imgSuffix">
      <h3><a href="#scenes-skybox-imgSuffix" class="anchor"></a> imgSuffix
        <span class="type">String</span>
        <span class="default">".png"</span>
      </h3>
      <p>Your image file extension. (Starts with dot)</p>
    </li>
    <li id="scenes-skybox-radius">
      <h3><a href="#scenes-skybox-radius" class="anchor"></a> radius
        <span class="type">Nymber</span>
        <span class="default">10</span>
      </h3>
      <p>Radius of skybox if <code>sphere</code> or a / 2 of cube if <code>box</code> </p>
    </li>
    <li id="scenes-skybox-fog">
      <h3><a href="#scenes-skybox-fog" class="anchor"></a> fog
        <span class="type">Boolean</span>
        <span class="default">true</span>
      </h3>
      <p>Skybox support of <a href="#world-fog">fog</a></p>
    </li>
    <li id="scenes-skybox-path">
      <h3><a href="#scenes-skybox-path" class="anchor"></a> path
        <span class="type">String</span>
        <span class="default">""</span>
      </h3>
      <p>Path is a relative url to skybox image. Should be without file extension because it is defined in <a href="#scenes-skybox-imgSuffix">other property</a>.</p>
    </li>
  </ul>
</div>

### Skybox example
<img src="images/skybox.png" alt="Skybox in fps example.">