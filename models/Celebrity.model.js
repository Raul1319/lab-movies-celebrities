//  Add your code here
const mongoose = require("mongoose");

const celebritySchema = new mongoose.Schema({

    name: String,
    ocucupation: String,
    catchPhrase: String
});

module.exports = model("Celebrity", celebritySchema);
