# Plugins & Components

## Making your own component

```javascript

// Make a component.
WHS.NewObject = class NewObject extends WHS.Shape {
	constructor( params ) {
		
		// Call "super" for processing params.
		super( params, "newObject" );

		// And api.extend for defining defaults.
		api.extend(params.geometry, {

            my: 1,
            new: 1,
            params: 1

        });

        this.mesh = new THREE.Mesh(
			new THREE.Geometry(),

			// Initialize material.
			super._initMaterial()
        );

		// Let's apply our position, scale and rotation!
        super.build();
	}
}

// Add it to game.
var newobject = new WHS.NewObject();
	newobject.addTo( GAME );

```

First of all you need to understand how WhitestormJS works. There are two basic
classes called [`WHS.Shape`](#whs-shape-super-class) and [`WHS.Light`](#whs-light-super-class)

If you are going to write a new shape or replace existing, `WHS.Shape` will help you.
As you know, `whitestorm.js` uses `es6 classes` to define new shapes, lights and other objects

After you call a `super` which is a `WHS.Shape` object in your class, you need to define a `Three.js mesh` in `this.mesh`.

Use `super._initMaterial()` for initializing you Physi.js material object.

Then use `super.build()` to apply your position and rotation to your `Three.js mesh`.

<aside class="notice">You also can specify your <code>tags</code> when you are going to build your shape. If you need to load a file, it is better to put a <code>wait</code> tag. So your build method will look like <code>super.build("wait")</code>. And don't forget about <code>this._loading</code> promise, or your obect will throw errors.</aside>

<aside class="warning yellow">It is adviced to compile them with <a href="https://babeljs.io/">Babel</a>.</aside>