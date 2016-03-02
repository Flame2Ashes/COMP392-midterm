/// <reference path="_reference.ts"/>
// MAIN GAME FILE
// THREEJS Aliases
var Scene = THREE.Scene;
var Renderer = THREE.WebGLRenderer;
var PerspectiveCamera = THREE.PerspectiveCamera;
var BoxGeometry = THREE.BoxGeometry;
var CubeGeometry = THREE.CubeGeometry;
var PlaneGeometry = THREE.PlaneGeometry;
var SphereGeometry = THREE.SphereGeometry;
var Geometry = THREE.Geometry;
var AxisHelper = THREE.AxisHelper;
var LambertMaterial = THREE.MeshLambertMaterial;
var MeshBasicMaterial = THREE.MeshBasicMaterial;
var Material = THREE.Material;
var Mesh = THREE.Mesh;
var Object3D = THREE.Object3D;
var SpotLight = THREE.SpotLight;
var PointLight = THREE.PointLight;
var AmbientLight = THREE.AmbientLight;
var Control = objects.Control;
var GUI = dat.GUI;
var Color = THREE.Color;
var Vector3 = THREE.Vector3;
var Face3 = THREE.Face3;
var Point = objects.Point;
var CScreen = config.Screen;
//Custom Game Objects
var gameObject = objects.gameObject;
// setup an IIFE structure (Immediately Invoked Function Expression)
var game = (function () {
    // declare game objects
    var scene = new Scene();
    var renderer;
    var camera;
    var control;
    var gui;
    var stats;
    var axes;
    var ambientLight;
    var spotLight;
    //Plane and cube components
    var plane;
    var baseCube;
    var cube2;
    var cube3;
    var cube4;
    var cube5;
    var planeGeometry;
    var planeMaterial;
    var cubeGeometry;
    var cubeMaterial;
    function init() {
        // Instantiate a new Scene object
        //scene = new Scene();
        setupRenderer(); // setup the default renderer
        setupCamera(); // setup the camera
        /* ENTER CODE HERE */
        //Axis
        axes = new AxisHelper(10);
        scene.add(axes);
        console.log("Added Axis Helper to scene");
        //Add plane
        planeGeometry = new PlaneGeometry(16, 16);
        planeMaterial = new LambertMaterial({ color: 0x248f24 });
        plane = new Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -0.5 * (Math.PI);
        scene.add(plane);
        console.log("Added a Plane to scene");
        //Add cubes
        cubeGeometry = new CubeGeometry(5, 1, 5);
        cubeMaterial = new LambertMaterial({ map: THREE.ImageUtils.loadTexture("img/RockSmoothErosion0015_1_S.jpg") });
        baseCube = new Mesh(cubeGeometry, cubeMaterial);
        baseCube.position.set(0, 1, 0);
        scene.add(baseCube);
        console.log("Added base cube to scene");
        cubeGeometry = new CubeGeometry(4, 1, 4);
        cubeMaterial = new LambertMaterial({ map: THREE.ImageUtils.loadTexture("img/RockSmoothErosion0015_1_S.jpg") });
        cube2 = new Mesh(cubeGeometry, cubeMaterial);
        cube2.position.set(0, 2, 0);
        scene.add(cube2);
        console.log("Added second cube to scene");
        cubeGeometry = new CubeGeometry(3, 1, 3);
        cubeMaterial = new LambertMaterial({ map: THREE.ImageUtils.loadTexture("img/RockSmoothErosion0015_1_S.jpg") });
        cube3 = new Mesh(cubeGeometry, cubeMaterial);
        cube3.position.set(0, 3, 0);
        scene.add(cube3);
        console.log("Added third cube to scene");
        cubeGeometry = new CubeGeometry(2, 1, 2);
        cubeMaterial = new LambertMaterial({ map: THREE.ImageUtils.loadTexture("img/RockSmoothErosion0015_1_S.jpg") });
        cube4 = new Mesh(cubeGeometry, cubeMaterial);
        cube4.position.set(0, 4, 0);
        scene.add(cube4);
        console.log("Added fourth cube to scene");
        cubeGeometry = new CubeGeometry(1, 1, 1);
        cubeMaterial = new LambertMaterial({ map: THREE.ImageUtils.loadTexture("img/RockSmoothErosion0015_1_S.jpg") });
        cube5 = new Mesh(cubeGeometry, cubeMaterial);
        cube5.position.set(0, 5, 0);
        scene.add(cube5);
        console.log("Added top cube to scene");
        console.log("Added tower to scene");
        //Add lights
        ambientLight = new AmbientLight(0x090909);
        scene.add(ambientLight);
        console.log("Added an Ambient Light to scene");
        spotLight = new SpotLight(0xffffff);
        spotLight.position.set(-40, 60, 10);
        spotLight.castShadow = true;
        scene.add(spotLight);
        console.log("Added a spotlight to scene");
        // add controls
        gui = new GUI();
        control = new Control(0.01, 0.01, 0.01, 0.01, 0.01);
        addControl(control);
        // Add framerate stats
        addStatsObject();
        console.log("Added Stats to scene...");
        document.body.appendChild(renderer.domElement);
        gameLoop(); // render the scene	
    }
    function addControl(controlObject) {
        /* ENTER CODE for the GUI CONTROL HERE */
        gui.add(controlObject, 'rotateBaseCube', -0.5, 0.5);
        gui.add(controlObject, 'rotateCube2', -0.5, 0.5);
        gui.add(controlObject, 'rotateCube3', -0.5, 0.5);
        gui.add(controlObject, 'rotateCube4', -0.5, 0.5);
        gui.add(controlObject, 'rotateCube5', -0.5, 0.5);
    }
    function addStatsObject() {
        stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
    }
    // Setup main game loop
    function gameLoop() {
        stats.update();
        //Rotate cubes
        baseCube.rotation.y += control.rotateBaseCube;
        cube2.rotation.y += control.rotateCube2;
        cube3.rotation.y += control.rotateCube3;
        cube4.rotation.y += control.rotateCube4;
        cube5.rotation.y += control.rotateCube5;
        // render using requestAnimationFrame
        requestAnimationFrame(gameLoop);
        // render the scene
        renderer.render(scene, camera);
    }
    // Setup default renderer
    function setupRenderer() {
        renderer = new Renderer();
        renderer.setClearColor(0x404040, 1.0);
        renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
        //renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        console.log("Finished setting up Renderer...");
    }
    // Setup main camera for the scene
    function setupCamera() {
        camera = new PerspectiveCamera(35, config.Screen.RATIO, 0.1, 100);
        camera.position.x = 15.3;
        camera.position.y = 18.5;
        camera.position.z = -28.7;
        camera.rotation.set(-1.10305, 0.49742, -0.1396);
        camera.lookAt(new Vector3(0, 0, 0));
        console.log("Finished setting up Camera...");
    }
    window.onload = init;
    return {
        scene: scene
    };
})();

//# sourceMappingURL=game.js.map
