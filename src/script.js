import * as THREE from 'three'
import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const canvas = document.querySelector('canvas.webgl')
const hint = document.querySelector('.hint')

// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x0e101a)

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}

// Camera
const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 50)
camera.position.set(0, 0, 5)
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.outputColorSpace = THREE.SRGBColorSpace

// Controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.enablePan = false
const angleLimit = THREE.MathUtils.degToRad(3)
controls.minDistance = 3.5
controls.maxDistance = 7
controls.minPolarAngle = Math.PI / 2 - angleLimit
controls.maxPolarAngle = Math.PI / 2 + angleLimit
controls.minAzimuthAngle = -angleLimit
controls.maxAzimuthAngle = angleLimit
controls.target.set(0, 0, 0)
const defaultTarget = new THREE.Vector3(0, 0, 0)
const defaultCamPos = camera.position.clone()

// Lights
scene.add(new THREE.AmbientLight(0xffffff, 1.2))
const keyLight = new THREE.DirectionalLight(0xffffff, 2.2)
keyLight.position.set(2.5, 2.4, 3.8)
const keyTarget = new THREE.Object3D()
keyTarget.position.set(0, 0.9, 0)
scene.add(keyTarget)
keyLight.target = keyTarget
scene.add(keyLight)

const rimLight = new THREE.DirectionalLight(0x92c5ff, 1.1)
rimLight.position.set(-2.4, 1.6, 3.2)
const rimTarget = new THREE.Object3D()
rimTarget.position.set(0, 0.9, 0)
scene.add(rimTarget)
rimLight.target = rimTarget
scene.add(rimLight)

// Resize handling
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Textures
const textureLoader = new THREE.TextureLoader()
const loadTexture = (path, options = { colorSpace: THREE.SRGBColorSpace }) => new Promise((resolve, reject) => {
    textureLoader.load(
        path,
        (texture) => {
            if (options && 'colorSpace' in options && options.colorSpace !== undefined) {
                texture.colorSpace = options.colorSpace
            }
            resolve(texture)
        },
        undefined,
        reject,
    )
})
const gltfLoader = new GLTFLoader()
const loadGLB = (path) => new Promise((resolve, reject) => {
    gltfLoader.load(path, (gltf) => resolve(gltf), undefined, reject)
})

// Card helpers
const spinTarget = 10
const cards = [
    {
        name: 'squirtle',
        color: './textures/cards/squirtle/color.jpg',
        metal: './textures/cards/squirtle/metal.jpg',
    },
    {
        name: 'charmander',
        color: './textures/cards/charmander/color.jpg',
        metal: './textures/cards/charmander/metal.jpg',
    },
]
let packMesh
let cardMesh
let opening = false
let opened = false
let completedSpins = 0
let spinSpeed = 0
let accumulatedRotation = 0
let hintCleared = false
const spinMax = 18
const spinBoost = 6
const spinDecayPerSecond = 2.25
const spinFloor = 3
let cardBobTween
const startCardBob = () => {
    if (!cardMesh) return
    cardBobTween?.kill()
    cardBobTween = gsap.to(cardMesh.position, {
        duration: 1.6,
        y: 0.15,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
    })
}

const hideHint = () => {
    if (hintCleared || !hint) return
    hintCleared = true
    gsap.to(hint, {
        duration: 0.4,
        opacity: 0,
        y: 10,
        ease: 'power1.out',
        onComplete: () => hint?.remove(),
    })
}

const buildCard = (texture, alphaMap, metalMap) => {
    const sideMaterial = new THREE.MeshStandardMaterial({
        color: 0x1a1c27,
        metalness: 0.15,
        roughness: 0.8,
    })

    const faceMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        alphaMap,
        transparent: true,
        metalnessMap: metalMap ?? null,
        metalness: metalMap ? 1 : 0.5,
        roughness: 0.32,
    })

    const geometry = new THREE.BoxGeometry(1.8, 2.6, 0.12)
    const materials = [sideMaterial, sideMaterial, sideMaterial, sideMaterial, faceMaterial, faceMaterial]

    return new THREE.Mesh(geometry, materials)
}

