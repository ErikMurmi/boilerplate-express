let express = require('express');
let app = express();

console.log("Hello World")

//GET / handler

app.get('/', (req, res) => {
    res.send("Hello Express")
})



































module.exports = app;
