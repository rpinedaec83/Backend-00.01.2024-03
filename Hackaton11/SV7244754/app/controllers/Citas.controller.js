const db = require("../models");
const T_propietario = db.tlb_propietario;
const T_mascota = db.tlb_mascota;
const T_cita = db.tlb_cita;
//const Tag = db.tag;

exports.create = async (req, res) => {

    const ObjPropietario = {
        Nombre: req.body.Nombre,
        Apellido: req.body.Apellido,
        Documento: req.body.Documento,
        Telefono: req.body.Telefono
    }

    await T_propietario.create(ObjPropietario)
        .then(data => {
            res.send(data);
        })

        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });

    
    let FindDocumento=req.body.Documento;
    let FindPropietarioID=0;

    await T_propietario.findAll({attributes: ['id']},{where: { Documento: FindDocumento }}
        )
        .then(data => {
            FindPropietarioID=data[0].dataValues.id;
            console.log("Dato encontrado",data);
            console.log("Dato encontrado",data[0].dataValues.id);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving tutorials."
          });
        });
    
    console.log("IdEncontrado: ");
    console.log(FindPropietarioID);
   
    const ObjMascota = {
            Nombre: req.body.NombreMascota,
            tlbPropietarioId: FindPropietarioID,
            tlbEspecieId: req.body.EspecieId,
            tlbRazaId: req.body.RazaId,
            tlbColorId: req.body.ColorId,
            
    }

    const ObjCita = {
        tlbPropietarioId: FindPropietarioID,
        
    }

    console.log("ObjMascota",ObjMascota);
    console.log("ObjCita",ObjCita);
    
    await T_mascota.create(ObjMascota)
        .then(data => {
            console.log("Dato mascota",data);
            //res.send(data);
        })

        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
    
    console.log("Termine Mascota")

    await T_cita.create(ObjCita)
        .then(data => {
            //res.send(data);
            console.log("Dato cita",data);
        })

        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });   

        console.log("Termine Cita")
};







/*exports.findAll = (req, res) => {
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
};*/
