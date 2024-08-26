import * as THREE from 'three'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import GUI from 'lil-gui'
import gsap from 'gsap'
import axios from 'axios'
import { ModelState } from './constants'
import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

//#region Variables
const gui = new GUI()
gui.hide()
const paperScale = 2.5
const thumbtackScale = 1 / 6
const posterOffset = 1.15
let currentState = ModelState.NONE
let didVote = false
let lastPosterCoordinates = undefined
let lastThumbtackCoordinates = undefined
let votePin = undefined
let charmanderPaperModel = undefined
let squirtlePaperModel = undefined
let thumbtackRed = undefined
let thumbtackBlue = undefined
let voteBox = undefined
//#endregion

//#region Firebase

//#region Canvas
const canvas = document.querySelector('canvas.webgl')
//#endregion

//#region Raycaster
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

//#region Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0xd2b48c)
//#endregion

//#region Fonts
const fontLoader = new FontLoader()
//#endregion

//#region Lights
// Ambient light
const ambientLight = new THREE.AmbientLight('#fff', 0.275)
scene.add(ambientLight)

// Directional light
const directionalLight = new THREE.DirectionalLight('#fff', 5)
directionalLight.position.set(3, 2, 8)
scene.add(directionalLight)

//#endregion

//#region Textures
const textureLoader = new THREE.TextureLoader()
// Posters
const matcapTexture = textureLoader.load('/textures/3.png')
// Wall
const wallColorTexture = textureLoader.load('./textures/wall/painted_plaster_wall_diff_1k.jpg')
const wallARMTexture = textureLoader.load('./textures/wall/painted_plaster_wall_arm_1k.jpg')
const wallNormalTexture = textureLoader.load('./textures/wall/painted_plaster_wall_nor_gl_1k.jpg')
const wallDisplacementTexture = textureLoader.load('./textures/wall/painted_plaster_wall_nor_gl_1k.jpg')
wallColorTexture.colorSpace = THREE.SRGBColorSpace

// Box
const boxColorTexture = textureLoader.load('./textures/box/green_metal_rust_diff_1k.jpg')
const boxARMTexture = textureLoader.load('./textures/box/green_metal_rust_arm_1k.jpg')
const boxNormalTexture = textureLoader.load('./textures/box/green_metal_rust_nor_gl_1k.jpg')
const boxDisplacementTexture = textureLoader.load('./textures/box/green_metal_rust_nor_gl_1k.jpg')
boxColorTexture.colorSpace = THREE.SRGBColorSpace

// Shelf
const shelfColorTexture = textureLoader.load('./textures/shelf/wood_peeling_paint_weathered_diff_1k.jpg')
const shelfARMTexture = textureLoader.load('./textures/shelf/wood_peeling_paint_weathered_arm_1k.jpg')
const shelfNormalTexture = textureLoader.load('./textures/shelf/wood_peeling_paint_weathered_nor_gl_1k.jpg')

//#region Materials
const charmanderPaperMaterial = new THREE.MeshBasicMaterial({color: '#fcc', transparent: true})
const squirtlePaperMaterial = new THREE.MeshBasicMaterial({color: '#019', transparent: true})

//#endregion

//#region Models
// Wall

