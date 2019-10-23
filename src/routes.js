const express = require("express")
const router = express.Router()

const homeController = require("./controllers/homeController")

router.get("/", homeController.home)
router.post("/hook", homeController.hook)

module.exports = router
