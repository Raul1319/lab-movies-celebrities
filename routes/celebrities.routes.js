const router = require("express").Router();

const Celebrity = require("../models/Celebrity.model.js");

router.get("/celebrities", (req, res, next) =>{
    Celebrity.find()
    .then((response) =>{
        res.render("celebrities/celebrities.hbs");

    })
    .catch((error) =>{
        next(error);
    })

   // router.post("/celebrities/create", (req, res, next))

    

})





module.exports = router;