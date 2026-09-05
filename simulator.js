import {
    scene,
    camera,
    renderer
} from "./scene.js";

import {
    car
} from "./vehicle.js";

import {
    position
} from "./physics.js";

scene.add(car);

function animate() {
    requestAnimationFrame(animate);

    car.position.x = -position;

    renderer.render(scene, camera);
}

animate();
