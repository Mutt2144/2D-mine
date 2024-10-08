class WORLD_MODEL {
    MAP = new Array(0);
    NAME = "";
    DIFFICULTY = "";

    constructor(MAP = new Array(0), NAME = "", DIFFICULTY = "") {
        this.MAP        = MAP;
        this.NAME       = NAME;
        this.DIFFICULTY = DIFFICULTY;
    }
}

class GAME_DATA {
    WORLDS = {};
    PLAYER_NAME = "";

    load_worlds() {
        const WORLDS_DATA = JSON.parse(localStorage.getItem("WORLDS_DATA"));

        for (const world_id in WORLDS_DATA) {
            this.WORLDS[world_id] = WORLDS_DATA[world_id];
        }
    }

    noise_map(world = new Array(0)) {

        // height map
        for (let i = 0; i < world.length; i++) {
            for (let j = 0; j < world[0].length; j++) {
                world[i][j] = -5;
            }
        }

        // TODO:
    }

    create_world(size = "", name = "", difficulty = "", seed = 0) {
        const WORLDS_DATA = JSON.parse(localStorage.getItem("WORLDS_DATA"));

        if (WORLDS_DATA[name]) {
            alert(`you already use the name ${name} in a world`);
            return;
        }


        // world creation
        let world;
        let map;

        if (size == "S")       map = new Array(50).fill(Array(50).fill(0, 0, 50), 0, 50);
        else if (size == "M")  map = new Array(150).fill(Array(150).fill(0, 0, 150), 0, 150);
        else if (size == "B")  map = new Array(300).fill(Array(300).fill(0, 0, 300), 0, 300);



        world = new WORLD_MODEL(map, name, difficulty);

        console.log(world)

        
        // save new world
        WORLDS_DATA[name] = world;
        this.WORLDS[name] = world;
        localStorage.setItem("WORLDS_DATA", JSON.stringify(WORLDS_DATA));
    }

    constructor(WORLDS = {}, PLAYER_NAME = "") {
        this.WORLDS = WORLDS;
        this.PLAYER_NAME = PLAYER_NAME;
    }
}