const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    plot: String,
    cast: [{
        type: Schema.Types.ObjectId,

    }]
})
module.exports = model("Movie", movieSchema)