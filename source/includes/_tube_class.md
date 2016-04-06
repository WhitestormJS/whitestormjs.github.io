<h2 class="ws" id="tube">Tube [Class]</h2>

`WHS.Tube` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

`WHS.Tube` class makes a tube that extrudes along a 3d curve.

Parameter          |       Default        | Type      | Description |
------------------ | -------------------- | --------- | ----------- |
**path**           | customSinCurve()     | `Object`  | Tube curve object.
**segments**       | 20                   | `Number`  | Number of segments.
**radius**         | 2                    | `Number`  | Radius.
**radiusSegments** | 8                    | `Number`  | Radius segments number.
**closed**         | false                | `Boolean` | TODO