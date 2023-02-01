const express = require('express')
var mysql = require('mysql');

const app = express()
const port = 3000


var con = mysql.createConnection({
  host: "localhost",
  user: "hoang",
  password: "123qwe!@",
  database: "testapp"
});

app.get('/', (req, res) => {
  var a = 1
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    res.send('Connected')
  });
  // res.send('ExpressJS')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})