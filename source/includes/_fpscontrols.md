# Events.

`WHS.Shape` and `WHS.Light` are returning `Events` object extended by themselfes.
It means that you can listen for events with `.addEventListener()` method right on shape or light returned by those classes.

### Events list:

Event          |       Arguments returned       | Description |
-------------- | ------------------------------ | ----------- |
**collide**    | [event Object]                 | Object collide event.
**ready**      | -                              | Emits when object is built.
**remove**     | -                              | Emits when shape is removed.
**retrieve**   | -                              | Emits when shape is retrieved.

# Controls.

## First-person controls.

> First Person controls: 

```javascript

GAME.FPSControls( GAME.person, {
    block: document.getElementById('blocker'),
    speed: 5,
    ypos: 1
} );

```

In video games, the **first person** refers to a graphical perspective rendered from the viewpoint of the player character. In many cases, this may be the viewpoint from the cockpit of a vehicle. 
Many different genres have made use of first-person perspectives, ranging from adventure games to flight simulators. Perhaps the most notable genre to make use of this device is the _first-person shooter_, where the graphical perspective has an immense impact on game play.

**From wikipedia**

`FPSControls` has 2 parameters. First one is `whs object` that will be a person which you control, and `settings` of it.

Parameter         |       Default                      | Type      | Description |
----------------- | ---------------------------------- | --------- | ----------- |
**block**         | $('#blocker')                      | `Object`  | Blocker element.
**speed**         | 5                                  | `Number`  | Player speed
**ypos**          | 1                                  | `Number`  | Distance from camera to surface.
