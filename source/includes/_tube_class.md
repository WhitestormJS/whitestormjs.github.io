<h2 class="ws" id="torusknot">Torusknot [Class]</h2>

`WHS.Torusknot` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

`WHS.Torusknot` class makes a torusknot figure. It's like crooked donut, very crooked.

Parameter          |       Default        | Type      | Description |
------------------ | -------------------- | --------- | ----------- |
**path**           | customSinCurve()     | `Object`  | Tube curve object.
**segments**       | 20                   | `Number`  | Number of segments.
**radius**         | 2                    | `Number`  | Radius.
**radiusSegments** | 8                    | `Number`  | Radius segments number.
**closed**         | false                | `Boolean` | TODO

`customSinCurve()` function looks like:

<script src="https://gist.github.com/sasha240100/2df9d332b6619143567a.js"></script>