function generateVotingBooth() {
    const wall = new THREE.Mesh(
        new THREE.PlaneGeometry(30, 30, 100, 100),
        new THREE.MeshStandardMaterial({
            color: '#fff',
            map: wallColorTexture,
            aoMap: wallARMTexture,
            roughnessMap: wallARMTexture,
            metalnessMap: wallARMTexture,
            normalMap: wallNormalTexture,
            displacementMap: wallDisplacementTexture,
            displacementScale: 0.3,
            displacementBias: -0.2
        })
    )
    scene.add(wall)
    
    // Box
    voteBox = new THREE.Group()
    scene.add(voteBox)
    const slit = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.25, 1.5, 3, 2),
        new THREE.MeshBasicMaterial({
            color: '#000'
        })
    )
    slit.rotation.z = Math.PI / 2
    slit.position.y = 1
    const box = new THREE.Mesh(
        new THREE.BoxGeometry(3, 2, 1),
        new THREE.MeshStandardMaterial({
            map: boxColorTexture,
            aoMap: boxARMTexture,
            roughnessMap: boxARMTexture,
            metalnessMap: boxARMTexture,
            normalMap: boxNormalTexture,
            displacementMap: boxDisplacementTexture,
            displacementScale: 0.3,
            displacementBias: -0.15
        })
    )
    voteBox.add(slit, box)
    
    // Shelf
    const shelf = new THREE.Mesh(
        new THREE.BoxGeometry(10, 0.3, 2),
        new THREE.MeshStandardMaterial({
            map: shelfColorTexture,
            aoMap: shelfARMTexture,
            roughnessMap: shelfARMTexture,
            metalnessMap: shelfARMTexture,
            normalMap: shelfNormalTexture,
        })
    )
    scene.add(shelf)
    
    // Posters
    charmanderPaperModel = new THREE.Mesh(
        new THREE.BoxGeometry(0.8*paperScale, 1.15*paperScale, 0.1),
        charmanderPaperMaterial
    )
    
    squirtlePaperModel = new THREE.Mesh(
        new THREE.BoxGeometry(0.8*paperScale, 1.15*paperScale, 0.1),
        squirtlePaperMaterial
    )
    scene.add(squirtlePaperModel)
    scene.add(charmanderPaperModel)
    
    function generateThumbtack(color) {
        const thumbtack = new THREE.Group()
        const tipMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x808080,
            metalness: 0.7,
            roughness: 0.3
        });
        const coneGeometry = new THREE.ConeGeometry(0.1*thumbtackScale, 0.2*thumbtackScale, 16);
        const cone = new THREE.Mesh(coneGeometry, tipMaterial);
        cone.position.y = -0.75*thumbtackScale;
        cone.rotation.z = Math.PI
        thumbtack.add(cone);
    
        const cylinderGeometry = new THREE.CylinderGeometry(0.1*thumbtackScale, 0.1*thumbtackScale, 0.8*thumbtackScale, 16);
        const cylinder = new THREE.Mesh(cylinderGeometry, tipMaterial);
        cylinder.position.y = -0.25*thumbtackScale;
        thumbtack.add(cylinder);
    
        const headMaterial = new THREE.MeshStandardMaterial({ 
            color: color,
            metalness: 0.3,
            roughness: 0.5
        }); // Grey color
        const headCylinder1 = new THREE.Mesh(new THREE.CylinderGeometry(0.2*thumbtackScale, 0.5*thumbtackScale, 0.1*thumbtackScale, 16), headMaterial);
        headCylinder1.position.y = 0;
        thumbtack.add(headCylinder1);
    
        const headCylinder2 = new THREE.Mesh(new THREE.CylinderGeometry(0.2*thumbtackScale, 0.2*thumbtackScale, 0.6*thumbtackScale, 16), headMaterial);
        headCylinder2.position.y = 0.3*thumbtackScale;
        thumbtack.add(headCylinder2);
    
        const headCylinder3 = new THREE.Mesh(new THREE.CylinderGeometry(0.4*thumbtackScale, 0.2*thumbtackScale, 0.1*thumbtackScale, 16), headMaterial);
        headCylinder3.position.y = 0.6*thumbtackScale;
        thumbtack.add(headCylinder3);
        return thumbtack;
    }
    
    // Thumbtack
    thumbtackRed = generateThumbtack(0xff0000)
    scene.add(thumbtackRed)
    thumbtackBlue = generateThumbtack(0x0000ff)
    scene.add(thumbtackBlue)

    // Positioning
    thumbtackBlue.rotation.set(Math.PI / 2, Math.random() * -0.6, Math.random()*-0.3)
    thumbtackBlue.position.set(0 + posterOffset, 1.15*paperScale*0.5 - 0.18, 0.1)
    thumbtackRed.rotation.set(Math.PI / 2, Math.random() * 0.6, Math.random()*0.3)
    thumbtackRed.position.set(0 - posterOffset, 1.15*paperScale*0.5 - 0.2, 0.1)
    charmanderPaperModel.position.x = 0 - posterOffset
    squirtlePaperModel.position.x = 0 + posterOffset
    voteBox.position.y = -2.75
    voteBox.position.z = 1
    shelf.position.y = -3.75
    shelf.position.z = 1
}

