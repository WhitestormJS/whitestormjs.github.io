<h2 class="ws" id="morph">Morph [Class]</h2>

> WHS.Morph example:

```javascript

var parrot = GAME.Morph( {

    geometry: {
        path: "assets/models/morph/parrot.js"
    },

    material: {
        useVertexColors: true,
        kind: "basic"
    },

    pos: {
        x: 0,
        y: 0,
        z: 0
    },

    scale: {
        x: 0.1,
        y: 0.1,
        z: 0.1
    },

    morph: {
        duration: 0.5,
        speed: 250
    }

} );

```

<div id="morph_ex" class="example output">
    <div class="splash" onclick="Morph_example.start()">
        <img src="images/play.png" width="30" height="30">
    </div>
</div>

`WHS.Model` is a class for loading animated models or meshes.

`WHS.Morph` is used for creating animated object's that doesn't support physics. Off course you can make your own class, based on `WHS.Shape` that will run animation and support physics. But you will need to update your geometry in Physi.js each time you update anmation. Physi.js currently provides physic only for static geometries. 

Parameter      |       Default        | Type               | Description |
-------------- | -------------------- | ------------------ | ----------- |
**path**       | ""                   | `String`           | Url adress to JSON file.

The same as in `WHS.Model` you can use `useVertexColors` and `useCustomMaterial` properties.

Right example will create the following:

<img src="images/shapes/morph.png">

And each frame it will change:

<img src="images/shapes/morph2.png">

<aside class="notice">
	This class use <code>morph</code> property in <code>WHS.Shape</code>. You need to specify <code>duration</code> and <code>speed</code> settings.
</aside>