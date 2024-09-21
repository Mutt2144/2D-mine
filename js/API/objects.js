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

class UI_OBJECT {
    position;
    scale;
    
    constructor(VEC2_position = new VEC2(0, 0), VEC2_scale = new VEC2(0, 0)) {
        if (!VEC2_position instanceof VEC2) {
            show_message("ERROR", "API/objects.js", "class BUTTON", "'VEC2_position' must be of type 'VEC2'");
            return -1;
        }
        if (!VEC2_scale instanceof VEC2) {
            show_message("ERROR", "API/objects.js", "class BUTTON", "'VEC2_scale' must be of type 'VEC2'");
            return -1;
        }

        this.position = VEC2_position;
        this.scale    = VEC2_scale;
    }
}

class TEXT extends UI_OBJECT {
    color;
    text;

    constructor(VEC2_position, VEC2_scale, COLOR_color, text) {
        super(VEC2_position, VEC2_scale);

        if (!COLOR_color instanceof C_RGB || !COLOR_color instanceof C_RGBA) {
            show_message("ERROR", "objects.js", "class TEXT", "'COLOR_color' must be of type 'C_RGB' or 'C_RGBA'");
            return -1;
        }

        this.color = COLOR_color;
        this.text  = text;
    }
}

class BUTTON extends UI_OBJECT {
    constructor(VEC2_position, VEC2_scale, SPRITE_sprite, text) {
        super(VEC2_position, VEC2_scale);
        
        if (!SPRITE_sprite instanceof SPRITE) {
            show_message("ERROR", "API/objects.js", "class OBJECT_2D", "'SPRITE_sprite' must be of type 'SPRITE'");
            return -1;
        }

        
        this.sprite   = SPRITE_sprite;
        this.text     = text;
    }
}

class WORLD_BUTTON extends UI_OBJECT {
    constructor(VEC2_position, VEC2_scale) {
        super(VEC2_position, VEC2_scale);
    }
}