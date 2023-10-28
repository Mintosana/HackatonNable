const express = require("express");
const app = express();
const router = require("./routes/index");
const port = 3000;

const db = require("./models/Index").db;

app.get("/", (req, res) =>
{
    res.send("Hello there!");
});

app.use('/api', router);

app.listen(port, () =>
{
    console.log(`App listening on port ${port}`);
});

app.get("/reset", (req, res) =>
{
    db
        .sync({ force: true })
        .then(() =>
            res.status(200).send({ message: "Database was reset!" }))
        .catch((err) =>
        {
            console.log(err);
            res.status(500).send({ message: "Error when trying to reset database!" })
        });
});
