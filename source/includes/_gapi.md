## G_ & M_ API (Dynamic geometry update)

<div class="blockTitle h2">Single geometry property</div>

```javascript

const sphere = new WHS.Sphere({
	geometry: {
		radius: 5
	}
});

sphere.addTo(world);

sphere.G_radius = 10; // Will update geometry.

```

```coffeescript

sphere = new (WHS.Sphere)(geometry: radius: 5)
sphere.addTo world
sphere.G_radius = 10
# Will update geometry.

```

<div class="blockTitle h2">Multiple geometry properties</div>

```javascript

const box = new WHS.Box({
	geometry: {
		width: 2,
		height: 3,
		depth: 4
	}
});

box.addTo(world);

box.G_({
	width: 4,
	height: 6,
	depth: 8
});

```

```coffeescript

box = new (WHS.Box)(geometry:
  width: 2
  height: 3
  depth: 4)

box.addTo world

box.G_
  width: 4
  height: 6
  depth: 8

```

<aside class="warning yellow">This functionality is <b>experimental</b></aside>

#### G_property
In whitestorm.js is possible dynamic geometry updating. It means that you can update whole geometry just by updating it's property.
To update a specific property value you should update attribute which name is `G_(your property name)`. For example: `G_radius`, `G_width`, `G_segments`.


#### G_() & M_()
If you are going to update multiple geometry parameters you can use `G_()` method to reduce geometry generation times. Firstly you will apply all parameters and then - build a geometry. Also there is `M_()` method for updating material available and `M_color` attribute (because color is in all material types and is common property to update).