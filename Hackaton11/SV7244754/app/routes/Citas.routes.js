
module.exports = app => {
    const rCitas = require("../controllers/Citas.controller.js");
    var router = require("express").Router();

    router.post("/", rCitas.create);
    //router.get("/", rCitas.findAll);
    /*router.get("/:id", tutorials.findOne);
    router.put("/:id",tutorials.update);
    router.delete("/:id", tutorials.delete);
    router.delete("/", tutorials.deleteAll);
    router.get("/published/:id", tutorials.findAllPublished);

    router.post("/comment/:id", tutorials.createComment);

    router.post("/tag", tags.create);
    router.get("/tag/:id", tags.findAll);
    router.post("/tag/tutorial", tags.addTutorial)*/


    app.use('/api/veterinaria/citas', router);
}