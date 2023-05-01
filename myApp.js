// dotenv config for access env files
require('dotenv').config()
let express = require('express');
let app = express();

console.log("Hello World")

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

app.get('/json', (_, res) => {
    const message = "Hello json"
    console.log(process.env.MESSAGE_STYLE)
    res.json({
        'message':
            process.env.MESSAGE_STYLE === "uppercase"
                ? message.toUpperCase() : message
    })
})




























module.exports = app;
