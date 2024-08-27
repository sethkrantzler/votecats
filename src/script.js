import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import GUI from 'lil-gui'
import gsap from 'gsap'
import { ModelState } from './constants'
import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { OrbitControls, RectAreaLightUniformsLib, RectAreaLightHelper } from 'three/examples/jsm/Addons.js'
import { GlitterMaterial } from './glitter.js'

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
let helperText = undefined
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
const ambientLight = new THREE.AmbientLight('#fff', 3.5)
scene.add(ambientLight)

// // React area light
// RectAreaLightUniformsLib.init()
// const rectAreaLight = new THREE.RectAreaLight('#fff', 1, 6, 12)
// rectAreaLight.position.set(0, 0, 8)
// rectAreaLight.lookAt(new THREE.Vector3())
// scene.add(rectAreaLight)
// const helper = new RectAreaLightHelper( rectAreaLight );
// rectAreaLight.add( helper ); // helper must be added as a child of the light

// Directional light
const directionalLight = new THREE.DirectionalLight('#fff', 0.5)
directionalLight.position.set(0, 4, 9.5)
scene.add(directionalLight)

const directionalLight2 = new THREE.DirectionalLight('#fff', 0.5)
directionalLight2.position.set(0, -4.5, 9.5)
scene.add(directionalLight2)


//#endregion

//#region Textures
const textureLoader = new THREE.TextureLoader()

// Wall
const wallColorTexture = textureLoader.load('./textures/wall/painted_plaster_wall_diff_1k.jpg')
wallColorTexture.colorSpace = THREE.SRGBColorSpace

// Box
const boxColorTexture = textureLoader.load('./textures/box/green_metal_rust_diff_1k.jpg')
const boxARMTexture = textureLoader.load('./textures/box/green_metal_rust_arm_1k.jpg')
const boxDisplacementTexture = textureLoader.load('./textures/box/green_metal_rust_nor_gl_1k.jpg')
boxColorTexture.colorSpace = THREE.SRGBColorSpace

// Shelf
const shelfColorTexture = textureLoader.load('./textures/shelf/wood_peeling_paint_weathered_diff_1k.jpg')
const shelfARMTexture = textureLoader.load('./textures/shelf/wood_peeling_paint_weathered_arm_1k.jpg')
const shelfNormalTexture = textureLoader.load('./textures/shelf/wood_peeling_paint_weathered_nor_gl_1k.jpg')

// Posters
const posterAlphaTexture = textureLoader.load('./textures/posters/PosterAlpha.jpg')
const charmanderPosterColorTexture = textureLoader.load('./textures/posters/CharmanderPosterColor.jpg')
const charmanderPosterMetalTexture = textureLoader.load('./textures/posters/CharmanderPosterMetal.jpg')


//#region Materials
const charmanderPaperMaterial = new THREE.MeshStandardMaterial({
    // alphaMap: posterAlphaTexture,
    transparent: true,
    map: charmanderPosterColorTexture,
    metalnessMap: charmanderPosterMetalTexture,
    metalness: 0.6,
    roughness: 0.35
})
const squirtlePaperMaterial = new THREE.MeshBasicMaterial({color: '#019', transparent: true})

//#endregion

