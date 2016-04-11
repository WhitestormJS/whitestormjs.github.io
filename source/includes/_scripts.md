
<script src="jslibs/whitestorm.min.js"></script>
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

    whsobject.rotation.set(0, 0, 0);

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
        far: 1000,
        near: 10,
        y: 10,
        z: 80
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
    },

    rot: {
        x: -Math.PI/2
    }
};

// SPHERE EXAMPLE.

defaultParams.container = document.getElementById("sphere_ex");

var Sphere_example = new WHS.World( defaultParams );

var sphere = Sphere_example.Sphere(
{
    geometry: {
        radius:15
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

var sphere2 = Sphere_example.Sphere(
{
    geometry: {
        radius:15.1
    },

    mass: 0,
    physics: false,

    material: {
        color: 0x000000,
        wireframe: true,
        kind: "basic"
    },

    pos: {
        x: 0,
        y: 100,
        z: 0
    }
});

(new WHS.loop(function() {
    sphere2.position.copy( sphere.position );
    sphere2.rotation.copy( sphere.rotation );
})).start();

Sphere_example.Plane(groundParams);

Sphere_example.OrbitControls();

//Sphere_example.start();

// Box EXAMPLE.

defaultParams.container = document.getElementById("box_ex");

var Box_example = new WHS.World( defaultParams );

var box = Box_example.Box(
{
    geometry: {
        width:20,
        height:20,
        depth:20
    },

    mass: 10,

    material: {
        color: 0xffffff,
        kind: "depth"
    },

    pos: {
        x: 0,
        y: 100,
        z: 0
    }
});

var box2 = Box_example.Box(
{
    geometry: {
        width:20.1,
        height:20.1,
        depth:20.1
    },

    mass: 0,
    physics: false,

    material: {
        color: 0x000000,
        wireframe: true,
        kind: "basic"
    },

    pos: {
        x: 0,
        y: 100,
        z: 0
    }
});

(new WHS.loop(function() {
    box2.position.copy( box.position );
    box2.rotation.copy( box.rotation );
})).start();

Box_example.Plane(groundParams);

Box_example.OrbitControls();

//Box_example.start();

// CYLINDER EXAMPLE.

defaultParams.container = document.getElementById("cylinder_ex");

var Cylinder_example = new WHS.World( defaultParams );

var cylinder = Cylinder_example.Cylinder(
{
    geometry: {
        radiusTop: 20,
        radiusBottom: 40,
        height: 50
    },

    mass: 10,

    material: {
        color: 0xffffff,
        kind: "depth"
    },

    pos: {
        x: 0,
        y: 100,
        z: 0
    }
});

var cylinder2 = Cylinder_example.Cylinder(
{
    geometry: {
        radiusTop: 20.1,
        radiusBottom: 40.1,
        height: 50.1
    },

    mass: 0,
    physics: false,

    material: {
        color: 0x000000,
        wireframe: true,
        kind: "basic"
    },

    pos: {
        x: 0,
        y: 100,
        z: 0
    }
});

(new WHS.loop(function() {
    cylinder2.position.copy( cylinder.position );
    cylinder2.rotation.copy( cylinder.rotation );
})).start();

Cylinder_example.Plane(groundParams);

Cylinder_example.OrbitControls();

//Cylinder_example.start();

// CYLINDER EXAMPLE.

defaultParams.container = document.getElementById("dodecahedron_ex");

var Dodecahedron_example = new WHS.World( defaultParams );

var dodecahedron = Dodecahedron_example.Dodecahedron(
{
    geometry: {
        radius: 20
    },

    mass: 10,

    material: {
        color: 0xffffff,
        kind: "depth"
    },

    pos: {
        x: 0,
        y: 100,
        z: 0
    }
});

var dodecahedron2 = Dodecahedron_example.Dodecahedron(
{
    geometry: {
        radius: 20.1
    },

    mass: 0,
    physics: false,

    material: {
        color: 0x000000,
        wireframe: true,
        kind: "basic"
    },

    pos: {
        x: 0,
        y: 100,
        z: 0
    }
});

(new WHS.loop(function() {
    dodecahedron2.position.copy( dodecahedron.position );
    dodecahedron2.rotation.copy( dodecahedron.rotation );
})).start();

Dodecahedron_example.Plane(groundParams);

Dodecahedron_example.OrbitControls();

//Dodecahedron_example.start();

// POLYHEDRON EXAMPLE.

defaultParams.container = document.getElementById("polyhedron_ex");

var Polyhedron_example = new WHS.World( defaultParams );

var polyhedron = Polyhedron_example.Polyhedron(
{
    geometry: {
        radius: 20
    },

    mass: 10,

    material: {
        color: 0xffffff,
        kind: "depth"
    },

    pos: {
        x: 0,
        y: 100,
        z: 0
    }
});

var polyhedron2 = Polyhedron_example.Polyhedron(
{
    geometry: {
        radius: 20.1
    },

    mass: 0,
    physics: false,

    material: {
        color: 0x000000,
        wireframe: true,
        kind: "basic"
    },

    pos: {
        x: 0,
        y: 100,
        z: 0
    }
});

(new WHS.loop(function() {
    polyhedron2.position.copy( polyhedron.position );
    polyhedron2.rotation.copy( polyhedron.rotation );
})).start();

Polyhedron_example.Plane(groundParams);

Polyhedron_example.OrbitControls();

//Polyhedron_example.start();

// ICOSAHEDRON EXAMPLE.

defaultParams.container = document.getElementById("icosahedron_ex");

var Icosahedron_example = new WHS.World( defaultParams );

var icosahedron = Icosahedron_example.Icosahedron(
{
    geometry: {
        radius: 20
    },

    mass: 10,

    material: {
        color: 0xffffff,
        kind: "depth"
    },

    pos: {
        x: 0,
        y: 100,
        z: 0
    }
});

var icosahedron2 = Icosahedron_example.Icosahedron(
{
    geometry: {
        radius: 20.1
    },

    mass: 0,
    physics: false,

    material: {
        color: 0x000000,
        wireframe: true,
        kind: "basic"
    },

    pos: {
        x: 0,
        y: 100,
        z: 0
    }
});

(new WHS.loop(function() {
    icosahedron2.position.copy( icosahedron.position );
    icosahedron2.rotation.copy( icosahedron.rotation );
})).start();

Icosahedron_example.Plane(groundParams);

Icosahedron_example.OrbitControls();

//Icosahedron_example.start();

// OCTAHEDRON EXAMPLE.

defaultParams.container = document.getElementById("octahedron_ex");

var Octahedron_example = new WHS.World( defaultParams );

var octahedron = Octahedron_example.Octahedron(
{
    geometry: {
        radius: 20
    },

    mass: 10,

    material: {
        color: 0xffffff,
        kind: "depth"
    },

    pos: {
        x: 0,
        y: 100,
        z: 0
    }
});

var octahedron2 = Octahedron_example.Octahedron(
{
    geometry: {
        radius: 20.1
    },

    mass: 0,
    physics: false,

    material: {
        color: 0x000000,
        wireframe: true,
        kind: "basic"
    },

    pos: {
        x: 0,
        y: 100,
        z: 0
    }
});

(new WHS.loop(function() {
    octahedron2.position.copy( octahedron.position );
    octahedron2.rotation.copy( octahedron.rotation );
})).start();

Octahedron_example.Plane(groundParams);

Octahedron_example.OrbitControls();

//Octahedron_example.start();

// TETRAHEDRON EXAMPLE.

defaultParams.container = document.getElementById("tetrahedron_ex");

var Tetrahedron_example = new WHS.World( defaultParams );

var tetrahedron = Tetrahedron_example.Tetrahedron(
{
    geometry: {
        radius: 20
    },

    mass: 10,

    material: {
        color: 0xffffff,
        kind: "depth"
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

var tetrahedron2 = Tetrahedron_example.Tetrahedron(
{
    geometry: {
        radius: 20
    },

    mass: 0,
    physics: false,

    material: {
        color: 0x000000,
        wireframe: true,
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

(new WHS.loop(function() {
    tetrahedron2.position.copy( tetrahedron.position );
    tetrahedron2.rotation.copy( tetrahedron.rotation );
})).start();

Tetrahedron_example.Plane(groundParams);

Tetrahedron_example.OrbitControls();

//Tetrahedron_example.start();

// SPOTLIGHT CONFIGURE.

// EXTRUDE EXAMPLE.

defaultParams.container = document.getElementById("extrude_ex");

var Extrude_example = new WHS.World( defaultParams );

var shape = new THREE.Shape([
    new THREE.Vector2( -40,-40 ),
    new THREE.Vector2( -20,0  ),
    new THREE.Vector2( -40,40  ),
    new THREE.Vector2(  0,20  ),
    new THREE.Vector2(  40,40  ),
    new THREE.Vector2(  20,0  ),
    new THREE.Vector2(  40,-40 ),
    new THREE.Vector2(  0,-20 ),
]);

var extrude = Extrude_example.Extrude(
{
    geometry: {
        shapes: shape,
        options: {
            bevelEnabled: false,
            bevelSize: 0,
            amount: 20
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

Extrude_example.Plane(groundParams);

Extrude_example.OrbitControls();

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

Lathe_example.Plane(groundParams);

Lathe_example.OrbitControls();

//Lathe_example.start();

// MODEL EXAMPLE.

defaultParams.container = document.getElementById("model_ex");

var Model_example = new WHS.World( defaultParams );

var model = Model_example.Model(
{
    geometry: {
        path: "assets/models/utah-teapot-large.json",
        physics: "assets/models/utah-teapot-light.json"
    },

    mass: 10,

    material: {
        vertexColors: THREE.VertexColors,
        shading: THREE.PlaneShading,
        map: WHS.API.texture('assets/textures/teapot.jpg', {repeat:{x: 2, y:2}}),
        kind: "phong",
        side: THREE.DoubleSide,
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
        x: 4,
        y: 4, 
        z: 4
    }
});

Model_example.Box({    
    geometry:{
        width: 250,
        height: 1,
        depth: 250
    },

    mass: 0,
    
    material: {
        color: 0xff0000,
        kind: "basic"
    },

    pos: {
        x: 0,
        y: 0,
        z: 0
    }
});

Model_example.OrbitControls();

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

    morph: {
        duration: 0.5,
        speed: 250
    }
});

Morph_example.OrbitControls();

//Morph_example.start();

// PARAMETRIC EXAMPLE.

defaultParams.container = document.getElementById("parametric_ex");

var Parametric_example = new WHS.World( defaultParams );

function createParametric( u, v ) {
    return new THREE.Vector3( u * 300, Math.random() * 50, v * 300);
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

Parametric_example.Plane(groundParams);

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

Ring_example.Plane(groundParams);

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
            size: 200,
            height: 50,
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

Text_example.Plane(groundParams);

//Text_example.start();

// TORUS EXAMPLE.

defaultParams.container = document.getElementById("torus_ex");

var Torus_example = new WHS.World( defaultParams );

var torus = Torus_example.Torus(
{
    geometry: {
        radius: 20,
        tube: 8
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
        z: 0
    },

    rot: {
        x: Math.PI/4
    }
});

Torus_example.OrbitControls();

Torus_example.Box({    
    geometry:{
        width: 250,
        height: 1,
        depth: 250
    },

    mass: 0,
    
    material: {
        color: 0xff0000,
        kind: "basic"
    },

    pos: {
        x: 0,
        y: 0,
        z: 0
    }
});

//Torus_example.start();

// TORUSKNOT EXAMPLE.

defaultParams.container = document.getElementById("torusknot_ex");

var Torusknot_example = new WHS.World( defaultParams );

var torusknot = Torusknot_example.Torusknot(
{
    geometry: {
        radius:20,
        tube: 8
    },

    mass: 10,

    material: {
        vertexColors: THREE.VertexColors,
        shading: THREE.PlaneShading,
        map: WHS.API.texture('assets/textures/bricks.jpg'),
        kind: "phong"
    },

    pos: {
        x: 0,
        y: 100,
        z: 0
    }
});

Torusknot_example.OrbitControls();

Torusknot_example.Box({    
    geometry:{
        width: 250,
        height: 1,
        depth: 250
    },

    mass: 0,
    
    material: {
        color: 0xff0000,
        kind: "basic"
    },

    pos: {
        x: 0,
        y: 0,
        z: 0
    }
});

//Torusknot_example.start();

var spotlight = new WHS.SpotLight( 
{
    light: {
        color: 0xffffff, //0x00ff00,
        intensity: 2,
        distance: 1000,
    },

    shadowmap: {
        top: 0,
        fov: 90
    },

    pos: {
        x: 0,
        y: 200,
        z: 300
    },

    target: {
        x: 0,
        y: 0,
        z: 0
    }
});

spotlight.addTo( Extrude_example );

spotlight.clone().addTo( Lathe_example );

spotlight.clone().addTo( Model_example );

spotlight.clone().addTo( Morph_example );

spotlight.clone().addTo( Parametric_example );

spotlight.clone().addTo( Text_example );

spotlight.clone().addTo( Torus_example );

spotlight.clone().addTo( Torusknot_example );
</script>