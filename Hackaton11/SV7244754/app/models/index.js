const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

 
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tlb_propietario = require("./propietario.model.js")(sequelize, Sequelize);
db.tlb_mascota = require("./mascota.model.js")(sequelize, Sequelize);
db.tlb_especie = require("./especie.model.js")(sequelize, Sequelize);
db.tlb_raza = require("./raza.model.js")(sequelize, Sequelize);
db.tlb_color = require("./color.model.js")(sequelize, Sequelize);
db.tlb_vacuna = require("./vacuna.model.js")(sequelize, Sequelize);
db.tlb_cita = require("./cita.model.js")(sequelize, Sequelize);


/*db.tutorials.hasMany(db.comments, { as: "comments" });
db.comments.belongsTo(db.tutorials, {
    foreignKey: "tutorialId",
    as: "tutorial",
});*/

db.tlb_propietario.hasMany(db.tlb_cita, { as: "cita_x1" });
db.tlb_cita.belongsTo(db.tlb_propietario);

db.tlb_propietario.hasMany(db.tlb_mascota, { as: "mascota_x1" });
db.tlb_mascota.belongsTo(db.tlb_propietario);

db.tlb_especie.hasMany(db.tlb_mascota, { as: "mascota_x2" });
db.tlb_mascota.belongsTo(db.tlb_especie);

db.tlb_raza.hasMany(db.tlb_mascota, { as: "mascota_x3" });
db.tlb_mascota.belongsTo(db.tlb_raza);

db.tlb_color.hasMany(db.tlb_mascota, { as: "mascota_x4" });
db.tlb_mascota.belongsTo(db.tlb_color);


db.tlb_mascota.belongsToMany(db.tlb_vacuna, {
    through: "tlb_mascota_vacuna",
    as: "mascota",
    foreignKey: "tlbMascotaId",
});

db.tlb_vacuna.belongsToMany(db.tlb_mascota, {
    through: "tlb_mascota_vacuna",
    as: "vacuna",
    foreignKey: "tlbVacunaId",
});


module.exports = db;


