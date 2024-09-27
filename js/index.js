'use strict'

const cnv = document.querySelector("canvas");
const ctx = cnv.getContext("2d");
let active_scene;

let game_data = new GAME_DATA;

const menu_cam = new CAMERA(new VEC2(0, 0), new VEC2(cnv.width, cnv.height));

let menu_scene;

let images = loadImages();

function render() {
    if (active_scene == menu_scene.SCENE_ID) {
        menu_scene.loop();
    }
}

function loop() {
    render();

    requestAnimationFrame(loop);
}

window.onload = function() {
    if (!localStorage.getItem("GLOBAL_DATA")) {
        const user_name = prompt("Enter your user name");

        game_data = new GAME_DATA({}, user_name);
        localStorage.setItem("GLOBAL_DATA", JSON.stringify(game_data));
    } else {
        const storage_global_data = JSON.parse(localStorage.GLOBAL_DATA);
        game_data = new GAME_DATA(storage_global_data.WORLDS, storage_global_data.PLAER_NAME);
        game_data.load_worlds();
    }

    if (!localStorage.getItem("WORLDS_DATA")) localStorage.setItem("WORLDS_DATA", JSON.stringify({}));

    menu_scene = new MENU_SCENE(0x5500, "MENU", menu_cam);

    images = loadImages();
    active_scene = menu_scene.SCENE_ID;

    loop();
}