const express= require('express')
const rooms = require('./routes/rooms')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 8080;
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(cors())

app.use(bodyParser.json())
app.get("/",(req,res)=>{
  res.status(200).send("hey")
})
app.use(rooms)

app.listen(PORT, ()=>{
    console.log(`the app is listening on port ${PORT}`)
})