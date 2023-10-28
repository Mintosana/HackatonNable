const express = require("express")
const app = express()
const port = 3000

const db = require("./models/Index")

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get("/reset", (req, res) => {
    res.send("Salutare!")
    try {
        db.sync({ force: true })
        res.status(200)
        res.send("Database has been reset!")
    } catch {
        res.status(500)
        res.send("Server Error! Couldn't reset database...")
    }
})