// Voting Pin
function generateVotingPin(vote) {
    // Create the disc
    const button = new THREE.Group()
    scene.add(button)
    const metalMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 }); // Grey pin


    // Create the shield
    const shieldGeometry = new THREE.SphereGeometry( 1.4, 32, 32, undefined, undefined, 0, debugObject.buttonSize); 
    const material = new THREE.MeshBasicMaterial( { color: vote === ModelState.SQUIRTLE ? 0x0000ff: 0xff0000 } ); 
    const shield = new THREE.Mesh( shieldGeometry, material );
    shield.rotation.x = Math.PI / 2
    button.add(shield);

    // // Create the back
    // const backGeometry = new THREE.SphereGeometry( 1.4, 32, 32, undefined, undefined, Math.PI*2 - debugObject.buttonSize, debugObject.buttonSize ); 
    // const back = new THREE.Mesh( backGeometry, metalMaterial );
    // back.rotation.x = Math.PI / 2
    // button.add(back);

    // // Create the pin
    // const pin = new THREE.Group()
    // const coneGeometry = new THREE.ConeGeometry(0.1*pinScale, 0.2*pinScale, 16);
    // const cone = new THREE.Mesh(coneGeometry, metalMaterial);
    // cone.position.x = -1.35*pinScale;
    // cone.rotation.z = Math.PI / 2
    // pin.add(cone);

    // const cylinderGeometry = new THREE.CylinderGeometry(0.1*pinScale, 0.1*pinScale, 1.5*pinScale, 16);
    // const cylinder = new THREE.Mesh(cylinderGeometry, metalMaterial);
    // cylinder.position.x = -0.5*pinScale;
    // cylinder.rotation.z = Math.PI / 2
    // pin.add(cylinder);
    // pin.rotation.y = -Math.PI/16
    // pin.position.z = 1.29
    // pin.position.x = 0.2
    // button.add(pin)

    button.position.y = 0
    button.position.z = 4
    const box = new THREE.Box3().setFromObject(button);

    // White Background
    const wall = new THREE.Mesh(
        new THREE.PlaneGeometry(10, 4, 2, 2),
        new THREE.MeshBasicMaterial({
            color: vote === ModelState.CHARMANDER ? '#F8C8DC' : '#A7C7E7'
        })
    )

    // Determine the pivot point (one end of the bounding box)
    const pivot = new THREE.Vector3(box.x, box.y, (box.min.z+box.max.z) / 2);
    button.position.sub(pivot)
    const buttonContainer = new THREE.Group()
    buttonContainer.add(button)
    buttonContainer.position.add(pivot)
    buttonContainer.position.y = 12
    scene.add(buttonContainer)
    buttonContainer.add(wall)
    return buttonContainer
}

//#region Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
//#endregion


//#region Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 15)
camera.position.z = 7
gui.add(camera.position, 'z').min(1).max(8).step(1)
scene.add(camera)

//#region Controls
// const controls = new TrackballControls(camera, canvas)
// controls.enableDamping = true
// controls.dynamicDampingFactor = 0.15
// controls.noPan = true
// controls.noRoll = true
// controls.noRotate = true
// controls.maxDistance = 8

//#region Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true

//#region Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

//#region Object Transitions
function selectPoster(mesh) {
    const selection = stateFromModel(mesh)
    // deselect
    if (currentState == selection) {
        animateThumbtackIn(mesh === charmanderPaperModel ? thumbtackRed : thumbtackBlue)
        animatePosterIn(mesh)
        currentState = ModelState.NONE
        return
    }
    // select
    currentState = selection
    animateThumbtackOut(mesh === charmanderPaperModel ? thumbtackRed : thumbtackBlue)
    animatePosterOut(mesh)
}

async function castVote() {
    try {
        animateBallotIn(modelFromState());
        const docRef = await addDoc(collection(db, 'votes'), {vote: currentState})
        return docRef.id ? hasVoted(currentState) : setTimeout(() => animateBallotOut(modelFromState()), 500)
    } catch (error) {
        setTimeout(() => animateBallotOut(modelFromState()), 500)
        console.error('Error casting vote:', error)
    }
}

function hasVoted(vote) {
    document.cookie = `vote=${vote}; path=/; max-age=31536000`; // Cookie valid for 1 year
    showVotedState(vote);
}

function showHelpers() {

}

function showVotedState(vote, shouldAnimate = true) {
    didVote = true;
    votePin = generateVotingPin(vote)
    animatePinIn(votePin, shouldAnimate)
    document.getElementById('hud-top').classList.add('animate-down')
    document.getElementById('hud-bottom').classList.add('animate-up')
    document.getElementById('voting').classList.add(vote === ModelState.CHARMANDER ? 'red' : 'blue')
}

function stateFromModel(mesh) {
    return mesh == charmanderPaperModel ? ModelState.CHARMANDER : ModelState.SQUIRTLE
}

function modelFromState() {
    return currentState === ModelState.CHARMANDER ? charmanderPaperModel : squirtlePaperModel
}

// Function to handle mouse click events
function onMouseClick(event) {
    // Update the mouse variable with normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the raycaster with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Calculate objects intersecting the raycaster
    const intersects = raycaster.intersectObjects(scene.children);

    // If there's an intersection, call update State
    if (intersects.length > 0) {
        if (!didVote) {
            if (intersects[0].object == charmanderPaperModel) {
                selectPoster(charmanderPaperModel)
            }
            else if (intersects[0].object == squirtlePaperModel) {
                selectPoster(squirtlePaperModel)
            }
            else if (intersects[0].object?.parent == voteBox && currentState == ModelState.NONE) {
                showHelpers()
            }
            else if (intersects[0].object?.parent == voteBox && currentState != ModelState.NONE) {
                castVote()
            }  
        }
    }
}


//#region GSAP

