const controller = {}

controller.home = (req, res) => {
  res.send("Hello World!")
}

controller.hook = (req, res) => {
  console.log(`body is ${JSON.stringify(req.body)}`)

  res.status(200).send({
    success: true,
    data: {
      message: "received the payload successfully"
    }
  })
}

module.exports = controller
