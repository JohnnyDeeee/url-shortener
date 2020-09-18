const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

module.exports = new Mongoose.Schema({
    _id: Schema.Types.ObjectId,
    destination: Schema.Types.String,
    short: Schema.Types.String,
    owner: Schema.Types.String,
    updated: { type: Schema.Types.Date, default: Date.now() }
});