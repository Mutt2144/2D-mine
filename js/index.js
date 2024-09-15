const cnv = document.querySelector("canvas");
const ctx = cnv.getContext("2d");

let images = loadImages();

function render() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    for (let i = 0; i < cnv.width; i++) {
        for (let j = 0; j < cnv.height; j++) {
            ctx.drawImage(images.grass, i * 16, j * 16);
        }
    }
}

function loop() {
    render();

    requestAnimationFrame(loop);
}

window.onload = function() {
    images = loadImages();

    loop();
}