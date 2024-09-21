'use strict'

const mouse = {
    position: { x: 0, y: 0 }
};

const keys = {};
const keyboard_listeners            = [];   // for continuos click
const keypress_listeners            = [];   // for single click

const mouse_click_listeners         = [];   // for eject click
const mouse_click_listeners_parent  = [];

// mouse
window.addEventListener("mousemove", (e) => {
    mouse.position.x = e.offsetX;
    mouse.position.y = e.offsetY;
});

window.addEventListener("mousedown", (e) => {
    for (let i = 0; i < mouse_click_listeners.length; i++) {
        const func = mouse_click_listeners[i];
        func(e, "down", mouse_click_listeners_parent[i]);
    }
});

window.addEventListener("mouseup", (e) => {
    for (let i = 0; i < mouse_click_listeners.length; i++) {
        const func = mouse_click_listeners[i];
        func(e, "up", mouse_click_listeners_parent[i]);
    }
});


// keyboard
window.addEventListener("keydown", (e) => {
    keys[e.key] = true;
    for (let i = 0; i < keyboard_listeners.length; i++) {
        const func = keyboard_listeners[i];
        func(e, "down");
    }
});

window.addEventListener("keydown", (e) => {
    keys[e.key] = false;
    for (let i = 0; i < keyboard_listeners.length; i++) {
        const func = keyboard_listeners[i];
        func(e, "up");
    }
});

window.addEventListener("keypress", (e) => {
    for (let i = 0; i < keypress_listeners.length; i++) {
        const func = keypress_listeners[i];
        func(e, "press");
    }
});

// listener manager
function add_mouse_listener(func, parent) {
    mouse_click_listeners.push(func);
    mouse_click_listeners_parent.push(parent);
}

function add_keyboard_listener(func) {
    keyboard_listeners.push(func);
}

function add_keypress_listener(func) {
    keypress_listeners.push(func);
}