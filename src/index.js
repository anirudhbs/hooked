const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const router = require("./routes")

const PORT = 3000

app.use(bodyParser.json())
app.use("/", router)

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
