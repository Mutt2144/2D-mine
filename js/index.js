'use strict'

const cnv = document.querySelector("canvas");
const ctx = cnv.getContext("2d");
let active_scene;

const menu_cam = new CAMERA(new VEC2(0, 0), new VEC2(cnv.width, cnv.height));

const menu_scene = new MENU_SCENE(0x5500, "MENU", menu_cam);

let images = loadImages();

function render() {
    if (active_scene == menu_scene.SCENE_ID) {
        menu_scene.draw_objects();
    }
}

function loop() {
    render();

    requestAnimationFrame(loop);
}

window.onload = function() {
    images = loadImages();
    active_scene = menu_scene.SCENE_ID;

    loop();
}