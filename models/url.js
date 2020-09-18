const Mongoose = require("mongoose");
const UrlSchema = require("../schemas/url");

module.exports = new Mongoose.model('Url', UrlSchema);