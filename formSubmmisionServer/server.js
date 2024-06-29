const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Schema = require("./schema/dbSchema");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoURI = "your_mongodb_connection_string"; // we can find this in our mongodb dashboard
mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

app.post("/submit-form", (req, res) => {
    const { name, email, countryCode, phoneNumber, babyStage } = req.body;

    const newSchema = new Schema({
        name,
        email,
        countryCode,
        phoneNumber,
        babyStage,
    });

    newSchema
        .save()
        .then(() => {
            res.status(200).send("Form submitted successfully");
        })
        .catch((err) => {
            res.status(400).send("Form submission failed");
            console.error(err);
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
