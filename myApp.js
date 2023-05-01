let express = require('express');
let app = express();

console.log("Hello World")

//GET / handler for second step

/*app.get('/', (req, res) => {
    res.send("Hello Express")
})*/



app.get('/', (req, res) => {
    const path = absolutePath = __dirname + '/views/index.html'
    res.sendFile(path)
})































module.exports = app;
