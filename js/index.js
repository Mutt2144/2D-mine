const cnv = document.querySelector("canvas");
const ctx = cnv.getContext("2d");

let images = loadImages();

function render() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
}

function loop() {
    render();

    requestAnimationFrame(loop);
}

window.onload = function() {
    images = loadImages();

    loop();
}