const controller = {}

controller.home = (req, res) => {
  res.send("Hello World!")
}

controller.hook = (req, res) => {
  console.log(`body is ${req.body}`)

  res.status(200).send("success")
}

module.exports = controller
