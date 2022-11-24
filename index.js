const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  var a = 1
  res.send('Ronaldo ghi 100000000 ban ne')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})