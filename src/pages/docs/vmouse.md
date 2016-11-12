---

title: VirtualMouse. Cursor in 3D

tags:
 - three.js
 - webgl
 - 3d

---

We noticed that usage of _cursor in 3D is a bit uncomfortable in Three.js_ cause you need to wrap that functionality (project the cursor in 3D coordinates with camera) and decided to create our own wrapping of it.

## DOM-like events

This events are not included to each component by default (in performance reason). You should enable them for component with `.track()`.

```javascript
const mouse = new WHS.VirtualMouse(world);
mouse.track(sphere);

sphere.on('mouseover', () => {
  sphere.material.color.set(0xffff00);
  console.log('mouseover');
});

sphere.on('mousemove', () => {
  console.log('mousemove');
});

sphere.on('mouseout', () => {
  sphere.material.color.set(0xF2F2F2);
  console.log('mouseout');
});

sphere.on('click', () => {
  alert('click!');
});
```

### `.track(component)`

Makes mouse track events for this component.
> It makes events available for specific component.

### Events list

- `mouseover` - when your cursor was out of component and moved to it.
- `mouseout` - when your cursor left component.
- `mousemove` - when your cursor moves in component area.
- `click` - click & (cursor is in component area)
- `mousedown` - mousedown & (cursor is in component area)
- `mouseup` - mouseup & (cursor is in component area)


## Move event

```javascript
// const world = ...

const mouse = new WHS.VirtualMouse(world);

mouse.on('move', () => {
  box.setLinearVelocity(mouse.project().sub(box.position));
});

```

This example makes box fly to mouse position to the cursor projected on a math plane (see `.project()`).

### `.project(plane)`

It returns 3D vector that is your cursor projected on a math plane with normal that looks at your camera.

`plane` - math plane that is used for projection _(`.projectionPlane` by default)_.

### `.intersection(component)`

Find intersection between cursor ray and component. (Returns object as [in `THREE.Raycaster`](https://threejs.org/docs/index.html?q=rayc#Reference/Core/Raycaster.intersectObject))

### `.hovers(component)`

Similar to `.intersection`, but returns a boolean (`true` if ray intersected component).

> As `:hover` pseudo-selector in CSS.
