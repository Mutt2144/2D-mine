class SPRITE {
    img = new Image();

    constructor(path) {
        this.img.src = path;
    }
}

class COLOR {
    r;
    g;
    b;
    a;

    constructor(r = 255, g = 255, b = 255, a = 255) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
}

class C_RGB extends COLOR {
    constructor(r = 255, g = 255, b = 255) {
        super(r, g, b, 255);
    }
}

class C_RGBA extends COLOR {
    constructor(r = 255, g = 255, b = 255, a = 255) {
        super(r, g, b, a);
    }
}