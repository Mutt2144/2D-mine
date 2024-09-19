const file_name = "scene-model.js";

class SCENE_MODEL {
    // Settings
    SCENE_ID;
    SCENE_NAME;
    CAMERA;
    OBJECTS = {};

    cnv = document.querySelector("canvas");
    ctx = this.cnv.getContext("2d");



    // drawing methods
    clear_display(x, y, w, h) {
        this.ctx.clearRect(x, y, w, h);
    }

    translate_view() {
        this.ctx.save();
        this.ctx.translate(-this.CAMERA.position.x, -this.CAMERA.position.y);
    }

    restore_view() {
        this.ctx.restore();
    }

    draw_objects() {};

    draw_image(image, x, y) {
        this.ctx.drawImage(image, x, y);
    }

    constructor(SCENE_ID, SCENE_NAME, CAM_CAMERA) {
        this.SCENE_ID = SCENE_ID;
        this.SCENE_NAME = SCENE_NAME;

        if (!CAM_CAMERA instanceof CAMERA) {
            show_message("ERROR", file_name, "class SCENE_MODEL", "'CAM_CAMERA' must be of type 'CAMERA'");
            return;
        }

        this.CAMERA = CAM_CAMERA;
    }
}