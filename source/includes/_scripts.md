
<script src="jslibs/whitestorm.js"></script>
<script defer>

// NOTE: Basic scene with sphere and ground.

var defaultParams = {
	stats: false, // fps, ms, mb
    autoresize: false,

    gravity: {
        x: 0,
        y: -100,
        z: 0
    },

    camera: {
        far: 10000,
        y: 10,
        z: 30
    },

    path_worker: '/jslibs/physijs_worker.js',
    path_ammo: 'ammo.js'
};

var groundParams = {
        
    geometry: {
        width: 250,
        height: 250
    },

    material: {
        color: 0xff0000,
        kind: "basic"
    },

    pos: {
        x: 0,
        y: 0,
        z: 0
    }
};

// SPHERE EXAMPLE.

defaultParams.container = document.getElementById("sphere_ex");

var Sphere_example = new WHS.World( defaultParams );

var sphere = Sphere_example.Sphere(
{
    geometry: {
        radius:3
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

Sphere_example.Smooth(groundParams);

Sphere_example.OrbitControls();

Sphere_example.start();

// CUBE EXAMPLE.

defaultParams.container = document.getElementById("cube_ex");

var Cube_example = new WHS.World( defaultParams );

var cube = Cube_example.Cube(
{
    geometry: {
        width:2,
        height:2,
        depth:2
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

Cube_example.Smooth(groundParams);

Cube_example.OrbitControls();

Cube_example.start();

// CYLINDER EXAMPLE.

defaultParams.container = document.getElementById("cylinder_ex");

var Cylinder_example = new WHS.World( defaultParams );

var cylinder = Cylinder_example.Cylinder(
{
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

Cylinder_example.Smooth(groundParams);

Cylinder_example.OrbitControls();

Cylinder_example.start();

</script>