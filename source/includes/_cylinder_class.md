<h2 class="ws" id="cylinder">Cylinder [Class]</h2>

> WHS.Cylinder example: 

```javascript

var cylinder = GAME.Cylinder({
    geometry: {
        radiusTop: 2,
        radiusBottom: 4,
        height: 5
    },

    mass: 10,

    material: {
        color: 0xffffff,
        kind: "basic"
    },

    pos: {
        x: 0,
        y: 100,
        z: 0
    }
});

```

<div id="cylinder_ex" class="example output">
    <div class="splash" onclick="Cylinder_example.start()">
        <img src="images/play.png" width="30" height="30">
    </div>
    <div class="actions">
        <i class="fa fa-pause"></i>
        <i class="fa fa-repeat" onclick="reset_mesh(cylinder);  cylinder._pos.set(0, 100, 0);"></i>
    </div>
</div>

`WHS.Cylinder` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

`WHS.Cylinder` creates Cylinder object by it's `radiusTop`, `radiusBottom` and `height`

Parameter         |       Default        | Type      | 
----------------- | -------------------- | --------- | 
**radiusTop**     | 1                    | `Number`  |
**radiusBottom**  | 1                    | `Number`  | 
**height**        | 1                    | `Number`  |
**radiusSegments**| 32                   | `Number`  |

<script src="https://gist.github.com/sasha240100/452b417534e092a75e8f.js"></script>