/*const db = require("../models");
const T_propietario = db.tlb_propietario;
const T_mascota = db.tlb_mascota;
const T_especie = db.tlb_especie;
const T_raza = db.tlb_raza;
const T_color = db.tlb_color;
const T_vacuna = db.tlb_vacuna;
//const Tag = db.tag;

exports.create = (req, res) => {

    const bt_propietario = {
        Nombre: req.body.Nombre,
        Apellido: req.body.Apellido,
        Documento: req.body.Documento,
        Telefono: req.body.Telefono
    }

    T_propietario.create(bt_propietario).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Tutorial."
        });
    });
};

exports.findAll = (req, res) => {
    Tag.findAll({
        include: [
            {
                model: Tutorial,
                as: "tutorials",
                attributes: ["id", "title", "description"],
                through: {
                    attributes: [],
                }
            },
        ],
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

exports.addTutorial = (req, res) => {
    //tagId, tutorialId)
    const tagId = req.body.tagId;
    const tutorialId = req.body.tutorialId;

    Tag.findByPk(tagId)
        .then((tag) => {
            if (!tag) {
                res.status(400).send({

                    message:
                        "No se encontro el tag"
                });
            }
            Tutorial.findByPk(tutorialId).then((tutorial) => {
                if (!tutorial) {
                    console.log("Tutorial not found!");
                    return null;
                }

                tag.addTutorial(tutorial);
                res.send(tag);
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};
*/