const express = require('express')
const app = express()

app.get('/', function (req, res) {
  //res.send('Hello World')
  res.sendfile(__dirname + "/Index.html");
})

app.listen(3000, () => {
    console.log("Conectando al puerto 3000");
});