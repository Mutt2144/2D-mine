class OBJECT_2D {
    position;
    scale;

    constructor(VEC2_position, VEC2_scale) {
        if (!VEC2_position instanceof VEC2) {
            show_message("ERROR", "API/objects.js", "class OBJECT_2D", "'VEC2_position' must be of type 'VEC2'");
            return -1;
        }
        if (!VEC2_scale instanceof VEC2) {
            show_message("ERROR", "API/objects.js", "class OBJECT_2D", "'VEC2_scale' must be of type 'VEC2'");
            return -1;
        }

        this.position = VEC2_position;
        this.scale    = VEC2_scale;
    }
}

class BUTTON {
    position;
    scale;
    sprite;
    text;

    constructor(VEC2_position, VEC2_scale, SPRITE_sprite, text) {
        if (!VEC2_position instanceof VEC2) {
            show_message("ERROR", "API/objects.js", "class BUTTON", "'VEC2_position' must be of type 'VEC2'");
            return -1;
        }
        if (!VEC2_scale instanceof VEC2) {
            show_message("ERROR", "API/objects.js", "class BUTTON", "'VEC2_scale' must be of type 'VEC2'");
            return -1;
        }
        if (!SPRITE_sprite instanceof SPRITE) {
            show_message("ERROR", "API/objects.js", "class OBJECT_2D", "'SPRITE_sprite' must be of type 'SPRITE'");
            return -1;
        }

        this.position = VEC2_position;
        this.scale    = VEC2_scale;
        this.sprite   = SPRITE_sprite;
        this.text     = text;
    }
}