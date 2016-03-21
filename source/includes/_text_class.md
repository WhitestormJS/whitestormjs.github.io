<h2 class="ws" id="text">[TODO] Text [Class]</h2>

`WHS.Text` is a simple class, it extends `WHS.Shape` and inherits all it's methods.

`WHS.Text` class is made for creating 3D text objects.

Parameter      |       Default        | Type      | Description |
-------------- | -------------------- | --------- | ----------- |
**text**       | "Hello World!"       | `String`  | Text that will be displayed.
**parameters** | Text parameters.     | `Object`  | Text parameters.

### Text parameters.

Parameter         |       Default        | Type      | Description |
----------------- | -------------------- | --------- | ----------- |
**size**          | 1                    | `Number`  | Font size.
**height**        | 50                   | `Number`  | Font height?
**curveSegments** | 1                    | `Number`  | Number of curves
**font**          | "Adelle"             | `String`  | Font name
**weight**        | "normal"             | `String`  | Font weight
**style**         | "normal"             | `String`  | Font style
**bevelEnabled**  | false                | `Boolean` | Is bevel enabled?
**bevelThickness**| 10                   | `Number`  | Bevel thickness.
**bevelSize**     | 8                    | `Number`  | Bevel size.

<script src="https://gist.github.com/sasha240100/158b43f76862cf606c06.js"></script>