function animatePosterOut(mesh){
    lastPosterCoordinates = new THREE.Vector3(mesh.position.x, mesh.position.y, mesh.position.z)
    gsap.to(mesh.position, { delay: 0.3, duration: debugObject.easeDuration, x: 0, y: debugObject.posterSelectionHeight, z: debugObject.posterSelectionZ, ease: debugObject.resetEase})
}

function animatePosterIn(mesh) {
    gsap.to(mesh.position, { duration: debugObject.easeDuration, x: lastPosterCoordinates.x, y: lastPosterCoordinates.y, z: lastPosterCoordinates.z, ease: debugObject.resetEase})
    lastPosterCoordinates = undefined
}

function animateThumbtackOut(mesh) {
    lastThumbtackCoordinates = new THREE.Vector3(mesh.position.x, mesh.position.y, mesh.position.z)
    gsap.to(mesh.rotation, { duration: 0.2, x:  Math.PI / 4})
    gsap.to(mesh.rotation, { delay: 0.1, duration: 0.2, x:  Math.PI / 2})
    gsap.to(mesh.position, { duration: 0.3, y: mesh.position.y + 0.5, z: mesh.position.z + 0.3, ease: 'power1.out'})
    gsap.to(mesh.position, { delay: 0.15, duration: 0.2, z: lastThumbtackCoordinates.z, ease: 'power1.out'})

}

function animateThumbtackIn(mesh) {
    gsap.to(mesh.position, { duration: 0.2, z: mesh.position.z + 0.3, ease: 'power1.in'})
    gsap.to(mesh.rotation, { duration: 0.2, x:  Math.PI / 4})
    gsap.to(mesh.position, { delay: 0.2, duration: 0.3, x: lastThumbtackCoordinates.x, y: lastThumbtackCoordinates.y, z: lastThumbtackCoordinates.z, ease: 'power1.out'})
    gsap.to(mesh.rotation, { delay: 0.2, duration: 0.3, x:  Math.PI / 2, y: Math.random() * -0.6, z: Math.random()*-0.3})
    lastThumbtackCoordinates = undefined
}

function animateBallotIn(mesh) {
    gsap.to(mesh.position, { duration: 0.5, z: 1, ease: 'power1.out'})
    gsap.to(mesh.position, { delay: 0.3, duration: 0.5, y: - 6, ease: 'power1.out'})
    gsap.to(mesh.material, { delay: 0.4, duration: 0.1, opacity: 0, ease: 'power1.out'})

};

function animateBallotOut(mesh) {
    gsap.to(mesh.material, { duration: 0.2, opacity: 1, ease: 'power1.in'})
    gsap.to(mesh.position, { duration: 0.3, y: debugObject.posterSelectionHeight, ease: 'power1.out'})
    gsap.to(mesh.position, { delay: 0.3,  duration: 0.5, z: debugObject.posterSelectionZ, ease: 'power1.out'})
}

function animatePinIn(mesh, animateY) {
    if (animateY) {
        gsap.to(mesh.position, { duration: 1.5, y: 0, ease: 'power4.out'})
    }
    else {
        mesh.position.y = 0
    }
    // Create a GSAP timeline
    let tl = gsap.timeline({ repeat: -1, yoyo: true});

    tl.to(mesh.rotation, { duration: 4, y: Math.PI / 12, ease: 'power2.inOut' })
    .to(mesh.rotation, { duration: 4, y: -Math.PI / 12, ease: 'power2.inOut' })
}


function resetControls() {
    gsap.to(controls.object.up, {
        duration: debugObject.easeDuration,
        x: controls.up0.x,
        y: controls.up0.y,
        z: controls.up0.z,
        ease: debugObject.resetEase,
    });
    gsap.to(controls.object.position, {
        duration: debugObject.easeDuration,
        x: controls.position0.x,
        y: controls.position0.y,
        z: controls.position0.z,
        ease: debugObject.resetEase,
    });

}

//#region Debug
const debugObject = {}
debugObject.resetEase = "elastic.out(1, 2)"
debugObject.easeDuration = 0.8
debugObject.spawnDistance = 16
debugObject.fetchInterval = 6
debugObject.posterSelectionHeight = 0.75
debugObject.posterSelectionZ = 4
debugObject.template = ''
debugObject.buttonSize = 0.3
gui.add(debugObject, 'posterSelectionHeight')
gui.add(debugObject, 'posterSelectionZ')
gui.add(debugObject, 'resetEase')
gui.add(debugObject, 'easeDuration')
gui.add(debugObject, 'template', [ ModelState.NONE, ModelState.SQUIRTLE, ModelState.CHARMANDER ]).onChange( (val) => {
    updateState(val)
} );

//#region Cookies
function getCookieByName(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}


//#region Startup
//window.addEventListener('dblclick', () => resetControls())
window.addEventListener('click', onMouseClick, false);
if (getCookieByName('vote')) {
    showVotedState(getCookieByName('vote'), false)
} else {
    generateVotingBooth()
}
tick()