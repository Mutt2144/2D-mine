'use strict'

class CAMERA {
    transform = {
        postion: { x: 0, y: 0 },
        scale:   { x: 480, y: 320 }
    };

    constructor(VEC2_position, VEC2_scale) {
        if (!(VEC2_position instanceof VEC2)) {
            console.error(`'VEC2_position' must be of type 'VEC2'`);
            return;
        }

        if (!(VEC2_scale instanceof VEC2)) {
            console.error(`'VEC2_scale' must be of type 'VEC2'`);
            return;
        }

        this.transform.postion = VEC2_position;
        this.transform.scale   = VEC2_scale;
    }
}