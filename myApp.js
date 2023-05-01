// dotenv config for access env files

let express = require('express');
let app = express();
require('dotenv').config()
process.env.MESSAGE_STYLE = "uppercase";

//GET / handler for second step

/*app.get('/', (req, res) => {
    res.send("Hello Express")
})*/

//Third step solution

app.get('/', (req, res) => {
    const path = absolutePath = __dirname + '/views/index.html'
    res.sendFile(path)
})

const pubicPath = __dirname + '/public'

//Fourth step solution

app.use('/public', express.static(pubicPath))

//Fifth step solution 

/*app.get('/json', (req, res) => {
    res.json({ "message": "Hello json" })
})*/

//Sixth step solution 

app.get("/json", function (req, res) {
    if (process.env.MESSAGE_STYLE == "uppercase")
        res.json({ "message": "HELLO JSON" })
    else res.json({ "message": "Hello json" })
});




























module.exports = app;
