import * as THREE from 'three'
import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const canvas = document.querySelector('canvas.webgl')
const hint = document.querySelector('.hint')
const collectionBtn = document.querySelector('.collection-btn')
const collectionPanel = document.querySelector('.collection-panel')
const collectionHeader = document.querySelector('.collection-header')

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
const spinTarget = 5
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
    {
        name: 'bulbasaur',
        color: './textures/cards/Bulbasaur/color.jpg',
        metal: './textures/cards/Bulbasaur/metal.jpg',
    },
    {
        name: 'butters',
        color: './textures/cards/Butters/color.jpg',
        metal: './textures/cards/Butters/metal.jpg',
    },
    {
        name: 'daphne',
        color: './textures/cards/Daphne/color.jpg',
        metal: './textures/cards/Daphne/metal.jpg',
    },
    {
        name: 'noodle',
        color: './textures/cards/Noodle/color.jpg',
        metal: './textures/cards/Noodle/metal.jpg',
    },
    {
        name: 'pearl',
        color: './textures/cards/Pearl/color.jpg',
        metal: './textures/cards/Pearl/metal.jpg',
    },
    {
        name: 'sadie',
        color: './textures/cards/Sadie/color.jpg',
        metal: './textures/cards/Sadie/metal.jpg',
    },
    {
        name: 'snurf',
        color: './textures/cards/Snurf/color.jpg',
        metal: './textures/cards/Snurf/metal.jpg',
    },
    {
        name: 'winston',
        color: './textures/cards/Winston/color.jpg',
        metal: './textures/cards/Winston/metal.jpg',
    },
]
const cardsCollectedCookie = 'cardsCollected'
const readCollected = () => {
    const raw = document.cookie.split('; ').find((row) => row.startsWith(`${cardsCollectedCookie}=`))?.split('=')[1]
    if (!raw) return new Set()
    try {
        const parsed = JSON.parse(decodeURIComponent(raw))
        if (Array.isArray(parsed)) return new Set(parsed.filter((v) => typeof v === 'string'))
    } catch (err) {
        console.warn('Could not parse cardsCollected cookie', err)
    }
    return new Set()
}
const writeCollected = (set) => {
    const value = encodeURIComponent(JSON.stringify(Array.from(set)))
    document.cookie = `${cardsCollectedCookie}=${value}; path=/; max-age=31536000`
}
const getCardByName = (name) => cards.find((c) => c.name === name)
const recordCardSeen = (cardName) => {
    if (!cardName) return
    const current = readCollected()
    if (current.has(cardName)) return
    current.add(cardName)
    writeCollected(current)
}

