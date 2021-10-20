const express = require('express')
const app = express()

app.get('/', function (req,res){
    res.send("Push App!")
})

app.use(express.static('../client'))

app.listen(8080, function (){
    console.log('Push server start !')
})