const router = require("express").Router();


const Celebrity = require("../models/Celebrity.model.js");

router.get("/movies/create", (req, res, next) =>{
    Celebrity.find()
    res.render("movies/new-movie"
})



module.exports = router;