const mongoose = require("mongoose");

const dbSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    countryCode: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    babyStage: { type: String, required: true },
});

const Schema = mongoose.model("Schema", dbSchema);

module.exports = Schema;
