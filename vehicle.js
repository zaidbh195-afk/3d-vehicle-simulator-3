import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.179.1/build/three.module.js";

const car = new THREE.Group();

const bodyGeometry = new THREE.BoxGeometry(4, 1, 2);

const bodyMaterial = new THREE.MeshBasicMaterial({
    color: 0x0066ff
});

const body = new THREE.Mesh(
    bodyGeometry,
    bodyMaterial
);

body.position.y = 1;

car.add(body);

const wheelGeometry = new THREE.CylinderGeometry(
    0.5,
    0.5,
    0.5,
    32
);

const wheelMaterial = new THREE.MeshBasicMaterial({
    color: 0x222222
});

function createWheel(x, z) {

    const wheel = new THREE.Mesh(
        wheelGeometry,
        wheelMaterial
    );

    wheel.rotation.x = Math.PI / 2;

    wheel.position.set(x, 0.5, z);

    car.add(wheel);
}

createWheel(-1.2, -1.05);
createWheel(1.2, -1.05);
createWheel(-1.2, 1.05);
createWheel(1.2, 1.05);

export { car };