const disposeObject = (object) => {
    object.traverse?.((child) => {
        if (child.isMesh) {
            child.geometry?.dispose()
            if (Array.isArray(child.material)) {
                child.material.forEach((mat) => {
                    mat.map?.dispose()
                    mat.metalnessMap?.dispose()
                    mat.roughnessMap?.dispose()
                    mat.normalMap?.dispose()
                })
            } else if (child.material) {
                child.material.map?.dispose()
                child.material.metalnessMap?.dispose()
                child.material.roughnessMap?.dispose()
                child.material.normalMap?.dispose()
            }
        }
    })
}

const showCard = () => {
    if (!cardMesh) return
    cardMesh.visible = true
    cardMesh.position.set(0, 5, 1)
    cardMesh.rotation.set(-0.25, Math.PI, 0)

    gsap.to(cardMesh.position, { duration: 1, y: 0, ease: 'bounce.out'})
    gsap.to(cardMesh.rotation, {
        duration: 1,
        x: 0,
        y: 0,
        ease: 'power2.out',
        onComplete: startCardBob,
    })
}

const launchPack = () => {
    if (!packMesh) return
    const tl = gsap.timeline({
        onComplete: () => {
            scene.remove(packMesh)
            disposeObject(packMesh)
            showCard()
        },
    })

        tl.to(packMesh.position, {
                duration: 0.3,
                x: -1.5,
                y: 0.65,
                z: -2.5,
                ease: 'power2.out',
        })
            .to(packMesh.position, {
                duration: 0.4,
                x: 1.6,
                y: 1.3,
                z: -3.5,
                ease: 'power2.inOut',
            })
            .to(packMesh.position, {
                duration: 0.35,
                x: 0,
                y: 0.75,
                z: -0.25,
                ease: 'power2.inOut',
            })
            .to(packMesh.position, {
                duration: 0.5,
                x: 0,
                y: 6.5,
                z: 3.2,
                ease: 'power2.in',
            })

    tl.to(packMesh.rotation, {
        duration: 1.35,
        x: Math.PI * 0.6,
        y: packMesh.rotation.y + Math.PI * 1.6,
        z: Math.PI * 0.25,
        ease: 'power2.inOut',
    }, 0)
}

const onPackClick = () => {
    if (!packMesh || opened) return

    if (!opening) {
        opening = true
        hideHint()
        gsap.killTweensOf(packMesh?.rotation)
        packMesh.rotation.y = 0
        completedSpins = 0
        accumulatedRotation = 0
    }

    spinSpeed = Math.min(spinSpeed + spinBoost, spinMax)
}

// Asset load + setup
const pickCardForToday = () => {
    const today = new Date()
    const idx = today.getDate() % cards.length
    return cards[idx]
}

// Asset load + setup
const todayCard = pickCardForToday()

Promise.all([
    loadGLB('./pack/PackCompressed.glb'),
    loadTexture(todayCard.color),
    loadTexture(todayCard.metal, { colorSpace: undefined }),
    loadTexture('./textures/posters/CardAlphaTexture.jpg', { colorSpace: undefined }),
]).then(([packGltf, cardTexture, cardMetalTexture, alphaTexture]) => {
    packMesh = packGltf.scene
    packMesh.position.set(0, 3, 0)
    packMesh.rotation.y = THREE.MathUtils.degToRad(10)
    packMesh.scale.setScalar(1.2)
    scene.add(packMesh)

    cardMesh = buildCard(cardTexture, alphaTexture, cardMetalTexture)
    cardMesh.visible = false
    scene.add(cardMesh)

    gsap.to(packMesh.position, {
        duration: 1,
        y: 0,
        ease: 'back.out(1.7)',
    })
}).catch((error) => {
    console.error('Failed to load pack assets', error)
})

// Interaction
window.addEventListener('click', onPackClick)
window.addEventListener('touchend', onPackClick)

// Animation loop
const clock = new THREE.Clock()
const tick = () => {
    const delta = clock.getDelta()

    if (opening && packMesh && !opened) {
        spinSpeed = Math.max(spinFloor, spinSpeed - spinDecayPerSecond * delta)

        const spinStep = delta * spinSpeed
        packMesh.rotation.y += spinStep
        accumulatedRotation += spinStep

        while (accumulatedRotation >= Math.PI * 2) {
            accumulatedRotation -= Math.PI * 2
            completedSpins += 1
        }

        if (completedSpins >= spinTarget) {
            opened = true
            opening = false
            launchPack()
        }
    }

    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()