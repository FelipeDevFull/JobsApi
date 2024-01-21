import express from 'express'
const app = express()

//CONFIG JSON URL,
app.use(express.json())

//ROUTER_API
app.get('/', function(req, res) {
    res.send('hello world');
});

export {app}
