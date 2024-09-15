class VEC2 {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class RGB {
    r = "#000";
    g = "#000";
    b = "#000";

    RED   = "#ff0000";
    GREEN = "#00ff00";
    BLUE  = "#0000ff";
    WHITE = "#ffffff";
    BLACK = "#ffffff";

    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
}

class RGBA extends RGB {
    a = "#000";
    constructor(r, g, b, a) {
        super(r, g, b);
        this.a = a;
    }
}