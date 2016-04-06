
<script src="jslibs/whitestorm.js"></script>
<script>

$('.splash').on('click', function() {
    $(this).hide();
    $(this).parent().find('.actions').show();
});

$('.actions .fa-pause').on('click', function() {
    $(this).parent().parent().find('.splash').show();
    $(this).parent().hide();
});

function reset_mesh( whsobject ) {
    whsobject.mesh.__dirtyPosition = true;
    whsobject.mesh.__dirtyRotation = true;

    whsobject._rot.set(0, 0, 0);

    whsobject.mesh.setLinearVelocity(new THREE.Vector3(0, 0, 0));
    whsobject.mesh.setAngularVelocity(new THREE.Vector3(0, 0, 0));
}

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

//Sphere_example.start();

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

//Cube_example.start();

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

//Cylinder_example.start();

// CYLINDER EXAMPLE.

defaultParams.container = document.getElementById("dodecahedron_ex");

var Dodecahedron_example = new WHS.World( defaultParams );

var dodecahedron = Dodecahedron_example.Dodecahedron(
{
    geometry: {
        radius: 2
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

Dodecahedron_example.Smooth(groundParams);

Dodecahedron_example.OrbitControls();

//Dodecahedron_example.start();

// POLYHEDRON EXAMPLE.

defaultParams.container = document.getElementById("polyhedron_ex");

var Polyhedron_example = new WHS.World( defaultParams );

var polyhedron = Polyhedron_example.Polyhedron(
{
    geometry: {
        radius: 2
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

Polyhedron_example.Smooth(groundParams);

Polyhedron_example.OrbitControls();

//Polyhedron_example.start();

// ICOSAHEDRON EXAMPLE.

defaultParams.container = document.getElementById("icosahedron_ex");

var Icosahedron_example = new WHS.World( defaultParams );

var icosahedron = Icosahedron_example.Icosahedron(
{
    geometry: {
        radius: 2
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

Icosahedron_example.Smooth(groundParams);

Icosahedron_example.OrbitControls();

//Icosahedron_example.start();

// OCTAHEDRON EXAMPLE.

defaultParams.container = document.getElementById("octahedron_ex");

var Octahedron_example = new WHS.World( defaultParams );

var icosahedron = Octahedron_example.Octahedron(
{
    geometry: {
        radius: 2
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

Octahedron_example.Smooth(groundParams);

Octahedron_example.OrbitControls();

//Octahedron_example.start();

// TETRAHEDRON EXAMPLE.

defaultParams.container = document.getElementById("tetrahedron_ex");

var Tetrahedron_example = new WHS.World( defaultParams );

var tetrahedron = Tetrahedron_example.Tetrahedron(
{
    geometry: {
        radius: 2
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
    },

    rot: {
        x: 10
    }
});

Tetrahedron_example.Smooth(groundParams);

Tetrahedron_example.OrbitControls();

//Tetrahedron_example.start();

// SPOTLIGHT CONFIGURE.

var spotlight = new WHS.SpotLight( 
{
    light: {
        color: 0xffffff, //0x00ff00,
        intensity: 1,
        distance: 100,
    },

    shadowmap: {
        top: 0,
        fov: 90
    },

    pos: {
        x: 0,
        y: 10,
        z: 30
    },

    target: {
        x: 0,
        y: 0,
        z: 0
    }
});

// EXTRUDE EXAMPLE.

defaultParams.container = document.getElementById("extrude_ex");

var Extrude_example = new WHS.World( defaultParams );

var shape = new THREE.Shape([
    new THREE.Vector2( -4,-4 ),
    new THREE.Vector2( -2,0  ),
    new THREE.Vector2( -4,4  ),
    new THREE.Vector2(  0,2  ),
    new THREE.Vector2(  4,4  ),
    new THREE.Vector2(  2,0  ),
    new THREE.Vector2(  4,-4 ),
    new THREE.Vector2(  0,-2 ),
]);

var extrude = Extrude_example.Extrude(
{
    geometry: {
        shapes: shape,
        options: {
            bevelEnabled: false,
            bevelSize: 0,
            amount: 2
        } 
    },

    mass: 10,

    material: {
        color: 0xffffff,
        kind: "lambert"
    },

    pos: {
        x: 0,
        y: 100,
        z: 0
    }
});

Extrude_example.Smooth(groundParams);

Extrude_example.OrbitControls();

spotlight.addTo( Extrude_example );

// LATHE EXAMPLE.

defaultParams.container = document.getElementById("lathe_ex");

var Lathe_example = new WHS.World( defaultParams );

var points = [];
for ( var i = 0; i < 10; i ++ ) {
    points.push( 
        new THREE.Vector2( 
            (Math.sin( i * 0.7 ) * 15 + 50)/10, 
            ( i - 5 ) * 0.2 
        ) 
    );

}

var lathe = Lathe_example.Lathe(
{
    geometry: {
        points: points
    },

    mass: 10,

    material: {
        color: 0xffffff,
        kind: "lambert",
        side: THREE.DoubleSide
    },

    pos: {
        x: 0,
        y: 50,
        z: 10
    }
});

Lathe_example.Smooth(groundParams);

Lathe_example.OrbitControls();

spotlight.addTo( Lathe_example );

//Lathe_example.start();

// MODEL EXAMPLE.

defaultParams.container = document.getElementById("model_ex");

var Model_example = new WHS.World( defaultParams );

var model = Model_example.Model(
{
    geometry: {
        path: "assets/models/teapot.js"
    },

    mass: 10,

    material: {
        vertexColors: THREE.VertexColors,
        shading: THREE.SmoothShading,
        map: api.texture('assets/textures/teapot.jpg', {repeat:{x: 4, y:4}}),
        kind: "phong",
        useCustomMaterial: true,
        rest: 0,
        fri: 1
    },

    pos: {
        x: 0,
        y: 100,
        z: 0
    },

    scale: {
        x: 0.2,
        y: 0.2,
        z: 0.2
    }
});

Model_example.Smooth(groundParams);

Model_example.OrbitControls();

spotlight.addTo( Model_example );

//Model_example.start();

// MORPH EXAMPLE.

defaultParams.container = document.getElementById("morph_ex");

var Morph_example = new WHS.World( defaultParams );

var morph = Morph_example.Morph(
{
    geometry: {
        path: "assets/models/morph/parrot.js"
    },

    material: {
        useVertexColors: true,
        kind: "basic"
    },

    pos: {
        x: 0,
        y: 0,
        z: 0
    },

    scale: {
        x: 0.1,
        y: 0.1,
        z: 0.1
    },

    morph: {
        duration: 0.5,
        speed: 250
    }
});

Morph_example.OrbitControls();

spotlight.addTo( Morph_example );

//Morph_example.start();

// PARAMETRIC EXAMPLE.

defaultParams.container = document.getElementById("parametric_ex");

var Parametric_example = new WHS.World( defaultParams );

function createParametric( u, v ) {
    return new THREE.Vector3( u * 30, Math.random() * 5, v * 30);
}

var parametric = Parametric_example.Parametric(
{
    geometry: {
        func: createParametric
    },

    mass: 10,

    material: {
        color: 0xffffff,
        kind: "lambert",
        side: THREE.DoubleSide
    },

    pos: {
        x: 0,
        y: 100,
        z: -10
    }
});

Parametric_example.OrbitControls();

Parametric_example.Smooth(groundParams);

spotlight.addTo( Parametric_example );

//Parametric_example.start();

// RING EXAMPLE.

/*defaultParams.container = document.getElementById("ring_ex");

var Ring_example = new WHS.World( defaultParams );

var ring = Ring_example.Ring(
{
    geometry: {
        innerRadius: 5,
        outerRadius: 2
    },

    mass: 0,

    material: {
        color: 0xffffff,
        kind: "basic",
        side: THREE.DoubleSide
    },

    pos: {
        x: 0,
        y: 8,
        z: 0
    },

    rot: {
        x: Math.PI/4
    }
});

Ring_example.OrbitControls();

Ring_example.Smooth(groundParams);

spotlight.addTo( Ring_example );*/

//Ring_example.start();

// TEXT EXAMPLE.

defaultParams.container = document.getElementById("text_ex");

var Text_example = new WHS.World( defaultParams );

var text = Text_example.Text(
{
    geometry: {
        text: "hello world",
        parameters: {
            font: "assets/fonts/gentilis_bold.typeface.js",
            size: 20,
            height: 5,
            curveSegments: 6
        }
    },

    mass: 10,

    material: {
        color: 0x00ff00,
        kind: "lambert"
    },

    pos: {
        x: 0,
        y: 20,
        z: -20
    }
});

Text_example.OrbitControls();

Text_example.Smooth(groundParams);

spotlight.addTo( Text_example );

//Text_example.start();

// TORUS EXAMPLE.

defaultParams.container = document.getElementById("torus_ex");

var Torus_example = new WHS.World( defaultParams );

var torus = Torus_example.Torus(
{
    geometry: {
        radius: 5,
        tube: 2
    },

    mass: 10,

    material: {
        color: 0xffffff,
        kind: "lambert",
        side: THREE.DoubleSide
    },

    pos: {
        x: 0,
        y: 35,
        z: 0
    }
});

Torus_example.OrbitControls();

Torus_example.Smooth(groundParams);

spotlight.addTo( Torus_example );

//Torus_example.start();

// TORUSKNOT EXAMPLE.

defaultParams.container = document.getElementById("torusknot_ex");

var Torusknot_example = new WHS.World( defaultParams );

var torusknot = Torusknot_example.Torusknot(
{
    geometry: {
        radius:5,
        tube: 2
    },

    mass: 10,

    material: {
        vertexColors: THREE.VertexColors,
        shading: THREE.SmoothShading,
        map: api.texture('assets/textures/bricks.jpg'),
        kind: "phong"
    },

    pos: {
        x: 0,
        y: 100,
        z: 0
    }
});

Torusknot_example.OrbitControls();

Torusknot_example.Smooth(groundParams);

spotlight.addTo( Torusknot_example );

//Torusknot_example.start();

</script>