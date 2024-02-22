const mongoose = require("mongoose");

const urlschema = mongoose.Schema({
  shortid: {
    type: String,
    required: true,
    unique: true,
  },
  redirectURL: {
    type: String,
    required: true,
  },

});
const URL = mongoose.model("URL" ,urlschema);

module.exports = URL;
