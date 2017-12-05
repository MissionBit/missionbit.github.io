const fs = require("fs");

module.exports = class FileDB {
    constructor() {
        try {
            const db = fs.readFileSync("db.json")
            const data = JSON.parse(db);
            this.db = data;
        } catch (e) {
            console.log(e);
            this.db = {};
        }
    }
    get(id) {
        return this.db[id];
    }
    set(id, value) {
        this.db[id] = value;
        fs.writeFileSync("db.json", JSON.stringify(this.db, 4));
    }
}