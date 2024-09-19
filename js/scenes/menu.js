class MENU_SCENE extends SCENE_MODEL {
    draw_objects() {
        const play_btn = this.OBJECTS["Play_BTN"];

        this.ctx.fillStyle = "#fff";
        this.ctx.drawImage(play_btn.sprite, play_btn.position.x, play_btn.position.y);
        this.ctx.fillText(play_btn.text,
            play_btn.position.x + play_btn.scale.x / 2.5,
            play_btn.position.y + play_btn.scale.y / 1.5);
    }

    add_object(properties = Object, prefab = "OTHER" || "2D_OBJ" || "BUTTON", id = "") {
        if (id == null || id == "") id = Math.floor(Math.random() * 9999999);

        let obj;
        switch (prefab) {
            case "OTHER":
                obj = properties;
                obj.type = "OTHER";

                break;
            case "2D_OBJ":
                obj = new OBJECT_2D(properties.position, properties.scale);
                obj.type = "2D_OBJ";
                
                for (const propertyID in properties) {
                    const property = properties[propertyID];
                    obj[propertyID] = property;
                }
                
                break;
            case "BUTTON":
                obj = new BUTTON(properties.position, properties.scale, properties.sprite, properties.text);
                obj.type = "BUTTON";

                for (const propertyID in properties) {
                    const property = properties[propertyID];
                    obj[propertyID] = property;
                }

                break;
        }

        this.OBJECTS[id] = obj;
        console.log(this.OBJECTS[id]);
    }

    constructor(SCENE_ID, SCENE_NAME, CAM_CAMERA) {
        super(SCENE_ID, SCENE_NAME, CAM_CAMERA);

        const buttonIMG = new Image();
        buttonIMG.src = "assets/button.png";
        console.log(buttonIMG)
        const startButton = { position: new VEC2(270, 150), scale: new VEC2(100, 20), sprite: buttonIMG, text: "Play" };

        this.add_object(startButton, "BUTTON", "Play_BTN");
    }
}