const destroyCard = () => {
    if (!cardMesh) return
    cardBobTween?.kill()
    scene.remove(cardMesh)
    disposeObject(cardMesh)
    cardMesh = null
}
let sharedAlphaTexture
let collectionGroup
let collectionCards = []
let collectionVisible = false
let featuredCard = null
let collectionIndex = 0
const spacing = 2.2
const clearFeatured = () => {
    if (!featuredCard) return
    const { mesh, home } = featuredCard
    gsap.to(mesh.position, { duration: 0.35, x: home.position.x, y: home.position.y, z: home.position.z, ease: 'power2.out' })
    gsap.to(mesh.rotation, { duration: 0.35, x: home.rotation.x, y: home.rotation.y, z: home.rotation.z, ease: 'power2.out' })
    featuredCard = null
}
const scrollToIndex = (idx) => {
    if (!collectionGroup || collectionCards.length === 0) return
    const centerOffset = (collectionCards.length - 1) / 2
    collectionIndex = Math.min(Math.max(idx, 0), Math.max(collectionCards.length - 1, 0))
    const targetX = -((collectionIndex - centerOffset) * spacing)
    gsap.to(collectionGroup.position, { duration: 0.4, x: targetX, ease: 'power2.out' })
}
const ensureCollectionGroup = () => {
    if (!collectionGroup) {
        collectionGroup = new THREE.Group()
        scene.add(collectionGroup)
    }
}
const clearCollectionGroup = () => {
    if (!collectionGroup) return
    collectionGroup.children.forEach((child) => disposeObject(child))
    collectionGroup.clear()
    collectionCards = []
    featuredCard = null
}
const createCardMeshByName = async (name) => {
    const card = getCardByName(name)
    if (!card) throw new Error(`Card not found for name: ${name}`)
    const [colorTex, metalTex] = await Promise.all([
        loadTexture(card.color),
        loadTexture(card.metal, { colorSpace: undefined }),
    ])
    return buildCard(colorTex, sharedAlphaTexture, metalTex)
}
const layoutCollection = () => {
    if (!collectionGroup) return
    const total = collectionCards.length
    collectionCards.forEach((entry, idx) => {
        if (featuredCard && featuredCard.mesh === entry.mesh) return
        const x = (idx - (total - 1) / 2) * spacing
        entry.mesh.position.set(x, 0, -0.5)
        entry.mesh.rotation.set(0, 0, 0)
        entry.home.position.copy(entry.mesh.position)
        entry.home.rotation.copy(entry.mesh.rotation)
    })
}
const showCollectionPanel = async () => {
    const collected = Array.from(readCollected())
    if (!collectionHeader) return
    collectionHeader.textContent = `Cards Collected: ${collected.length}`
    collectionPanel?.classList.remove('hidden')
    collectionVisible = true
    ensureCollectionGroup()
    clearCollectionGroup()
    const meshes = await Promise.all(collected.map((name) => createCardMeshByName(name)))
    collectionCards = meshes.map((mesh, idx) => ({
        name: collected[idx],
        mesh,
        home: { position: new THREE.Vector3(), rotation: new THREE.Euler() },
    }))
    meshes.forEach((mesh) => collectionGroup.add(mesh))
    collectionIndex = 0
    layoutCollection()
    scrollToIndex(0)
}
let packMesh
let cardMesh
const raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2()
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
                    if (mat.alphaMap && mat.alphaMap !== sharedAlphaTexture) {
                        mat.alphaMap.dispose()
                    }
                })
            } else if (child.material) {
                child.material.map?.dispose()
                child.material.metalnessMap?.dispose()
                child.material.roughnessMap?.dispose()
                child.material.normalMap?.dispose()
                if (child.material.alphaMap && child.material.alphaMap !== sharedAlphaTexture) {
                    child.material.alphaMap.dispose()
                }
            }
        }
    })
}

const showCard = () => {
    if (!cardMesh) return
    recordCardSeen(todayCard?.name)
    cardMesh.visible = true
    cardMesh.position.set(0, 5, 1)
    cardMesh.rotation.set(-0.25, Math.PI, 0)
    collectionBtn?.classList.remove('hidden')

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

    sharedAlphaTexture = alphaTexture
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
collectionBtn?.addEventListener('click', () => {
    destroyCard()
    showCollectionPanel()
    gsap.to(collectionBtn, {
        duration: 0.25,
        opacity: 0,
        scale: 0.94,
        ease: 'power1.out',
        onComplete: () => collectionBtn?.classList.add('hidden'),
    })
})
const onCanvasClick = (event) => {
    if (!collectionVisible || !collectionGroup) return
    const rect = renderer.domElement.getBoundingClientRect()
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
    raycaster.setFromCamera(pointer, camera)
    const intersects = raycaster.intersectObjects(collectionGroup.children)
    if (intersects.length > 0) {
        const mesh = intersects[0].object
        const entry = collectionCards.find((c) => c.mesh === mesh)
        if (!entry) return
        if (featuredCard && featuredCard.mesh === mesh) {
            gsap.to(mesh.position, { duration: 0.4, x: entry.home.position.x, y: entry.home.position.y, z: entry.home.position.z, ease: 'power2.out' })
            gsap.to(mesh.rotation, { duration: 0.4, x: entry.home.rotation.x, y: entry.home.rotation.y, z: entry.home.rotation.z, ease: 'power2.out' })
            featuredCard = null
            return
        }
        if (featuredCard && featuredCard.mesh !== mesh) {
            clearFeatured()
        }
        entry.home.position.copy(mesh.position)
        entry.home.rotation.copy(mesh.rotation)
        featuredCard = entry
        const targetX = -collectionGroup.position.x
        gsap.to(mesh.position, { duration: 0.45, x: targetX, y: 0.05, z: 0.9, ease: 'power2.out' })
        gsap.to(mesh.rotation, { duration: 0.45, x: 0, y: 0, z: 0, ease: 'power2.out' })
        return
    }
    const dir = (event.clientX - (window.innerWidth / 2)) > 0 ? 1 : -1
    const maxIndex = Math.max(0, collectionCards.length - 1)
    collectionIndex = Math.min(maxIndex, Math.max(0, collectionIndex + dir))
    scrollToIndex(collectionIndex)
}
renderer.domElement.addEventListener('pointerdown', onCanvasClick)

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

    // Idle spin removed for collection cards per request

    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()