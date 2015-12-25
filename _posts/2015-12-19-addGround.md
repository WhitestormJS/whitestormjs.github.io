---
layout: docs
title:  "Adding a terrain ground"
module: "Ground"
permalink: addGround
---
You can use the `addGround` function to generate a terrain or ground object.

**Example:**

```javascript
GAME.ground = GAME.addGround("terrain",
{ // Terrain parameters
    terrain: defaultTerrainMap, // Terrain base64 image object
    depth: 100, // depth range.
    width: 250, // X.
    height: 250, // Z.
    detality:1 // If this is set, terrain is smooth (no distruction) and more detailed. (more faces)
},
{ // material options
        vertexColors: THREE.VertexColors,
        shading: THREE.SmoothShading,
        map: api.texture('textures/grasslight-big.jpg'),
        side: THREE.DoubleSide,
        type: "lambert"
},
{ // position
    x: 0,
    y: 0,
    z: 0
});
```

**Structure:**

```javascript

GAME.ground = GAME.addGround({{terrain type}},
   {{terrain parameters}},
   {{material options}},
   {{position}}
);
```

- **terrain type** - Type of terrain. Can be:
--    ***terrain*** - Terrain with height values (from image).
--    ***smooth*** - Plane with width/height.
--    ***infinitySmooth*** - Just infinite plane.
- **terrain parameters** - Terrain options (width, height, depth, terrain)
- **material options** - *THREE.JS* material options. Will be passed to *THREE.Mesh(geometry, material{{with this options}})*
--    ***type*** - THREE.JS material type. Example "basic", "lambert", "phong".
- **position** - Object position

![Terrain](http://2.1m.yt/4ZL9FikzI.png)