//#region Models
// Voting Booth
function generateVotingBooth() {
    // Wall
    const wall = new THREE.Mesh(
        new THREE.PlaneGeometry(12, 12, 30, 30),
        new THREE.MeshStandardMaterial({
            color: 0xfffff0,
            map: wallColorTexture,
        })
    )
    scene.add(wall)

    // Helper Text

    fontLoader.load(
        '/fonts/helvetiker_bold.typeface.json',
        (font) =>
        {
            const customUniforms = {
                uGlitterSize: { value: 20 },
                uGlitterDensity: { value: 1.2}
              }
              
              const textMaterial = new GlitterMaterial(customUniforms, {
                color: '#643b9f', // bronze #9c7e41
              })
            helperText = new THREE.Group()
            scene.add(helperText)
            const helperTextString1 = 'PICK YOUR'
            const helperTextString2 = 'PRESIDENT'
            helperTextString1.split('').forEach((char, idx) => {
                const textGeometry = new TextGeometry(
                    char,
                    {
                        font: font,
                        size: 0.5,
                        depth: 0.02,
                        curveSegments: 8,
                    }
                )
                textGeometry.center()
                const text = new THREE.Mesh(textGeometry, textMaterial)
                text.position.x = helperTextString1[idx-1]=== "I" ? (idx * 0.42) : (idx * 0.5) // space text
                text.position.x += 0.25
                text.rotation.z = (Math.random() - 0.5) * Math.PI / 16
                helperText.add(text)
            })
            helperTextString2.split('').forEach((char, idx) => {
                const textGeometry = new TextGeometry(
                    char,
                    {
                        font: font,
                        size: 0.5,
                        depth: 0.02,
                        curveSegments: 12,
                    }
                )
                textGeometry.center()
                const text = new THREE.Mesh(textGeometry, textMaterial)
                text.position.x = helperTextString2[idx-1]=== "I" ? (idx * 0.49) : (idx * 0.51) // space text
                text.position.x += 0.25
                text.position.y = -1.25
                text.rotation.z = (Math.random() - 0.5) * Math.PI / 16
                helperText.add(text)
            })
            helperText.position.y = 3.5
            helperText.position.x = -2.25

            
        }
    )
    
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
            displacementMap: boxDisplacementTexture,
            displacementScale: 0.3,
            displacementBias: -0.15
        })
    )
    voteBox.add(slit, box)
    fontLoader.load(
        '/fonts/optimer_bold.typeface.json',
        (font) =>
        {
            const textMaterial = new THREE.MeshStandardMaterial({
                color: '#B87333',
                metalness: 1,
                roughness: 0.25

            })
            const textGeometry = new TextGeometry(
                'VOTE',
                {
                    font: font,
                    size: 0.5,
                    depth: 0.02,
                    curveSegments: 8,
                }
            )
            textGeometry.center()
            const text = new THREE.Mesh(textGeometry, textMaterial)
            text.position.z = 0.501
            voteBox.add(text)
        }
    )
    
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
        new THREE.PlaneGeometry(0.8*paperScale, 1.15*paperScale, 12, 12),
        charmanderPaperMaterial
    )
    
    squirtlePaperModel = new THREE.Mesh(
        new THREE.PlaneGeometry(0.8*paperScale, 1.15*paperScale, 12,12),
        squirtlePaperMaterial
    )
    scene.add(squirtlePaperModel)
    scene.add(charmanderPaperModel)
    
    function generateThumbtack(color) {
        const thumbtack = new THREE.Group()
        const tipMaterial = new THREE.MeshBasicMaterial({ 
            color: 0x808080
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
            metalness: 0.4,
            roughness: 0.3
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
    thumbtackBlue.position.set(posterOffset, 1.15*paperScale*0.5 - 0.09, 0.1)
    thumbtackRed.rotation.set(Math.PI / 2, Math.random() * 0.6, Math.random()*0.3)
    thumbtackRed.position.set(-posterOffset, 1.15*paperScale*0.5 - 0.1, 0.1)
    charmanderPaperModel.position.x = 0 - posterOffset
    squirtlePaperModel.position.x = 0 + posterOffset
    charmanderPaperModel.position.z = 0.025
    squirtlePaperModel.position.z = 0.025
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
scene.add(camera)

//#region Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.dynamicDampingFactor = 0.35
controls.maxAzimuthAngle =  Math.PI / 8
controls.minAzimuthAngle = -Math.PI / 8
controls.minPolarAngle = Math.PI/2 + -Math.PI / 8
controls.maxPolarAngle = Math.PI/2 + Math.PI / 8
controls.maxDistance = 7
controls.minDistance = 6.5
controls.enablePan = false

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
    controls.update()

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
    helperText.children.forEach((letter, index) => {
        setTimeout(() => {
            shakeLetter(letter);
        }, index * 50);
    });
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
    lastPosterCoordinates = new THREE.Vector3(mesh === charmanderPaperModel ? -posterOffset : posterOffset, 0, 0.025)
    gsap.to(mesh.position, { delay: 0.3, duration: debugObject.easeDuration, x: 0, y: debugObject.posterSelectionHeight, z: debugObject.posterSelectionZ, ease: debugObject.resetEase})
}

function animatePosterIn(mesh) {
    gsap.to(mesh.position, { duration: debugObject.easeDuration+0.2, x: lastPosterCoordinates.x, y: lastPosterCoordinates.y, z: lastPosterCoordinates.z, ease: debugObject.resetEase})
    lastPosterCoordinates = undefined
}

function animateThumbtackOut(mesh) {
    lastThumbtackCoordinates = new THREE.Vector3(mesh === thumbtackRed ? -posterOffset : posterOffset, 1.15*paperScale*0.5 - 0.09, 0.1)
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

function shakeLetter(mesh) {
    // Create a GSAP timeline
    let tl = gsap.timeline({yoyo: true});


    // Add scaling animation
    tl.to(mesh.scale, {
        x: 1.1,
        y: 1.1,
        z: 1.1,
        duration: 0.2,
        ease: "power1.inOut"
    });

    // Add wiggle rotation animation
    tl.to(mesh.rotation, {
        z: "+=0.1",
        duration: 0.1,
        ease: "power1.inOut",
        yoyo: true,
        repeat: 3
    });

    // Return to original scale and rotation
    tl.to(mesh.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.2,
        ease: "power1.inOut"
    });
    return tl;
}



function resetControls() {
    gsap.to(controls.object.rotation, {
        duration: debugObject.easeDuration,
        x: 0,
        y: 0,
        z: 0,
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
debugObject.resetEase = "power1.out"
debugObject.easeDuration = 0.25
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
controls.addEventListener('end', () => resetControls())
window.addEventListener('click', onMouseClick, false);
if (getCookieByName('vote')) {
    showVotedState(getCookieByName('vote'), false)
} else {
    generateVotingBooth()
}
tick()