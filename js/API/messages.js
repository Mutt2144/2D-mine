'use strict'

function show_message(type, file, func, message) {
    switch (type) {
        case "ERROR":
            console.error(`[${file} (${func})] ${message}`);
            break;
        case "INFO":
            console.info(`[${file} (${func})] ${message}`);
            break;
    }
}