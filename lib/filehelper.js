const fs = require("fs");
let mods = require("data/mods.json");

export const modsRepo = {
    getAll: () => mods,
    getById: id => mods.find(x => x.id.toString() === id.toString()),
    find: x => mods.find(x),
    create,
    delete: _delete
};

function create(mod) {
    if (modsRepo.find(x => x.modName.toString() === mod.modName.toString())) { return; }
    mod.id = mod.length ? Math.max(...mods.map(x => x.id)) + 1 : 1;
    mod.dateCreated = new Date().toISOString();

    mods.push(mod);
    saveData();
}

function _delete(id) {
    mods = mods.filter(x => x.id.toString() !== id.toString());
    saveData();
}

function saveData() {
    fs.writeFileSync("data/mods.json", JSON.stringify(mods, null, 4));
}
