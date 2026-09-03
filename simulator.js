import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.179.1/build/three.module.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document.body.appendChild(renderer.domElement);

camera.position.set(6, 4, 8);

camera.lookAt(0, 0, 0);
const groundGeometry = new THREE.PlaneGeometry(100, 100);

const groundMaterial = new THREE.MeshBasicMaterial({
    color: 0x555555
});

const ground = new THREE.Mesh(
    groundGeometry,
    groundMaterial
);

ground.rotation.x = -Math.PI / 2;

scene.add(ground);
const carGeometry = new THREE.BoxGeometry(4, 1, 2);

const carMaterial = new THREE.MeshBasicMaterial({
    color: 0x0066ff
});

const car = new THREE.Mesh(
    carGeometry,
    carMaterial
);

car.position.y = 0.75;

scene.add(car);
const wheelGeometry = new THREE.CylinderGeometry(
    0.5,
    0.5,
    0.5,
    32
);

const wheelMaterial = new THREE.MeshBasicMaterial({
    color: 0x222222
});

function createWheel(x,0.75, z) {
    const wheel = new THREE.Mesh(
        wheelGeometry,
        wheelMaterial
    );

    wheel.rotation.x = Math.PI / 2;

    wheel.position.set(x, 0.25, z);

    car.add(wheel);
}

createWheel(-1.2, -1.05);
createWheel(1.2, -1.05);
createWheel(-1.2, 1.05);
createWheel(1.2, 1.05);
function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

animate();
