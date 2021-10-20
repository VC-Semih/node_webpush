const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json());

const ArrayOfEndpoints = [];

app.get('/', function (req,res){
    res.send("Push App!")
})

app.use(express.static('../client'))

app.post('/api/save-subscription/',((req, res) => {
    ArrayOfEndpoints.push(req.body.endpoint);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({data: {success: true}}))
    console.log(ArrayOfEndpoints);
    return res;
}))

app.listen(8081, function (){
    console.log('Push server start !')
})