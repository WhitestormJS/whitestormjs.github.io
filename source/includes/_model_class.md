<h2 class="ws" id="model">Model [Class]</h2>

> WHS.Model example:

```javascript

var teapot = GAME.Model({

    geometry: {
        path: "assets/models/teapot.js"
    },

    mass: 10,

    material: {
        vertexColors: THREE.VertexColors,
        shading: THREE.SmoothShading,
        map: api.texture(
        		'assets/textures/teapot.jpg', 
        		{
        			repeat:{
        				x: 4, 
        				y:4
        			}
        		}
        	),
        kind: "phong",
        useCustomMaterial: true,
        rest: 0,
        fri: 1
    },

    pos: {
        x: 0,
        y: 100,
        z: 0
    },

    rot: {
        z: 30
    }

});

```

<div id="model_ex" class="example output">
    <div class="splash" onclick="Model_example.start()">
        <img src="images/play.png" width="30" height="30">
    </div>
    <div class="actions">
        <i class="fa fa-pause"></i>
        <i class="fa fa-repeat" onclick="model.mesh.__dirtyPosition = true; model._pos.set(0, 100, 0);"></i>
    </div>
</div>

`WHS.Model` class loader for loading objects in JSON format.

Model is a simple class too. But it doesn't depends on `Three.js geometry` object. It loads geometry from `JSON` file by url as it's material, but material you can replace with your own. Just add `useCustomMaterial` property with `true` value in `material` parameter object.

Parameter      |       Default        | Type               | Description |
-------------- | -------------------- | ------------------ | ----------- |
**path**       | ""                   | `String`           | Url adress to JSON file.

Also, if model has vertex colors - you can add `useVertexColors` property to material parameter object (as with `useCustomMaterial`).

Similar one is `WHS.Morph`. It's like a model, but this one supports animations.

<img src="images/shapes/model.png">
