/*
*   ------------------------------------
*   usase example:
*   ------------------------------------
*   this.add_object(worlds_main_title,      // object used to create 
*                   "OTHER",                // model to create the object (OTHER, 2D_OBJ, BUTTON, TEXT, ...) 
*                   "WORLDS_MAIN_TITLE",    // object id
*                   { is_children: true, father_name: "WORLDS_MENU" }); // flags 
*
*   ------------------------------------
*   flags example:
*   ------------------------------------
*   {
*       is_children: boolean,               // in the case that the object has to be inside another
*       father_name: string,                // father name, name of the parent object, note that the name entered here will only be searched for at the top of the hierarchy
*       additional: {                       // additional options for object creation
*           fathers: Array,                 // if the object is the child of an object that is the child of another, example: you create the "test" object, 
*                                           // and you want to place it as a child of the "my-child-object" object, but this object is inside 'grandfather ',
*                                           // the structure is as follows: parents: [ "grandfather", "my-child-object"]
*                   
*                                           // you also can add custom attributes
*       }
*   }
*   ------------------------------------
*/

const add_object_flags = {
    is_children: false,
    father_name: "",
    additional: {
        fathers: []
    }
};

class MENU_SCENE extends SCENE_MODEL {
    MAIN_MENU_ID     = 0x90;
    WORLDS_MENU_ID   = 0x80;
    SETTINGS_MENU_ID = 0x70;
    DISPLAY_ID       = this.MAIN_MENU_ID;

    draw_objects() {
        switch (this.DISPLAY_ID) {
            case this.MAIN_MENU_ID:

                const play_btn = this.OBJECTS["Play_BTN"];

                this.ctx.fillStyle = "#fff";
                this.ctx.drawImage(play_btn.sprite, play_btn.position.x, play_btn.position.y);
                this.ctx.fillText(play_btn.text,
                    play_btn.position.x + play_btn.scale.x / 2.5,
                    play_btn.position.y + play_btn.scale.y / 1.5);
                
                
                const Start_TEXT = this.OBJECTS["Start_TEXT"];
                
                this.ctx.fillStyle = `rgba(${this.OBJECTS["Start_TEXT"].r}, ${this.OBJECTS["Start_TEXT"].g}, ${this.OBJECTS["Start_TEXT"].b}, ${this.OBJECTS["Start_TEXT"].a})`;
                this.ctx.fillText(Start_TEXT.text, Start_TEXT.position.x, Start_TEXT.position.y);
                
                break;

            case this.WORLDS_MENU_ID:
                const worlds_menu = this.OBJECTS["WORLDS_MENU"];
        }
        
    }

    add_object(properties = Object, prefab = "OTHER" || "2D_OBJ" || "BUTTON", id = "", flags = add_object_flags) {
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
            case "TEXT":
                obj = new TEXT(properties.position, properties.scale, properties.color, properties.text);
                obj.type = "TEXT";

                for (const propertyID in properties) {
                    const property = properties[propertyID];
                    obj[propertyID] = property;
                }

                break;
        }

        if (flags.is_children) this.OBJECTS[flags.father_name][id] = obj;
        else this.OBJECTS[id] = obj;
        console.log(flags);
    }

    update_mouse_style() {
        const mouseX = mouse.position.x;
        const mouseY = mouse.position.y;

        for (const objectID in this.OBJECTS) {
            const object = this.OBJECTS[objectID];
            if (object.type != "BUTTON") continue // I don't know why, but it's only work like this

            if ((mouseX > object.position.x && mouseX < object.position.x + object.scale.x) &&
                (mouseY > object.position.y && mouseY < object.position.y + object.scale.y)) {
                    document.body.style.cursor = "pointer";
                } else {
                    document.body.style.cursor = "default";
                }

        }
    }

    loop() {
        this.update_mouse_style();
        this.draw_objects();
    }

    constructor(SCENE_ID, SCENE_NAME, CAM_CAMERA) {
        super(SCENE_ID, SCENE_NAME, CAM_CAMERA);

        // add the title text
        const titleText = { position: new VEC2(300, 100), scale: new VEC2(100, 20), color: new C_RGB(), text: "TopCraft" };
        this.add_object(titleText, "TEXT", "Start_TEXT");

        // add the start button
        const buttonIMG = new Image();
        buttonIMG.src = "assets/button.png";
        console.log(buttonIMG)
        const startButton = { position: new VEC2(270, 150), scale: new VEC2(100, 20), sprite: buttonIMG, text: "Play" };

        this.add_object(startButton, "BUTTON", "Play_BTN");


        // add the worlds menu, with all properties
        
        const worlds_menu = {};
        this.add_object(worlds_menu, "OTHER", "WORLDS_MENU");


        const worlds_main_title = { position: new VEC2(300, 50), scale: new VEC2(100, 20), color: new C_RGB(), text: "Worlds" };
        this.add_object(worlds_main_title, "OTHER", "WORLDS_MAIN_TITLE", { is_children: true, father_name: "WORLDS_MENU" });
    }
}