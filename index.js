const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  var a = 1
  res.send('To additionally remove any stopped containers and all unused images (not just dangling images), add the -a flag to the command')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})